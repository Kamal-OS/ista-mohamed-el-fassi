import useMediaQuery from "@/hooks/useMediaQuery";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

// TODO: make this SEO optimized (aria)
// TODO: make scrollabel by touch in phones (swiper)
// TODO: migrate this to use Swiper
// TODO: Think about make it replacable with a video instead

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const matches = useMediaQuery("(width >= 40rem)");

  const previousSlide = useCallback(() => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  }, [current, slides]);

  const nextSlide = useCallback(() => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }, [current, slides]);

  useEffect(() => {
    const nextSlideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(nextSlideInterval);
  }, [nextSlide]);

  return (
    <div className="relative isolate max-h-150 w-full overflow-hidden">
      {/* Title and excerpt */}
      <motion.div
        key={current}
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-blue absolute top-1/2 left-0 z-1 h-fit w-fit -translate-y-1/2 px-12 py-8 pl-30 text-white shadow-xl/50 md:w-1/2">
        <motion.h3
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl font-bold sm:text-4xl">
          {slides[current].title}
        </motion.h3>
        <motion.p
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-6 line-clamp-3 hidden text-sm text-white/50 md:text-lg lg:line-clamp-6">
          {slides[current].content}
        </motion.p>
      </motion.div>

      {/* Images */}
      <div
        className="flex transition duration-800 ease-out"
        style={{ transform: `translateX(${-current * 100}%)` }}>
        {slides.map((slide, index) => (
          <img
            className="h-full w-full object-cover"
            key={`slide-${index}`}
            src={slide.image}
          />
        ))}
      </div>

      {/* Control left and right buttons */}
      <div className="absolute top-0 z-2 flex h-full w-full items-center justify-between px-10 text-2xl">
        <button
          aria-label="previous slide"
          onClick={previousSlide}
          className="bg-gray h-12 w-12 cursor-pointer rounded-full text-black hover:bg-white">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          aria-label="next slide"
          onClick={nextSlide}
          className="bg-gray h-12 w-12 cursor-pointer rounded-full text-black hover:bg-white">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {/* Pagination */}
      {matches && (
        <div className="absolute bottom-0 z-3 flex w-full items-center justify-center gap-5 py-4">
          {slides.map((slide, index) => (
            <button
              onClick={() => setCurrent(index)}
              aria-label={`slide number ${index}`}
              key={`slide-${index}`}
              className={`${index == current ? "bg-white" : "bg-gray"} h-3 w-3 cursor-pointer rounded-full`}></button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;
