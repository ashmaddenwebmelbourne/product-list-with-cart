import { Dessert } from '../types/dessert.type';

type DessertInfoProps = {
	dessert: Dessert;
};

const DessertInfo = ({ dessert }: DessertInfoProps) => {
	return (
		<div className='mt-4'>
			<p className='font-red-hat-text text-sm text-rose-500'>{dessert.category}</p>
			<p className='font-red-hat-text text-base font-semibold text-rose-900'>{dessert.name}</p>
			<p className='font-red-hat-text text-base font-semibold text-red'>${dessert.price.toFixed(2)}</p>
		</div>
	);
};

export default DessertInfo;
