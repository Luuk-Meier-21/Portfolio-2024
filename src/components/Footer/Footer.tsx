import clsx from "clsx";

interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps) {
  const classes = clsx(
    "flex gap-x-rem-1/2 items-end text-lg lg:text-xl  mix-blend-difference",
    className,
  );

  return (
    <footer data-component-name="Footer" className={classes}>
      <div className="hidden min-w-[25%] sm:block lg:min-w-[20%]">Contact</div>
      <a href="" className="italic hover:underline">
        hoi@luukmeier.com
      </a>
    </footer>
  );
}
export default Footer;
