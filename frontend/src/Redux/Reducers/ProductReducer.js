export const ProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRODUCTS_LIST_REQUEST":
      return { loading: true };
    case "GET_PRODUCTS":
      return { loading: false, products: action.payload };
    case "PRODUCTS_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ProductDetailReducer = (
  state = { product: {}, loading: false },
  action
) => {
  switch (action.type) {
    case "PRODUCTS_DETAIL_REQUEST":
      return { loading: true };
    case "GET_PRODUCT":
      return { loading: false, product: action.payload };
    case "PRODUCTS_DETAIL_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
