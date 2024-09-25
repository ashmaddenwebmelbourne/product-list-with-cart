type CartSingleDessertProps = {
	itemName: string;
	itemQuantity: number;
	itemPrice: number;
	removeFromCart: (itemName: string) => void;
};

const CartSingleDessert = ({ itemName, itemQuantity, itemPrice, removeFromCart }: CartSingleDessertProps) => {
	return (
		<div className='border border-red'>
			<strong>{itemName}</strong>
			<div className='flex'>
				<p>{itemQuantity}x</p>
				<p>@ ${itemPrice}</p>
				<p>${itemQuantity * itemPrice}</p>
			</div>
			<button onClick={() => removeFromCart(itemName)}>Remove</button>
		</div>
	);
};

export default CartSingleDessert;
