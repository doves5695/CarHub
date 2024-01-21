"use client"
import React from "react";
import Image from "@/node_modules/next/image";
import { CustomButtonProps } from "@/types/index";

const CustomButton = ({title, containerStyles, handleClick, btnType, textStyle, rightIcon}: CustomButtonProps) => {
  return (
    <button disabled={false} type={btnType} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
        <span className={`flex-1 ${textStyle}`}>{title}</span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image src='./right-arrow.svg' alt='right-arrow' fill className="object-contain" />
          </div>
        )} 
    </button>
  )
};

export default CustomButton;
