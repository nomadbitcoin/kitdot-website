import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Github, BookOpen, Rocket, Copy } from "lucide-react";
import { useState } from "react";

export function CTASection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install -g kit-dot && kit-dot init my-dapp");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            Ready to Build?
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Start Building on{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Polkadot Cloud
            </span>
            {" "}Today
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Create fully decentralized applications with no Web2 dependencies. 
            Join the community building on Polkadot Cloud infrastructure.
          </p>

          {/* Quick start command */}
          <Card className="max-w-3xl mx-auto mb-12 bg-code-bg border-code-border shadow-glow">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Terminal className="w-6 h-6 text-primary" />
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground mb-1">Quick Start</div>
                    <code className="text-lg font-mono text-foreground">
                      npm install -g kit-dot && kit-dot init my-dapp
                    </code>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {copied ? "Copied!" : <Copy className="w-5 h-5" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-52"
              asChild
            >
              <a href="https://github.com/nomadbitcoin/kitdot" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              className="min-w-52"
              asChild
            >
              <a href="http://docs.kitdot.dev/" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-5 h-5 mr-2" />
                Documentation
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3min</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">130+</div>
              <div className="text-sm text-muted-foreground">Smart Contracts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">Web2 Dependencies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Decentralized</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}