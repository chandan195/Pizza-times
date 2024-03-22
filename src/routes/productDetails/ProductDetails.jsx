// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { allProductsData } from "../../data/AllProductsData";
import {  useDispatch } from "react-redux";
import { addToCart } from "../../store/CardSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductDetails = () => {
  

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

  let param = useParams();
  // console.log(param);
  useEffect(() => {
    document.title = "Pizza Time || Product Details";
  });

  return (
    <div className="flex   bg-black/75 w-screen h-screen  bg-center ">
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
      {allProductsData &&
        Object.values(allProductsData).map((product) => {
          if (product.id == param.id) {
            return (
              <div
                className="pt-28 bg-black/40 lg:bg-center lg:pt-64  pb-24 w-full h-full bg-center  flex "
                key={product.id}
              >
                <button className="lg:pr-72">.....</button>
                {/* <div key={product.id} className=" bg-slate-400 rounded-lg"> */}
                <div className="h-52 w-96">
                  <img
                    loading="lazy"
                    src={product.ItemImg}
                    alt={product.ItemName}
                    className="h-96 w-96 object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div>
                  <div className="mt-4 flex justify-between pl-6">
                    <div>
                      <h3 className="text-4xl text-white ">
                        {product.ItemName}
                      </h3>

                      <p className="font-medium text-white">
                        {product.ItemIngredients}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 flex gap-10">
                    <div className="pt-5">
                      <p className="text-xl font-medium text-orange-600    ">
                        {product.ItemPrice}
                      </p>
                    </div>
                    <div
                      className=" text-md font-bold  text-white text-center 
                     rounded-lg w-3/5  bg-green-500  p-3 m-3 hover:bg-green-500/75"
                    >
                      <button className="" onClick={() => handleAdd(product)}>
                        Add To Card
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              // </div>
            );
          }
        })}
    </div>
  );
};

export default ProductDetails;
