import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Upload,
  FlaskConical,
  CreditCard,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { Logo } from "./Logo";

const mainItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/upload", label: "Upload Spec", icon: Upload },
  { to: "/results", label: "Test Results", icon: FlaskConical },
  { to: "/pricing", label: "Billing", icon: CreditCard },
];

const secondaryItems = [
  { to: "#", label: "Settings", icon: Settings },
  { to: "#", label: "Help & Docs", icon: HelpCircle },
];

export const AppSidebar = () => {
  const { pathname } = useLocation();
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="flex h-16 items-center px-6 border-b border-sidebar-border">
        <Logo variant="light" />
      </div>

      <nav className="flex-1 space-y-1 px-3 py-6">
        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50">
          Workspace
        </p>
        {mainItems.map((item) => {
          const active = pathname === item.to;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-base ${
                active
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-soft"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          );
        })}

        <p className="px-3 pb-2 pt-6 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50">
          General
        </p>
        {secondaryItems.map((item) => (
          <a
            key={item.label}
            href={item.to}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-base"
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </a>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3 rounded-lg p-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-hero text-sm font-semibold text-primary-foreground">
            AK
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium text-sidebar-accent-foreground">Alex Kim</p>
            <p className="truncate text-xs text-sidebar-foreground/60">Pro plan</p>
          </div>
          <button className="text-sidebar-foreground/60 hover:text-sidebar-accent-foreground transition-colors">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
