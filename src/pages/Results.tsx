import { useState } from "react";
import { Search, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AppLayout } from "@/components/AppLayout";

type Category = "Edge" | "Negative" | "Performance" | "Security";
type Severity = "Critical" | "High" | "Medium" | "Low";

interface TestCase {
  id: string;
  name: string;
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  expectedStatus: number;
  severity: Severity;
  category: Category;
}

const tests: TestCase[] = [
  { id: "1", name: "Reject payload exceeding 1MB limit", endpoint: "/api/users", method: "POST", expectedStatus: 413, severity: "High", category: "Edge" },
  { id: "2", name: "Handle empty request body gracefully", endpoint: "/api/users", method: "POST", expectedStatus: 400, severity: "Medium", category: "Edge" },
  { id: "3", name: "Boundary: max integer for user ID", endpoint: "/api/users/{id}", method: "GET", expectedStatus: 200, severity: "Low", category: "Edge" },
  { id: "4", name: "Block SQL injection in email field", endpoint: "/api/users", method: "POST", expectedStatus: 400, severity: "Critical", category: "Security" },
  { id: "5", name: "Reject expired JWT tokens", endpoint: "/api/auth/me", method: "GET", expectedStatus: 401, severity: "Critical", category: "Security" },
  { id: "6", name: "Prevent IDOR on user resources", endpoint: "/api/users/{id}", method: "GET", expectedStatus: 403, severity: "Critical", category: "Security" },
  { id: "7", name: "XSS payload sanitization in name", endpoint: "/api/users", method: "PUT", expectedStatus: 400, severity: "High", category: "Security" },
  { id: "8", name: "Sustain 1000 req/sec for 30 seconds", endpoint: "/api/users", method: "GET", expectedStatus: 200, severity: "High", category: "Performance" },
  { id: "9", name: "P99 latency below 200ms under load", endpoint: "/api/search", method: "GET", expectedStatus: 200, severity: "Medium", category: "Performance" },
  { id: "10", name: "Connection pool exhaustion test", endpoint: "/api/users", method: "POST", expectedStatus: 200, severity: "Medium", category: "Performance" },
  { id: "11", name: "Missing required field returns 400", endpoint: "/api/users", method: "POST", expectedStatus: 400, severity: "Medium", category: "Negative" },
  { id: "12", name: "Invalid email format rejected", endpoint: "/api/users", method: "POST", expectedStatus: 422, severity: "Low", category: "Negative" },
  { id: "13", name: "Wrong HTTP method returns 405", endpoint: "/api/users", method: "DELETE", expectedStatus: 405, severity: "Low", category: "Negative" },
  { id: "14", name: "Malformed JSON body rejected", endpoint: "/api/users", method: "POST", expectedStatus: 400, severity: "Medium", category: "Negative" },
];

const categories: Category[] = ["Edge", "Negative", "Performance", "Security"];

const severityStyles: Record<Severity, string> = {
  Critical: "bg-destructive/10 text-destructive border-destructive/20",
  High: "bg-warning/10 text-warning border-warning/20",
  Medium: "bg-info/10 text-info border-info/20",
  Low: "bg-muted text-muted-foreground border-border",
};

const methodStyles: Record<TestCase["method"], string> = {
  GET: "bg-success/10 text-success",
  POST: "bg-info/10 text-info",
  PUT: "bg-warning/10 text-warning",
  DELETE: "bg-destructive/10 text-destructive",
  PATCH: "bg-primary/10 text-primary",
};

const categoryStyles: Record<Category, string> = {
  Edge: "border-info/30 text-info",
  Negative: "border-primary/30 text-primary",
  Performance: "border-warning/30 text-warning",
  Security: "border-destructive/30 text-destructive",
};

const Results = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

  const filtered = tests.filter((t) => {
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.endpoint.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === "All" || t.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const grouped = categories.reduce((acc, cat) => {
    acc[cat] = filtered.filter((t) => t.category === cat);
    return acc;
  }, {} as Record<Category, TestCase[]>);

  return (
    <AppLayout
      title="Test Results"
      description="payments-api-v2.yaml · 64 tests generated"
      actions={
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4" /> Export
        </Button>
      }
    >
      <div className="space-y-6">
        {/* Filters */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search tests by name or endpoint..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-card"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Button
              variant={activeCategory === "All" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory("All")}
            >
              All ({tests.length})
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
              >
                {cat} ({tests.filter((t) => t.category === cat).length})
              </Button>
            ))}
          </div>
        </div>

        {/* Grouped results */}
        <div className="space-y-8">
          {categories.map((cat) => {
            const items = grouped[cat];
            if (items.length === 0) return null;
            return (
              <section key={cat}>
                <div className="mb-4 flex items-center gap-3">
                  <h2 className="font-display text-xl font-semibold text-foreground">{cat}</h2>
                  <Badge variant="outline" className={categoryStyles[cat]}>
                    {items.length} {items.length === 1 ? "test" : "tests"}
                  </Badge>
                </div>

                <div className="grid gap-3">
                  {items.map((t) => (
                    <div
                      key={t.id}
                      className="group rounded-xl border border-border bg-card p-5 shadow-soft transition-base hover:shadow-elegant hover:border-primary/30"
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-semibold text-foreground">{t.name}</h3>
                            <Badge variant="outline" className={severityStyles[t.severity]}>
                              {t.severity}
                            </Badge>
                          </div>
                          <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-xs">
                            <span className={`rounded px-2 py-0.5 font-bold ${methodStyles[t.method]}`}>
                              {t.method}
                            </span>
                            <span className="text-muted-foreground">{t.endpoint}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">Expected</p>
                            <p className="font-mono text-sm font-bold text-foreground">{t.expectedStatus}</p>
                          </div>
                          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-base">
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {filtered.length === 0 && (
            <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center">
              <p className="text-muted-foreground">No tests match your filters.</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Results;
