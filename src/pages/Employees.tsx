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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Plus, Edit, Trash2, Eye, FileText } from "lucide-react";

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);

  const employees = [
    {
      id: "1",
      name: "محمد أحمد السعيد",
      email: "mohammed@example.com",
      phone: "0501234567",
      department: "إدارة الطلبات",
      position: "مشرف طلبات",
      status: "نشط",
      requests: [
        { id: "REQ-001", client: "علي أحمد", type: "مهني", status: "قيد المراجعة" },
        { id: "REQ-005", client: "سارة محمد", type: "منزلي", status: "مكتمل" },
        { id: "REQ-012", client: "خالد عبدالله", type: "مهني", status: "جديد" },
      ],
    },
    {
      id: "2",
      name: "سارة علي الزهراني",
      email: "sara@example.com",
      phone: "0509876543",
      department: "خدمة العملاء",
      position: "موظفة دعم",
      status: "نشط",
      requests: [
        { id: "REQ-003", client: "فاطمة سعد", type: "منزلي", status: "قيد المراجعة" },
        { id: "REQ-008", client: "محمد علي", type: "مهني", status: "مكتمل" },
      ],
    },
    {
      id: "3",
      name: "عبدالله خالد المطيري",
      email: "abdullah@example.com",
      phone: "0505555555",
      department: "الموارد البشرية",
      position: "مدير موارد",
      status: "إجازة",
      requests: [
        { id: "REQ-015", client: "نورة أحمد", type: "مهني", status: "مرفوض" },
      ],
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      "نشط": "bg-success/10 text-success border-success",
      "إجازة": "bg-warning/10 text-warning border-warning",
      "موقوف": "bg-destructive/10 text-destructive border-destructive",
    };
    return (
      <Badge variant="outline" className={variants[status]}>
        {status}
      </Badge>
    );
  };

  const getRequestStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      "جديد": "bg-blue-100 text-blue-700",
      "قيد المراجعة": "bg-yellow-100 text-yellow-700",
      "مكتمل": "bg-green-100 text-green-700",
      "مرفوض": "bg-red-100 text-red-700",
    };
    return (
      <Badge className={variants[status]}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">إدارة الموظفين</h1>
          <p className="text-muted-foreground">
            عرض وإدارة موظفي النظام
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              إضافة موظف جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>إضافة موظف جديد</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="emp-name">الاسم الكامل</Label>
                <Input id="emp-name" placeholder="أدخل الاسم الكامل" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emp-email">البريد الإلكتروني</Label>
                <Input id="emp-email" type="email" placeholder="example@domain.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emp-phone">رقم الجوال</Label>
                <Input id="emp-phone" placeholder="05xxxxxxxx" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emp-department">القسم</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر القسم" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="requests">إدارة الطلبات</SelectItem>
                    <SelectItem value="support">خدمة العملاء</SelectItem>
                    <SelectItem value="hr">الموارد البشرية</SelectItem>
                    <SelectItem value="finance">المالية</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="emp-position">المنصب</Label>
                <Input id="emp-position" placeholder="أدخل المنصب الوظيفي" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emp-status">الحالة</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">نشط</SelectItem>
                    <SelectItem value="vacation">إجازة</SelectItem>
                    <SelectItem value="suspended">موقوف</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                إلغاء
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>حفظ</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>البحث عن موظف</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="بحث بالاسم، البريد الإلكتروني، أو القسم..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 text-right"
            />
          </div>
        </CardContent>
      </Card>

      {/* Employees Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">الرقم</TableHead>
                <TableHead className="text-right">الاسم</TableHead>
                <TableHead className="text-right">البريد الإلكتروني</TableHead>
                <TableHead className="text-right">رقم الجوال</TableHead>
                <TableHead className="text-right">القسم</TableHead>
                <TableHead className="text-right">المنصب</TableHead>
                <TableHead className="text-right">الطلبات</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id} className="hover:bg-muted/50">
                  <TableCell className="font-mono font-bold">#{employee.id}</TableCell>
                  <TableCell className="font-medium">{employee.name}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell className="font-mono">{employee.phone}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="gap-2"
                          onClick={() => setSelectedEmployee(employee)}
                        >
                          <FileText className="w-4 h-4" />
                          {employee.requests.length} طلب
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>الطلبات التي يشرف عليها {employee.name}</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="text-right">رقم الطلب</TableHead>
                                <TableHead className="text-right">العميل</TableHead>
                                <TableHead className="text-right">نوع الطلب</TableHead>
                                <TableHead className="text-right">الحالة</TableHead>
                                <TableHead className="text-right">إجراءات</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {employee.requests.map((request) => (
                                <TableRow key={request.id}>
                                  <TableCell className="font-mono font-bold">{request.id}</TableCell>
                                  <TableCell>{request.client}</TableCell>
                                  <TableCell>
                                    <Badge variant="outline">
                                      {request.type}
                                    </Badge>
                                  </TableCell>
                                  <TableCell>
                                    {getRequestStatusBadge(request.status)}
                                  </TableCell>
                                  <TableCell>
                                    <Button variant="ghost" size="sm">
                                      <Eye className="w-4 h-4" />
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
                  <TableCell>{getStatusBadge(employee.status)}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive">
                        <Trash2 className="w-4 h-4" />
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

export default Employees;
