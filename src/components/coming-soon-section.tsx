import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Wallet, 
  Zap, 
  Shield,
  Cpu,
  Users
} from "lucide-react";

const comingSoonFeatures = [
  {
    icon: Sparkles,
    title: "PolkaVM Templates",
    description: "Leverage PolkaVM capabilities for advanced smart contract development with enhanced performance and flexibility.",
    highlight: "Next-gen runtime"
  },
  {
    icon: Wallet,
    title: "Multi-Asset Fee Payment",
    description: "Pay transaction fees with any asset - no need to hold native tokens. True UX simplification for end users.",
    highlight: "Any token fees"
  },
  {
    icon: Shield,
    title: "Account Abstraction",
    description: "Smart contract wallets with custom logic, social recovery, and programmable transaction flows.",
    highlight: "Smart wallets"
  },
  {
    icon: Zap,
    title: "Embedded Wallets",
    description: "Apillon-powered embedded wallets enable frictionless onboarding - users don't even need to install wallet extensions.",
    highlight: "Zero-friction onboarding"
  },
  {
    icon: Cpu,
    title: "AI-Powered Templates",
    description: "MCP server integration with intelligent code generation, contract optimization, and automated testing.",
    highlight: "AI assistance"
  },
  {
    icon: Users,
    title: "Invisible Blockchain UX",
    description: "Templates designed for applications where users don't realize they're using blockchain technology.",
    highlight: "Web2-like experience"
  }
];

export function ComingSoonSection() {
  return (
    <section className="py-24 relative bg-gradient-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Coming Soon
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Next-Generation{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              dApp Templates
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building on Mythos Chain's success in creating apps for regular Web2 users, 
            while providing powerful tools for DeFi and Web3 native developers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comingSoonFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-primary/20 transition-all duration-300 border-border/50 hover:border-primary/30 relative overflow-hidden">
              {/* Gradient overlay for coming soon effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-secondary border border-border/50 group-hover:border-primary/30 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                    Coming Soon
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-md bg-primary/10 border border-primary/20">
                  <Sparkles className="w-3 h-3 text-primary mr-2" />
                  <span className="text-sm font-medium text-primary">
                    {feature.highlight}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vision statement */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're building applications where users don't even know it's blockchain. 
              Combining the success of{" "}
              <span className="text-primary font-medium">Mythos Chain's</span> approach to Web2 
              user adoption with powerful infrastructure for Web3 native developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}