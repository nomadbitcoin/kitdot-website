import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Users,
  Smartphone,
  CreditCard,
  Zap,
  ArrowRight,
} from "lucide-react";

const uxFeatures = [
  {
    icon: Eye,
    title: "Invisible Infrastructure",
    description:
      "Users interact with your app naturally, without knowing blockchain is powering it behind the scenes.",
  },
  {
    icon: Smartphone,
    title: "Familiar Interfaces",
    description:
      "Standard web and mobile UX patterns that users already understand and expect.",
  },
  {
    icon: CreditCard,
    title: "Gasless Transactions",
    description:
      "Pay fees with any token or sponsor transactions entirely - no crypto knowledge required.",
  },
  {
    icon: Users,
    title: "Onboard Anyone",
    description:
      "Email signups, social logins, and embedded wallets make Web3 accessible to everyone.",
  },
];

export function InvisibleUXSection() {
  return (
    <section className="py-24 relative bg-gradient-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Eye className="w-4 h-4 mr-2" />
              Invisible Blockchain UX
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Build Apps Users{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Actually Want to Use
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Following Mythos Chain's success, we're building for the 99% of
              users who don't care about blockchain - they just want great apps
              that work seamlessly.
            </p>
          </div>

          {/* Split layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Features */}
            <div className="space-y-6">
              {uxFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-secondary border border-border/50 group-hover:border-primary/20 transition-colors flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right: Vision */}
            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 border border-primary/10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      The Vision
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Most people don't want to use "blockchain apps" - they
                      want apps that solve real problems. kitdot helps you build
                      applications where the blockchain is completely invisible
                      to users.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span>
                        Web2-native onboarding with Web3-native benefits
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span>
                        Serving both casual users and DeFi power users
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span>Building on Mythos Chain's proven approach</span>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/20">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">
                        Ready to build invisible blockchain apps?
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Get started with templates designed for mainstream
                        adoption.
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary"
                      onClick={() => {
                        document
                          .querySelector(".bg-code-bg")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
