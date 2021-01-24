import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../Components/Rating";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "./../Components/LoadingBox";
import MessageBox from "./../Components/MessageBox";
import { productAction } from "../Redux/Actions/ProductsAction";

const ProductScreen = (props) => {
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetail;
  const [qty, setQty] = useState(1);
  const productId = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productAction(productId));
  }, [dispatch,productId]);
  const addToCardHandler=() =>{
    props.history.push(`/cart/${productId}?qty=${qty}`)
  }
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Fragment>
          <Link to="/">Back To Home</Link>
          <div className="row top">
            <div className="col-2">
              <img
                className="large"
                src={`../${product.image}`}
                alt={product.name}
              />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating rating={product.rating} />
                </li>
                <li>Price : {product.price}</li>
                <li>
                  Description :<p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button className="primary block" onClick={addToCardHandler}>Add To Card</button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ProductScreen;
