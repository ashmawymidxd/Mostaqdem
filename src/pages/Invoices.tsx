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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Search,
  FileText,
  Eye,
  DollarSign,
  CreditCard,
  Upload,
  X,
} from "lucide-react";
import { toast } from "sonner";

const Invoices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<string>("");

  // Payment form states
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentEmployee, setPaymentEmployee] = useState("");
  const [paymentNote, setPaymentNote] = useState("");
  const [paymentAttachment, setPaymentAttachment] = useState<File | null>(null);

  const paymentMethodOptions = [
    "كاش",
    "معاملات بنكية",
    "اون لاين",
    "شيك",
    "تحويل بنكي",
    "بطاقة ائتمان",
    "بطاقة مدى",
  ];

  const employeeOptions = [
    "احمد حسن",
    "محمد علي",
    "فاطمة أحمد",
    "عمر خالد",
    "سارة محمود",
  ];

  const invoices = [
    {
      id: "INV-001",
      requestId: "12345",
      employer: "محمد أحمد السعيد",
      type: " مهني",
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
      employer: " مكتب البركة",
      type: "منزلي",
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
      employer: "مكتب الرحمة جروب",
      type: "منزلي",
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
      type: "مهني",
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
      {
        variant: "default" | "secondary" | "destructive" | "outline";
        className?: string;
      }
    > = {
      مدفوعة: {
        variant: "outline",
        className: "bg-success/10 text-success border-success",
      },
      معلقة: { variant: "secondary" },
      متأخرة: { variant: "destructive" },
    };
    const config = variants[status] || { variant: "default" };
    return (
      <Badge variant={config.variant} className={config.className}>
        {status}
      </Badge>
    );
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPaymentAttachment(file);
      toast.success(`تم اختيار الملف: ${file.name}`);
    }
  };

  const handleRemoveFile = () => {
    setPaymentAttachment(null);
    toast.info("تم حذف الملف");
  };

  const handlePaymentSubmit = () => {
    if (!paymentMethod || !paymentDate || !paymentAmount || !paymentEmployee) {
      toast.error("الرجاء ملء جميع الحقول المطلوبة");
      return;
    }

    toast.success(`تم تسجيل الدفع بنجاح بمبلغ ${paymentAmount} ريال`);

    // Reset form
    setPaymentMethod("");
    setPaymentDate("");
    setPaymentAmount("");
    setPaymentEmployee("");
    setPaymentNote("");
    setPaymentAttachment(null);
    setIsPaymentModalOpen(false);
  };

  const openPaymentModal = (invoiceId: string) => {
    setSelectedInvoice(invoiceId);
    setIsPaymentModalOpen(true);
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
            <p className="text-xs text-muted-foreground mt-1">
              +20.1% من الشهر الماضي
            </p>
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
            <p className="text-xs text-muted-foreground mt-1">
              +15.3% من الشهر الماضي
            </p>
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
            <p className="text-xs text-muted-foreground mt-1">
              2 فواتير مدفوعة
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              المعلقة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              23,000 ريال
            </div>
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
                <TableHead className="text-right"> العميل | المكتب</TableHead>
                <TableHead className="text-right">نوع الطلب</TableHead>
                <TableHead className="text-right">المبلغ الإجمالي</TableHead>
                <TableHead className="text-right">التكاليف</TableHead>
                <TableHead className="text-right">الصافي</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">تاريخ الإصدار</TableHead>
                <TableHead className="text-right">تاريخ الاستحقاق</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id} className="hover:bg-muted/50">
                  <TableCell className="font-mono font-bold">
                    {invoice.id}
                  </TableCell>
                  <TableCell className="font-mono">
                    #{invoice.requestId}
                  </TableCell>
                  <TableCell className="font-medium">
                    {invoice.employer}
                  </TableCell>
                  <TableCell>{invoice.type}</TableCell>
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
                  <TableCell className="text-muted-foreground">
                    {invoice.date}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {invoice.dueDate}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Eye className="w-4 h-4" />
                            عرض
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>
                              تفاصيل الفاتورة {invoice.id}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  رقم الطلب
                                </p>
                                <p className="font-semibold">
                                  #{invoice.requestId}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  العميل
                                </p>
                                <p className="font-semibold">
                                  {invoice.employer}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  نوع الطلب
                                </p>
                                <p className="font-semibold">{invoice.type}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  الحالة
                                </p>
                                <div className="mt-1">
                                  {getStatusBadge(invoice.status)}
                                </div>
                              </div>
                            </div>
                            <div className="border-t pt-4">
                              <h3 className="font-semibold mb-3">
                                التفاصيل المالية
                              </h3>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    التكاليف:
                                  </span>
                                  <span>{invoice.costs} ريال</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    الربح:
                                  </span>
                                  <span className="text-success font-semibold">
                                    {invoice.profit} ريال
                                  </span>
                                </div>
                                <div className="flex justify-between border-t pt-2">
                                  <span className="font-semibold">
                                    المبلغ الإجمالي:
                                  </span>
                                  <span className="font-bold text-lg">
                                    {invoice.totalAmount} ريال
                                  </span>
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

                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={() => openPaymentModal(invoice.id)}
                      >
                        <CreditCard className="w-4 h-4" />
                        دفع
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Payment Modal */}
      <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              تسجيل دفعة للفاتورة {selectedInvoice}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Payment Method */}
              <div className="space-y-2">
                <Label htmlFor="payment-method">
                  طريقة الدفع <span className="text-destructive">*</span>
                </Label>
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger id="payment-method">
                    <SelectValue placeholder="اختر طريقة الدفع" />
                  </SelectTrigger>
                  <SelectContent>
                    {paymentMethodOptions.map((method) => (
                      <SelectItem key={method} value={method}>
                        {method}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Payment Date */}
              <div className="space-y-2">
                <Label htmlFor="payment-date">
                  تاريخ الدفع <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="payment-date"
                  type="date"
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
                />
              </div>

              {/* Payment Amount */}
              <div className="space-y-2">
                <Label htmlFor="payment-amount">
                  المبلغ المدفوع (ريال){" "}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="payment-amount"
                  type="number"
                  placeholder="أدخل المبلغ"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                />
              </div>

              {/* Employee */}
              <div className="space-y-2">
                <Label htmlFor="payment-employee">
                  الموظف المسؤول <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={paymentEmployee}
                  onValueChange={setPaymentEmployee}
                >
                  <SelectTrigger id="payment-employee">
                    <SelectValue placeholder="اختر الموظف" />
                  </SelectTrigger>
                  <SelectContent>
                    {employeeOptions.map((employee) => (
                      <SelectItem key={employee} value={employee}>
                        {employee}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Payment Note */}
            <div className="space-y-2">
              <Label htmlFor="payment-note">ملاحظات</Label>
              <Textarea
                id="payment-note"
                placeholder="أدخل أي ملاحظات إضافية..."
                value={paymentNote}
                onChange={(e) => setPaymentNote(e.target.value)}
                rows={3}
              />
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <Label htmlFor="payment-attachment">المرفقات</Label>
              <Input
                id="payment-attachment"
                type="file"
                onChange={handleFileUpload}
                className="cursor-pointer"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
              <p className="text-xs text-muted-foreground">
                يمكنك رفع إيصال الدفع أو أي مستندات داعمة (PDF, DOC, صور)
              </p>

              {paymentAttachment && (
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg mt-2">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm truncate">
                      {paymentAttachment.name}
                    </span>
                    <span className="text-xs text-muted-foreground flex-shrink-0">
                      ({(paymentAttachment.size / 1024).toFixed(1)} KB)
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={handleRemoveFile}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 justify-end pt-4 border-t">
              <Button
                variant="outline"
                onClick={() => setIsPaymentModalOpen(false)}
              >
                إلغاء
              </Button>
              <Button onClick={handlePaymentSubmit} className="gap-2">
                <CreditCard className="w-4 h-4" />
                تسجيل الدفعة
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Invoices;
