import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-[transform,background-color,color,border-color,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-clay [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-0.5",
  {
    variants: {
      variant: {
        solid:
          "bg-ink text-paper hover:bg-indigo border border-ink",
        invert:
          "bg-paper text-ink hover:bg-sand border border-paper",
        clay: "bg-clay text-foam hover:opacity-90 border border-clay",
        line: "bg-transparent text-ink border border-line-strong hover:border-ink hover:bg-ink hover:text-paper",
        ghost:
          "bg-transparent text-ink border border-transparent hover:border-line-strong",
        invertLine:
          "bg-transparent text-paper border border-paper/40 hover:bg-paper hover:text-ink",
      },
      size: {
        sm: "h-10 px-3.5 text-xs uppercase tracking-[0.14em]",
        md: "h-11 px-4 text-xs uppercase tracking-[0.16em]",
        lg: "h-12 px-5 text-[0.7rem] uppercase tracking-[0.18em]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
