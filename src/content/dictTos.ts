import type { PolicySection } from "../components/legal/Privacy";

export const TermsOfServiceData: PolicySection[] = [
  {
    title: "Acceptance of Terms",
    content: [
      {
        type: "text",
        value:
          "By downloading, installing, or using Tokki K-Dictionary, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.",
      },
    ],
  },
  {
    title: "License & Usage",
    content: [
      {
        type: "text",
        value:
          "We grant you a personal, non-exclusive, non-transferable, revocable license to use Tokki K-Dictionary for personal, non-commercial language learning purposes.",
      },
      {
        type: "text",
        value: "You agree not to:",
      },
      {
        type: "list",
        items: [
          "Reverse engineer, decompile, or extract source code from the application.",
          "Use the app's content for unauthorized commercial redistribution.",
        ],
      },
    ],
  },
  {
    title: "Disclaimer of Warranties",
    content: [
      {
        type: "text",
        value:
          "Tokki K-Dictionary is provided on an “AS IS” and “AS AVAILABLE” basis. While we strive for absolute accuracy, we do not guarantee that all definitions, pronunciations, or example translations are completely error-free for every context.",
      },
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      {
        type: "text",
        value:
          "In no event shall Tokki K-Dictionary or its developer be liable for any indirect, incidental, or consequential damages arising out of your use or inability to use the application.",
      },
    ],
  },
  {
    title: "Changes to Terms",
    content: [
      {
        type: "text",
        value:
          "We reserve the right to modify these terms at any time. Continued use of Tokki K-Dictionary following any updates constitutes acceptance of the new terms.",
      },
    ],
  },
  {
    title: "Contact",
    content: [
      {
        type: "text",
        value:
          "If you have any questions regarding these Terms of Service, please contact us at contact@tokkikorean.com",
      },
    ],
  },
];
