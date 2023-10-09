import React from "react";

const Sorting = ({setSort}) => {
  return (
    <div className="bg-gray-200 my-5 p-5 flex items-center justify-end">
      <select onChange={(event)=>setSort(event.target.value)} className="bg-white py-3 px-3 rounded-full" name="" id="">
        <option disabled>SEÇİNİZ</option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
