import { useState, useEffect } from 'react';
import cartIcon from '../assets/images/icon-add-to-cart.svg';
import decrementQuality from '../assets/images/icon-decrement-quantity.svg';
import incrementQuality from '../assets/images/icon-increment-quantity.svg';
import { CartItem } from '../types/cart-item.type';
import { Dessert } from '../types/dessert.type';

type AddToCartProps = {
	dessert: Dessert;
	cartItems: CartItem[] | null;
	addToCart: (item: CartItem) => void;
	updateQuantity: (name: string, quantity: number) => void;
	removeFromCart: (name: string) => void;
};

const AddToCart = ({ dessert, cartItems, addToCart, updateQuantity, removeFromCart }: AddToCartProps) => {
	const [itemQuantity, setItemQuantity] = useState(0);

	useEffect(() => {
		const cartItem = cartItems?.find((item) => item.name === dessert.name);
		setItemQuantity(cartItem?.quantity || 0);
	}, [cartItems, dessert.name]);

	const increaseItemQuantity = () => {
		const newQuantity = itemQuantity + 1;
		setItemQuantity(newQuantity);
		updateQuantity(dessert.name, newQuantity);
	};

	const decreaseItemQuantity = () => {
		if (itemQuantity > 1) {
			const newQuantity = itemQuantity - 1;
			setItemQuantity(newQuantity);
			updateQuantity(dessert.name, newQuantity);
		} else if (itemQuantity === 1) {
			setItemQuantity(0);
			removeFromCart(dessert.name);
		}
	};

	const handleAddToCart = () => {
		if (itemQuantity === 0) {
			setItemQuantity(1);
			addToCart({ ...dessert, quantity: 1 });
		} else {
			increaseItemQuantity();
		}
	};

	return (
		<div>
			{itemQuantity > 0 && (
				<div className='flex items-center justify-between gap-2 bg-red rounded-full py-3 px-4 max-w-[10rem] mx-auto mt-[-2rem] z-10 relative border border-red min-h-[3.125rem]'>
					<div
						onClick={decreaseItemQuantity}
						className='cursor-pointer border border-white rounded-full w-5 h-5 flex items-center justify-center'
					>
						<img src={decrementQuality} alt='Remove item' />
					</div>
					<p className='font-red-hat-text font-semibold text-sm text-white'>{itemQuantity}</p>
					<div
						onClick={increaseItemQuantity}
						className='cursor-pointer border border-white rounded-full w-5 h-5 flex items-center justify-center'
					>
						<img className='cursor-pointer' src={incrementQuality} alt='Add item' />
					</div>
				</div>
			)}
			{itemQuantity === 0 && (
				<div
					onClick={handleAddToCart}
					className=' cursor-pointer flex items-center justify-center gap-2 bg-white rounded-full p-3 px-4 max-w-[10rem] mx-auto border border-rose-400 mt-[-2rem] z-10 relative min-h-[3.125rem]'
				>
					<img className='w-5 h-6' src={cartIcon} alt='' aria-hidden='true' />
					<button className='font-red-hat-text font-semibold text-sm text-rose-900'>Add to Cart</button>
				</div>
			)}
		</div>
	);
};

export default AddToCart;
