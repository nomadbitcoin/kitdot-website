export function Footer() {
  return (
    <footer className="py-4 border-t border-border/50 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>Built for</span>
            <img 
              src="/polkadot.svg" 
              alt="Polkadot" 
              className="h-4 w-auto"
            />
            <span className="font-medium">Polkadot</span>
          </div>
          <div className="flex items-center gap-2">
            <span>powered by</span>
            <img 
              src="/w3d.svg" 
              alt="WEB3DEV" 
              className="h-4 w-auto"
            />
            <span className="font-medium">WEB3DEV</span>
          </div>
        </div>
      </div>
    </footer>
  );
}