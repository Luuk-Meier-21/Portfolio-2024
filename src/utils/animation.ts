import { Transition } from "framer-motion";

export const DEFAULT_DURATION_SEC = 0.4;
export const DEFAULT_DURATION_MS = DEFAULT_DURATION_SEC * 1000;

export const DROPDOWN_TRANSITION: Transition = {
  duration: DEFAULT_DURATION_SEC,
  ease: "easeOut",
};

export const dropdownTransition = (options: Transition): Transition => ({
  ...DROPDOWN_TRANSITION,
  ...options,
});

export const FADE_TRANSITION: Transition = {
  duration: DEFAULT_DURATION_SEC,
};

export const fadeTransition = (options: Transition): Transition => ({
  ...FADE_TRANSITION,
  ...options,
});
