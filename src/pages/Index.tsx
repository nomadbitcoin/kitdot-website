import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { PolkadotCloudSection } from "@/components/polkadot-cloud-section";
import { InvisibleUXSection } from "@/components/invisible-ux-section";
import { WorkflowSection } from "@/components/workflow-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <Header /> */}
      <HeroSection />
      <FeaturesSection />
      <PolkadotCloudSection />
      <InvisibleUXSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
