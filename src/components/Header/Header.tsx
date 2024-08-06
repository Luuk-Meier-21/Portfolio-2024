import clsx from "clsx";
import Logo from "../Logo/Logo";

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  const classes = clsx(
    "flex text-lg lg:text-xl grid-rows-subgrid mix-blend-difference grid-cols-subgrid",
    className,
  );

  return (
    <header data-component-name="Header" className={classes}>
      <h1 className="fixed inline-flex whitespace-nowrap">Luuk Meier</h1>
      {/* <p className="inline-flex indent-[]">
        Ontwerper en front-end ontwikkelaar met een passie voor de grijze zone
        tussen design en code, met een focus op toegankelijkheid in zowel.
      </p> */}
    </header>
  );
}
export default Header;
