import clsx from "clsx";
import { Link } from "react-router-dom";
import { useQuery } from "urql";
import { AnimatePresence, motion } from "framer-motion";
import { introductionQuery } from "../../queries/introduction";
import {
  FADE_TRANSITION,
  FADE_TRANSITION_DELAY,
  fadeTransition,
} from "../../utils/animation";
import Spinner from "../Spinner/Spinner";

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  const [result] = useQuery({
    query: introductionQuery,
    variables: {
      id: "clzqy6bd9k9zc07un8a6h6vjr",
    },
  });

  const { data, fetching, error } = result;

  const introductionText = data?.introduction?.text;

  const classes = clsx(
    "flex text-lg lg:text-xl min-h-[var(--row-height)] grid-rows-subgrid grid-cols-subgrid",
    className,
  );

  return (
    <header data-component-name="Header" className={classes}>
      <p className="w-full">
        <h1 className="mr-rem-1/2 inline-block min-w-[25vw] lg:min-w-[20vw]">
          <Link
            className="mr-[.5em] italic decoration-from-font underline-offset-[.15em] hover:underline"
            to="/"
          >
            Luuk Meier
          </Link>
        </h1>
        <AnimatePresence>
          {introductionText ? (
            <motion.span
              key="introduction"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={FADE_TRANSITION_DELAY}
              className="inline"
            >
              {introductionText}
            </motion.span>
          ) : (
            <motion.span
              key="loading"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={FADE_TRANSITION}
              className="absolute bottom-rem-1/2 left-rem-1/2 inline"
            >
              <Spinner />
            </motion.span>
          )}
        </AnimatePresence>
      </p>
    </header>
  );
}
export default Header;
