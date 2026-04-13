import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/PrivacyPolicy";
import Terms from "./pages/TermsOfService";

function App() {
  return (
    <div
      className="min-h-screen bg-[#fefbf7] 
  bg-[radial-gradient(#fdba74_0.6px,transparent_0.8px)]
  [background-size:28px_28px]"
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
