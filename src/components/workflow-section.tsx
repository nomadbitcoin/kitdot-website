import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Terminal, 
  Code, 
  Rocket, 
  TestTube,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const workflowSteps = [
  {
    icon: Terminal,
    step: "01",
    title: "Initialize",
    description: "Scaffold complete project with contracts, frontend, and cloud functions",
    command: "kit-dot init my-dapp"
  },
  {
    icon: Code,
    step: "02", 
    title: "Develop",
    description: "Write smart contracts with Foundry, build React frontend with TypeScript",
    command: "forge build && npm run dev"
  },
  {
    icon: TestTube,
    step: "03",
    title: "Test",
    description: "Run comprehensive tests on contracts and frontend components",
    command: "forge test && npm test"
  },
  {
    icon: Rocket,
    step: "04",
    title: "Deploy",
    description: "Deploy to Polkadot Cloud with decentralized hosting and functions",
    command: "kit-dot deploy"
  }
];

export function WorkflowSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Complete Development Workflow
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Idea to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Production
            </span>
            {" "}in Minutes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need in one TypeScript toolkit - contracts, frontend, backend, 
            testing, and deployment all working together seamlessly.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="group hover:shadow-primary/20 transition-all duration-300 border-border/50 hover:border-primary/30 h-full">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Step indicator */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-secondary border border-border/50 group-hover:border-primary/30 transition-colors">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                          {step.step}
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {step.description}
                        </p>
                        
                        {/* Command */}
                        <div className="bg-code-bg border border-code-border rounded-md p-3">
                          <code className="text-xs text-foreground/90 font-mono">
                            {step.command}
                          </code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow connector */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}