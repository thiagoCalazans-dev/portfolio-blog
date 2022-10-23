import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({
  size = "md",
  children,
  asChild,
  className,
}: HeadingProps) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx(
        "font-['Press_Start_2P']",
        {
          "text-xl": size === "sm",
          "text-2xl": size === "md",
          "text-4xl": size === "lg",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}
