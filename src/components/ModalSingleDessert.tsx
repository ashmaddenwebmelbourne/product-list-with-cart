import { Dessert } from '../types/dessert.type';

type ModalSingleDessertProps = {
	itemName: string;
	itemQuantity: number;
	itemPrice: number;
	dessertData: Dessert[];
};

const ModalSingleDessert = ({ itemName, itemQuantity, itemPrice, dessertData }: ModalSingleDessertProps) => {
	const dessertImage = dessertData.find((dessert) => dessert.name === itemName);
	return (
		<div className='flex items-center gap-4 pb-4 border-b border-rose-100 mb-4 w-full'>
			<img
				className='max-w-[3rem] max-h-[3rem] rounded-[4px]'
				src={dessertImage?.image.thumbnail}
				alt={dessertImage?.name}
			/>
			<div>
				<p className='font-red-hat-text font-semibold text-sm text-rose-900'>{itemName}</p>
				<div className='flex gap-2 items-center'>
					<p className='font-red-hat-text font-semibold text-sm text-red'>{itemQuantity}x</p>
					<p className='font-red-hat-text text-sm text-rose-500'>@ ${itemPrice}</p>
				</div>
			</div>
			<p className='ml-auto font-red-hat-text font-semibold text-base text-rose-900'>${itemQuantity * itemPrice}</p>
		</div>
	);
};

export default ModalSingleDessert;
