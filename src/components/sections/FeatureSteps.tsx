import { useEffect, useState } from "react";

const steps = [
  {
    title: "Learn",
    description: "Start with vocabulary and grammar basics.",
  },
  {
    title: "Practice",
    description: "Reinforce knowledge with interactive quizzes.",
  },
  {
    title: "Speak",
    description: "Use Korean in real conversations.",
  },
  {
    title: "Role Play",
    description: "Practice dialogue in real time.",
  },
];

export default function FeatureSteps() {
  const [active, setActive] = useState(0);

  // 🔥 AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT → APP PREVIEW */}
        <div className="relative h-[400px] flex items-center justify-center">
          {/* Background glow */}
          {/* <div className="absolute w-[300px] h-[300px] bg-green-200 rounded-2xl blur-3xl opacity-40" /> */}

          <div className="relative h-[400px] flex items-center justify-center">
            {/* Cards stack */}
            {steps.map((_, i) => {
              const offset = i - active;

              return (
                <div
                  key={i}
                  className="absolute w-[260px] h-[360px] bg-white rounded-2xl shadow-md border border-gray-200 transition-all duration-500"
                  style={{
                    transform: `
            translateX(${offset * 30}px)
            scale(${1 - Math.abs(offset) * 0.05})
          `,
                    zIndex: 10 - Math.abs(offset),
                  }}
                >
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">Step {i + 1}</p>
                    <h3 className="font-semibold text-lg">{steps[i].title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT → STEPS + TEXT */}
        <div>
          {/* Steps */}
          <div className="flex gap-3 mb-6">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-3 py-1 rounded-full text-sm transition ${
                  i === active
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {i === active ? `Step ${i + 1}` : i + 1}
              </button>
            ))}
          </div>

          {/* Content */}
          <h2 className="text-3xl font-semibold mb-4">{steps[active].title}</h2>

          <p className="text-gray-600 mb-6">{steps[active].description}</p>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() =>
                setActive((prev) => (prev === 0 ? steps.length - 1 : prev - 1))
              }
              className="w-10 h-10 border rounded-lg"
            >
              ←
            </button>

            <button
              onClick={() => setActive((prev) => (prev + 1) % steps.length)}
              className="w-10 h-10 border rounded-lg"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
