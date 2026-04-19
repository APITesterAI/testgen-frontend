import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-muted/30">
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-40" />
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI-powered API test case generation for modern engineering teams. Built for vibe
              coders, QA engineers, and shipping teams.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {[
                { Icon: Github, href: "#", label: "GitHub" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-base hover:border-primary/40 hover:bg-accent hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Product", items: ["Features", "Pricing", "Changelog", "Roadmap"] },
            { title: "Resources", items: ["Docs", "API Reference", "Blog", "Examples"] },
            { title: "Company", items: ["About", "Careers", "Privacy", "Terms"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TestGen AI. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
};
