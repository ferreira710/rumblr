import Link from "next/link";
import type React from "react";
import type { ButtonProps } from "@/types/button.types";
import { cn } from "@/utils/cn";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const commonClasses = cn(
    "flex items-center justify-center rounded-full font-medium transition-colors",
    {
      "bg-white text-stone-900 hover:bg-gray-100": variant === "primary",
      "bg-transparent border border-white text-white hover:bg-white hover:text-stone-900":
        variant === "outline",
    },
    {
      "h-10 px-4 text-sm": size === "sm",
      "h-12 px-6": size === "md",
      "h-14 px-8 text-lg": size === "lg",
    },
    className,
  );

  if (href) {
    const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={commonClasses} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={commonClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
