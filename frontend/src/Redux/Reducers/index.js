import { combineReducers } from "redux";
import { ProductDetailReducer, ProductReducer } from "./ProductReducer";
import { CartReducer } from "./CartReducers";
import { RegisterReducer, SigninReducer } from "./UserReducers";

export const reducers = combineReducers({
  productsList: ProductReducer,
  productDetail: ProductDetailReducer,
  cart: CartReducer,
  userSignin: SigninReducer,
  userRegister: RegisterReducer,
});
