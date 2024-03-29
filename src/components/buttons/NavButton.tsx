import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("", {
  variants: {
    variant: {
      defaultNav:
        "nav-button border-b-2 border-solid border-coolgray-10 py-1 mx-2 first:border-t-2",
      selectedNav:
        "border-b-2 border-solid border-coolgray-10 py-1 mx-2 first:border-t-2 bg-border font-bold",
      defaultFooter:
        "footer-button flex justify-center items-center flex-col gap-1",
      selectedFooter:
        "flex justify-center items-center flex-col gap-1 bg-border font-bold",
    },
  },
  defaultVariants: {
    variant: "defaultNav",
  },
});

export interface NavButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const NavButton = React.forwardRef<HTMLButtonElement, NavButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn("h-full w-full", buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
NavButton.displayName = "Button";

export { NavButton, buttonVariants };
