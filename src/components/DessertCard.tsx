import DessertImage from './DessertImage';
import AddToCart from './AddToCart';
import DessertInfo from './DessertInfo';
import { CartItem } from '../types/cart-item.type';
import { Dessert } from '../types/dessert.type';

type DessertCardProps = {
	dessert: Dessert;
	cartItems: CartItem[] | null;
	addToCart: (item: CartItem) => void;
	updateQuanity: (name: string, quantity: number) => void;
	removeFromCart: (name: string) => void;
};

const DessertCard = ({ dessert, cartItems, addToCart, updateQuanity, removeFromCart }: DessertCardProps) => {
	return (
		<article>
			<DessertImage />
			<AddToCart
				dessert={dessert}
				cartItems={cartItems}
				addToCart={addToCart}
				updateQuantity={updateQuanity}
				removeFromCart={removeFromCart}
			/>
			<DessertInfo dessert={dessert} />
		</article>
	);
};

export default DessertCard;
