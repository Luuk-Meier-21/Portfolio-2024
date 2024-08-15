import clsx from "clsx";
import { PropsWithoutRef } from "react";

interface LogoProps {
  className?: string;
  props?: PropsWithoutRef<"a">;
  onClick?: () => void;
}

function Logo({ className, onClick, ...props }: LogoProps) {
  const classes = clsx(
    "whitespace-nowrap font-sans text-logo font-bold uppercase tracking-[-2.6px]",
    className,
  );

  return (
    <button
      data-component-name="Logo"
      onClick={onClick}
      className={classes}
      {...props}
    >
      Luuk M<span className="tracking-[-1.8px]">e</span>ier
    </button>
  );
}
export default Logo;
