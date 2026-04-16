import { useEffect, useState } from "react";
import FadeIn from "../animations/FadeIn";
import storeImg from "../../assets/GooglePlayBadge.svg";
import screen1 from "../../assets/sc.webp";
import screen2 from "../../assets/sc2.webp";
import screen3 from "../../assets/sc3.webp";

export default function Hero() {
  const screens = [screen1, screen2, screen3];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    // <section className="min-h-[calc(100vh-64px)] flex items-center">
    // <section className="min-h-[calc(100vh-64px)] flex items-start md:items-center py-10 md:py-0">
    <section
      className="
  min-h-[calc(100vh-64px)]
  flex 
  items-center
  py-6 md:py-0
"
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* <div className="relative h-[300px] md:h-[80vh] overflow-hidden md:overflow-visible flex items-start md:items-center justify-center"> */}
        <div
          className="
  relative 
  h-[180px] sm:h-[240px] md:h-[80vh] 
  overflow-hidden 
  flex items-start md:items-center justify-center
  -mt-10 sm:-mt-6 md:mt-0
"
        >
          {screens.map((src, i) => {
            const offset = i;

            return (
              <img
                key={i}
                src={src}
                alt={`App screenshot ${i + 1}`}
                className="absolute rounded-2xl shadow-lg border border-gray-200 transition-all duration-700 ease-out w-[180px] md:w-[200px] lg:w-[220px] xl:w-[240px]"
                style={{
                  // width: "220px",
                  transform: mounted
                    ? `
                    translateX(${offset * 40}px)
                    translateY(${offset * 20}px)
                    rotate(${offset * 2}deg)
                    scale(${1 - offset * 0.05})
                  `
                    : `
                    translateX(0px)
                    translateY(0px)
                    rotate(0deg)
                    scale(0.9)
                  `,
                  opacity: mounted ? 1 : 0,
                  zIndex: 10 - offset,
                }}
              />
            );
          })}
          <div
            className="absolute bottom-0 left-0 w-full h-28 
                bg-gradient-to-t 
                from-[##fefbf7] 
                via-[##fefbf7]/80 
                to-transparent 
                md:hidden pointer-events-none"
          />
        </div>
        <div className="text-center md:text-left">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
              <span className="text-orange-500">Tokki Korean.</span> Your
              all-in-one toolset for learning korean.
            </h1>
          </FadeIn>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Practice vocabulary, grammar, reading, pronunciation... with
            real-world content of your own choosing.
          </p>
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="opacity-50 cursor-not-allowed">
              <img
                src={storeImg}
                alt="Get it on Google Play (coming soon)"
                className="h-14 grayscale"
              />
            </div>
            <p className="text-sm text-gray-500">*Available soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}
