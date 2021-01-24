import { Link, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CardScreen from "./Screens/CardScreen";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "./Screens/Signin";
import { signout } from "./Redux/Actions/UserAction";
import Register from "./Screens/Register";
import ShippingAddress from "./Screens/ShippingAddressScreen";
import PaymentMethodScreen from "./Screens/PaymentMethodScreen";
import PlaceOrderScreen from './Screens/PlaceOrderScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    //
    dispatch(signout());
  };
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <Link to="/" className="brand">
            mahyarzona
          </Link>
        </div>
        <div>
          <Link to="/cart">
            Cart{" "}
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
          </Link>
          {userInfo ? (
            <>
              <Link to="#">{userInfo.name}</Link>
              <Link to="#signout" onClick={signoutHandler}>
                Sign out
              </Link>
            </>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </div>
      </header>
      <main>
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/shipping" component={ShippingAddress} />
        <Route path="/payment" component={PaymentMethodScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/cart/:id?" component={CardScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/" exact component={HomeScreen} />
      </main>

      <footer className="row center mb-0">All right reserved</footer>
    </div>
  );
}

export default App;
