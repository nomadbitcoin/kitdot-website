import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techStack = [
  {
    category: "Blockchain",
    technologies: [
      { name: "Polkadot Cloud", description: "Primary deployment target" },
      { name: "Passet Hub", description: "Testnet for development" },
      { name: "EVM Compatible", description: "Ethereum-compatible contracts" },
    ],
  },
  {
    category: "Smart Contracts",
    technologies: [
      { name: "Foundry", description: "Fast compilation and testing" },
      { name: "Hardhat", description: "Deployment and verification" },
      { name: "Thirdweb SDK", description: "130+ audited contracts" },
    ],
  },
  {
    category: "Frontend",
    technologies: [
      { name: "React + TypeScript", description: "Type-safe user interfaces" },
      { name: "Wagmi", description: "Blockchain interaction hooks" },
      { name: "Vite", description: "Fast development and builds" },
    ],
  },
  {
    category: "Decentralized Cloud",
    technologies: [
      {
        name: "Acurast Parachain",
        description: "Decentralized cloud functions",
      },
      { name: "Crust Network", description: "IPFS hosting and storage" },
      { name: "Apillon SDK", description: "Polkadot Cloud services" },
    ],
  },
  {
    category: "Development",
    technologies: [
      { name: "MCP Server", description: "AI development assistance" },
      { name: "mdbook", description: "Documentation generation" },
      { name: "TypeScript", description: "End-to-end type safety" },
    ],
  },
];

export function TechStackSection() {
  return (
    <section className="py-24 relative bg-gradient-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Technology Stack
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built on{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Modern Standards
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Build fully decentralized applications with standardized project
            templates and scaffolding. Includes smart contracts, frontends, and
            decentralized cloud services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {techStack.map((stack, index) => (
            <Card
              key={index}
              className="group hover:shadow-primary/10 transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary group-hover:text-primary/80 transition-colors">
                  {stack.category}
                </h3>
                <div className="space-y-3">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="space-y-1">
                      <div className="font-medium text-foreground">
                        {tech.name}
                      </div>
                      <div className="text-sm text-muted-foreground leading-tight">
                        {tech.description}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick benefits */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">0</div>
            <div className="text-foreground font-medium mb-2">
              Web2 Dependencies
            </div>
            <div className="text-sm text-muted-foreground">
              Fully decentralized infrastructure with Polkadot Cloud
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">130+</div>
            <div className="text-foreground font-medium mb-2">
              Smart Contracts
            </div>
            <div className="text-sm text-muted-foreground">
              Audited contracts ready for deployment
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-foreground font-medium mb-2">TypeScript</div>
            <div className="text-sm text-muted-foreground">
              End-to-end type safety across the entire stack
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
