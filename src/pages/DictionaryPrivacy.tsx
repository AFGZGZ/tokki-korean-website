import { PrivacyPolicyData } from "../content/dictPolicy";
import Privacy from "../components/legal/Privacy";

export default function DictPrivacyPolicy() {
  return (
    <Privacy
      title="Tokki K-dictionary Privacy Policy"
      lastUpdated="2026/07/28"
      policy={PrivacyPolicyData}
    />
  );
}
