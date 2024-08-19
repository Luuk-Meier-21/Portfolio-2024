import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface DynamicImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspect?: "4/3";
  fit?: "cover";
  loader?: ReactNode;
  delay?: number;
}

function DynamicImage({
  src,
  alt,
  width,
  height,
  aspect = "4/3",
  fit = "cover",
  loader = (
    <figure className="h-full w-full bg-black/20 mix-blend-multiply"></figure>
  ),
  delay = 0,
}: DynamicImageProps) {
  const [loaded, setLoaded] = useState(false);

  const isLandscape = width >= height;
  const isPortrait = height >= width;

  const classes = clsx(
    "w-full h-full scale-[1.1] relative z-20",
    {
      "aspect-[4/3]": aspect === "4/3" && isLandscape,
      "aspect-[3/4]": aspect === "4/3" && isPortrait,
    },
    {
      "object-cover": fit === "cover",
    },
  );

  useEffect(() => {
    setLoaded(false);
  }, []);

  return (
    <figure
      data-component-name="DynamicImage"
      className="relative overflow-hidden"
    >
      <figure aria-hidden role="presentation" className="absolute inset-0">
        {loader}
      </figure>
      <motion.img
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: loaded ? 1 : 0,
        }}
        onLoad={() => setTimeout(() => setLoaded(true), delay)}
        onError={() => {}}
        className={classes}
        src={src}
        alt={alt}
      />
    </figure>
  );
}
export default DynamicImage;
