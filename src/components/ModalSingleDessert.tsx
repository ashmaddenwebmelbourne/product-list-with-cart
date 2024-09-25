type ModalSingleDessertProps = {
	itemName: string;
	itemQuantity: number;
	itemPrice: number;
};

const ModalSingleDessert = ({ itemName, itemQuantity, itemPrice }: ModalSingleDessertProps) => {
	return (
		<div>
			<p>{itemName}</p>
			<p>{itemQuantity}x</p>
			<p>@ ${itemPrice}</p>
			<p>${itemQuantity * itemPrice}</p>
		</div>
	);
};

export default ModalSingleDessert;
