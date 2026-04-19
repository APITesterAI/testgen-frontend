import { Link } from "react-router-dom";
import { Check, Sparkles, Zap, Building2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/MarketingNav";
import { Footer } from "@/components/Footer";

const plans = [
  {
    name: "Free",
    icon: Rocket,
    price: "0",
    description: "For solo devs exploring the product.",
    features: [
      "5 specs per month",
      "50 tests per spec",
      "Edge & negative tests",
      "Community support",
      "Public projects only",
    ],
    cta: "Start free",
    to: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    icon: Zap,
    price: "29",
    description: "For professional engineers shipping fast.",
    features: [
      "Unlimited specs",
      "5,000 tests per month",
      "All test categories",
      "Security & performance tests",
      "Priority support",
      "Private projects",
      "Export to Postman, Jest, Pytest",
    ],
    cta: "Upgrade to Pro",
    to: "/upload",
    highlighted: true,
  },
  {
    name: "Team",
    icon: Building2,
    price: "99",
    description: "For teams collaborating on APIs.",
    features: [
      "Everything in Pro",
      "Unlimited tests",
      "Up to 10 team members",
      "Shared workspaces",
      "SSO & audit logs",
      "Custom integrations",
      "Dedicated success manager",
    ],
    cta: "Get Team plan",
    to: "/upload",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes — upgrade, downgrade, or cancel anytime. Changes are prorated automatically.",
  },
  {
    q: "What payment methods do you accept?",
    a: "All major credit cards, plus invoiced billing on Team and Enterprise plans.",
  },
  {
    q: "Is there a free trial for Pro?",
    a: "Every paid plan starts with a 14-day free trial. No credit card required to begin.",
  },
  {
    q: "Do you offer discounts for startups or open source?",
    a: "Yes — 50% off for early-stage startups and free Pro accounts for OSS maintainers.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <MarketingNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-mesh" />
        <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade" />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-20 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        </div>

        <div className="container py-20 md:py-24">
          <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
            <Badge
              variant="secondary"
              className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-background/70 px-4 py-1.5 backdrop-blur"
            >
              <Sparkles className="h-3 w-3 text-primary" />
              Pricing
            </Badge>
            <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              Simple, <span className="text-gradient">predictable</span> pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Start free. Upgrade when you're ready. No hidden fees, ever.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                style={{ animationDelay: `${i * 100}ms` }}
                className={`group relative animate-fade-in-up rounded-2xl border bg-card p-8 transition-spring hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-primary/40 shadow-premium lg:scale-105 bg-gradient-card"
                    : "border-border shadow-card hover:shadow-elegant"
                }`}
              >
                {/* Highlight glow */}
                {plan.highlighted && (
                  <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-hero opacity-20 blur-xl" />
                )}

                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="gap-1 rounded-full bg-gradient-hero px-3 py-1 text-primary-foreground shadow-soft">
                      <Sparkles className="h-3 w-3" /> Most popular
                    </Badge>
                  </div>
                )}

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        plan.highlighted
                          ? "bg-gradient-hero text-primary-foreground shadow-glow"
                          : "bg-accent text-accent-foreground"
                      }`}
                    >
                      <plan.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold tracking-tight text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">/month</span>
                  </div>

                  <Button
                    asChild
                    variant={plan.highlighted ? "hero" : "outline"}
                    size="lg"
                    className="mt-6 w-full"
                  >
                    <Link to={plan.to}>{plan.cta}</Link>
                  </Button>

                  <div className="mt-7 border-t border-border pt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      What's included
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <div
                            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                              plan.highlighted ? "bg-primary/15" : "bg-success/15"
                            }`}
                          >
                            <Check
                              className={`h-3 w-3 ${
                                plan.highlighted ? "text-primary" : "text-success"
                              }`}
                              strokeWidth={3}
                            />
                          </div>
                          <span className="text-foreground/85">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["SOC 2 Type II", "99.9% uptime SLA", "End-to-end encryption", "GDPR compliant"].map(
              (t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-success" />
                  {t}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 rounded-full">FAQ</Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Questions, answered.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                style={{ animationDelay: `${i * 60}ms` }}
                className="animate-fade-in-up rounded-2xl border border-border bg-gradient-card p-6 shadow-card transition-base hover:shadow-elegant"
              >
                <h3 className="font-semibold text-foreground">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
