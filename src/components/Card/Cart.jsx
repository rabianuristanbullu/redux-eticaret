import React from "react";
import { removeFromCart } from "../../redux/cardSlice";
import { useDispatch } from "react-redux";

const Cart = ({ cart }) => {
    const dispatch =useDispatch()
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-cover "
        src={cart?.image}
        alt=""
      />

      <div className="w-[476px]">
        <div className="text-xl">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>

      <div>
        {cart?.price} $ ({cart?.quantity})
      </div>

      <div onClick={()=>dispatch(removeFromCart(cart?.id))} className="bg-red-500 text-white w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center">
        Ürünü Sil
      </div>
    </div>
  );
};

export default Cart;
