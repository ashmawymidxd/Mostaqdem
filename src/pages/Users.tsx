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
import { Search, Plus, Edit, Ban, CheckCircle2, Users2 } from "lucide-react";
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
      phoneNumber: "01234567890",
      CountryAddress: "ADHF5890",
      phone: "+966501234567",
      requestsCount: 5,
      status: "نشط",
      joinDate: "2024-01-10",
      workers: [
        {
          id: "W-001",
          name: "أحمد علي",
          nationality: "الفلبين",
          profession: "سائق",
          requestId: "REQ-001",
        },
        {
          id: "W-003",
          name: "محمد حسن",
          nationality: "إندونيسيا",
          profession: "طباخ",
          requestId: "REQ-005",
        },
      ],
    },
    {
      id: "2",
      name: "فاطمة علي الزهراني",
      email: "fatima@example.com",
      idNumber: "1234567891",
      phoneNumber: "01234567891",
      CountryAddress: "ADHF5891",
      phone: "+966502345678",
      requestsCount: 3,
      status: "نشط",
      joinDate: "2024-01-12",
      workers: [
        {
          id: "W-005",
          name: "فاطمة أحمد",
          nationality: "الفلبين",
          profession: "خادمة منزلية",
          requestId: "REQ-008",
        },
      ],
    },
    {
      id: "3",
      name: "عبدالله خالد المطيري",
      email: "abdullah@example.com",
      idNumber: "1234567892",
      phoneNumber: "01234567892",
      CountryAddress: "ADHF5892",
      phone: "+966503456789",
      requestsCount: 8,
      status: "موقوف",
      joinDate: "2023-12-05",
      workers: [
        {
          id: "W-002",
          name: "علي محمد",
          nationality: "بنغلاديش",
          profession: "مهندس",
          requestId: "REQ-003",
        },
        {
          id: "W-007",
          name: "سارة علي",
          nationality: "الهند",
          profession: "ممرضة",
          requestId: "REQ-012",
        },
        {
          id: "W-009",
          name: "خالد أحمد",
          nationality: "باكستان",
          profession: "كهربائي",
          requestId: "REQ-015",
        },
      ],
    },
    {
      id: "4",
      name: "نورة سعد القحطاني",
      email: "nora@example.com",
      idNumber: "1234567893",
      phoneNumber: "01234567893",
      CountryAddress: "ADHF5893",
      phone: "+966504567890",
      requestsCount: 2,
      status: "نشط",
      joinDate: "2024-01-08",
      workers: [
        {
          id: "W-010",
          name: "نور الدين",
          nationality: "إندونيسيا",
          profession: "بستاني",
          requestId: "REQ-018",
        },
      ],
    },
  ];

  const handleAddUser = () => {
    toast.success("تم إضافة العميل بنجاح");
    setIsDialogOpen(false);
  };

  const handleToggleStatus = (userName: string, currentStatus: string) => {
    const newStatus = currentStatus === "نشط" ? "موقوف" : "نشط";
    toast.success(
      `تم ${newStatus === "نشط" ? "تفعيل" : "تعطيل"} حساب ${userName}`
    );
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

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">إدارة العملاء</h1>
          <p className="text-muted-foreground">
            عرض وإدارة أصحاب العمل المسجلين
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              إضافة عميل جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>إضافة عميل جديد</DialogTitle>
              <DialogDescription>أدخل بيانات العميل الجديد</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم الكامل</Label>
                <Input
                  id="name"
                  placeholder="أدخل الاسم"
                  className="text-right"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  className="text-right"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="idNumber">رقم الهوية</Label>
                <Input
                  id="idNumber"
                  placeholder="1234567890"
                  className="text-right"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone"> رقم الهاتف </Label>
                <Input
                  id="phone"
                  placeholder="1234567890"
                  className="text-right"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country"> العنوان الوطني</Label>
                <Input
                  id="country"
                  placeholder="1234567890"
                  className="text-right"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">رقم الجوال</Label>
                <Input
                  id="phone"
                  placeholder="+966501234567"
                  className="text-right"
                />
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
              <p className="text-sm text-muted-foreground mb-2">
                إجمالي العملاء
              </p>
              <p className="text-4xl font-bold text-primary">{users.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">عملاء نشطين</p>
              <p className="text-4xl font-bold text-success">
                {users.filter((u) => u.status === "نشط").length}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                عملاء موقوفين
              </p>
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
                <TableHead className="text-right">العميل</TableHead>
                <TableHead className="text-right">البريد الإلكتروني</TableHead>
                <TableHead className="text-right">رقم الهوية</TableHead>
                <TableHead className="text-right">رقم الجوال</TableHead>
                <TableHead className="text-right">عدد الطلبات</TableHead>
                <TableHead className="text-right">العمال</TableHead>
                <TableHead className="text-right">تاريخ التسجيل</TableHead>
                <TableHead className="text-right">رقم الهاتف</TableHead>
                <TableHead className="text-right"> العنوان الوطني</TableHead>
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
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Users2 className="w-4 h-4" />
                          {user.workers.length} عامل
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>
                            العمال المستقدمين لـ {user.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="text-right">
                                  رقم العامل
                                </TableHead>
                                <TableHead className="text-right">
                                  الاسم
                                </TableHead>
                                <TableHead className="text-right">
                                  الجنسية
                                </TableHead>
                                <TableHead className="text-right">
                                  المهنة
                                </TableHead>
                                <TableHead className="text-right">
                                  رقم الطلب
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {user.workers.map((worker) => (
                                <TableRow key={worker.id}>
                                  <TableCell className="font-mono font-bold">
                                    {worker.id}
                                  </TableCell>
                                  <TableCell className="font-medium">
                                    {worker.name}
                                  </TableCell>
                                  <TableCell>{worker.nationality}</TableCell>
                                  <TableCell>
                                    <Badge variant="outline">
                                      {worker.profession}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="font-mono">
                                    {worker.requestId}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </DialogContent>
                    </Dialog>                                    
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {user.joinDate}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {user.phoneNumber}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {user.CountryAddress}
                  </TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          handleToggleStatus(user.name, user.status)
                        }
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
