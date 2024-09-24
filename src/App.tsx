import Desserts from './components/Desserts';
import Cart from './components/Cart';
import dessertData from './data.json';
import './App.css';

function App() {
	return (
		<main>
			<Desserts dessertData={dessertData} />
			<Cart />
		</main>
	);
}

export default App;
