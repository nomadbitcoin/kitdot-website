export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-7xl px-4 py-6">
      <div className="flex items-center justify-between px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="kitdot" className="h-8 w-auto" />
          <span className="font-bold text-xl text-white">kitdot</span>
        </div>

        <nav className="flex items-center gap-8">
          <a
            href="#home"
            className="text-white hover:text-primary transition-colors text-sm font-medium"
          >
            Home
          </a>
          <a
            href="https://polkadot-survival-guide.w3d.community/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors text-sm font-medium"
          >
            Docs
          </a>
        </nav>
      </div>
    </header>
  );
}
