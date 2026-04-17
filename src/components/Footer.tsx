import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              AI-powered API test case generation for modern engineering teams.
            </p>
          </div>
          {[
            { title: "Product", items: ["Features", "Pricing", "Changelog", "Roadmap"] },
            { title: "Resources", items: ["Docs", "API Reference", "Blog", "Examples"] },
            { title: "Company", items: ["About", "Careers", "Privacy", "Terms"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 text-sm font-semibold text-foreground">{col.title}</h4>
              <ul className="space-y-2">
                {col.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} TestGen AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
