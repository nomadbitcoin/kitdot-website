import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Layers,
  Rocket,
  FileCode,
  Cloud,
  Book,
  Zap,
  Shield,
  Cpu,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Project Initialization",
    description:
      "Generate standardized project structure for Polkadot Cloud with frontend, contracts, and cloud-functions templates.",
    badge: "Current",
    highlight: "kitdot init my-project",
  },
  {
    icon: Cloud,
    title: "Decentralized Cloud & Hosting",
    description:
      "Available now with Apillon setup. Crust Network for IPFS hosting and Acurast Parachain for decentralized cloud functions.",
    badge: "Current",
    highlight: "100% Decentralized",
  },
  {
    icon: Shield,
    title: "130+ Pre-built Smart Contracts",
    description:
      "Access audited contract library from thirdweb integration. NFT, token, marketplace, and governance contracts ready to deploy.",
    badge: "Coming Soon",
    highlight: "Battle-tested contracts",
  },
  {
    icon: Wallet,
    title: "Multi-Asset Fee Payment",
    description:
      "Template for paying transaction fees with any asset - no need to hold native tokens. True UX simplification for end users.",
    badge: "Coming Soon",
    highlight: "Any token fees",
  },
  {
    icon: Shield,
    title: "Account Abstraction",
    description:
      "Template for smart contract wallets with custom logic, social recovery, and programmable transaction flows.",
    badge: "Coming Soon",
    highlight: "Smart wallets",
  },
  {
    icon: Zap,
    title: "Embedded Wallets",
    description:
      "Template using Apillon-powered embedded wallets for frictionless onboarding - users don't need wallet extensions.",
    badge: "Coming Soon",
    highlight: "Zero-friction onboarding",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Cpu className="w-4 h-4 mr-2" />
            Developer Tools
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to Build on{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Polkadot Cloud
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build apps that feel like Web2 but run on Web3. kitdot provides
            templates and tools for creating invisible blockchain experiences
            with zero friction onboarding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-primary/20 transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-secondary border border-border/50 group-hover:border-primary/30 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${
                      feature.badge === "Coming Soon"
                        ? "bg-primary/10 text-primary border-primary/20"
                        : ""
                    }`}
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-md bg-muted/50 border border-border/50">
                  <Zap className="w-3 h-3 text-primary mr-2" />
                  <span className="text-sm font-medium text-foreground/80">
                    {feature.highlight}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
