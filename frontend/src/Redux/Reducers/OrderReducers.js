export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_CREATE_REQUEST":
      return { loading: true };
    case "ORDER_CREATE_SUCCESS":
      return { loading: false, success: true, order: action.payload };
    case "ORDER_CREATE_FAIL":
      return { loading: false, error: action.payload };
    case "ORDER_CREATE_RESET":
      return {};
    default:
      return state;
  }
};

export const orderDetailReducer = (
  state = { loading: true, order: {} },
  action
) => {
  switch (action.type) {
    case "ORDER_DETAIL_REQUEST":
      return { loading: true };
    case "ORDER_DETAIL_SUCCESS":
      return { loading: false, order: action.payload };
    case "ORDER_DETAIL_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
