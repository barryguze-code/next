import { Link, useLocation, useNavigate } from "react-router-dom";
import { Twitter, Linkedin, Youtube } from "lucide-react";
import logoDark from "@/assets/logo-dark.svg";

const footerLinks = {
  Services: [
    { label: "Account Management", href: "/#account-management" },
    { label: "Advertising + SEO", href: "/#advertising-seo" },
    { label: "Recovery", href: "/#recovery" },
    { label: "Logistics", href: "/#logistics" },
    { label: "Consulting", href: "/#consulting" },
  ],
  Company: [
    // { label: "About", href: "/#about" },
    { label: "Careers", href: "/#careers" },
    { label: "Blog", href: "/#blog" },
    { label: "Process", href: "/#process" },
    { label: "Contact", href: "/#contact" },
  ],
  Resources: [
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Knowledge Base", href: "/#knowledge-base" },
    { label: "FAQ", href: "/#faq" },
    { label: "Partners", href: "/#partners" }
  ],
};

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // If not on index, navigate there first then scroll
    if (location.pathname !== "/") {
      navigate("/#contact");
      setTimeout(() => {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      }, 200);
      return;
    }

    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16 md:px-12">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logoDark} alt="NextAI Commerce" className="h-18 mb-4" />

            <p className="text-sm text-secondary-foreground max-w-xs leading-relaxed mb-4">
              Scale faster on Amazon with battle-tested operator expertise and intelligent automation.
            </p>

            {/* Pedigree badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 mb-4">
              <span className="text-xs text-primary font-semibold">
                Founded by former Eva Founder · 10+ Years Active Selling
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://twitter.com/barryguze"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/barryguze/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.youtube.com/channel/UC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Dynamic Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm text-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.label === "Contact" ? (
                      <a
                        href={link.href}
                        onClick={handleContactClick}
                        className="text-sm text-secondary-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-secondary-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NextAI Commerce. All rights reserved.
          </p>

          {/* Legal Links added here */}
          <div className="flex gap-6">
            <Link
              to="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>

            <Link
              to="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;