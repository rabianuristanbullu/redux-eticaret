import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
const navigate=useNavigate()

  return (
    <div onClick={()=>navigate(`products/${product?.id}`)} className="w-[350px] p-1 mb-2 mx-2 cursor-pointer border-2 rounded-lg relative">
      <div className="text-2xl font-bold absolute rounded-md top-2 right-2 p-2 m-1 bg-black text-white">
        <span className="text-sm font-bold">$</span> {product.price}
      </div>
      <img src={product?.image} className="w-[200px] h-[200px]  m-auto " />
      <div className="text-center px-3 mt-3 text-lg font-medium">
        {product?.title}
      </div>
    </div>
  );
};

export default Product;
