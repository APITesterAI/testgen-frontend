import { Link } from "react-router-dom";
import { ArrowRight, Bug, Shield, Zap, XCircle, Check, Sparkles, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/MarketingNav";
import { Footer } from "@/components/Footer";

const features = [
  {
    icon: Bug,
    title: "Edge Case Tests",
    description: "Boundary values, empty payloads, oversized inputs, and rare combinations the docs forgot.",
    color: "text-info",
    bg: "bg-info/10",
  },
  {
    icon: Shield,
    title: "Security Tests",
    description: "SQL injection, auth bypass, IDOR, XSS, and OWASP API Top 10 coverage out of the box.",
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    icon: Zap,
    title: "Performance Tests",
    description: "Load profiles, latency thresholds, and concurrency scenarios tuned to your endpoints.",
    color: "text-warning",
    bg: "bg-warning/10",
  },
  {
    icon: XCircle,
    title: "Negative Tests",
    description: "Malformed bodies, invalid headers, missing fields — every wrong way a client can call you.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <MarketingNav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-subtle">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        </div>

        <div className="container relative py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <Badge variant="secondary" className="mb-6 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium">
              <Sparkles className="h-3 w-3 text-primary" />
              Powered by GPT-4 & Claude
            </Badge>

            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Stop Shipping Buggy APIs.
              <br />
              <span className="text-gradient">Start Testing Smarter.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Paste your OpenAPI spec and get 50+ AI-generated test cases in 60 seconds.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/upload">
                  Generate Tests Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/dashboard">View demo</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["No credit card required", "14-day free trial", "Cancel anytime"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-success" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Code preview mock */}
          <div className="mx-auto mt-16 max-w-4xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="rounded-2xl border border-border bg-card shadow-premium overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-destructive/60" />
                  <span className="h-3 w-3 rounded-full bg-warning/60" />
                  <span className="h-3 w-3 rounded-full bg-success/60" />
                </div>
                <div className="ml-3 flex items-center gap-2 text-xs text-muted-foreground font-mono">
                  <Code2 className="h-3.5 w-3.5" />
                  test_users_post.spec.ts
                </div>
              </div>
              <pre className="overflow-x-auto p-6 text-left font-mono text-sm leading-relaxed text-foreground/80">
{`describe('POST /api/users', () => {
  it('rejects payload > 1MB', async () => {
    const res = await api.post('/users', huge);
    expect(res.status).toBe(413);
  });

  it('blocks SQL injection in email field', async () => {
    const res = await api.post('/users', {
      email: "' OR 1=1--", name: 'a'
    });
    expect(res.status).toBe(400);
  });

  it('handles 1000 req/sec for 30s', async () => {
    const result = await loadTest('/users', { rps: 1000, duration: 30 });
    expect(result.p99).toBeLessThan(200);
  });
});`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 rounded-full">Test coverage</Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Four test categories. Zero manual work.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every spec you upload gets exhaustive coverage across the bugs that ship to production.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-base hover:shadow-premium hover:-translate-y-1"
              >
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${f.bg}`}>
                  <f.icon className={`h-6 w-6 ${f.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-center shadow-premium md:p-16">
            <div className="absolute inset-0 opacity-20 mix-blend-overlay">
              <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white blur-3xl" />
              <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-white blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
                Ship APIs you can trust.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Join 2,400+ engineering teams that have generated over 1.2M test cases with TestGen AI.
              </p>
              <Button asChild size="xl" variant="secondary" className="mt-8 shadow-lg">
                <Link to="/upload">
                  Start free <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
