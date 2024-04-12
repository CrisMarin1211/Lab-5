export const getShoppingCart = async (id: number) => {
	try {
		const getdataShopping = await fetch('https://fakestoreapi.com/products' + id)
			.then((res) => res.json())
			.then((json) => console.log(json));

		return getdataShopping;
	} catch (error) {
		console.error(error);
	}
};

export default getShoppingCart;
