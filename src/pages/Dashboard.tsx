import {
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Users,
  Building2,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Dashboard = () => {
  const monthlyData = [
    { name: "يناير", requests: 65 },
    { name: "فبراير", requests: 78 },
    { name: "مارس", requests: 90 },
    { name: "أبريل", requests: 81 },
    { name: "مايو", requests: 95 },
    { name: "يونيو", requests: 112 },
  ];

  const recentRequests = [
    {
      id: "12345",
      employer: "محمد أحمد السعيد",
      type: "استقدام عائلي",
      status: "جديد",
      date: "2024-01-15",
    },
    {
      id: "12344",
      employer: "فاطمة علي الزهراني",
      type: "استقدام مهني",
      status: "قيد المراجعة",
      date: "2024-01-14",
    },
    {
      id: "12343",
      employer: "عبدالله خالد المطيري",
      type: "استقدام عائلي",
      status: "موافق عليه",
      date: "2024-01-13",
    },
    {
      id: "12342",
      employer: "نورة سعد القحطاني",
      type: "استقدام مهني",
      status: "مرفوض",
      date: "2024-01-12",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      "جديد": "default",
      "قيد المراجعة": "secondary",
      "موافق عليه": "outline",
      "مرفوض": "destructive",
    };
    return <Badge variant={variants[status] || "default"}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">لوحة التحكم</h1>
        <p className="text-muted-foreground">
          مرحباً بك في نظام إدارة الاستقدام
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="طلبات جديدة"
          value="24"
          icon={FileText}
          trend={{ value: 12, isPositive: true }}
          variant="info"
        />
        <StatCard
          title="قيد المعالجة"
          value="18"
          icon={Clock}
          trend={{ value: -5, isPositive: false }}
          variant="warning"
        />
        <StatCard
          title="طلبات مكتملة"
          value="156"
          icon={CheckCircle2}
          trend={{ value: 8, isPositive: true }}
          variant="success"
        />
        <StatCard
          title="طلبات مرفوضة"
          value="12"
          icon={XCircle}
          variant="destructive"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              طلبات الاستقدام الشهرية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="requests" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              نمو الطلبات
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="requests"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              إحصائيات المستخدمين
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">أصحاب عمل نشطين</span>
              <span className="text-2xl font-bold">248</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">مستخدمين جدد هذا الشهر</span>
              <span className="text-2xl font-bold text-success">32</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              مكاتب الاستقدام
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">مكاتب مرخصة</span>
              <span className="text-2xl font-bold">45</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">طلبات نشطة</span>
              <span className="text-2xl font-bold text-info">128</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Requests Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>آخر الطلبات</CardTitle>
          <Button variant="outline" size="sm">
            عرض الكل
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">رقم الطلب</TableHead>
                <TableHead className="text-right">صاحب العمل</TableHead>
                <TableHead className="text-right">نوع الطلب</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">التاريخ</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-mono">#{request.id}</TableCell>
                  <TableCell className="font-medium">{request.employer}</TableCell>
                  <TableCell>{request.type}</TableCell>
                  <TableCell>{getStatusBadge(request.status)}</TableCell>
                  <TableCell className="text-muted-foreground">{request.date}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      عرض التفاصيل
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
