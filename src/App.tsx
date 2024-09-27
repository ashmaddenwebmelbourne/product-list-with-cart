import { useState } from 'react';
import dessertData from './data.json';
import DessertList from './components/DessertList';
import CartSideBar from './components/CartSideBar';
import CartModal from './components/CartModal';
import { CartItem } from './types/cart-item.type';
import './App.css';

// Add in images to the cards and also to the cart and cart modal
// Styling for all sections
// Semantic markup
// Check accessibility, add aria labels if needed (shopping cart icon)
// Make sure all images have alt text
// refactor the code

function App() {
	// Start with empty cart
	const [cartItems, setCartItems] = useState<CartItem[] | null>(null);
	const [orderConfirmed, setOrderConfirmed] = useState(false);

	const confirmOrder = () => {
		setOrderConfirmed(true);
	};

	// if item is not in cart, add it
	const addToCart = ({ name, quantity, price }: { name: string; quantity: number; price: number }) => {
		const chosenDessert = { name, quantity, price };
		if (cartItems?.some((dessert) => dessert.name === chosenDessert.name)) {
			updateExistingCartItem(chosenDessert);
		} else if (cartItems !== null) {
			setCartItems([...cartItems, chosenDessert]);
		} else {
			setCartItems([chosenDessert]);
		}
	};

	// if item is already in cart, update it
	const updateExistingCartItem = ({ name, quantity, price }: { name: string; quantity: number; price: number }) => {
		const chosenDessert = { name, quantity, price };
		if (cartItems?.some((dessert) => dessert.name === chosenDessert.name)) {
			setCartItems([...cartItems, chosenDessert]);
		}
	};

	// Remove item from cart
	const removeFromCart = (name: string) => {
		if (cartItems) {
			const updatedCart = cartItems.filter((dessert) => dessert.name !== name);
			if (updatedCart.length === 0) {
				setCartItems(null);
			} else {
				setCartItems(updatedCart);
			}
		}
	};

	// Update quantity of items in cart
	const updateQuanity = (name: string, quantity: number) => {
		if (cartItems) {
			setCartItems(
				cartItems.map((dessert) => {
					if (dessert.name === name) {
						return { ...dessert, quantity };
					}
					return dessert;
				})
			);
		}
	};

	const getTotalItems = () => {
		if (cartItems) {
			return cartItems.reduce((total, dessert) => total + dessert.quantity, 0);
		}
		return 0;
	};

	const getTotalCost = () => {
		if (cartItems) {
			return cartItems.reduce((total, dessert) => total + dessert.quantity * dessert.price, 0);
		} else {
			return 0;
		}
	};

	return (
		<main className='max-w-[76rem] mx-auto flex flex-col desktop:flex-row gap-8 items-start'>
			<DessertList
				dessertData={dessertData}
				cartItems={cartItems}
				addToCart={addToCart}
				updateQuanity={updateQuanity}
				removeFromCart={removeFromCart}
			/>
			<CartSideBar
				cartItems={cartItems}
				totalItems={getTotalItems()}
				totalCost={getTotalCost()}
				removeFromCart={removeFromCart}
				confirmOrder={confirmOrder}
			/>
			<CartModal
				dessertData={dessertData}
				orderConfirmed={orderConfirmed}
				cartItems={cartItems}
				totalCost={getTotalCost()}
			/>
		</main>
	);
}

export default App;
