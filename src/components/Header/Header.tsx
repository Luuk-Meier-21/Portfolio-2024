import clsx from "clsx";
import { Link } from "react-router-dom";
import { useQuery } from "urql";
import { AnimatePresence, motion } from "framer-motion";
import { introductionQuery } from "../../queries/introduction";
import { FADE_TRANSITION, FADE_TRANSITION_DELAY } from "../../utils/animation";
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

  const { data } = result;

  const introductionText = data?.introduction?.text;

  const classes = clsx(
    "flex text-lg lg:text-xl relative min-h-[var(--row-height)] grid-rows-subgrid grid-cols-subgrid",
    className,
  );

  return (
    <header data-component-name="Header" className={classes}>
      <p className="w-full text-center indent-[5em] sm:indent-[calc(25vw+.5rem)] lg:indent-[calc(20vw+.5rem)]">
        <span className="absolute left-0 top-0 flex text-left indent-0">
          <Link
            className="italic decoration-from-font underline-offset-[.15em] hover:underline"
            to="/"
          >
            Luuk Meier
          </Link>
        </span>
        <AnimatePresence>
          {introductionText ? (
            <motion.span
              key="introduction"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={FADE_TRANSITION_DELAY}
              className="left-0 inline"
            >
              {introductionText}
            </motion.span>
          ) : (
            <motion.span
              key="loading"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={FADE_TRANSITION}
              className="fixed bottom-rem-1/2 left-rem-1/2 inline"
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
