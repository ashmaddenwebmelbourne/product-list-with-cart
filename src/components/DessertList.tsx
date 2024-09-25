import DessertCard from './DessertCard';
import { Dessert } from '../types/dessert.type';
import { CartItem } from '../types/cart-item.type';

type DessertListProps = {
	dessertData: Dessert[];
	cartItems: CartItem[] | null;
	addToCart: (item: CartItem) => void;
	updateQuanity: (name: string, quantity: number) => void;
	removeFromCart: (name: string) => void;
};

const DessertList = ({ dessertData, cartItems, addToCart, updateQuanity, removeFromCart }: DessertListProps) => {
	return (
		<section>
			<h1 className='text-[2.5rem] font-bold font-red-hat-text text-rose-900'>Desserts</h1>
			<div className='grid grid-cols-1 tablet:grid-cols-3 gap-6 tablet:gap-x-6 tablet:gap-y-8'>
				{dessertData.map((dessert) => (
					<DessertCard
						key={dessert.name}
						dessert={dessert}
						cartItems={cartItems}
						addToCart={addToCart}
						updateQuanity={updateQuanity}
						removeFromCart={removeFromCart}
					/>
				))}
			</div>
		</section>
	);
};

export default DessertList;
