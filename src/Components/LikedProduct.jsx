import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/all";
import { removeLike } from "../Store/LikedSlice";
import Empty from "./Empty";

const LikedProduct = () => {
  const dispatch = useDispatch();

  const removeHandler = (action) => {
    dispatch(removeLike(action));
  };

  const data = useSelector((state) => {
    return state.like;
  });

  if (data.length === 0) {
    return <Empty title={"wish-list"} />;
  }

  return (
    <div className="LikedProduct">
      {data.map((elem, id) => {
        return (
          <div className="likebox" key={id}>
            <p>{id + 1}</p>
            <img src={elem.images} alt={elem.title} />
            <h2>{elem.title}</h2>
            <button onClick={() => removeHandler(id)}>
              <MdDeleteForever />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default LikedProduct;
