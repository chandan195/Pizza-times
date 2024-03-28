/* eslint-disable react/prop-types */
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/CardSlice";

import toast, { Toaster } from "react-hot-toast";

const Card = ({ product }) => {
  // console.log(product);
  const handleToast = (name) => toast.success(`Added ${name} `, { icon: "👏" });
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        Image: product.ItemImg,
        name: product.ItemName,
        price: product.ItemPrice,
        qty: 1,
      })
    ),
      handleToast(product.ItemName);
  };
 
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              border: "3px solid red",
            },
          },
        }}
      />
      <div className="bg-slate-400 rounded-lg m-3 lg:m-1" key={product.id}>
        <Link to={`/product-details/${product.id}`}>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:h-52">
            <img
              loading="lazy"
              src={product.ItemImg}
              alt={product.ItemName}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
        </Link>
        <div className="pl-4 flex space-x-36">
          <h3 className="mt-4 text-sm text-gray-700">{product.ItemName}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            {product.ItemPrice}
          </p>
        </div>
        <div className="text-white text-center  ">
          {
            // console.log(product),
            product.Category != "Drinks" ? (
              product.ItemIngredients.length > 40 ? (
                <p>{`${product.ItemIngredients.slice(0, 40)}...`}</p>
              ) : (
                <p>{product.ItemIngredients}</p>
              )
            ) : (
              ""
            )
          }
        </div>

        <div className=" text-md font-bold  text-white text-center ">
          <button
            className=" bg-center
                     rounded-lg w-3/5  bg-green-600  p-2 m-3 hover:bg-green-500/75"
            onClick={() => handleAdd(product)}
          >
            Add To Card
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
