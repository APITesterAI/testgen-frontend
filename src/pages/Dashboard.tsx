import { Link } from "react-router-dom";
import {
  Upload,
  FileCode,
  FlaskConical,
  TrendingUp,
  ArrowUpRight,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AppLayout } from "@/components/AppLayout";

const stats = [
  {
    label: "Specs Analyzed",
    value: "47",
    delta: "+12 this week",
    icon: FileCode,
    iconBg: "bg-info/10",
    iconColor: "text-info",
  },
  {
    label: "Tests Generated",
    value: "2,341",
    delta: "+184 this week",
    icon: FlaskConical,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    label: "This Month",
    value: "892",
    delta: "+24% vs last month",
    icon: TrendingUp,
    iconBg: "bg-success/10",
    iconColor: "text-success",
  },
];

const activity = [
  { spec: "payments-api-v2.yaml", type: "OpenAPI 3.1", tests: 64, status: "completed", time: "2 hours ago" },
  { spec: "users.postman_collection.json", type: "Postman", tests: 38, status: "completed", time: "5 hours ago" },
  { spec: "graphql-schema.graphql", type: "GraphQL", tests: 51, status: "running", time: "Just now" },
  { spec: "auth-service.yaml", type: "OpenAPI 3.0", tests: 47, status: "completed", time: "Yesterday" },
  { spec: "inventory-api.yaml", type: "OpenAPI 3.0", tests: 29, status: "failed", time: "2 days ago" },
];

const statusVariants: Record<string, { class: string; label: string }> = {
  completed: { class: "bg-success/10 text-success border-success/20", label: "Completed" },
  running: { class: "bg-info/10 text-info border-info/20", label: "Running" },
  failed: { class: "bg-destructive/10 text-destructive border-destructive/20", label: "Failed" },
};

const Dashboard = () => {
  return (
    <AppLayout
      title="Dashboard"
      description="Welcome back, Alex"
      actions={
        <Button asChild variant="hero" size="sm">
          <Link to="/upload">
            <Plus className="h-4 w-4" /> New Spec
          </Link>
        </Button>
      }
    >
      <div className="space-y-8">
        {/* Welcome card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-hero p-8 text-primary-foreground shadow-premium">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-xl">
            <p className="text-sm font-medium opacity-80">Welcome back 👋</p>
            <h2 className="mt-1 font-display text-2xl font-bold md:text-3xl">
              Ready to generate some tests?
            </h2>
            <p className="mt-2 text-sm opacity-90">
              You've used <strong>892 of 5,000</strong> tests on your Pro plan this month.
            </p>
            <Button asChild variant="secondary" size="sm" className="mt-5">
              <Link to="/upload">
                <Upload className="h-4 w-4" /> Upload new spec
              </Link>
            </Button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-base hover:shadow-elegant"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{s.label}</p>
                  <p className="mt-2 text-3xl font-bold text-foreground">{s.value}</p>
                  <p className="mt-1 text-xs font-medium text-success">{s.delta}</p>
                </div>
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.iconBg}`}>
                  <s.icon className={`h-5 w-5 ${s.iconColor}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent activity */}
        <div className="rounded-2xl border border-border bg-card shadow-soft">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <div>
              <h3 className="text-base font-semibold text-foreground">Recent activity</h3>
              <p className="text-xs text-muted-foreground">Your latest spec uploads and test generations</p>
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link to="/results">
                View all <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Spec File</TableHead>
                <TableHead>Format</TableHead>
                <TableHead>Tests</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">When</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activity.map((row) => (
                <TableRow key={row.spec} className="cursor-pointer">
                  <TableCell className="font-medium font-mono text-sm">{row.spec}</TableCell>
                  <TableCell className="text-muted-foreground">{row.type}</TableCell>
                  <TableCell className="font-semibold">{row.tests}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={statusVariants[row.status].class}>
                      {statusVariants[row.status].label}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-sm text-muted-foreground">{row.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
