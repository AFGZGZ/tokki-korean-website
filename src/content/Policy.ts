import type { PolicySection } from "../pages/PrivacyPolicy";

export const Policy: PolicySection[] = [
  {
    title: "Overview",
    content: [
      {
        type: "text",
        value:
          "Tokki Korean does not collect or transmit personal data to the developer. All data remains on your device unless you choose to back it up.",
      },
    ],
  },
  {
    title: "Data Storage",
    content: [
      {
        type: "text",
        value:
          "All user data (such as learning progress, settings, and saved content) is stored locally on your device. The developer does not have access to this data.",
      },
    ],
  },
  {
    title: "Cloud Backups",
    content: [
      {
        type: "text",
        value:
          "If you choose to enable backup, your data may be stored in your personal Google Drive account. This data is:",
      },
      {
        type: "list",
        items: [
          "Controlled entirely by you.",
          "Stored under your own Google account.",
          "Not accessible by the developer.",
        ],
      },
    ],
  },
  {
    title: "Purchases",
    content: [
      {
        type: "text",
        value:
          "In-app purchases are processed by RevenueCat and the Google Play platform. The developer does not receive your payment information. RevenueCat may process:",
      },
      {
        type: "list",
        items: ["Purchase receipts", "Subscription status."],
      },
      {
        type: "text",
        value: "This data is used only to validate purchases.",
      },
    ],
  },
  {
    title: "Analytics & Tracking",
    content: [
      {
        type: "text",
        value:
          "Tokki Korean does not use analytics tools or tracking software of any type.",
      },
    ],
  },
  {
    title: "Third-Party Access",
    content: [
      {
        type: "text",
        value: "Tokki Korean may interact with:",
      },
      {
        type: "list",
        items: [
          "Google Drive (only if you use the backup function)",
          "RevenueCat (for subscription management)",
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
          "Tokki Korean does not knowingly solicit data from or market to children under the age of 13.",
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
          "Because all data is stored locally on your device, you can delete all data at any time by uninstalling Tokki Korean or clearing its storage.",
      },
    ],
  },
  {
    title: "Contact",
    content: [
      {
        type: "text",
        value:
          "If you have any questions regarding privacy while using Tokki Korean, please contact me at contact@tokkikorean.com",
      },
    ],
  },
];
