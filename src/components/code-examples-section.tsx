import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Play } from "lucide-react";
import { useState } from "react";

const codeExamples = {
  hardhat: `// hardhat.config.ts for Passet Hub
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    passetHub: {
      url: "https://testnet-passet-hub-eth-rpc.polkadot.io",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 420420422
    }
  }
};

export default config;`,

  frontend: `// wagmi-config.ts for Passet Hub
import { createConfig, http } from 'wagmi';
import { metaMask } from 'wagmi/connectors';

const passetHub = {
  id: 420420422,
  name: "Passet Hub",
  rpcUrls: {
    default: {
      http: ["https://testnet-passet-hub-eth-rpc.polkadot.io"]
    }
  }
};

export const config = createConfig({
  chains: [passetHub],
  transports: { [passetHub.id]: http() },
  connectors: [metaMask()]
});`,

  cli: `# Quick Start Commands

# Initialize new project
kitdot init my-dapp
cd my-dapp

# Install dependencies
npm install

# Build contracts (Foundry)
cd contracts/develop && forge build

# Deploy contracts (Hardhat)  
cd ../deploy && npx hardhat run scripts/deploy.ts

# Start frontend dev server
cd ../../front && npm run dev

# Coming Soon: One-command deployment
kitdot deploy`,
};

export function CodeExamplesSection() {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  const handleCopy = (code: string, tabId: string) => {
    navigator.clipboard.writeText(code);
    setCopiedTab(tabId);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Play className="w-4 h-4 mr-2" />
            Code Examples
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See kitdot in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From smart contracts to decentralized cloud functions, kitdot
            provides standardized templates and scaffolding for complete dApp
            development.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="cli" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50">
              <TabsTrigger value="cli" className="text-sm">
                CLI Commands
              </TabsTrigger>
              <TabsTrigger value="hardhat" className="text-sm">
                Hardhat Config
              </TabsTrigger>
              <TabsTrigger value="frontend" className="text-sm">
                Frontend Config
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cli">
              <Card className="bg-code-bg border-code-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">CLI Commands</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        Get started in minutes with these commands
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(codeExamples.cli, "cli")}
                    >
                      {copiedTab === "cli" ? (
                        "Copied!"
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm text-foreground/90 overflow-x-auto">
                    <code>{codeExamples.cli}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hardhat">
              <Card className="bg-code-bg border-code-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">
                        Hardhat Configuration
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        Deploy contracts to Passet Hub testnet
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleCopy(codeExamples.hardhat, "hardhat")
                      }
                    >
                      {copiedTab === "hardhat" ? (
                        "Copied!"
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm text-foreground/90 overflow-x-auto">
                    <code>{codeExamples.hardhat}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="frontend">
              <Card className="bg-code-bg border-code-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">
                        Frontend Configuration
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        Connect React app to Passet Hub
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleCopy(codeExamples.frontend, "frontend")
                      }
                    >
                      {copiedTab === "frontend" ? (
                        "Copied!"
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm text-foreground/90 overflow-x-auto">
                    <code>{codeExamples.frontend}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
