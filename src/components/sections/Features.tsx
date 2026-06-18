import Stagger from "../animations/Stagger";
import StaggerItem from "../animations/StaggerItem";
import Card from "../ui/Card";

export default function Features() {
  const features = [
    {
      title: "All-in-one Korean learning app",
      description:
        "Dictionary, grammar lessons, flashcards, TOPIK practice, ebooks, and YouTube subtitles—all in one place.",
    },
    {
      title: "Enjoy Korean content in context",
      description:
        "Read books and webtoons and watch YouTube videos, tap any word to see its meaning and grammar explanation.",
    },
    {
      title: "Integrated Korean dictionary",
      description:
        "Look up words, example sentences, grammar points, and particle usage, then save them for later review.",
    },
    {
      title: "Powerful flashcards",
      description:
        "Create your own perfect vocab sessions with different modes (Multiple Choice, Pronunciation, Cloze...)",
    },
    {
      title: "Practice with previous TOPIK tests",
      description:
        "Prepare under realistic exam conditions with a list of actual TOPIK exams from previous years.",
    },
    {
      title: "Make practice fun with games",
      description:
        "Reinforce vocabulary and get used to use korean quickly with games like word search, 끝말잇기...  ",
    },
    {
      title: "Offline first",
      description:
        "Download dictionaries, lessons, tests... locally so you can Keep styudying even when you don't have internet access.",
    },
    {
      title: "Private",
      description:
        "Your data is storage locally on your phone and backups to your own Google Drive account.",
    },
    {
      title: "Open Content/Data",
      description:
        "Import and export from and to the app as you wish, no content bottlenecks or data lock guarantee.",
    },
  ];

  return (
    <section className="py-20 " id="features">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Everything you need to{" "}
            <span className="underline decoration-orange-500 decoration-[3px] underline-offset-6">
              learn faster
            </span>
          </h2>
          <p className="text-gray-600">
            Built to be the best companion on your korean learning journey.
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
