import clsx from "clsx";
import { Link } from "react-router-dom";
import { useQuery } from "urql";
import { IntroductionQuery } from "../../queries/introduction";
import { AnimatePresence, motion } from "framer-motion";

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  const [result] = useQuery({
    query: IntroductionQuery,
    variables: {
      id: "clzqy6bd9k9zc07un8a6h6vjr",
    },
  });

  const { data, fetching, error } = result;

  const introductionText = data?.introduction?.text;

  const classes = clsx(
    "flex text-lg lg:text-xl grid-rows-subgrid grid-cols-subgrid",
    className,
  );

  return (
    <header data-component-name="Header" className={classes}>
      <p className="">
        <h1 className="inline-block min-w-[25%] lg:min-w-[20%]">
          <Link
            className="mr-[.5em] italic decoration-from-font underline-offset-[.15em] hover:underline"
            to="/"
          >
            Luuk Meier
          </Link>
        </h1>
        <AnimatePresence>
          {introductionText && (
            <motion.span
              key="introduction"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline"
            >
              {introductionText}
            </motion.span>
          )}
        </AnimatePresence>
      </p>
    </header>
  );
}
export default Header;
