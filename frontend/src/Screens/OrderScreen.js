import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderDetail } from "../Redux/Actions/OrderActions";

import LoadingBox from "./../Components/LoadingBox";
import MessageBox from "./../Components/MessageBox";

const OrderScreen = (props) => {
  const orderId = props.match.params.id;
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetail);
  const { loading, error, order } = orderDetails;

  useEffect(() => {
    dispatch(orderDetail(orderId));
  }, [dispatch]);
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <div className="row top">
        <div className="col-2">
            <h2>Order {order._id}</h2>
          <ul>
            <li>
              <div className="card card-body">

                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {order.shippingAddress.fullname} <br />
                  <strong>Address:</strong> {order.shippingAddress.address} ,{" "}
                  {order.shippingAddress.city} ,
                  {order.shippingAddress.postalCode}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod} <br />
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <p>
                  <ul>
                    {order.orderItems.map((item) => (
                      <li key={item.product}>
                        <div className="row">
                          <div>
                            <img
                              src={`../${item.image}`}
                              className="small"
                              alt={item.name}
                            ></img>
                          </div>
                          <div>
                            <h3>{item.name}</h3>
                          </div>

                          <div>
                            {item.qty} x ${item.price} = $
                            {item.qty * item.price}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>${order.itemsPrice}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>${order.shippingPrice}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>${order.taxPrice}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong>Order Total</strong>
                  </div>
                  <div>
                    <strong>${order.totalPrice}</strong>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
