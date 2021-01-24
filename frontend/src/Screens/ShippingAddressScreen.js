import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "./../Components/CheckoutSteps";
import { saveShippingAddress } from "./../Redux/Actions/CartActions";

const ShippingAddress = (props) => {
  const { userInfo } = useSelector((state) => state.userSignin);
  if (!userInfo) {
    props.history.push("/signin");
  }
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [fullname, setFullname] = useState(shippingAddress.fullname);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ fullname, address, city, postalCode }));
    props.history.push("/payment");
  };

  return (
    <Fragment>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div>
        <form className="form" onSubmit={(e) => submitHandler(e)}>
          <div>
            <h1>Shipping Address</h1>
          </div>

          <div>
            <label htmlFor="fullname">Fullname</label>
            <input
              placeholder="Input your full name"
              value={fullname}
              type="text"
              id="fullname"
              onChange={(e) => setFullname(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              placeholder="Input your address"
              value={address}
              type="text"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              value={city}
              placeholder="Input your city"
              id="city"
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              value={postalCode}
              placeholder="Input your postal Code"
              id="password"
              onChange={(e) => setPostalCode(e.target.value)}
            ></input>
          </div>
          <div>
            <label />
            <button className="primary" type="submit">
              Continue
            </button>
          </div>
          <div>
            <label />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ShippingAddress;
