import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Store/cartSlice";
import { FcLike } from "react-icons/all";
import { addLike } from "../Store/LikedSlice";
import Empty from "./Empty";

const Cart = () => {
  const dispatch = useDispatch();

  const addHandler = (payload) => {
    dispatch(add(payload));
  };

  const removeHandler = (payload) => {
    dispatch(remove(payload));
  };

  const addLikePage = (payload) => {
    dispatch(addLike(payload));
  };

  const cart = useSelector((state) => {
    return state.cart;
  });

  let money = 0;

  if (cart.length === 0) {
    return <Empty title={"cart"} />;
  }

  return (
    <div className="cart">
      {cart.map((elem, id) => {
        money += elem.price;

        return (
          <div className="cartbox" key={id}>
            <p>{id + 1}</p>
            <img src={elem.images} alt={elem.title} />
            <h3>{elem.title}</h3>
            <p>{elem.price} ₹</p>
            <div className="cartbtn">
              <button onClick={() => addHandler(elem)}>+</button>
              <button onClick={() => removeHandler(id)}>-</button>{" "}
              <button onClick={() => addLikePage(elem)}>
                <FcLike />
              </button>
            </div>
          </div>
        );
      })}
      <h1 className="total">Total Amount:- &nbsp;{money}₹</h1>
    </div>
  );
};

export default Cart;
