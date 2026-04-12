import Stagger from "../animations/Stagger";
import StaggerItem from "../animations/StaggerItem";
import Card from "../ui/Card";

export default function Features() {
  const features = [
    {
      title: "Interactive Practice",
      description:
        "Learn by doing with quizzes and exercises designed for real retention.",
    },
    {
      title: "Smart Progress",
      description:
        "Track your improvement and focus on what you need to learn next.",
    },
    {
      title: "Simple & Focused",
      description:
        "No distractions—just a clean interface built for learning efficiently.",
    },
  ];

  return (
    <section className="py-20" id="features">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Everything you need to learn faster
          </h2>
          <p className="text-gray-600">
            Built to make your learning experience simple and effective.
          </p>
        </div>
        <Stagger>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, i) => (
              <StaggerItem key={i}>
                <Card className="hover:-translate-y-1 transition">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
