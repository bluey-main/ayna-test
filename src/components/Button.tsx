import React from "react";
import { FiArrowRight } from "react-icons/fi";

interface IButtonProp {
  onClick: () => void;
  label: string;
  bgHoverColor?: string;
  backgroundColor?: string;
  textColor?: string;
  textColorOnHover?: string;
  size?: 'sm' | "md"| "lg";
  iconOnly?:boolean
}

const btnSizeClasses = {
      sm: "py-2 px-4 h-12",
      md: "py-3 px-6 h-14",
      lg: "py-4 px-8 h-16"  
}

const circleSizeClasses = {
      sm: "w-12 h-12",
      md: "w-14 h-14",
      lg: "w-16 h-16"  
}

const Button: React.FC<IButtonProp> = ({
  onClick,
  label,
  bgHoverColor = "bg-brand-yellow",
  backgroundColor = "bg-data-text-main",
  textColor = "text-data-dark-bg",
  size = "md",
  iconOnly

//   textColorOnHover = "#00000",
}) => {

   
  return (
    
    <div className="flex group w-fit cursor-pointer" onClick={onClick}>
        {
            !iconOnly && <div className={`${btnSizeClasses[size]} min-w-28  rounded-full flex justify-center items-center group-hover:shadow-lg ${backgroundColor} group-hover:${bgHoverColor} ease-in-out duration-300`}>
        <p className={`${textColor} h- ease-in-out duration-300 cursor-pointer`}>{label}</p>
      </div>
        }
      
      <div className={` ${circleSizeClasses[size]} rounded-full group-hover:${bgHoverColor} ${backgroundColor} ease-in-out duration-300 -ml-3 flex justify-center items-center`}>
        <FiArrowRight className={`${textColor} w-5 h-5 transform  group-hover:-rotate-[50deg] ease-in-out duration-200`}/>
      </div>
    </div>
  );
};

export default Button;