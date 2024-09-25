import { CartItem } from '../types/cart-item.type';
import ModalSingleDessert from './ModalSingleDessert';

type CartModalProps = {
	orderConfirmed: boolean;
	cartItems: CartItem[] | null;
	totalCost: number;
};

const CartModal = ({ orderConfirmed, cartItems, totalCost }: CartModalProps) => {
	return (
		<>
			{orderConfirmed && (
				<div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
					<section className=' absolute z-10 bg-white p-4 rounded-md'>
						<h2>Order Confirmed</h2>
						<p>We hope you enjoy your food!</p>
						<>
							<div>
								{cartItems?.map((item) => (
									<ModalSingleDessert
										key={item.name}
										itemName={item.name}
										itemQuantity={item.quantity}
										itemPrice={item.price}
									/>
								))}
							</div>
							<h3>Total: ${totalCost}</h3>
							<button>
								<a href='/'>Start New Order</a>
							</button>
						</>
					</section>
				</div>
			)}
		</>
	);
};

export default CartModal;
