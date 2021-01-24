import Axios from "axios";
export const createOrder = (order) => async (dispatch, getState) => {
    console.log(order)
  dispatch({ type: "ORDER_CREATE_REQUEST", payload: order });

  try {
    const { userSignin } = getState();
    const { userInfo } = userSignin;

    const { data } = await Axios.post("/api/orders", order, {
      headers: { authorization: `Bearer ${userInfo.token}` },
    });

    dispatch({ type: "ORDER_CREATE_SUCCESS", payload: data.order });
    dispatch({ type: "CART_EMPTY" });
    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: "ORDER_CREATE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
