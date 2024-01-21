"use client";

import { CarProps } from "@/types/index";
import React from "react";
import Image from "@/node_modules/next/image";
import CustomButton from "./CustomButton";
import { calculateCarRent, generateCarImageUrl } from "@/app/utils/index";
import {useState} from 'react'
import CarDetails from "./CarDetails";
interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { year, city_mpg, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isopen, setIsopen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2>
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          fill
          priority
          alt="car"
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering-wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" alt="gas" width={20} height={20} />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton title={"View More"} containerStyles="w-full py-[16px] rounded-full bg-primary-blue" textStyle="text-white text-[14px] leading-[17px] font-bold" rightIcon='/right-arrow.svg' handleClick={() => setIsopen(true)} />
        </div>
      </div>

      <CarDetails isOpen={isopen} closeModal={() => {setIsopen(false)}} car={car} />
    </div>
  );
};

export default CarCard;
