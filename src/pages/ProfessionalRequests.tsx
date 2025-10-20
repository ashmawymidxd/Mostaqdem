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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Eye, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfessionalRequests = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const requests = [
    {
      id: "12344",
      employer: "فاطمة علي الزهراني",
      workerName: "فاطمة أحمد",
      workerNationality: "فلبيني",
      profession: "عاملة منزلية",
      status: "قيد المراجعة",
      date: "2024-01-14",
      employee: "احمد حسن",
      salary: "1500",
    },
    {
      id: "12342",
      employer: "نورة سعد القحطاني",
      workerName: "ماريا سانتوس",
      workerNationality: "فلبيني",
      profession: "مربية أطفال",
      status: "مرفوض",
      date: "2024-01-12",
      employee: "احمد حسن",
      salary: "1600",
    },
  ];
  const getStatusBadge = (status: string) => {
    const variants: Record<
      string,
      {
        variant: "default" | "secondary" | "destructive" | "outline";
        className?: string;
      }
    > = {
      جديد: { variant: "default" },
      "قيد المراجعة": { variant: "secondary" },
      "موافق عليه": {
        variant: "outline",
        className: "bg-success/10 text-success border-success",
      },
      مرفوض: { variant: "destructive" },
    };
    const config = variants[status] || { variant: "default" };
    return (
      <Badge variant={config.variant} className={config.className}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">طلبات الاستقدام المهني</h1>
          <p className="text-muted-foreground">
            عرض وإدارة طلبات الاستقدام المهني (عمالة منزلية)
          </p>
        </div>
        <Button className="gap-2" onClick={() => navigate("/requests/new")}>
          <Plus className="w-4 h-4" />
          طلب جديد
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            البحث والفلترة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="بحث برقم الطلب أو الاسم..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 text-right"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="حالة الطلب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الحالات</SelectItem>
                <SelectItem value="new">جديد</SelectItem>
                <SelectItem value="review">قيد المراجعة</SelectItem>
                <SelectItem value="approved">موافق عليه</SelectItem>
                <SelectItem value="rejected">مرفوض</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">تصفية</Button>
          </div>
        </CardContent>
      </Card>

      {/* Requests Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">رقم الطلب</TableHead>
                <TableHead className="text-right">صاحب العمل</TableHead>
                <TableHead className="text-right">اسم العامل</TableHead>
                <TableHead className="text-right">الجنسية</TableHead>
                <TableHead className="text-right">المهنة</TableHead>
                <TableHead className="text-right">سعر الخدمة</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">الموظف</TableHead>
                <TableHead className="text-right">التاريخ</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((request) => (
                <TableRow key={request.id} className="hover:bg-muted/50">
                  <TableCell className="font-mono font-bold">
                    #{request.id}
                  </TableCell>
                  <TableCell className="font-medium">
                    {request.employer}
                  </TableCell>
                  <TableCell>{request.workerName}</TableCell>
                  <TableCell>{request.workerNationality}</TableCell>
                  <TableCell>{request.profession}</TableCell>
                  <TableCell className="font-semibold">
                    {request.salary} ريال
                  </TableCell>
                  <TableCell>{getStatusBadge(request.status)}</TableCell>
                  <TableCell>{request.employee}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {request.date}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2"
                      onClick={() => navigate(`/requests/${request.id}`)}
                    >
                      <Eye className="w-4 h-4" />
                      عرض
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

export default ProfessionalRequests;
