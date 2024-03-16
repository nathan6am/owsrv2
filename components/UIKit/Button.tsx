import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { cn } from "@/utilities/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  inProgress?: boolean;
  label?: string;
  inProgressLabel?: string;
  variant?: "primary" | "success" | "neutral" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  width?: "full" | "fit";
  outline?: boolean;
  children?: JSX.Element | string | Array<JSX.Element | string>;
  icon?: React.ReactNode;
  iconSide?: "left" | "right";
}

const variantStyles = {
  primary: "bg-primary-300 text-elevation-1 hover:bg-primary-400",
  "primary-outline": "border border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-elevation-1",
  secondary: "bg-light-200 text-elevation-1 hover:bg-light-100",
  "secondary-outline": "border border-light-100 text-light-100 hover:bg-light-100 hover:text-elevation-1",
  neutral: "bg-elevation-7 text-light-100 hover:bg-elevation-6",
  "neutral-outline": "border border-light-200 text-light-200 hover:bg-light-200 hover:text-elevation-1",
  success: "bg-success-300 text-elevation-1 hover:bg-success-400",
  "success-outline": "border border-success-300 text-success-300 hover:bg-success-300 hover:text-elevation-1",
};
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled,
      inProgress,
      label,
      inProgressLabel,
      variant = "primary",
      size = "md",
      outline,
      className,
      width = "full",
      iconSide = "left",
      children,
      ...props
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "h-fit flex flex-row items-center justify-center rounded-md my-2 font-medium transition-colors duration-200",
          {
            "cursor-not-allowed": disabled,
            "py-1.5 px-4 text-sm max-w-xs": size === "sm",
            "py-1.5 px-4 text-md max-w-sm": size === "md",
            "py-2 px-6 text-lg max-w-md": size === "lg",
          },
          //Primary variant styles
          outline && !disabled ? variantStyles[`${variant}-outline`] : variantStyles[`${variant}`],
          disabled && "bg-elevation-4 text-light-500 hover:bg-elevation-4 hover:text-light-500",
          {
            "w-full ": width === "full",
            "w-fit": width === "fit",
            "drop-shadow-md": !outline,
            "hover:shadow-md": outline,
          },
          className
        )}
        {...props}
      >
        {children}
        {label}
      </button>
    );
  }
);

export default Button;
