import { Link } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/MarketingNav";
import { Footer } from "@/components/Footer";

const plans = [
  {
    name: "Free",
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
    highlighted: false,
  },
  {
    name: "Pro",
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
    highlighted: true,
  },
  {
    name: "Team",
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
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <MarketingNav />

      <section className="bg-gradient-subtle py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 rounded-full">Pricing</Badge>
            <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Simple, <span className="text-gradient">predictable</span> pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Start free. Upgrade when you're ready. No hidden fees, ever.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border bg-card p-8 transition-base ${
                  plan.highlighted
                    ? "border-primary shadow-premium scale-[1.02] lg:scale-105"
                    : "border-border shadow-soft hover:shadow-elegant"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-hero text-primary-foreground shadow-soft px-3 py-1 gap-1">
                      <Sparkles className="h-3 w-3" /> Most popular
                    </Badge>
                  </div>
                )}

                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{plan.description}</p>
                </div>

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
                  <Link to="/upload">{plan.cta}</Link>
                </Button>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-success/15">
                        <Check className="h-3 w-3 text-success" strokeWidth={3} />
                      </div>
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-muted-foreground">
            All plans include SOC 2 compliance, 99.9% uptime SLA, and end-to-end encryption.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
