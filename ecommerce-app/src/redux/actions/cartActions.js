// Action to add a product to the cart
export const addToCart = (product) => (dispatch, getState) => {
  const { cartItems } = getState().cart;

  // Check if the product is already in the cart
  const alreadyInCart = cartItems.find((item) => item.id === product.id);

  if (!alreadyInCart) {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    alert("Product added to the cart!");
  } else {
    alert("Product is already in the cart");
  }
};

// Action to remove a product from the cart
export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: productId,
  });

  const { cartItems } = getState().cart;
  alert("If you want to removed product from the cart!");
  console.log("Updated cart:", cartItems);
};
