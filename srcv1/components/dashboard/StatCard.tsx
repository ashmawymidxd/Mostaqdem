import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "success" | "warning" | "info" | "destructive";
}

export const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  variant = "default",
}: StatCardProps) => {
  const variantClasses = {
    default: "bg-card border-border",
    success: "bg-success/10 border-success/20",
    warning: "bg-warning/10 border-warning/20",
    info: "bg-info/10 border-info/20",
    destructive: "bg-destructive/10 border-destructive/20",
  };

  const iconClasses = {
    default: "bg-primary text-primary-foreground",
    success: "bg-success text-success-foreground",
    warning: "bg-warning text-warning-foreground",
    info: "bg-info text-info-foreground",
    destructive: "bg-destructive text-destructive-foreground",
  };

  return (
    <Card className={cn("transition-smooth hover:shadow-lg", variantClasses[variant])}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground font-medium">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            {trend && (
              <div className="flex items-center gap-1">
                <span
                  className={cn(
                    "text-sm font-semibold",
                    trend.isPositive ? "text-success" : "text-destructive"
                  )}
                >
                  {trend.isPositive ? "+" : ""}
                  {trend.value}%
                </span>
                <span className="text-xs text-muted-foreground">من الشهر السابق</span>
              </div>
            )}
          </div>
          <div
            className={cn(
              "w-14 h-14 rounded-xl flex items-center justify-center shadow-md",
              iconClasses[variant]
            )}
          >
            <Icon className="w-7 h-7" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
