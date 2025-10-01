import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Cpu, Database, Cloud, Layers, Zap } from "lucide-react";

const cloudFeatures = [
  {
    icon: Globe,
    title: "Website Hosting",
    description:
      "Deploy your frontend applications to fully decentralized IPFS hosting powered by Crust Network. No traditional servers required.",
    technology: "IPFS + Crust Network",
  },
  {
    icon: Cpu,
    title: "Cloud Functions",
    description:
      "Run serverless functions on Acurast Parachain. Execute backend logic in a truly decentralized environment without relying on AWS or similar providers.",
    technology: "Acurast Parachain",
  },
  {
    icon: Database,
    title: "Storage Buckets",
    description:
      "Store and retrieve files on decentralized storage infrastructure. Built on IPFS with Crust Network for guaranteed availability and persistence.",
    technology: "IPFS + Crust Network",
  },
];

export function PolkadotCloudSection() {
  return (
    <section className="py-24 relative bg-gradient-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Cloud className="w-4 h-4 mr-2" />
            Polkadot Cloud
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Truly Decentralized{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Cloud Infrastructure
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deploy everything to Polkadot Cloud with Apillon integration. No AWS,
            no traditional hosting - just pure Web3 infrastructure powered by
            Polkadot parachains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cloudFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-primary/20 transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-secondary border border-border/50 group-hover:border-primary/30 transition-colors mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
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
                  <Layers className="w-3 h-3 text-primary mr-2" />
                  <span className="text-sm font-medium text-foreground/80">
                    {feature.technology}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology highlights */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border-primary/10">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-primary">
                    Powered by Apillon & Polkadot Parachains
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Kitdot integrates with Apillon to give you seamless access to
                    Polkadot Cloud infrastructure. Deploy with just API keys - no
                    complex setup required.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      IPFS Protocol
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      Crust Network
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      Acurast Parachain
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      100% Decentralized
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
