export const SigninReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_SIGNIN_REQUEST":
      return { loading: true };
    case "USER_SIGNIN_SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "USER_SIGNIN_FAIL":
      return { loading: false, error: action.payload };
    case "USER_SIGNOUT":
      return {};
    default:
      return state;
  }
};
export const RegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return { loading: true };
    case "USER_REGISTER_SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "USREGISTER_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
