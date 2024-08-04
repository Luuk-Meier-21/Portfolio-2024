import clsx from "clsx";
import Logo from "../Logo/Logo";
import { useRef } from "react";
import { useNavigate } from "react-router";

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  const classes = clsx(
    "fixed left-0 right-0 top-0 z-[9999] flex w-full gap-rem-1 p-rem-1/2 mix-blend-difference",
    className,
  );

  const navigate = useNavigate();

  const scrollHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // setTimeout(() => {
    //   navigate("/");
    // }, 200);
  };

  return (
    <header data-component-name="Header" className={classes}>
      <h1 className="flex flex-1 gap-rem-2">
        <Logo onClick={scrollHome} />
        <span className="serif">
          Developer & interactie designer geïnteresseerd in het grijze gebied
          tussen design en code.
        </span>
      </h1>
      <a
        className="opacity-75 hover:opacity-100"
        href="mailto:hoi@luukmeier.com"
      >
        Hoi@luukmeier.com
      </a>
    </header>
  );
}
export default Header;
