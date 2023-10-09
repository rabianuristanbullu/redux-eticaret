import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cardSlice";
import Cart from "../components/Card/Cart";

const Card = () => {
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <Cart key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-2xl">TOPLAM TUTAR: <span className="font-bold text-3xl ml-2">$ {totalAmount}</span></div>
        </div>
      ) : (
        <div>Sepetiniz Boş...</div>
      )}
    </div>
  );
};

export default Card;
