// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { allProductsData } from "../../data/AllProductsData";
import { useSelector } from "react-redux";
const ProductDetails = () => {
  
  const productData = useSelector((state)=>state.allProducts);
  console.log(productData)

  let param = useParams();
  // console.log(param);
  useEffect(() => {
    document.title = "Pizza Time || Product Details";
  });

  return (
    <>
      {allProductsData &&
        Object.values(allProductsData).map((product) => {
          if (product.id == param.id) {
            return (
              <div
                className="pt-28 lg:pt-28  w-1/3 h-1/3 bg-center ml-52 "
                key={product.id}
              >
                <div key={product.id} className=" bg-slate-400 rounded-lg">
                  <div className="">
                    <img
                      loading="lazy"
                      src={product.ItemImg}
                      alt={product.ItemName}
                      className="h-96 w-96 object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.ItemName}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.ItemPrice}
                    </p>
                  </div>

                  <div className="px-4 p">
                    <div>
                      <button className="">Add To Card</button>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </>
  );
};

export default ProductDetails;
