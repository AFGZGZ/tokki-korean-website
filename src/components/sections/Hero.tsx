import { Link } from "react-router-dom";
import FadeIn from "../animations/FadeIn";

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-sm text-gray-500 mb-4">Learn Korean faster 🇰🇷</p>
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Learn Korean the smart way
          </h1>
        </FadeIn>
        <p className="text-gray-600 text-lg mb-8">
          Practice vocabulary, grammar, and listening with an interactive app
          designed for real progress.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/app"
            className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:opacity-80 transition"
          >
            Open App
          </Link>

          <a
            href="#features"
            className="px-6 py-3 rounded-lg text-sm font-medium border hover:bg-gray-100 transition"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
