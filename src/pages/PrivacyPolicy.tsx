import { Policy } from "../content/Policy";

export type PolicySection = {
  title: string;
  content: Array<
    { type: "text"; value: string } | { type: "list"; items: string[] }
  >;
};

type Props = {
  title?: string;
  lastUpdated?: string;
};

export default function PrivacyPolicy({
  title = "Privacy Policy",
  lastUpdated = "2026/04/13",
}: Props) {
  const sections = Policy;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      {lastUpdated && (
        <p className="text-sm text-gray-500 mb-6">
          Last updated: {lastUpdated}
        </p>
      )}
      <div className="space-y-8">
        {sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
            {section.content.map((block, j) => {
              if (block.type === "text") {
                return (
                  <p key={j} className="text-gray-700 leading-relaxed mb-3">
                    {block.value}
                  </p>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={j} className="list-disc pl-5 space-y-2 mb-3">
                    {block.items.map((item, k) => (
                      <li key={k} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
