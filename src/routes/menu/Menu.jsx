//import React from 'react'
import ProductCard from "../../components/product_card/ProductCard";
import { useEffect } from "react";

const Menu = () => {
  useEffect(() => {
    document.title = "Pizza Time || Menu";
  });
  return (
    <div className="  pt-12 lg:pt-14">
      <div className="md:flex md:justify-between ">
        <div className=" about  pt-14 lg:px-8 bg-black/60 text-white  ">
          <h1 className="center">Pizza Time || Menu</h1>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
