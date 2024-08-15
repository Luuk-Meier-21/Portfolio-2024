import { motion } from "framer-motion";

interface SpinnerProps {}

function Spinner({}: SpinnerProps) {
  return (
    <motion.div
      data-component-name="Spinner"
      initial={{ rotate: 0 }}
      animate={{
        rotate: 180,
      }}
      transition={{ repeat: Infinity, ease: "linear", duration: 0.5 }}
      className="relative h-[.6em] w-[.6em] origin-center"
    >
      <div className="absolute left-[50%] top-[50%] h-[.06em] w-full origin-center translate-x-[-50%] translate-y-[-50%] bg-brand-beige" />
      <div className="absolute left-[50%] top-[50%] h-[.06em] w-full origin-center translate-x-[-50%] translate-y-[-50%] rotate-90 bg-brand-beige" />
    </motion.div>
  );
}
export default Spinner;
