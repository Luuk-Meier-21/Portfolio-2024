import clsx from "clsx";
import { referenceQuery } from "../../queries/reference";
import { useQuery } from "urql";
import { AnimatePresence, motion } from "framer-motion";
import { FADE_TRANSITION } from "../../utils/animation";

interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps) {
  const [result] = useQuery({
    query: referenceQuery,
    variables: {
      id: "clzv9p9us9dlm07unqv23hrww",
    },
  });

  const { data, fetching, error } = result;

  const reference = data?.reference;

  const classes = clsx(
    "flex gap-x-rem-1/2 min-h-[var(--row-height)] items-end text-lg lg:text-xl ",
    className,
  );

  return (
    <AnimatePresence>
      {reference?.url && reference?.label && (
        <motion.footer
          key="footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={FADE_TRANSITION}
          data-component-name="Footer"
          className={classes}
        >
          <div className="hidden min-w-[25vw] sm:block lg:min-w-[20vw]">
            Contact:
          </div>
          <a
            href={reference.url}
            className="italic decoration-from-font underline-offset-[.15em] hover:underline"
          >
            {reference.label}
          </a>
        </motion.footer>
      )}
    </AnimatePresence>
  );
}
export default Footer;
