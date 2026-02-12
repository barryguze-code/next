const Footer = () => {
  return (
    <footer className="px-6 py-12 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
            N
          </div>
          <span className="font-display font-bold text-lg text-foreground">
            Next<span className="text-primary">AI</span> Commerce
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} NextAI Commerce. All rights reserved.
        </p>

        <div className="flex gap-6">
          {["Twitter", "LinkedIn", "YouTube"].map((s) => (
            <a key={s} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
