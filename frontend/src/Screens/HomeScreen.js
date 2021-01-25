import React, { useEffect } from "react";
import Products from "./../Components/Products";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "./../Redux/Actions/ProductsAction";

const HomeScreen = () => {
  const productsList = useSelector((state) => state.productsList);
  const { loading, error, products } = productsList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Products key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
