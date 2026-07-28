import { TermsOfServiceData } from "../content/dictTos";
import Tos from "../components/legal/Tos";

export default function DictTos() {
  return (
    <Tos
      title="Tokki K-dictionary Terms of Service"
      lastUpdated="2026/07/28"
      terms={TermsOfServiceData}
    />
  );
}
