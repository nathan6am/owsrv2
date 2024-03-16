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

const CTA = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }: ButtonProps, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "py-4 px-8 text-light-100 bg-gradient-to-r from-transparent to-primary-600 hover:to-primary-800 transition-all duration-300 text-3xl text-shadow-sm shadow-elevation-1 font-bold  uppercase italic font-header -skew-x-12 drop-shadow-xl"
      )}
      {...props}
    >
      {children}
    </button>
  );
});

export default CTA;
