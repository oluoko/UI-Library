import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { cva, VariantProps } from "class-variance-authority";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva("py-2 px-4 bg-gray-600 text-white rounded-xl", {
  variants: {
    variant: {
      default: "bg-gray-600 text-white",
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-200 text-gray-700",
      outline:
        "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100",
      ghost: "bg-gray-700/20 text-gray-700/70 hover:bg-gray-700/30",
      destructive: "bg-red-500 text-white",
      success: "bg-green-500 text-white",
      warning: "bg-yellow-500 text-white",
    },
    size: {
      default: "h-12",
      medium: "h-24",
      large: "h-52",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({ variant, size, className }))}
    />
  );
}
