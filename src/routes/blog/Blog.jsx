import React from "react";
import { Link } from "react-router-dom";
import { allProductsData } from "../../data/AllProductsData";
const Blog = () => {
  console.log();
  return (
    <div className="mx-1 w-full max-w-screen-xl  py-12 lg:pt-14">
      <div className=" md:justify-between pt-12">
        <div className="bg-white about   flex">
          <div className=" grid grid-cols-2">
            <div>
              <h1 className="center">Pizza Time || blog</h1>
            </div>
          </div>

        
          <div className="grid grid-cols-3 ">
            {allProductsData &&
              allProductsData.map((product) => {
                return (
                  <div
                    className="bg-slate-400 rounded-lg m-3 lg:m-1"
                    key={product.id}
                  >
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
                      <h3 className="mt-4 text-sm text-gray-700">
                        {product.ItemName}
                      </h3>
                      <p className="mt-1 text-lg font-medium text-gray-900">
                        {product.ItemPrice}
                      </p>
                    </div>
                    <div className="text-white text-center  ">
                      {
                        // console.log(product),
                        product.Category != "Drinks" ? (
                          product.ItemIngredients.length > 40 ? (
                            <p>{`${product.ItemIngredients.slice(
                              0,
                              40
                            )}...`}</p>
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
                        // onClick={() => handleAdd(product)}
                      >
                        Add To Card
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          {/* </div> */}
        </div>
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          perspiciatis alias impedit tempore vero id voluptas, odio ad possimus
          ipsa!
        </div>
      </div>
    </div>
  );
};

export default Blog;
