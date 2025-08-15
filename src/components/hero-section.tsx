import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Copy, Github, BookOpen, Zap } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install -g kit-dot");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo and title */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-40 h-40 mb-6">
              <img src="/logo.png" alt="Kit-Dot Logo" className="w-40 h-40" />
            </div>

            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Kit-Dot
            </h1>

            <p className="text-2xl md:text-3xl font-medium text-muted-foreground max-w-2xl mx-auto">
              TypeScript Development Toolkit for Polkadot Cloud
            </p>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build applications where users don't even know it's blockchain.
            Kit-Dot provides a fully decentralized stack with seamless Web2-like
            UX powered by Web3 infrastructure.
          </p>

          {/* Installation command */}
          <Card className="max-w-2xl mx-auto bg-code-bg border-code-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Terminal className="w-5 h-5 text-primary" />
                  <code className="text-lg font-mono text-foreground">
                    npm install -g kit-dot
                  </code>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {copied ? "Copied!" : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="outline" size="lg" className="min-w-52" asChild>
              <a
                href="https://github.com/nomadbitcoin/kitdot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </Button>

            <Button variant="ghost" size="lg" className="min-w-52" asChild>
              <a
                href="http://docs.kitdot.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Documentation
              </a>
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3min</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">130+</div>
              <div className="text-sm text-muted-foreground">
                Smart Contracts
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">
                Web2 Dependencies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
