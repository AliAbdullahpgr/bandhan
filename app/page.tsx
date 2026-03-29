import Hero from "@/components/Hero";
import QuoteBanner from "@/components/QuoteBanner";
import CreateProfileCTA from "@/components/CreateProfileCTA";
import Statistics from "@/components/Statistics";
import KeyFeatures from "@/components/KeyFeatures";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <QuoteBanner />
      <CreateProfileCTA />
      <Statistics />
      <KeyFeatures />
      <HowItWorks />
      <TestimonialsSection />
      <FAQ />
    </>
  );
}
