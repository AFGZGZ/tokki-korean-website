import { useState } from "react";
import Stagger from "../animations/Stagger";
import StaggerItem from "../animations/StaggerItem";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "When and where is going to be available?",
      answer: "Tokki Korean will launch in may 2026 for Android devices first.",
    },
    {
      question: "Is Tokki Korean free to use?",
      answer:
        "We are still working on our monetization, but at minimum we will offer a 7 days trial period and a very affordable lifetime purchase.",
    },
    {
      question: "Do I need to create an account?",
      answer: "No account is required to use Tokki Korean.",
    },
    {
      question: "What level is Tokki Korean for?",
      answer:
        "Since is an open content application(You can import your own content) it can be tailored to any level.",
    },
  ];

  return (
    <section className="py-20" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Some things that you might want to know before getting started.
          </p>
        </div>
        <Stagger>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <StaggerItem>
                  <div
                    key={index}
                    className="bg-white border rounded-xl p-4 cursor-pointer transition hover:shadow-sm"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{faq.question}</h3>
                      <span className="text-xl">{isOpen ? "−" : "+"}</span>
                    </div>
                    {isOpen && (
                      <p className="text-gray-600 mt-3 text-sm">{faq.answer}</p>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
