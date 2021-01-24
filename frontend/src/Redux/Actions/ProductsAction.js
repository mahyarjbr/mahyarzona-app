import Axios from "axios";
export const productsAction = () => async (dispatch) => {
  dispatch({ type: "PRODUCTS_LIST_REQUEST" });
  try {
    const { data } = await Axios.get("/api/products");
    dispatch({ type: "GET_PRODUCTS", payload: data });
  } catch (err) {
    dispatch({ type: "PRODUCTS_LIST_FAIL", payload: err.message });
  }
};

export const productAction = (productId) => async (dispatch) => {
  dispatch({ type: "PRODUCTS_DETAIL_REQUEST" });
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({ type: "GET_PRODUCT", payload: data });
  } catch (err) {
    dispatch({ type: "PRODUCTS_DETAIL_FAIL", payload: err.message });
  }
};
