import { ButtonHTMLAttributes, children, DetailedHTMLProps, forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...classes: string[]) => twMerge(clsx(...classes));

type TRef = HTMLButtonElement;
type TVariant = "solid" | "ghost" | "outline";

type TButtonOptions = {
  variant?: TVariant;
};

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;  

const Buttons = forwardRef<TRef, TButton>(
  ({ className, variant = "solid", children, ...rest }, ref) => {
    const getVariant = (variant: TVariant) => { 
      switch (variant) { 
        case "outline":
          return "border border-gray-500 text-gray-500";
        case "ghost":
          return "bg-transparent text-gray-700 hover:bg-gray-100";
        default:
          return "bg-blue-500 text-white";
      }
    };

    return (
      <button {...rest} ref={ref} className={cn(getVariant(variant), className)}>
        {children}
      </button>
    );
  }
);

export default Buttons;
