import React, { useState } from "react";
import NavbarRight from "../Navbar/NavbarItem/NavbarRight";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/cardSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) {
      setQuantity(quantity + 1);
    }
  };

  const addBasket = () => {
    dispatch(
      addToCard({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        quantity: quantity,
        price: productDetail?.price,
      })
    );
  };

  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[700px] h-[500px] object-cover"
        src={productDetail?.image}
        alt=""
      />

      <div className="">
        <div className="text-4xl  font-bold">{productDetail?.title}</div>
        <div className="my-2 text-2xl ">{productDetail?.description} </div>
        <div className="my-2 text-xl text-red-500">
          {" "}
          Rating: {productDetail?.rating?.rate}{" "}
        </div>
        <div className="my-2 text-xl text-red-500">
          {" "}
          Count: {productDetail?.rating?.count}{" "}
        </div>
        <div className="text-5xl font-bold">
          {" "}
          {productDetail?.price} <span className="text-sm">$</span>
        </div>

        <div className="border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer my-4 h-16 flex items-center gap-5 justify-center">
          <div onClick={decrement} className="text-6xl">
            -
          </div>
          <div
            onClick={addBasket}
            className="bg-gray-200 pl-5 pr-5 ml-10 mr-10"
          >
            Sepete Ekle
          </div>
          <div onClick={increment} className="text-5xl">
            +
          </div>
        </div>
        <div className="  flex items-center justify-center ">
          <input
            className=" cursor-pointer text-center text-3xl w-[60px] h-[60px] border-4 rounded-full "
            type="text"
            value={quantity}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
