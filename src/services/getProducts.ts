export const getShoppingCart = async () => {
	try {
		const getdataShopping = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
		console.log(getdataShopping);

		return getdataShopping;
	} catch (error) {
		console.error(error);
	}
};
