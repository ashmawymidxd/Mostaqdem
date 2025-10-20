import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  Users,
  MapPin,
  Globe,
  Clock,
  XCircle,
  Star,
} from "lucide-react";
import { toast } from "sonner";

const Reports = () => {
  const monthlyData = [
    { month: "يناير", requests: 65, approved: 52, rejected: 13 },
    { month: "فبراير", requests: 78, approved: 63, rejected: 15 },
    { month: "مارس", requests: 90, approved: 75, rejected: 15 },
    { month: "أبريل", requests: 81, approved: 68, rejected: 13 },
    { month: "مايو", requests: 95, approved: 80, rejected: 15 },
    { month: "يونيو", requests: 112, approved: 95, rejected: 17 },
  ];

  const regionData = [
    { name: "الرياض", value: 145, color: "hsl(var(--primary))" },
    { name: "جدة", value: 98, color: "hsl(var(--secondary))" },
    { name: "الدمام", value: 67, color: "hsl(var(--info))" },
    { name: "مكة", value: 54, color: "hsl(var(--success))" },
    { name: "المدينة", value: 43, color: "hsl(var(--warning))" },
  ];

  const nationalityData = [
    { name: "فلبيني", value: 128, color: "hsl(var(--primary))" },
    { name: "هندي", value: 95, color: "hsl(var(--secondary))" },
    { name: "مصري", value: 78, color: "hsl(var(--info))" },
    { name: "بنغلاديشي", value: 65, color: "hsl(var(--success))" },
    { name: "أخرى", value: 41, color: "hsl(var(--muted))" },
  ];

  const performanceData = [
    { metric: "متوسط وقت المعالجة", value: "7.2 يوم", icon: Clock, color: "info" },
    { metric: "نسبة الموافقة", value: "84%", icon: TrendingUp, color: "success" },
    { metric: "نسبة الرفض", value: "16%", icon: XCircle, color: "destructive" },
    { metric: "متوسط التقييم", value: "4.5/5", icon: Star, color: "secondary" },
  ];

  const handleExport = (format: string) => {
    toast.success(`جاري تصدير التقرير بصيغة ${format}`);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">التقارير والإحصائيات</h1>
          <p className="text-muted-foreground">
            عرض التقارير والإحصائيات التفصيلية
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2" onClick={() => handleExport("PDF")}>
            <Download className="w-4 h-4" />
            تصدير PDF
          </Button>
          <Button variant="outline" className="gap-2" onClick={() => handleExport("Excel")}>
            <Download className="w-4 h-4" />
            تصدير Excel
          </Button>
        </div>
      </div>

      {/* Date Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            فترة التقرير
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>من تاريخ</Label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-lg text-right"
                defaultValue="2024-01-01"
              />
            </div>
            <div className="space-y-2">
              <Label>إلى تاريخ</Label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-lg text-right"
                defaultValue="2024-06-30"
              />
            </div>
            <div className="space-y-2">
              <Label>نوع التقرير</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع التقارير</SelectItem>
                  <SelectItem value="monthly">تقرير شهري</SelectItem>
                  <SelectItem value="quarterly">تقرير ربع سنوي</SelectItem>
                  <SelectItem value="annual">تقرير سنوي</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">تطبيق الفلتر</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">متوسط وقت المعالجة</p>
                <p className="text-3xl font-bold text-info">7.2 يوم</p>
              </div>
              <Calendar className="w-10 h-10 text-info opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">نسبة الموافقة</p>
                <p className="text-3xl font-bold text-success">84%</p>
              </div>
              <TrendingUp className="w-10 h-10 text-success opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">نسبة الرفض</p>
                <p className="text-3xl font-bold text-destructive">16%</p>
              </div>
              <FileText className="w-10 h-10 text-destructive opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">إجمالي الطلبات</p>
                <p className="text-3xl font-bold text-primary">521</p>
              </div>
              <Users className="w-10 h-10 text-primary opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Requests */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="w-5 h-5 text-primary" />
              طلبات الاستقدام الشهرية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="requests"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  name="إجمالي الطلبات"
                />
                <Line
                  type="monotone"
                  dataKey="approved"
                  stroke="hsl(var(--success))"
                  strokeWidth={2}
                  name="موافق عليها"
                />
                <Line
                  type="monotone"
                  dataKey="rejected"
                  stroke="hsl(var(--destructive))"
                  strokeWidth={2}
                  name="مرفوضة"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Requests by Region */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              توزيع الطلبات حسب المنطقة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Requests by Nationality */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              توزيع الطلبات حسب الجنسية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={nationalityData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                  {nationalityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Summary Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              ملخص الأداء
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">متوسط الوقت للموافقة</span>
                  <span className="font-semibold">5.8 يوم</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">متوسط الوقت للرفض</span>
                  <span className="font-semibold">3.2 يوم</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">أكثر المكاتب نشاطاً</span>
                  <span className="font-semibold">مكتب الرياض الدولي</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">أكثر المهن طلباً</span>
                  <span className="font-semibold">عاملة منزلية</span>
                </div>
              </div>
              <div className="pt-4 border-t">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-success">437</p>
                    <p className="text-xs text-muted-foreground">طلبات موافق عليها</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-destructive">84</p>
                    <p className="text-xs text-muted-foreground">طلبات مرفوضة</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
