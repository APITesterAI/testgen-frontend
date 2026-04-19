import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bug,
  Shield,
  Zap,
  XCircle,
  Check,
  Sparkles,
  Code2,
  Upload,
  Wand2,
  Download,
  Github,
  Star,
  Terminal,
  Cpu,
} from "lucide-react";
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
    ring: "ring-info/20",
  },
  {
    icon: Shield,
    title: "Security Tests",
    description: "SQL injection, auth bypass, IDOR, XSS, and OWASP API Top 10 coverage out of the box.",
    color: "text-destructive",
    bg: "bg-destructive/10",
    ring: "ring-destructive/20",
  },
  {
    icon: Zap,
    title: "Performance Tests",
    description: "Load profiles, latency thresholds, and concurrency scenarios tuned to your endpoints.",
    color: "text-warning",
    bg: "bg-warning/10",
    ring: "ring-warning/20",
  },
  {
    icon: XCircle,
    title: "Negative Tests",
    description: "Malformed bodies, invalid headers, missing fields — every wrong way a client can call you.",
    color: "text-primary",
    bg: "bg-primary/10",
    ring: "ring-primary/20",
  },
];

const steps = [
  {
    icon: Upload,
    title: "Drop your spec",
    description: "OpenAPI, Postman, GraphQL, or just a URL. We parse every endpoint instantly.",
  },
  {
    icon: Wand2,
    title: "AI generates tests",
    description: "GPT-4 and Claude design 50+ tests across edge, negative, security, and performance.",
  },
  {
    icon: Download,
    title: "Export & ship",
    description: "Download as Postman, Jest, Pytest, or k6 — drop straight into your CI pipeline.",
  },
];

const stacks = [
  "REST",
  "GraphQL",
  "gRPC",
  "OpenAPI 3.1",
  "Postman",
  "Jest",
  "Pytest",
  "Vitest",
  "k6",
  "Playwright",
  "Cypress",
  "GitHub Actions",
];

const testimonials = [
  {
    quote:
      "We replaced two weeks of QA bootstrapping with a 60-second upload. The negative test coverage alone caught three production bugs.",
    name: "Priya Raman",
    role: "Staff Engineer, Fintech",
    initials: "PR",
  },
  {
    quote:
      "I'm a vibe coder shipping side projects. TestGen AI gives me grown-up test suites without slowing me down.",
    name: "Marcus Lee",
    role: "Indie Developer",
    initials: "ML",
  },
  {
    quote:
      "Security tests on every PR. The OWASP coverage out of the box is what sold our security team.",
    name: "Elena Kovač",
    role: "Head of QA, SaaS",
    initials: "EK",
  },
];

