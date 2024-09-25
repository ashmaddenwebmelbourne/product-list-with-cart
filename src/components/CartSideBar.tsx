import CartSingleDessert from './CartSingleDessert';
import { CartItem } from '../types/cart-item.type';

type CartSideBarProps = {
	cartItems: CartItem[] | null;
	totalItems: number;
	totalCost: number;
	removeFromCart: (itemName: string) => void;
	confirmOrder: () => void;
};

const CartSideBar = ({ cartItems, totalItems, totalCost, removeFromCart, confirmOrder }: CartSideBarProps) => {
	return (
		<section>
			<h2>Your Cart ({totalItems})</h2>
			{totalItems !== 0 && (
				<>
					<div>
						{cartItems?.map((item) => (
							<CartSingleDessert
								key={item.name}
								itemName={item.name}
								itemQuantity={item.quantity}
								itemPrice={item.price}
								removeFromCart={removeFromCart}
							/>
						))}
					</div>
					<h3>Total: ${totalCost}</h3>
					<button onClick={confirmOrder}>Confirm Order</button>
				</>
			)}
		</section>
	);
};

export default CartSideBar;
