export interface products {
	image: string;
	title: string;
	description: string;
	category: string;
	price: number;
	rating: {
		rate: number;
		count: number;
	};
}
