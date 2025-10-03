import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DotGrid from "@/components/ui/dot-grid";
import { Terminal, Copy, Github, BookOpen } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install -g kitdot");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-16">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={7}
          gap={23}
          baseColor="#6B7280"
          activeColor="#E272FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/20 to-black/70 z-[1]" />

      <div className="container relative z-10 mx-auto px-4 py-8 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-10">
          {/* Logo */}
          <div className="flex items-center justify-center gap-4">
            <h1
              className="text-6xl md:text-9xl font-black bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"
              // style={{ fontFamily: "Intro Rust, sans-serif" }}
            >
              kitdot
            </h1>
          </div>

          {/* Main headline */}
          <p className="text-4xl md:text-6xl lg:text-6xl text-white leading-tight font-black">
            Build applications where users
            <br className="hidden md:block" />
            don’t even know it’s blockchain.
          </p>

          {/* <div className="space-y-3 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold text-pink-400">
              TypeScript Development Toolkit for Polkadot Cloud
            </p>
          </div> */}
          {/* Subheadline & description */}

          {/* Installation command */}
          <Card className="max-w-2xl mx-auto bg-code-bg border-code-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Terminal className="w-5 h-5 text-primary" />
                  <code className="text-lg font-mono text-foreground">
                    npm install -g kitdot
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
            <Button
              variant="outline"
              size="lg"
              className="min-w-52 border-pink-500 text-white hover:bg-pink-500/10 hover:text-white"
              asChild
            >
              <a
                href="https://github.com/nomadbitcoin/kitdot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="min-w-52 text-white hover:text-pink-400 hover:bg-transparent"
              asChild
            >
              <a
                href="https://polkadot-survival-guide.w3d.community/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Documentation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
