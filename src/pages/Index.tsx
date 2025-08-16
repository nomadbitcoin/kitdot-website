import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { InvisibleUXSection } from "@/components/invisible-ux-section";
import { WorkflowSection } from "@/components/workflow-section";
import { MCPSection } from "@/components/mcp-section";
import { CodeExamplesSection } from "@/components/code-examples-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <InvisibleUXSection />
      <WorkflowSection />
      <MCPSection />
      <CodeExamplesSection />
      <TechStackSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;