import React from "react";
import { NavLink } from "react-router-dom";
import FormatePrice from "./FormatePrice";

const FeatureProductsCard = ({ curData }) => {
  return (
    <NavLink to={`/singleproduct/${curData.id}`}>
      <div className=" relative text-sm sm:text-base">
        <figure>
          <img src={curData.image} alt={curData.name} className="hover:scale-105  duration-300" />
          <figcaption className="absolute z-10 top-2 right-1  sm:top-3 sm:right-2 px-[2px]  sm:px-2 sm:py-1 lg:px-4 lg:py-2 bg-white/80 rounded-full sm:text-[10px] text-[8px] lg:text-sm "> {curData.category} </figcaption>
        </figure>
        <div className="flex sm:justify-between  sm:flex-row flex-col justify-center items-center sm:p-4 p-2 text-[8px] md:text-[7px] lg:text-[12px] xl:text-base">
          <p> {curData.name} </p>
          <p> <FormatePrice price = {curData.price} /> </p>
        </div>
      </div>
    </NavLink>
  );
};

export default FeatureProductsCard;
