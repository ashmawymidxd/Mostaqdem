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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Search, Plus, Edit, Ban, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const users = [
    {
      id: "1",
      name: "محمد أحمد السعيد",
      email: "mohammed@example.com",
      idNumber: "1234567890",
      phone: "+966501234567",
      requestsCount: 5,
      status: "نشط",
      joinDate: "2024-01-10",
    },
    {
      id: "2",
      name: "فاطمة علي الزهراني",
      email: "fatima@example.com",
      idNumber: "1234567891",
      phone: "+966502345678",
      requestsCount: 3,
      status: "نشط",
      joinDate: "2024-01-12",
    },
    {
      id: "3",
      name: "عبدالله خالد المطيري",
      email: "abdullah@example.com",
      idNumber: "1234567892",
      phone: "+966503456789",
      requestsCount: 8,
      status: "موقوف",
      joinDate: "2023-12-05",
    },
    {
      id: "4",
      name: "نورة سعد القحطاني",
      email: "nora@example.com",
      idNumber: "1234567893",
      phone: "+966504567890",
      requestsCount: 2,
      status: "نشط",
      joinDate: "2024-01-08",
    },
  ];

  const handleAddUser = () => {
    toast.success("تم إضافة المستخدم بنجاح");
    setIsDialogOpen(false);
  };

  const handleToggleStatus = (userName: string, currentStatus: string) => {
    const newStatus = currentStatus === "نشط" ? "موقوف" : "نشط";
    toast.success(`تم ${newStatus === "نشط" ? "تفعيل" : "تعطيل"} حساب ${userName}`);
  };

  const getStatusBadge = (status: string) => {
    return (
      <Badge
        variant={status === "نشط" ? "outline" : "destructive"}
        className={status === "نشط" ? "bg-success/10 text-success border-success" : ""}
      >
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">إدارة المستخدمين</h1>
          <p className="text-muted-foreground">
            عرض وإدارة أصحاب العمل المسجلين
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              إضافة مستخدم جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>إضافة مستخدم جديد</DialogTitle>
              <DialogDescription>
                أدخل بيانات المستخدم الجديد
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم الكامل</Label>
                <Input id="name" placeholder="أدخل الاسم" className="text-right" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input id="email" type="email" placeholder="example@example.com" className="text-right" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="idNumber">رقم الهوية</Label>
                <Input id="idNumber" placeholder="1234567890" className="text-right" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">رقم الجوال</Label>
                <Input id="phone" placeholder="+966501234567" className="text-right" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                إلغاء
              </Button>
              <Button onClick={handleAddUser}>إضافة</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">إجمالي المستخدمين</p>
              <p className="text-4xl font-bold text-primary">{users.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">مستخدمين نشطين</p>
              <p className="text-4xl font-bold text-success">
                {users.filter((u) => u.status === "نشط").length}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">مستخدمين موقوفين</p>
              <p className="text-4xl font-bold text-destructive">
                {users.filter((u) => u.status === "موقوف").length}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            البحث والفلترة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="بحث بالاسم، البريد الإلكتروني، أو رقم الهوية..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 text-right"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="حالة الحساب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الحالات</SelectItem>
                <SelectItem value="active">نشط</SelectItem>
                <SelectItem value="suspended">موقوف</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">المستخدم</TableHead>
                <TableHead className="text-right">البريد الإلكتروني</TableHead>
                <TableHead className="text-right">رقم الهوية</TableHead>
                <TableHead className="text-right">رقم الجوال</TableHead>
                <TableHead className="text-right">عدد الطلبات</TableHead>
                <TableHead className="text-right">تاريخ التسجيل</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className="font-mono">{user.idNumber}</TableCell>
                  <TableCell className="font-mono">{user.phone}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{user.requestsCount} طلب</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{user.joinDate}</TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleToggleStatus(user.name, user.status)}
                      >
                        {user.status === "نشط" ? (
                          <Ban className="w-4 h-4 text-destructive" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-success" />
                        )}
                      </Button>
                    </div>
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

export default Users;
