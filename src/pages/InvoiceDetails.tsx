import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  FileText,
  Printer,
  Download,
  Edit,
  DollarSign,
  Calendar,
  User,
  Building,
  CreditCard,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";

const InvoiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - Replace with actual API call
  const invoiceData = {
    "INV-001": {
      id: "INV-001",
      requestId: "12345",
      employer: "محمد أحمد السعيد",
      type: "مهني",
      totalAmount: "15000",
      profit: "3000",
      costs: "12000",
      status: "مدفوعة",
      date: "2024-01-15",
      dueDate: "2024-02-15",
      description: "فاتورة خدمات استقدام عاملة منزلية من الفلبين",
      paymentHistory: [
        {
          id: 1,
          date: "2024-01-20",
          amount: "15000",
          method: "تحويل بنكي",
          employee: "أحمد حسن",
        },
      ],
      items: [
        { name: "رسوم الاستقدام", amount: "8000" },
        { name: "رسوم التأشيرة", amount: "2000" },
        { name: "رسوم التذاكر", amount: "2000" },
      ],
    },
    "INV-002": {
      id: "INV-002",
      requestId: "12344",
      employer: "مكتب البركة",
      type: "منزلي",
      totalAmount: "12000",
      profit: "2500",
      costs: "9500",
      status: "معلقة",
      date: "2024-01-14",
      dueDate: "2024-02-14",
      description: "فاتورة خدمات استقدام عامل مهني",
      paymentHistory: [],
      items: [
        { name: "رسوم الاستقدام", amount: "7000" },
        { name: "رسوم التأشيرة", amount: "3000" },
        { name: "رسوم التذاكر", amount: "2000" },
      ],
    },
    "INV-003": {
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
      description: "فاتورة خدمات استقدام عاملة منزلية",
      paymentHistory: [
        {
          id: 1,
          date: "2024-01-18",
          amount: "13500",
          method: "كاش",
          employee: "محمد علي",
        },
      ],
      items: [
        { name: "رسوم الاستقدام", amount: "8000" },
        { name: "رسوم التأشيرة", amount: "3200" },
        { name: "رسوم التذاكر", amount: "2300" },
      ],
    },
    "INV-004": {
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
      description: "فاتورة خدمات استقدام عامل مهني متخصص",
      paymentHistory: [],
      items: [
        { name: "رسوم الاستقدام", amount: "6500" },
        { name: "رسوم التأشيرة", amount: "2500" },
        { name: "رسوم التذاكر", amount: "2000" },
      ],
    },
  };

  const invoice = invoiceData[id as keyof typeof invoiceData];

  if (!invoice) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <AlertCircle className="w-16 h-16 text-muted-foreground" />
        <h2 className="text-2xl font-bold">الفاتورة غير موجودة</h2>
        <p className="text-muted-foreground">
          لم يتم العثور على الفاتورة المطلوبة
        </p>
        <Button onClick={() => navigate("/invoices")}>
          <ArrowLeft className="w-4 h-4 ml-2" />
          العودة للفواتير
        </Button>
      </div>
    );
  }

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

  const handlePrint = () => {
    window.print();
    toast.success("جاري طباعة الفاتورة...");
  };

  const handleDownload = () => {
    toast.success("جاري تحميل الفاتورة...");
  };

  const handleUpdateStatus = () => {
    toast.success("تم تحديث حالة الفاتورة");
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <Button
            variant="ghost"
            className="gap-2 -mr-2 mb-2"
            onClick={() => navigate("/invoices")}
          >
            <ArrowLeft className="w-4 h-4" />
            العودة للفواتير
          </Button>
          <h1 className="text-3xl font-bold">تفاصيل الفاتورة {invoice.id}</h1>
          <p className="text-muted-foreground">
            عرض جميع تفاصيل الفاتورة والمدفوعات
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="w-4 h-4 ml-2" />
            طباعة
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="w-4 h-4 ml-2" />
            تحميل PDF
          </Button>
        </div>
      </div>

      {/* Body - Invoice Information */}
      <div className="grid gap-6">
        {/* Main Invoice Card */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl">{invoice.id}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {invoice.description}
                  </p>
                </div>
              </div>
              <div>{getStatusBadge(invoice.status)}</div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Client Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                معلومات العميل
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    اسم العميل / المكتب
                  </p>
                  <p className="font-semibold text-lg">{invoice.employer}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">رقم الطلب</p>
                  <p className="font-mono font-semibold text-lg">
                    #{invoice.requestId}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">نوع الطلب</p>
                  <p className="font-semibold text-lg">{invoice.type}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Date Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                التواريخ
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">تاريخ الإصدار</p>
                  <p className="font-semibold text-lg">{invoice.date}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    تاريخ الاستحقاق
                  </p>
                  <p className="font-semibold text-lg">{invoice.dueDate}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Invoice Items */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                بنود الفاتورة
              </h3>
              <div className="space-y-3">
                {invoice.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-muted/50 rounded-lg"
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="font-semibold">{item.amount} ريال</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Financial Details */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                التفاصيل المالية
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-muted-foreground">التكاليف:</span>
                  <span className="font-semibold text-lg">
                    {invoice.costs} ريال
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-success/10 rounded-lg">
                  <span className="text-muted-foreground">صافي الربح:</span>
                  <span className="font-semibold text-lg text-success">
                    {invoice.profit} ريال
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-primary/5 border-2 border-primary/20 rounded-lg">
                  <span className="font-bold text-xl">المبلغ الإجمالي:</span>
                  <span className="font-bold text-2xl text-primary">
                    {invoice.totalAmount} ريال
                  </span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Payment History */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                سجل الدفعات
              </h3>
              {invoice.paymentHistory.length > 0 ? (
                <div className="space-y-3">
                  {invoice.paymentHistory.map((payment) => (
                    <div
                      key={payment.id}
                      className="flex justify-between items-center p-4 bg-muted/50 rounded-lg"
                    >
                      <div className="space-y-1">
                        <p className="font-semibold">{payment.amount} ريال</p>
                        <p className="text-sm text-muted-foreground">
                          {payment.date} - {payment.method}
                        </p>
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">
                          الموظف المسؤول
                        </p>
                        <p className="font-medium">{payment.employee}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center p-8 bg-muted/30 rounded-lg">
                  <CreditCard className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">لا توجد دفعات مسجلة</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer - Fixed at bottom */}
      <div className=" bg-background border-t shadow-lg z-50">
        <div className="container max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">المبلغ الإجمالي</p>
                <p className="text-2xl font-bold text-primary">
                  {invoice.totalAmount} ريال
                </p>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="text-right">
                <p className="text-sm text-muted-foreground">الحالة</p>
                <div className="mt-1">{getStatusBadge(invoice.status)}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => navigate("/invoices")}>
                إلغاء
              </Button>
              <Button variant="outline" onClick={handleUpdateStatus}>
                <Edit className="w-4 h-4 ml-2" />
                تحديث الحالة
              </Button>
              {invoice.status !== "مدفوعة" && (
                <Button onClick={() => toast.success("تم فتح نموذج الدفع")}>
                  <CreditCard className="w-4 h-4 ml-2" />
                  تسجيل دفعة
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
