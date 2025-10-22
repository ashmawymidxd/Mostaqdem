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
import { Search, FileText, Eye, DollarSign } from "lucide-react";

const Invoices = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const invoices = [
    {
      id: "INV-001",
      requestId: "12345",
      employer: "محمد أحمد السعيد",
      worker: "أحمد محمود",
      totalAmount: "15000",
      profit: "3000",
      costs: "12000",
      status: "مدفوعة",
      date: "2024-01-15",
      dueDate: "2024-02-15",
    },
    {
      id: "INV-002",
      requestId: "12344",
      employer: "فاطمة علي الزهراني",
      worker: "فاطمة أحمد",
      totalAmount: "12000",
      profit: "2500",
      costs: "9500",
      status: "معلقة",
      date: "2024-01-14",
      dueDate: "2024-02-14",
    },
    {
      id: "INV-003",
      requestId: "12343",
      employer: "عبدالله خالد المطيري",
      worker: "راجا سينغ",
      totalAmount: "13500",
      profit: "2800",
      costs: "10700",
      status: "مدفوعة",
      date: "2024-01-13",
      dueDate: "2024-02-13",
    },
    {
      id: "INV-004",
      requestId: "12342",
      employer: "نورة سعد القحطاني",
      worker: "ماريا سانتوس",
      totalAmount: "11000",
      profit: "2200",
      costs: "8800",
      status: "متأخرة",
      date: "2024-01-12",
      dueDate: "2024-02-12",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<
      string,
      { variant: "default" | "secondary" | "destructive" | "outline"; className?: string }
    > = {
      "مدفوعة": { variant: "outline", className: "bg-success/10 text-success border-success" },
      "معلقة": { variant: "secondary" },
      "متأخرة": { variant: "destructive" },
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
          <h1 className="text-3xl font-bold mb-2">إدارة الفواتير</h1>
          <p className="text-muted-foreground">
            عرض وإدارة جميع الفواتير والمدفوعات
          </p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              إجمالي الفواتير
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">51,500 ريال</div>
            <p className="text-xs text-muted-foreground mt-1">+20.1% من الشهر الماضي</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              الأرباح
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">10,500 ريال</div>
            <p className="text-xs text-muted-foreground mt-1">+15.3% من الشهر الماضي</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              المدفوعة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28,500 ريال</div>
            <p className="text-xs text-muted-foreground mt-1">2 فواتير مدفوعة</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              المعلقة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">23,000 ريال</div>
            <p className="text-xs text-muted-foreground mt-1">2 فواتير معلقة</p>
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
              placeholder="بحث برقم الفاتورة، رقم الطلب، أو اسم العميل..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 text-right"
            />
          </div>
        </CardContent>
      </Card>

      {/* Invoices Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">
                  <FileText className="w-4 h-4 inline mr-2" />
                  رقم الفاتورة
                </TableHead>
                <TableHead className="text-right">رقم الطلب</TableHead>
                <TableHead className="text-right">العميل</TableHead>
                <TableHead className="text-right">العامل</TableHead>
                <TableHead className="text-right">المبلغ الإجمالي</TableHead>
                <TableHead className="text-right">التكاليف</TableHead>
                <TableHead className="text-right">الربح</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">تاريخ الإصدار</TableHead>
                <TableHead className="text-right">تاريخ الاستحقاق</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id} className="hover:bg-muted/50">
                  <TableCell className="font-mono font-bold">{invoice.id}</TableCell>
                  <TableCell className="font-mono">#{invoice.requestId}</TableCell>
                  <TableCell className="font-medium">{invoice.employer}</TableCell>
                  <TableCell>{invoice.worker}</TableCell>
                  <TableCell className="font-semibold">
                    {invoice.totalAmount} ريال
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {invoice.costs} ريال
                  </TableCell>
                  <TableCell className="font-semibold text-success">
                    <DollarSign className="w-4 h-4 inline" />
                    {invoice.profit} ريال
                  </TableCell>
                  <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                  <TableCell className="text-muted-foreground">{invoice.date}</TableCell>
                  <TableCell className="text-muted-foreground">{invoice.dueDate}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Eye className="w-4 h-4" />
                          عرض
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>تفاصيل الفاتورة {invoice.id}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">رقم الطلب</p>
                              <p className="font-semibold">#{invoice.requestId}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">العميل</p>
                              <p className="font-semibold">{invoice.employer}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">العامل</p>
                              <p className="font-semibold">{invoice.worker}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">الحالة</p>
                              <div className="mt-1">{getStatusBadge(invoice.status)}</div>
                            </div>
                          </div>
                          <div className="border-t pt-4">
                            <h3 className="font-semibold mb-3">التفاصيل المالية</h3>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">التكاليف:</span>
                                <span>{invoice.costs} ريال</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">الربح:</span>
                                <span className="text-success font-semibold">{invoice.profit} ريال</span>
                              </div>
                              <div className="flex justify-between border-t pt-2">
                                <span className="font-semibold">المبلغ الإجمالي:</span>
                                <span className="font-bold text-lg">{invoice.totalAmount} ريال</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 justify-end">
                            <Button variant="outline">طباعة الفاتورة</Button>
                            <Button>تحديث الحالة</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
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

export default Invoices;
