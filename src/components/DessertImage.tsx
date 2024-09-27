type DessertImageProps = {
	dessertImage: {
		thumbnail: string;
		mobile: string;
		tablet: string;
		desktop: string;
	};
};

const DessertImage = ({ dessertImage }: DessertImageProps) => {
	return (
		<picture>
			<source media='(min-width: 1024px)' srcSet={dessertImage.desktop} />
			<source media='(min-width: 768px)' srcSet={dessertImage.tablet} />
			<img src={dessertImage.mobile} className='max-h-[15rem] w-full object-cover bg-no-repeat rounded-lg' />
		</picture>
	);
};

export default DessertImage;
