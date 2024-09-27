import removeIcon from '../assets/images/icon-remove-item.svg';

type CartSingleDessertProps = {
	itemName: string;
	itemQuantity: number;
	itemPrice: number;
	removeFromCart: (itemName: string) => void;
};

const CartSingleDessert = ({ itemName, itemQuantity, itemPrice, removeFromCart }: CartSingleDessertProps) => {
	return (
		<div className='pb-4 border-b border-rose-100 mb-4'>
			<strong className='font-red-hat-text font-semibold text-sm text-rose-900'>{itemName}</strong>
			<div className='flex mt-2'>
				<div className='flex gap-2 items-center'>
					<p className='font-red-hat-text font-semibold text-sm text-red'>{itemQuantity}x</p>
					<p className='font-red-hat-text text-sm text-rose-500'>@ ${itemPrice}</p>
					<p className='font-red-hat-text font-semibold text-sm text-rose-500'>${itemQuantity * itemPrice}</p>
				</div>
				<div className='w-5 h-5 flex items-center justify-center border border-rose-400 rounded-full cursor-pointer ml-auto'>
					<img onClick={() => removeFromCart(itemName)} src={removeIcon} alt={`Remove ${itemName} from cart`} />
				</div>
			</div>
		</div>
	);
};

export default CartSingleDessert;
