"use client";

import React, { useState } from "react";
import { cn } from "@/utilities/cn";
import { ClipLoader } from "react-spinners";
import { CheckCircle, Eye, EyeSlash, WarningCircle } from "@phosphor-icons/react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
  leftIcon?: React.FC<any>;
  disabled?: boolean;
  optional?: boolean;
  inProgress?: boolean;
  showAsyncSpinner?: boolean;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  containerClassName?: string;
  leftIconClassName?: string;
  status?: "success" | "error" | null | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      errorText,
      inProgress,
      disabled,
      optional,
      className,
      leftIcon,
      type,
      status,
      containerClassName,
      labelClassName,
      inputClassName,
      ...props
    }: InputProps,
    ref
  ) => {
    const Icon = leftIcon;
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className={cn("w-full max-w-md mb-2", containerClassName)}>
        {label && (
          <span className="flex flex-row items-center mb-1">
            <label
              className={cn("block text-light-200 text-sm font-medium", disabled && "text-light-500", labelClassName)}
              htmlFor={id}
            >
              {label}
            </label>
            {optional && <p className="text-xs text-light-400 font-medium ml-1 mt-[2px]">(Optional)</p>}
          </span>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={cn(
              className,
              "appearance-none bg-elevation-4 rounded-md placeholder-light-300 border-light-400 border w-full",
              disabled && "bg-elevation-3 border-light-500",
              "focus:bg-elevation-5 focus:ring-light-300 focus:border-light-300 ring-offset-0 focus:outline-none focus:shadow-md",
              "py-1.5 pr-4",
              inputClassName,
              {
                "border-primary-500 ": (status === "error" || errorText) && !inProgress,
                "border-success-500": status === "success" && !inProgress,
                "pl-8": leftIcon,
                "pl-2": !leftIcon,
              }
            )}
            id={id}
            disabled={disabled}
            type={type === "password" && showPassword ? "text" : type}
            {...props}
          ></input>
          {Icon && (
            <div className="absolute left-2 top-0 bottom-0 h-full w-fit flex flex-col justify-center">
              <Icon className=" text-light-100 text-lg" />
            </div>
          )}
          <div className="absolute right-2 top-0 bottom-0 h-full w-fit flex flex-row justify-center items-center">
            {inProgress && <ClipLoader color="#868f98" size={"1em"} />}
            {!inProgress && status === "success" && (
              <CheckCircle className="text-success-400" weight="fill" size={"1.2em"} />
            )}
            {!inProgress && (status === "error" || errorText) && (
              <WarningCircle className="text-primary-400" weight="fill" size={"1.2em"} />
            )}
            {type === "password" && (
              <button
                className="text-light-200 hover:text-light-100"
                type="button"
                onClick={() => {
                  console.log("clicked");
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <EyeSlash weight="fill" size={"1.2em"} /> : <Eye weight="fill" size={"1.2em"} />}
              </button>
            )}
          </div>
        </div>
        <div className="h-3 mt-[2px] flex flex-row justify-between">
          {errorText && !inProgress && <p className="text-primary-500 text-xs text-left ">{"* " + errorText}</p>}
          <>
            {type === "password" && (
              <>
                <span></span>
                <p className="text-sm text-light-300 mr-1">Forgot Password?</p>
              </>
            )}
          </>
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
