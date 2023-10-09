import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  console.log(categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="w-1/6 bg-gray-200 p-4">
      <div className="border-b-2 px-2 border-gray-500 pb-1 text-xl font-bold">
        KATEGORIES
      </div>
      {categories?.map((category, i) => (
        <div
          onClick={()=>setCategory(category)}
          className="text-lg mt-1 cursor-pointer hover:bg-gray-300 p-2"
          key={i}
        >
          {category.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Category;
