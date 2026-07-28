import type { PolicySection } from "../components/legal/Privacy";

export const PrivacyPolicyData: PolicySection[] = [
  {
    title: "Overview",
    content: [
      {
        type: "text",
        value:
          "Tokki K-Dictionary does not collect or transmit personal data to the developer. All data remains on your device.",
      },
    ],
  },
  {
    title: "Data Storage",
    content: [
      {
        type: "text",
        value:
          "All user data (search history and  preferences) is stored locally on your device. The developer does not have access to this data.",
      },
    ],
  },
  {
    title: "Analytics & Tracking",
    content: [
      {
        type: "text",
        value:
          "Tokki K-Dictionary does not use analytics tools or tracking software of any type.",
      },
    ],
  },
  {
    title: "Third-Party Access",
    content: [
      {
        type: "text",
        value: "Tokki K-Dictionary may interact with:",
      },
      {
        type: "list",
        items: [
          "Device Speech-to-text engines (for the search by vpice feature)",
          "Device Text-to-Speech engines (for audio pronunciation)",
        ],
      },
      {
        type: "text",
        value: "Each service has its own privacy policy.",
      },
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      {
        type: "text",
        value:
          "Tokki K-Dictionary does not knowingly solicit data from or market to children under the age of 13.",
      },
    ],
  },
  {
    title: "Changes",
    content: [
      {
        type: "text",
        value:
          "This policy may be updated. Updates will be reflected by the “Last updated” date.",
      },
    ],
  },
  {
    title: "Security",
    content: [
      {
        type: "text",
        value:
          "Since your data is stored locally on your device, its security depends on your device security settings.",
      },
    ],
  },
  {
    title: "Data Deletion",
    content: [
      {
        type: "text",
        value:
          "Because all data is stored locally on your device, you can delete all data at any time by uninstalling Tokki K-Dictionary or clearing its app storage.",
      },
    ],
  },
  {
    title: "Contact",
    content: [
      {
        type: "text",
        value:
          "If you have any questions regarding privacy while using Tokki K-Dictionary, please contact us at contact@tokkikorean.com",
      },
    ],
  },
];
