// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { allProductsData } from "../../data/AllProductsData";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/CardSlice";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

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

      <button className="lg:pr-72 pt-0 ">
        <Link to="/menu">
          <FontAwesomeIcon icon={faArrowAltCircleLeft}  className="pl-4 "/>
        </Link>
      </button>
      {allProductsData &&
        Object.values(allProductsData).map((product) => {
          if (product.id == param.id) {
            return (
              <div
                className="pt-28  lg:bg-center lg:pt-64  pb-24 w-full h-full bg-center  flex  "
                key={product.id}
              >
                {/* <div key={product.id} className=" bg-slate-400 rounded-lg"> */}
                <div className="h-52 w-96 ">
                  <img
                    loading="lazy"
                    src={product.ItemImg}
                    alt={product.ItemName}
                    className="h-96 w-96 object-cover rounded-lg object-center lg:h-full lg:w-full"
                  />
                </div>
                <div>
                  <div className="mt-4 flex justify-between pl-6">
                    <div>
                      <h3 className="text-4xl text-white ">
                        {product.ItemName}
                      </h3>

                      <p className="font-medium text-white w-2/3">
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
                      className="   text-white 
                     rounded-lg  bg-green-500   hover:bg-green-500/75"
                    >
                      <button
                        className="    text-white 
                     rounded-lg  text-md font-bold text-center w-full h-1/3 p-3 bg-center"
                        onClick={() => handleAdd(product)}
                      >
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
