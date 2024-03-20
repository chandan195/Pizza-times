import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//const NumberOfItems = 3;
const CardIcon = () => {

 const items = useSelector((state) => state.card.cart);

 const totalItems = items.reduce((total, item) => total + item.qty, 0);
  // console.log ("number of item",items);
  // const NumberOfItems = items.length;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(totalItems || 0);
  }, [setTotal, totalItems]);

  return (
    <div className="  flex ">
      <div className="relative ">
        <div className="top-0 absolute left-6">
          <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
            {total <= 20 ? total : `20+`}
          </p>
        </div>
        <svg
          viewBox="0 0 30 30"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-8 bg-black"
        >
          <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </div>
    </div>
  );
};

export default CardIcon;