import addToCartIcon from '../assets/images/icon-add-to-cart.svg';

type DessertsProps = {
	dessertData: {
		image: {
			thumbnail: string;
			mobile: string;
			tablet: string;
			desktop: string;
		};
		name: string;
		category: string;
		price: number;
	}[];
};

const Desserts = ({ dessertData }: DessertsProps) => {
	const images = import.meta.glob('../assets/images/*', { eager: true });

	const getImageUrl = (path: string) => {
		const key = Object.keys(images).find((k) => k.includes(path));
		return key ? (images[key] as { default: string }).default : '';
	};

	return (
		<section className='grid grid-cols-1 md:grid-cols-3 gap-4'>
			{dessertData.map((dessert, index) => {
				return (
					<div key={index}>
						<picture>
							<source media='(min-width: 1024px)' srcSet={getImageUrl(dessert.image.desktop)} />
							<source media='(min-width: 768px)' srcSet={getImageUrl(dessert.image.tablet)} />
							<img src={getImageUrl(dessert.image.mobile)} alt={dessert.name} />
						</picture>
						<div className='flex'>
							<img src={addToCartIcon} alt='Add to Cart' />
							<strong>Add to Cart</strong>
						</div>
						<div>
							<p>{dessert.category}</p>
							<p>{dessert.name}</p>
							<p>${dessert.price.toFixed(2)}</p>
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default Desserts;
