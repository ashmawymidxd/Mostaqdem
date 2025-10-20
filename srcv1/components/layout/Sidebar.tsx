import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Users,
  Building2,
  BarChart3,
  Settings,
  User,
  HelpCircle,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "لوحة التحكم", icon: LayoutDashboard, path: "/dashboard" },
  { title: "طلبات الاستقدام", icon: FileText, path: "/requests" },
  { title: "المستخدمين", icon: Users, path: "/users" },
  { title: "مكاتب الاستقدام", icon: Building2, path: "/offices" },
  { title: "التقارير", icon: BarChart3, path: "/reports" },
  { title: "الإعدادات", icon: Settings, path: "/settings" },
  { title: "الملف الشخصي", icon: User, path: "/profile" },
  { title: "الدعم الفني", icon: HelpCircle, path: "/support" },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-sidebar border-l border-sidebar-border flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-sidebar-primary flex items-center justify-center">
            <Shield className="w-6 h-6 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">
              نظام الاستقدام
            </h1>
            <p className="text-xs text-sidebar-foreground/60">
              المملكة العربية السعودية
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                      : "text-sidebar-foreground"
                  )
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="text-xs text-sidebar-foreground/60 text-center">
          © 2024 جميع الحقوق محفوظة
        </div>
      </div>
    </aside>
  );
};
