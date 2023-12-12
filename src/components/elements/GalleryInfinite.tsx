import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

interface GalleryInfiniteProps {
  images: string[];
}

const Column: React.FC<{ images: string[]; y: any }> = ({ images, y }) => (
  <motion.div className="gallery-infinite-column" style={{ y }}>
    {images.map((src, i) => (
      <div key={i} className="gallery-infinite-image-container">
        <Image
          src={src}
          alt="image"
          width={0}
          height={0}
          className="object-cover w-full h-full"
          sizes="100%"
        />
      </div>
    ))}
  </motion.div>
);

const GalleryInfinite: React.FC<GalleryInfiniteProps> = ({ images }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  console.log(images);
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="gallery-infinite-wrapper relative">
      <div className="gallery-infinite-spacer"></div>
      <div ref={ref} className="gallery-infinite-items">
        <Column images={images.slice(0, 3)} y={y} />
        <Column images={images.slice(3, 6)} y={y2} />
        <Column images={images.slice(6, 9)} y={y3} />
        <Column images={images.slice(9, 12)} y={y4} />
      </div>
      <div className="gallery-infinite-spacer"></div>
    </main>
  );
};

export default GalleryInfinite;
