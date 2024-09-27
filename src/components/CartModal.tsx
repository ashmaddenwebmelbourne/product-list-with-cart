import { CartItem } from '../types/cart-item.type';
import { Dessert } from '../types/dessert.type';
import orderConfirmedIcon from '../assets/images/icon-order-confirmed.svg';
import ModalSingleDessert from './ModalSingleDessert';

type CartModalProps = {
	dessertData: Dessert[];
	orderConfirmed: boolean;
	cartItems: CartItem[] | null;
	totalCost: number;
};

const CartModal = ({ dessertData, orderConfirmed, cartItems, totalCost }: CartModalProps) => {
	return (
		<>
			{orderConfirmed && (
				<div className='fixed top-0 left-0 w-full h-full z-20 bg-black bg-opacity-50 flex justify-center items-center'>
					<section className=' absolute z-30 bg-white rounded-xl p-10'>
						<img className='mb-4' src={orderConfirmedIcon} alt='Order confirmed!' />
						<h1 className='font-red-hat-text font-bold text-[2.5rem] text-rose-900 mb-2 mr-24'>Order Confirmed</h1>
						<p className='font-red-hat-text text-base text-rose-500 mb-6'>We hope you enjoy your food!</p>
						<>
							<div className='bg-rose-50 rounded-lg p-6 mb-8'>
								{cartItems?.map((item) => (
									<ModalSingleDessert
										key={item.name}
										itemName={item.name}
										itemQuantity={item.quantity}
										itemPrice={item.price}
										dessertData={dessertData}
									/>
								))}
								<div className='flex justify-between items-center'>
									<p className='font-red-hat-text text-sm text-rose-900'>Order Total</p>
									<h2 className='font-red-hat-text font-bold text-2xl text-rose-900'>${totalCost}</h2>
								</div>
							</div>
							<button className='bg-red text-white font-red-hat-text font-semibold text-base rounded-full p-4 w-full'>
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
