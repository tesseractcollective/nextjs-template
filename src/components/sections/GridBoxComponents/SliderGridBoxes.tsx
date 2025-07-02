"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  ReactNode,
  MouseEvent,
  useCallback,
} from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";

// Type definitions
interface SliderGridBoxesProps {
  gridBoxData: GridBoxFieldsFragment[];
  initialScroll?: number;
}

interface CardProps {
  gridBox: GridBoxFieldsFragment;
  index: number;
  layout?: boolean;
}

interface CarouselContextType {
  currentIndex: number;
}

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

// Context
export const CarouselContext = createContext<CarouselContextType>({
  currentIndex: 0,
});

// Utility function
const isMobile = (): boolean => {
  return typeof window !== "undefined" && window.innerWidth < 768;
};

// Main Component
export default function SliderGridBoxes({
  gridBoxData,
  initialScroll = 0,
}: SliderGridBoxesProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = (): void => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = (): void => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = (): void => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleScrollLeftClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    scrollLeft();
  };

  const handleScrollRightClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    scrollRight();
  };

  if (!gridBoxData?.length) {
    return null;
  }

  return (
    <section className="mx-auto w-full my-8 relative z-[300]">
      <CarouselContext.Provider value={{ currentIndex }}>
        <div className="relative w-full">
          <div
            className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
            ref={carouselRef}
            onScroll={checkScrollability}
          >
            <div
              className={cn(
                "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
              )}
            />

            <div
              className={cn(
                "flex flex-row justify-start gap-4 pl-4",
                "mx-auto max-w-8xl px-4"
              )}
            >
              {gridBoxData.map((gridBox, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.2 * index,
                      ease: "easeOut",
                      once: true,
                    },
                  }}
                  key={`card-${index}`}
                  className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
                >
                  <Card gridBox={gridBox} index={index} layout={true} />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mr-10 flex justify-end gap-2">
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-secondary disabled:opacity-50"
              onClick={handleScrollLeftClick}
              disabled={!canScrollLeft}
              type="button"
              aria-label="Scroll left"
            >
              <ArrowLeftIcon className="h-6 w-6 text-text-color" />
            </button>
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-secondary disabled:opacity-50"
              onClick={handleScrollRightClick}
              disabled={!canScrollRight}
              type="button"
              aria-label="Scroll right"
            >
              <ArrowRightIcon className="h-6 w-6 text-text-color" />
            </button>
          </div>
        </div>
      </CarouselContext.Provider>
    </section>
  );
}

// Card Component
const Card: React.FC<CardProps> = ({ gridBox, index, layout = false }) => {
  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentIndex } = useContext(CarouselContext);

  const handleClose = useCallback((): void => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: globalThis.KeyboardEvent): void => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open, handleClose]);

  useOutsideClick(containerRef as React.RefObject<HTMLDivElement>, () =>
    handleClose()
  );

  const handleOpen = (): void => {
    // if (gridBox.boxLink) {
    //   // If there's a link, navigate instead of opening modal
    //   window.open(gridBox.boxLink, "_blank");
    //   return;
    // }
    setOpen(true);
  };

  const handleCardClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    handleOpen();
  };

  const handleCloseClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-[#1616167d] backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${gridBox.boxTitle}` : undefined}
              className="relative z-[350] mx-auto my-10 max-h-[80vh] max-w-lg rounded-3xl bg-bg-secondary p-4 md:px-10 py-16 border border-primary overflow-y-auto"
            >
              <button
                className="absolute top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-bg text-text-color"
                onClick={handleCloseClick}
                type="button"
                aria-label="Close modal"
              >
                <XMarkIcon className="h-6 w-6 text-text-overlay" />
              </button>

              {gridBox.boxImage?.url && (
                <div className="mb-6">
                  <BlurImage
                    src={gridBox.boxImage.url}
                    alt={gridBox.boxTitle || ""}
                    width={800}
                    height={400}
                    className="w-full aspect-1 h-72 object-cover rounded-lg"
                  />
                </div>
              )}

              <motion.p
                layoutId={layout ? `title-${gridBox.boxTitle}` : undefined}
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
              >
                {gridBox.boxTitle}
              </motion.p>
              <div className="py-10">
                <div className="space-y-4">
                  {gridBox.boxDescription && (
                    <p className="text-text-overlay">
                      {parse(gridBox.boxDescription?.html) || ""}
                    </p>
                  )}
                  {gridBox.boxLink && (
                    <LinkItem
                      link={gridBox.boxLink}
                      cssClass="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Learn More
                    </LinkItem>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${gridBox.boxTitle}` : undefined}
        onClick={handleCardClick}
        className="relative z-0 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900"
        type="button"
        aria-label={`${gridBox.boxLink ? "Visit" : "Open"} ${gridBox.boxTitle}`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-bg/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `title-${gridBox.boxTitle}` : undefined}
            className="mt-2 max-w-xs text-left text-xl font-semibold [text-wrap:balance] text-text-color text-shadow md:text-3xl"
          >
            {gridBox.boxTitle}
          </motion.p>
        </div>
        {gridBox.boxImage?.url && (
          <BlurImage
            src={gridBox.boxImage.url}
            alt={gridBox.boxTitle || ""}
            fill
            className="absolute inset-0 z-10 object-cover"
          />
        )}
      </motion.button>
    </>
  );
};

// BlurImage Component
const BlurImage: React.FC<BlurImageProps> = ({
  height,
  width,
  src,
  className,
  alt = "Background of a beautiful view",
  fill = false,
  ...rest
}) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  const handleLoad = (): void => {
    setLoading(false);
  };

  return (
    <Image
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={handleLoad}
      src={src}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      loading="lazy"
      alt={alt}
      {...rest}
    />
  );
};
