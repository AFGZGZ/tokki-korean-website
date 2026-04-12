import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-black text-white rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Start learning Korean today
          </h2>
          <p className="text-gray-300 mb-8">
            No sign-up required. Just open the app and begin.
          </p>
          <Link
            to="/app"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
          >
            Launch App
          </Link>
        </div>
      </div>
    </section>
  );
}
