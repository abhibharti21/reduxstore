import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";
import Loader from "./Loader";
import { FcLike } from "react-icons/all";
import { addLike } from "../Store/LikedSlice";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [loader, setLoader] = useState(true);

  const dispatch = useDispatch();

  const addHandler = (payload) => {
    dispatch(add(payload));
  };

  const addLikePage = (action) => {
    dispatch(addLike(action));
  };

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");

      const data = await res.json();

      setProducts(data);

      setLoader(false);
    };

    fetchApi();
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <div className="productContainer">
      {products.map((elem) => {
        return (
          <div className="prodBox" key={elem.id}>
            <img src={elem.images} alt={elem.title} />
            <h2>{elem.title}</h2>
            <h3>{`${elem.price} ₹`}</h3>
            <button onClick={() => addHandler(elem)}>Add to cart</button>
            <button className="like" onClick={() => addLikePage(elem)}>
              <FcLike />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