const stats = [
  { value: "1.2M+", label: "Tests generated" },
  { value: "2,400+", label: "Engineering teams" },
  { value: "60s", label: "Spec → suite" },
  { value: "99.9%", label: "Uptime" },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <MarketingNav />

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        {/* Mesh + grid background */}
        <div className="absolute inset-0 -z-10 bg-gradient-mesh" />
        <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade" />

        {/* Floating blobs */}
        <div className="pointer-events-none absolute -z-10 inset-0 overflow-hidden">
          <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
          <div className="absolute top-40 right-10 h-80 w-80 rounded-full bg-primary-glow/30 blur-3xl animate-blob [animation-delay:-4s]" />
          <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-info/20 blur-3xl animate-blob [animation-delay:-8s]" />
        </div>

        <div className="container relative py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <Badge
              variant="secondary"
              className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-background/70 px-4 py-1.5 text-xs font-medium backdrop-blur"
            >
              <Sparkles className="h-3 w-3 text-primary" />
              Powered by GPT-4 & Claude
              <span className="ml-1 inline-block h-1 w-1 rounded-full bg-success animate-pulse" />
              <span className="text-muted-foreground">Live</span>
            </Badge>

            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Stop Shipping{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Buggy APIs.</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-warning/30 md:bottom-2 md:h-4" />
              </span>
              <br />
              Start Testing{" "}
              <span className="text-gradient bg-[length:200%_auto] bg-clip-text animate-shimmer">
                Smarter.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Paste your OpenAPI spec and get{" "}
              <span className="font-semibold text-foreground">50+ AI-generated test cases</span> in
              60 seconds. Built for vibe coders, QA engineers, and shipping teams.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/upload">
                  Generate Tests Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="group bg-background/60 backdrop-blur">
                <Link to="/dashboard">
                  <Terminal className="h-5 w-5" />
                  View live demo
                </Link>
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
          <div
            className="mx-auto mt-16 max-w-4xl animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="group relative">
              {/* Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-hero opacity-30 blur-2xl transition-opacity group-hover:opacity-50" />

              <div className="relative rounded-2xl border border-border bg-card/95 shadow-premium overflow-hidden backdrop-blur">
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
                  <div className="ml-auto flex items-center gap-1.5 rounded-full border border-success/20 bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success">
                    <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                    Generated
                  </div>
                </div>
                <pre className="overflow-x-auto p-6 text-left font-mono text-sm leading-relaxed text-foreground/85">
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

          {/* Stats strip */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-card/80 p-6 text-center backdrop-blur transition-base hover:bg-card"
              >
                <div className="font-display text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STACK MARQUEE ===================== */}
      <section className="border-y border-border/60 bg-muted/30 py-10">
        <div className="container">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Works with the stack you already use
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex w-max animate-marquee gap-3">
              {[...stacks, ...stacks].map((s, i) => (
                <span
                  key={`${s}-${i}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 shadow-soft"
                >
                  <Cpu className="h-3.5 w-3.5 text-primary" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FEATURES ===================== */}
      <section id="features" className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 rounded-full">Test coverage</Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Four test categories.{" "}
              <span className="text-gradient">Zero manual work.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every spec you upload gets exhaustive coverage across the bugs that ship to production.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                style={{ animationDelay: `${i * 80}ms` }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 shadow-card transition-spring hover:-translate-y-1.5 hover:shadow-premium animate-fade-in-up"
              >
                {/* Glow on hover */}
                <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${f.bg} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />

                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${f.bg} ring-1 ${f.ring} transition-transform group-hover:scale-110 group-hover:rotate-3`}
                >
                  <f.icon className={`h-6 w-6 ${f.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>

                <div className="mt-5 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="relative bg-muted/30 py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-50" />
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 rounded-full">How it works</Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              From spec to suite in{" "}
              <span className="text-gradient">three steps</span>
            </h2>
          </div>

          <div className="relative mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {/* Connector line */}
            <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />

            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-card transition-base hover:shadow-premium"
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-hero text-primary-foreground shadow-glow">
                    <step.icon className="h-6 w-6" />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-card text-xs font-bold text-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 rounded-full">Loved by builders</Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Built for everyone who ships.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Vibe coders, QA pros, web developers, security teams — one tool, every workflow.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="group flex h-full flex-col rounded-2xl border border-border bg-gradient-card p-7 shadow-card transition-spring hover:-translate-y-1 hover:shadow-premium"
              >
                <div className="flex gap-0.5 text-warning">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-hero text-sm font-bold text-primary-foreground shadow-soft">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-center shadow-premium md:p-20">
            {/* Animated blobs */}
            <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay">
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white blur-3xl animate-blob" />
              <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-white blur-3xl animate-blob [animation-delay:-6s]" />
            </div>
            {/* Grid overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(0 0% 100% / 0.2) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.2) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
              }}
            />

            <div className="relative">
              <Badge className="mb-6 border-0 bg-white/20 text-primary-foreground backdrop-blur">
                <Sparkles className="h-3 w-3" />
                Free forever for solo devs
              </Badge>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary-foreground md:text-5xl">
                Ship APIs you can trust.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/85 md:text-lg">
                Join 2,400+ engineering teams that have generated over 1.2M test cases with TestGen AI.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="xl" variant="secondary" className="shadow-lg group">
                  <Link to="/signup">
                    Start free
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="xl"
                  variant="outline"
                  className="border-white/30 bg-white/10 text-primary-foreground backdrop-blur hover:bg-white/20 hover:text-primary-foreground"
                >
                  <a href="#" className="inline-flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    Star on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
