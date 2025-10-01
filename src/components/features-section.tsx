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
    highlight: "kitdot init my-project",
  },
  {
    icon: Wallet,
    title: "Web2-to-Web3 User Experience",
    description:
      "Passwordless login via Google, Twitter, GitHub, etc. Accounts generated using MetaMask's Multi-Party Computation - no wallet extension required.",
    highlight: "Zero-friction onboarding",
    link: "https://links.w3d.community/kitdot-basic-web2-login-template",
    linkText: "Try the template",
  },
  {
    icon: Cloud,
    title: "Decentralized Cloud & Hosting",
    description:
      "Deploy everything to Decentralized Cloud & Hosting on Polkadot Cloud with Apillon MCP integration using just API keys.",
    highlight: "100% Decentralized",
  },
  {
    icon: Book,
    title: "Agentic Development",
    description:
      "AGENTS.md auto-generated with best practices for PolkaVM, network settings, and troubleshooting steps for AI-powered development.",
    highlight: "AI-ready docs",
  },
  {
    icon: Layers,
    title: "PolkaVM Oracle",
    description:
      "Oracle service for developers to use during development and testing. Access real-time data feeds for your PolkaVM contracts.",
    highlight: "Dev-ready oracle",
    link: "https://polkavm-oracle.w3d.community/",
    linkText: "Use the oracle",
  },
  {
    icon: Shield,
    title: "Account Abstraction Templates",
    description:
      "Smart contract wallet templates with custom logic, social recovery, and programmable transaction flows for enhanced user experience.",
    highlight: "Smart wallets",
    badge: "Coming Soon",
  },
  {
    icon: Wallet,
    title: "Multi-Asset Fee Payment Templates",
    description:
      "Template for paying transaction fees with any asset - no need to hold native tokens. True UX simplification for end users.",
    highlight: "Any token fees",
    badge: "Coming Soon",
  },
  {
    icon: Shield,
    title: "130+ Pre-built Smart Contracts",
    description:
      "Access audited contract library integration. NFT, token, marketplace, and governance contracts ready to deploy on Polkadot Cloud.",
    highlight: "Battle-tested contracts",
    badge: "Coming Soon",
  },
  {
    icon: Cpu,
    title: "MCP Server for AI-Powered Building",
    description:
      "Model Context Protocol server integration with intelligent code generation, contract optimization, and automated testing workflows.",
    highlight: "AI-native development",
    badge: "Coming Soon",
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
            Build apps that feel like Web2 but run on Web3.
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
                  {feature.badge && (
                    <Badge
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-3">
                  <div className="inline-flex items-center px-3 py-1 rounded-md bg-muted/50 border border-border/50">
                    <Zap className="w-3 h-3 text-primary mr-2" />
                    <span className="text-sm font-medium text-foreground/80">
                      {feature.highlight}
                    </span>
                  </div>
                  {feature.link && (
                    <div>
                      <a
                        href={feature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        {feature.linkText} →
                      </a>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
