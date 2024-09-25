import { useState, useEffect } from 'react';
import cartIcon from '../assets/images/icon-add-to-cart.svg';
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
				<div>
					<button onClick={decreaseItemQuantity}>-</button>
					<p>{itemQuantity}</p>
					<button onClick={increaseItemQuantity}>+</button>
				</div>
			)}
			{itemQuantity === 0 && (
				<div>
					<img src={cartIcon} alt='cart icon' />
					<button onClick={handleAddToCart}>{itemQuantity === 0 ? 'Add to Cart' : 'Add Another'}</button>
				</div>
			)}
		</div>
	);
};

export default AddToCart;
