export const productUIDto = (products) => {
  return products.map((product) => {
    return {
      id: product._id,
      title: product.name,
      description: product.description,
      price: product.price,
      thumbnail: product.image,
    };
  });
};
