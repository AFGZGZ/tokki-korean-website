import type { PolicySection } from "../pages/TermsOfService";

export const Terms: PolicySection[] = [
  {
    title: "Developer Information",
    content: [
      {
        type: "text",
        value:
          "Tokki Korean is developed and operated by Axel Fernandez Gomez.",
      },
    ],
  },
  {
    title: "Acceptance of Terms",
    content: [
      {
        type: "text",
        value:
          "By using Tokki Korean, you agree to comply with and be bound by these Terms of Service.",
      },
    ],
  },
  {
    title: "License",
    content: [
      {
        type: "text",
        value:
          "You are granted a limited, non-exclusive, non-transferable license to use Tokki Korean for personal learning. You may not:",
      },
      {
        type: "list",
        items: ["Copy or resell the Application", "Reverse engineer it"],
      },
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      {
        type: "text",
        value:
          "Please note that Tokki Korean utilizes third-party services that have their own Terms and Conditions.",
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
        value: "Each service has its own terms and conditions.",
      },
    ],
  },
  {
    title: "Purchases & Subscriptions",
    content: [
      {
        type: "text",
        value:
          "Paid features are handled through Google Play and RevenueCat. Subscriptions automatically renew unless cancelled. Refunds are subject to the store’s policies.",
      },
    ],
  },
  {
    title: "Functionality",
    content: [
      {
        type: "text",
        value:
          "Most features work offline after downloading the content, still some functions of Tokki Korean require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The developer cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance. Backup features require a supported cloud account.",
      },
      {
        type: "text",
        value:
          "If you are using Tokki Korean outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer.",
      },
    ],
  },
  {
    title: "Disclaimer",
    content: [
      {
        type: "text",
        value:
          "Tokki Korean is provided “as is” without warranties of any kind. The developer is not responsible for:",
      },
      {
        type: "list",
        items: ["Data loss", "Device issues", "Service interruptions"],
      },
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      {
        type: "text",
        value:
          "To the maximum extent permitted by law, the developer shall not be liable for damages arising from use of Tokki Korean.",
      },
    ],
  },
  {
    title: "Termination",
    content: [
      {
        type: "text",
        value: "You may stop using Tokki Korean at any time.",
      },
    ],
  },
  {
    title: "Changes",
    content: [
      {
        type: "text",
        value:
          "The Service Provider is dedicated to ensuring that Tokki Korean is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The developer assures you that any charges for the Application or its services will be clearly communicated to you.",
      },
    ],
  },
  {
    title: "Contact",
    content: [
      {
        type: "text",
        value: "Email: contact@tokkikorean.com",
      },
    ],
  },
];
