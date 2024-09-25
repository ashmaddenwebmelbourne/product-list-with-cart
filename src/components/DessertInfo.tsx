import { Dessert } from '../types/dessert.type';

type DessertInfoProps = {
	dessert: Dessert;
};

const DessertInfo = ({ dessert }: DessertInfoProps) => {
	return (
		<div>
			<p>{dessert.category}</p>
			<p>{dessert.name}</p>
			<p>{dessert.price.toFixed(2)}</p>
		</div>
	);
};

export default DessertInfo;
