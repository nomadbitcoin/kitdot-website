import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  Zap, 
  Code2, 
  MessageSquare,
  Sparkles,
  ArrowRight
} from "lucide-react";

const mcpFeatures = [
  {
    icon: Code2,
    title: "Pre-built Contract Selection",
    description: "AI helps you choose and configure from 130+ audited contracts based on your requirements"
  },
  {
    icon: Zap,
    title: "Template Assembly",
    description: "Automatically combine pre-built templates and components to speed up development"
  },
  {
    icon: MessageSquare,
    title: "Intelligent Configuration",
    description: "AI analyzes your needs and suggests optimal configurations for templates and components"
  }
];

export function MCPSection() {
  return (
    <section className="py-24 relative bg-gradient-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
                  <Cpu className="w-4 h-4 mr-2" />
                  Coming Soon
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  MCP Server for{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    AI-Powered Building
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  For developers who love the speed of building with AI. Model Context Protocol 
                  integration brings intelligent template selection and configuration using pre-built, audited components.
                </p>
              </div>

              <div className="space-y-4">
                {mcpFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-border/50 hover:border-primary/20 transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-secondary border border-border/50">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/20">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Early Access Program</h4>
                      <p className="text-sm text-muted-foreground">Get notified when MCP integration launches</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary hover:text-primary"
                      onClick={() => {
                        document.querySelector('.bg-code-bg')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Visual */}
            <div className="space-y-6">
              <Card className="bg-code-bg border-code-border overflow-hidden">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-muted-foreground ml-2">AI Assistant</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4 font-mono text-sm">
                    <div className="text-muted-foreground">
                      <span className="text-primary">$</span> I need an NFT marketplace with royalties
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded p-3 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-primary font-medium">AI:</span>
                      </div>
                      <div className="text-foreground/90 text-xs leading-relaxed">
                        I'll use the audited NFT Marketplace template from thirdweb.<br/>
                        Configuring contract, frontend components, and deployment...
                      </div>
                    </div>
                    <div className="text-muted-foreground">
                      <span className="text-green-500">✓</span> Pre-built NFT contract selected
                    </div>
                    <div className="text-muted-foreground">
                      <span className="text-green-500">✓</span> Marketplace template configured  
                    </div>
                    <div className="text-muted-foreground">
                      <span className="text-green-500">✓</span> React components generated
                    </div>
                    <div className="text-muted-foreground">
                      <span className="text-green-500">✓</span> Deployment scripts ready
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 inline mr-2 text-primary" />
                  From idea to pre-built, audited components in seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}