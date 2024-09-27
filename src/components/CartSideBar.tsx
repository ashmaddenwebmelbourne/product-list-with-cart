import CartSingleDessert from './CartSingleDessert';
import { CartItem } from '../types/cart-item.type';
import emptyCartIcon from '../assets/images/illustration-empty-cart.svg';
import deliveryIcon from '../assets/images/icon-carbon-neutral.svg';

type CartSideBarProps = {
	cartItems: CartItem[] | null;
	totalItems: number;
	totalCost: number;
	removeFromCart: (itemName: string) => void;
	confirmOrder: () => void;
};

const CartSideBar = ({ cartItems, totalItems, totalCost, removeFromCart, confirmOrder }: CartSideBarProps) => {
	return (
		<section className='bg-white w-full desktop:max-w-[24rem] p-6 rounded-xl'>
			<h2 className='font-red-hat-text font-bold text-2xl text-red mb-6'>Your Cart ({totalItems})</h2>
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
					<div className='flex justify-between items-center mt-6'>
						<p className='font-red-hat-text text-sm text-rose-900'>Order Total</p>
						<h3 className='font-red-hat-text text-2xl font-bold text-rose-900'>${totalCost}</h3>
					</div>
					<div className='rounded-lg bg-rose-50 p-4 flex justify-center items-center gap-2 mt-6'>
						<img src={deliveryIcon} alt='' aria-hidden='true' />
						<p>
							This is a{' '}
							<span>
								<strong>carbon-neutral</strong>{' '}
							</span>
							delivery
						</p>
					</div>
					<button
						className='bg-red w-full text-white font-red-hat-text font-semibold text-base mt-6 rounded-full py-4 px-6'
						onClick={confirmOrder}
					>
						Confirm Order
					</button>
				</>
			)}
			{totalItems === 0 && (
				<div>
					<img className='mx-auto mb-4' src={emptyCartIcon} alt='Your cart is empty!' />
					<p className='font-red-hat-text text-sm text-rose-500 font-semibold text-center'>
						Your added items will appear here
					</p>
				</div>
			)}
		</section>
	);
};

export default CartSideBar;
