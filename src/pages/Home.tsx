import Hero from "../components/sections/Hero";
import AppPreview from "../components/sections/AppPreview";
import Features from "../components/sections/Features";
// import FeatureSteps from "../components/sections/FeatureSteps";
import FAQ from "../components/sections/FAQ";
// import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AppPreview />
      <Features />
      {/* <FeatureSteps /> */}
      <FAQ />
      {/* <CTA /> */}
    </>
  );
}
