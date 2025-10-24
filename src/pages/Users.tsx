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
import { useNavigate } from "react-router-dom";
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
import {
  Search,
  Eye,
  Plus,
  Edit,
  Ban,
  CheckCircle2,
  Users2,
} from "lucide-react";
import { toast } from "sonner";

const Users = () => {
  const navigate = useNavigate();
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
      requests: [
        {
          id: "12345",
          employer: "محمد أحمد السعيد",
          nationality: "سعودي",
          workerName: "أحمد محمود",
          workerNationality: "مصري",
          type: "استقدام عائلي",
          profession: "سائق خاص",
          status: "جديد",
          requestDate: "منز يومين",
          statusDate: "منز يوم",
          employee: "احمد حسن",
        },
        {
          id: "12344",
          employer: "محمد أحمد السعيد",
          nationality: "سعودي",
          workerName: "فاطمة أحمد",
          workerNationality: "فلبيني",
          type: "استقدام مهني",
          profession: "عاملة منزلية",
          status: "قيد المراجعة",
          requestDate: "منز ساعة",
          statusDate: "منز دقيقة",
          employee: "احمد العتيدي",
        },
        {
          id: "12343",
          employer: "محمد أحمد السعيد",
          nationality: "سعودي",
          workerName: "راجا سينغ",
          workerNationality: "هندي",
          type: "استقدام عائلي",
          profession: "طباخ",
          status: "موافق عليه",
          requestDate: "منز اسبوع",
          statusDate: "منز يوم",
          employee: "احمد مالك",
        },
        {
          id: "12342",
          employer: "محمد أحمد السعيد",
          nationality: "سعودي",
          workerName: "ماريا سانتوس",
          workerNationality: "فلبيني",
          type: "استقدام مهني",
          profession: "مربية أطفال",
          status: "مرفوض",
          requestDate: "منز شهر",
          statusDate: "منز اسبوعين",
          employee: "محمد حسن",
        },
        {
          id: "12341",
          employer: "محمد أحمد السعيد",
          nationality: "سعودي",
          workerName: "محمد حسن",
          workerNationality: "بنغلاديشي",
          type: "استقدام عائلي",
          profession: "بستاني",
          status: "قيد المراجعة",
          requestDate: "منز شهرين",
          statusDate: "منز شهر",
          employee: "حمادة حسن",
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
      requests: [
        {
          id: "12345",
          employer: "فاطمة علي الزهراني",
          nationality: "سعودي",
          workerName: "أحمد محمود",
          workerNationality: "مصري",
          type: "استقدام عائلي",
          profession: "سائق خاص",
          status: "جديد",
          requestDate: "منز يومين",
          statusDate: "منز يوم",
          employee: "احمد حسن",
        },
        {
          id: "12344",
          employer: "فاطمة علي الزهراني",
          nationality: "سعودي",
          workerName: "فاطمة أحمد",
          workerNationality: "فلبيني",
          type: "استقدام مهني",
          profession: "عاملة منزلية",
          status: "قيد المراجعة",
          requestDate: "منز ساعة",
          statusDate: "منز دقيقة",
          employee: "احمد العتيدي",
        },
        {
          id: "12343",
          employer: "فاطمة علي الزهراني",
          nationality: "سعودي",
          workerName: "راجا سينغ",
          workerNationality: "هندي",
          type: "استقدام عائلي",
          profession: "طباخ",
          status: "موافق عليه",
          requestDate: "منز اسبوع",
          statusDate: "منز يوم",
          employee: "احمد مالك",
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
      requests: [
        {
          id: "12343",
          employer: "عبدالله خالد المطيري",
          nationality: "سعودي",
          workerName: "راجا سينغ",
          workerNationality: "هندي",
          type: "استقدام عائلي",
          profession: "طباخ",
          status: "موافق عليه",
          requestDate: "منز اسبوع",
          statusDate: "منز يوم",
          employee: "احمد مالك",
        },
        {
          id: "12342",
          employer: "عبدالله خالد المطيري",
          nationality: "سعودي",
          workerName: "ماريا سانتوس",
          workerNationality: "فلبيني",
          type: "استقدام مهني",
          profession: "مربية أطفال",
          status: "مرفوض",
          requestDate: "منز شهر",
          statusDate: "منز اسبوعين",
          employee: "محمد حسن",
        },
        {
          id: "12341",
          employer: "عبدالله خالد المطيري",
          nationality: "سعودي",
          workerName: "محمد حسن",
          workerNationality: "بنغلاديشي",
          type: "استقدام عائلي",
          profession: "بستاني",
          status: "قيد المراجعة",
          requestDate: "منز شهرين",
          statusDate: "منز شهر",
          employee: "حمادة حسن",
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
      requests: [
        {
          id: "12345",
          employer: "نورة سعد القحطاني",
          nationality: "سعودي",
          workerName: "أحمد محمود",
          workerNationality: "مصري",
          type: "استقدام عائلي",
          profession: "سائق خاص",
          status: "جديد",
          requestDate: "منز يومين",
          statusDate: "منز يوم",
          employee: "احمد حسن",
        },
        {
          id: "12344",
          employer: "نورة سعد القحطاني",
          nationality: "سعودي",
          workerName: "فاطمة أحمد",
          workerNationality: "فلبيني",
          type: "استقدام مهني",
          profession: "عاملة منزلية",
          status: "قيد المراجعة",
          requestDate: "منز ساعة",
          statusDate: "منز دقيقة",
          employee: "احمد العتيدي",
        },
        {
          id: "12343",
          employer: "نورة سعد القحطاني",
          nationality: "سعودي",
          workerName: "راجا سينغ",
          workerNationality: "هندي",
          type: "استقدام عائلي",
          profession: "طباخ",
          status: "موافق عليه",
          requestDate: "منز اسبوع",
          statusDate: "منز يوم",
          employee: "احمد مالك",
        },
        {
          id: "12342",
          employer: "نورة سعد القحطاني",
          nationality: "سعودي",
          workerName: "ماريا سانتوس",
          workerNationality: "فلبيني",
          type: "استقدام مهني",
          profession: "مربية أطفال",
          status: "مرفوض",
          requestDate: "منز شهر",
          statusDate: "منز اسبوعين",
          employee: "محمد حسن",
        },
        {
          id: "12341",
          employer: "نورة سعد القحطاني",
          nationality: "سعودي",
          workerName: "محمد حسن",
          workerNationality: "بنغلاديشي",
          type: "استقدام عائلي",
          profession: "بستاني",
          status: "قيد المراجعة",
          requestDate: "منز شهرين",
          statusDate: "منز شهر",
          employee: "حمادة حسن",
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
                          {user.requests.length} طلب
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-6xl">
                        <DialogHeader>
                          <DialogTitle>
                            طلبات المستقدمين لـ {user.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="text-right">
                                  رقم الطلب
                                </TableHead>
                                <TableHead className="text-right">
                                  صاحب العمل
                                </TableHead>
                                <TableHead className="text-right">
                                  اسم العامل
                                </TableHead>
                                <TableHead className="text-right">
                                  الجنسية
                                </TableHead>
                                <TableHead className="text-right">
                                  المهنة
                                </TableHead>
                                <TableHead className="text-right">
                                  نوع الطلب
                                </TableHead>
                                <TableHead className="text-right">
                                  الحالة
                                </TableHead>
                                <TableHead className="text-right">
                                  الموظف
                                </TableHead>
                                <TableHead className="text-right">
                                  تاريخ الطلب
                                </TableHead>
                                <TableHead className="text-right">
                                  اخر تعديل
                                </TableHead>
                                <TableHead className="text-right">
                                  الإجراءات
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {user.requests.map((request) => (
                                <TableRow
                                  key={request.id}
                                  className="hover:bg-muted/50"
                                >
                                  <TableCell className="font-mono font-bold">
                                    #{request.id}
                                  </TableCell>
                                  <TableCell className="font-medium">
                                    {request.employer}
                                  </TableCell>
                                  <TableCell>{request.workerName}</TableCell>
                                  <TableCell>
                                    {request.workerNationality}
                                  </TableCell>
                                  <TableCell>{request.profession}</TableCell>
                                  <TableCell>{request.type}</TableCell>
                                  <TableCell>
                                    {getStatusBadge(request.status)}
                                  </TableCell>
                                  <TableCell>{request.employee}</TableCell>
                                  <TableCell className="text-muted-foreground">
                                    {request.requestDate}
                                  </TableCell>
                                  <TableCell className="text-muted-foreground">
                                    {request.statusDate}
                                  </TableCell>
                                  <TableCell>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="gap-2"
                                      onClick={() =>
                                        navigate(`/requests/${request.id}`)
                                      }
                                    >
                                      <Eye className="w-4 h-4" />
                                      عرض
                                    </Button>
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
