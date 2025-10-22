import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Search, Plus, Eye, Star, Building2, FileCheck } from "lucide-react";
import { toast } from "sonner";

const Offices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const offices = [
    {
      id: "1",
      name: "مكتب الخليج للاستقدام",
      license: "LIC-2024-001",
      expiryDate: "2025-12-31",
      requestsCount: 45,
      completedRequests: 38,
      rating: 4.5,
      phone: "+966112345678",
      email: "gulf@recruitment.sa",
      manager: "أحمد عبدالله",
      managerInstead: "أحمد عبدالله",
      status: "نشط",
      requests: "5 طلبات",
    },
    {
      id: "2",
      name: "مكتب الرياض الدولي",
      license: "LIC-2024-002",
      expiryDate: "2025-11-30",
      requestsCount: 62,
      completedRequests: 55,
      rating: 4.8,
      phone: "+966112345679",
      email: "riyadh@recruitment.sa",
      manager: "محمد سعود",
      managerInstead: "محمد سعود",
      status: "نشط",
      requests: "0 طلبات",
    },
    {
      id: "3",
      name: "مكتب النجاح للخدمات",
      license: "LIC-2024-003",
      expiryDate: "2024-03-15",
      requestsCount: 28,
      completedRequests: 20,
      rating: 3.9,
      phone: "+966112345680",
      email: "success@recruitment.sa",
      manager: "خالد أحمد",
      managerInstead: "خالد أحمد",
      status: "منتهي الترخيص",
      requests: "3 طلبات",
    },
    {
      id: "4",
      name: "مكتب الأمانة للاستقدام",
      license: "LIC-2024-004",
      expiryDate: "2025-10-20",
      requestsCount: 51,
      completedRequests: 48,
      rating: 4.7,
      phone: "+966112345681",
      email: "amana@recruitment.sa",
      manager: "عبدالرحمن فهد",
      managerInstead: "عبدالرحمن فهد",
      status: "نشط",
      requests: "12 طلبات",
    },
  ];

  const handleAddOffice = () => {
    toast.success("تم إضافة المكتب بنجاح");
    setIsDialogOpen(false);
  };

  const getStatusBadge = (status: string) => {
    return (
      <Badge
        variant={status === "نشط" ? "outline" : "destructive"}
        className={
          status === "نشط" ? "bg-success/10 text-success border-success" : ""
        }
      >
        {status}
      </Badge>
    );
  };

  const getRatingStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 fill-secondary text-secondary" />
        <span className="font-semibold">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">إدارة مكاتب الاستقدام</h1>
          <p className="text-muted-foreground">
            عرض وإدارة مكاتب الاستقدام المرخصة
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              إضافة مكتب جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>إضافة مكتب جديد</DialogTitle>
              <DialogDescription>أدخل بيانات مكتب الاستقدام</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="officeName">اسم المكتب</Label>
                  <Input
                    id="officeName"
                    placeholder="مكتب..."
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="license">رقم الترخيص</Label>
                  <Input
                    id="license"
                    placeholder="LIC-2024-XXX"
                    className="text-right"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="manager">المدير المسؤول</Label>
                  <Input
                    id="manager"
                    placeholder="الاسم"
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="managerInstead">المدير المانوب</Label>
                  <Input
                    id="managerInstead"
                    placeholder="الاسم"
                    className="text-right"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="officeEmail">البريد الإلكتروني</Label>
                  <Input
                    id="officeEmail"
                    type="email"
                    placeholder="office@example.com"
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">تاريخ انتهاء الترخيص</Label>
                  <Input id="expiryDate" type="date" className="text-right" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="officePhone">رقم الجوال</Label>
                  <Input
                    id="officePhone"
                    placeholder="+966501234567"
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="officePhone">رقم الجوال الاخر</Label>
                  <Input
                    id="officePhone"
                    placeholder="+966501234567"
                    className="text-right"
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                إلغاء
              </Button>
              <Button onClick={handleAddOffice}>إضافة</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  إجمالي المكاتب
                </p>
                <p className="text-3xl font-bold">{offices.length}</p>
              </div>
              <Building2 className="w-10 h-10 text-primary opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">مكاتب نشطة</p>
                <p className="text-3xl font-bold text-success">
                  {offices.filter((o) => o.status === "نشط").length}
                </p>
              </div>
              <FileCheck className="w-10 h-10 text-success opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">طلبات نشطة</p>
                <p className="text-3xl font-bold text-info">
                  {offices.reduce((sum, o) => sum + o.requestsCount, 0)}
                </p>
              </div>
              <FileCheck className="w-10 h-10 text-info opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  متوسط التقييم
                </p>
                <p className="text-3xl font-bold text-secondary">4.5</p>
              </div>
              <Star className="w-10 h-10 text-secondary opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            البحث
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="بحث باسم المكتب أو رقم الترخيص..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 text-right"
            />
          </div>
        </CardContent>
      </Card>

      {/* Offices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offices.map((office) => (
          <Card key={office.id} className="hover:shadow-lg transition-smooth">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{office.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      الترخيص: {office.license}
                    </p>
                  </div>
                </div>
                {getStatusBadge(office.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">المدير المسؤول</p>
                  <p className="font-semibold">{office.manager}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">المدير المانوب</p>
                  <p className="font-semibold">{office.managerInstead}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">تاريخ انتهاء الترخيص</p>
                  <p className="font-semibold">{office.expiryDate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">الهاتف</p>
                  <p className="font-mono text-xs">{office.phone}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">الهاتف الاخر</p>
                  <p className="font-mono text-xs">{office.phone}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">البريد الإلكتروني</p>
                  <p className="text-xs">{office.email}</p>
                </div>
                {/* requests */}
                <div>
                  <p className="text-sm text-muted-foreground">
                    الطلبات الواردة:{" "}
                    <span className="bg-gray-200 rounded-full px-2 py-1">
                      {office.requests}
                    </span>
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">نسبة الإنجاز</span>
                  <span className="font-semibold">
                    {Math.round(
                      (office.completedRequests / office.requestsCount) * 100
                    )}
                    %
                  </span>
                </div>
                <Progress
                  value={
                    (office.completedRequests / office.requestsCount) * 100
                  }
                  className="h-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{office.completedRequests} مكتمل</span>
                  <span>{office.requestsCount} إجمالي</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    التقييم:
                  </span>
                  {getRatingStars(office.rating)}
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Eye className="w-4 h-4" />
                  عرض التفاصيل
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Offices;
