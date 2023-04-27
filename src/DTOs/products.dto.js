export const productUIDto = (products) => {
  return products.map((product) => {
    return {
      id: product._id,
      title: product.name,
      price: product.price,
      thumbnail: product.image,
    };
  });
};
