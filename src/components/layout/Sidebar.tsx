import { useState } from "react";
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
  UserCog,
  Briefcase,
  ChevronDown,
  ChevronUp,
  FolderPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "لوحة التحكم", icon: LayoutDashboard, path: "/dashboard" },
  { 
    title: "طلبات الاستقدام", 
    icon: FileText, 
    path: "/requests",
    subItems: [
      { title: "جميع الطلبات", path: "/requests" },
      { title: "الطلبات المهنية", path: "/requests/professional" },
      { title: "الطلبات المنزلية", path: "/requests/domestic" },
    ]
  },
  { title: "العملاء", icon: Users, path: "/users" },
  { title: "العمال", icon: Briefcase, path: "/workers" },
  { title: "الموظفين", icon: UserCog, path: "/employees" },
  { title: "مكاتب الاستقدام", icon: Building2, path: "/offices" },
  { 
    title: "إضافات مهمة", 
    icon: FolderPlus, 
    path: "/additions",
    subItems: [
      { title: "المهن", path: "/professions" },
      { title: "الدول", path: "/countries" },
      { title: "المدن", path: "/cities" },
    ]
  },
  { title: "التقارير", icon: BarChart3, path: "/reports" },
  { title: "الإعدادات", icon: Settings, path: "/settings" },
  { title: "الملف الشخصي", icon: User, path: "/profile" },
  { title: "الدعم الفني", icon: HelpCircle, path: "/support" },
];

export const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (path: string) => {
    setExpandedItems((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  };

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
              {item.subItems ? (
                <div>
                  <button
                    onClick={() => toggleExpand(item.path)}
                    className={cn(
                      "w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-smooth",
                      "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                    {expandedItems.includes(item.path) ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {expandedItems.includes(item.path) && (
                    <ul className="mr-4 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.path}>
                          <NavLink
                            to={subItem.path}
                            end
                            className={({ isActive }) =>
                              cn(
                                "flex items-center gap-3 px-4 py-2 rounded-lg transition-smooth text-sm",
                                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                isActive
                                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                                  : "text-sidebar-foreground"
                              )
                            }
                          >
                            <span>{subItem.title}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
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
              )}
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
