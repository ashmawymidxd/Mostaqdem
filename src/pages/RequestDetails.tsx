import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  User,
  Briefcase,
  FileText,
  CheckCircle2,
  XCircle,
  Clock,
  Download,
  Building2,
  Upload,
  X,
  CheckCircle,
  Calendar,
} from "lucide-react";
import { toast } from "sonner";

const RequestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStatus, setCurrentStatus] = useState("Visa issued");
  const [statusPrice, setStatusPrice] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [paymentSource, setPaymentSource] = useState("");

  const statusOptions = [
    "تم إصدار التأشيرة",
    "أمر العمل قيد المعالجة",
    "أمر العمل جاهز",
    "انتظار التصديق من الوزارة",
    "انتظار وزارة القوى البشرية",
    "موافقة وزارة القوى البشرية",
    "انتظار اختيار العامل",
    "تم اختيار العامل",
    "انتظار الفحص الطبي",
    "لائق للعمل",
    "انتظار سداد الإنjaz",
    "البصمة",
    "انتظار تسدا",
    "مصادقة تسدا",
    "تسدا جاهز",
    "ختم التأشيرة",
    "انتظار السداد",
    "انتظار التذكرة",
    "تم النشر",
    "قيد الضمان",
    "مكتمل",
  ];

  const employeeOptions = [
    "احمد حسن",
    "محمد علي",
    "فاطمة أحمد",
    "عمر خالد",
    "سارة محمود",
  ];

  const paymentSourceOptions = [
    "كاش",
    "معاملات بنكية",
    "اون لاين",
    "شيك",
    "تحويل بنكي",
  ];

  // Mock data - في التطبيق الحقيقي سيتم جلب البيانات من API
  const request = {
    id: id || "12345",
    employer: {
      name: "محمد أحمد السعيد",
      nationality: "سعودي",
      idNumber: "1234567890",
      phone: "+966501234567",
      email: "mohammed@example.com",
      address: "الرياض، حي النرجس",
      nationalAddress: "HJGJ1234",
    },
    worker: {
      name: "أحمد محمود",
      nationality: "مصري",
      idNumber: "1234567890",
      profession: "سائق خاص",
      birthDate: "1990-05-15",
      passportNumber: "A12345678",
      experience: "8 سنوات",
    },
    requestInfo: {
      type: "استقدام منزلي",
      employee: "احمد حسن",
      duration: "سنتان",
      salary: "2000 ريال",
      submissionDate: "2024-01-15",
      expectedStartDate: "2024-02-01",
      mosandeNumber: "25463463526",
    },
    office: {
      name: "مكتب الرياض المركزي",
      location: "الرياض - حي النخيل",
      licenseNumber: "L-12345",
      phone: "0112345678",
      email: "riyadh@office.com",
      manager: "أحمد محمد السعيد",
      managerInstead: "أحمد محمد السعيد",
    },
    documents: [
      {
        name: "عقد العمل",
        status: "مرفوع",
        price: 150,
        currentStatus: "أمر العمل قيد المعالجة",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "احمد هاني",
      },
      {
        name: "صورة الهوية",
        status: "مرفوع",
        price: 50,
        currentStatus: "انتظار وزارة القوى البشرية",
        date: "منز 3 يوم",
        paymentSource: "معاملات بنكية",
        accountant: "احمد هاني",
      },
      {
        name: "صورة الجواز",
        status: "مرفوع",
        price: 75,
        currentStatus: "تم إصدار التأشيرة",
        date: "منز 14 يوم",
        paymentSource: "اون لاين",
        accountant: "احمد حسن",
      },
      {
        name: "السيرة الذاتية",
        status: "مرفوع",
        price: 100,
        currentStatus: "انتظار اختيار العامل",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "احمد مالك",
      },
      {
        name: "الشهادات الأكاديمية",
        status: "مرفوع",
        price: 200,
        currentStatus: "تسدا جاهز",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "سيد هاني",
      },
      {
        name: "شهادات الخبرة",
        status: "مرفوع",
        price: 150,
        currentStatus: "مصادقة تسدا",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "مرسي مازن",
      },
      {
        name: "الفحص الطبي",
        status: "مرفوع",
        price: 300,
        currentStatus: "لائق للعمل",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "مرسي مازن",
      },
      {
        name: "شهادة التسجيل المهني",
        status: "مرفوع",
        price: 250,
        currentStatus: "انتظار تسدا",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "مرسي مازن",
      },
      {
        name: "عقد الإيجار",
        status: "مرفوع",
        price: 100,
        currentStatus: "أمر العمل جاهز",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "مرسي مازن",
      },
      {
        name: "كشف الحساب البنكي",
        status: "مرفوع",
        price: 80,
        currentStatus: "موافقة وزارة القوى البشرية",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "مرسي مازن",
      },
      {
        name: "شهادة عدم الممانعة",
        status: "مرفوع",
        price: 120,
        currentStatus: "انتظار التصديق من الوزارة",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "مرسي مازن",
      },
      {
        name: "تصريح العمل",
        status: "مرفوع",
        price: 180,
        currentStatus: "ختم التأشيرة",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "مرسي مازن",
      },
      {
        name: "إقرار الضمان",
        status: "مرفوع",
        price: 200,
        currentStatus: "قيد الضمان",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "مرسي مازن",
      },
      {
        name: "إثبات السكن",
        status: "مرفوع",
        price: 90,
        currentStatus: "تم اختيار العامل",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "مرسي مازن",
      },
      {
        name: "شهادة التدريب",
        status: "مرفوع",
        price: 150,
        currentStatus: "Tesda Authentication",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "مرسي مازن",
      },
      {
        name: "إثبات الدفع",
        status: "مرفوع",
        price: 100,
        currentStatus: "انتظار سداد الإنjaz",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "مرسي مازن",
      },
      {
        name: "تذكرة السفر",
        status: "مرفوع",
        price: 500,
        currentStatus: "تم النشر",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "مرسي مازن",
      },
      {
        name: "البصمة الحيوية",
        status: "مرفوع",
        price: 60,
        currentStatus: "البصمة",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "مرسي مازن",
      },
      {
        name: "التأمين الصحي",
        status: "مرفوع",
        price: 400,
        currentStatus: "مكتمل",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "مرسي مازن",
      },
      {
        name: "الإقرار النهائي",
        status: "مرفوع",
        price: 50,
        currentStatus: "مكتمل",
        date: "منز 1 يوم",
        paymentSource: "كاش",
        accountant: "مرسي مازن",
      },
    ],
    status: "جديد",
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
      toast.success(`تم إضافة ${newFiles.length} ملف`);
    }
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
    toast.info("تم حذف الملف");
  };

  const handleStatusUpdate = () => {
    if (!statusPrice) {
      toast.error("الرجاء إدخال سعر الحالة");
      return;
    }
    toast.success(
      `تم تحديث الحالة إلى: ${currentStatus} بسعر ${statusPrice} ريال`
    );
  };

  const handleUploadFiles = () => {
    if (uploadedFiles.length === 0) {
      toast.error("الرجاء اختيار ملفات للرفع");
      return;
    }
    toast.success(`تم رفع ${uploadedFiles.length} ملف بنجاح`);
    setUploadedFiles([]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/requests")}
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">تفاصيل طلب الاستقدام</h1>
            <p className="text-muted-foreground">طلب رقم #{request.id}</p>
          </div>
        </div>
        <Badge className="text-base px-4 py-2">{request.status}</Badge>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Employer Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              معلومات صاحب العمل
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">الاسم الكامل</p>
                <p className="font-semibold">{request.employer.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">الجنسية</p>
                <p className="font-semibold">{request.employer.nationality}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">رقم الهوية</p>
                <p className="font-semibold font-mono">
                  {request.employer.idNumber}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground"> العنوان الوطني</p>
                <p className="font-semibold font-mono">
                  {request.employer.nationalAddress}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">رقم الجوال</p>
                <p className="font-semibold font-mono">
                  {request.employer.phone}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">رقم الهاتف</p>
                <p className="font-semibold font-mono">
                  {request.employer.phone}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">
                  البريد الإلكتروني
                </p>
                <p className="font-semibold">{request.employer.email}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">العنوان</p>
                <p className="font-semibold">{request.employer.address}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Worker Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              معلومات العامل/المستقدم
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">الاسم الكامل</p>
                <p className="font-semibold">{request.worker.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">الجنسية</p>
                <p className="font-semibold">{request.worker.nationality}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">المهنة</p>
                <p className="font-semibold">{request.worker.profession}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">تاريخ الميلاد</p>
                <p className="font-semibold">{request.worker.birthDate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">رقم الهوية</p>
                <p className="font-semibold">{request.worker.idNumber}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">رقم الجواز</p>
                <p className="font-semibold font-mono">
                  {request.worker.passportNumber}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">الخبرة</p>
                <p className="font-semibold">{request.worker.experience}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Request Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              معلومات الطلب
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">نوع الاستقدام</p>
                <p className="font-semibold">{request.requestInfo.type}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">المدة المتوقعة</p>
                <p className="font-semibold">{request.requestInfo.duration}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  اجمالي سعر الخدمات
                </p>
                <p className="font-semibold text-lg text-primary">
                  {request.requestInfo.salary}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">رقم مساند</p>
                <p className="font-semibold text-lg text-primary">
                  {request.requestInfo.mosandeNumber}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">تاريخ التقديم</p>
                <p className="font-semibold">
                  {request.requestInfo.submissionDate}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  الموظف المسئول عن الطلب
                </p>
                <p className="font-semibold">{request.requestInfo.employee}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">
                  تاريخ البدء المتوقع
                </p>
                <p className="font-semibold">
                  {request.requestInfo.expectedStartDate}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Office Info (للطلبات المنزلية فقط) */}
        {(request.requestInfo.type === "استقدام منزلي" ||
          request.requestInfo.type === "استقدام عائلي") &&
          request.office && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  معلومات المكتب
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">اسم المكتب</p>
                    <p className="font-semibold">{request.office.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">رقم الترخيص</p>
                    <p className="font-semibold font-mono">
                      {request.office.licenseNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">الموقع</p>
                    <p className="font-semibold">{request.office.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">رقم الهاتف</p>
                    <p className="font-semibold font-mono">
                      {request.office.phone}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      البريد الإلكتروني
                    </p>
                    <p className="font-semibold">{request.office.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      المدير المسؤول
                    </p>
                    <p className="font-semibold">{request.office.manager}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      المدير المنوب
                    </p>
                    <p className="font-semibold">
                      {request.office.managerInstead}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        {/* Update Status and Price */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              تحديث حالة الطلب
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="status">اختر الحالة</Label>
              <Select value={currentStatus} onValueChange={setCurrentStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">سعر الحالة (ريال)</Label>
              <Input
                id="price"
                type="number"
                placeholder="أدخل سعر الحالة"
                value={statusPrice}
                onChange={(e) => setStatusPrice(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="employee">الموظف المسؤول عن الدفع</Label>
              <Select
                value={selectedEmployee}
                onValueChange={setSelectedEmployee}
              >
                <SelectTrigger>
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

            <div className="space-y-2">
              <Label htmlFor="payment-source">مصدر الدفع</Label>
              <Select value={paymentSource} onValueChange={setPaymentSource}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر مصدر الدفع" />
                </SelectTrigger>
                <SelectContent>
                  {paymentSourceOptions.map((source) => (
                    <SelectItem key={source} value={source}>
                      {source}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button onClick={handleStatusUpdate} className="w-full gap-2">
              <CheckCircle2 className="w-4 h-4" />
              تحديث الحالة والسعر
            </Button>
          </CardContent>
        </Card>

        {/* File Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-primary" />
              رفع الملفات
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="file-upload"> اسم الملف</Label>
              <Input
                id="file-upload"
                type="text"
                multiple
                className="cursor-pointer"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="file-upload">اختر الملفات</Label>
              <Input
                id="file-upload"
                type="file"
                multiple
                onChange={handleFileUpload}
                className="cursor-pointer"
              />
              <p className="text-xs text-muted-foreground">
                يمكنك رفع ملفات متعددة (PDF, DOC, DOCX, صور)
              </p>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="space-y-2">
                <Label>الملفات المختارة ({uploadedFiles.length})</Label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-muted rounded-lg"
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm truncate">{file.name}</span>
                        <span className="text-xs text-muted-foreground flex-shrink-0">
                          ({(file.size / 1024).toFixed(1)} KB)
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveFile(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Button
              onClick={handleUploadFiles}
              className="w-full gap-2"
              disabled={uploadedFiles.length === 0}
            >
              <Upload className="w-4 h-4" />
              رفع الملفات
            </Button>
          </CardContent>
        </Card>

        {/* Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              بيان حالات الطلب
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-[50vh] overflow-y-auto scroll-smooth">
              {request.documents.map((doc, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-muted/30 to-muted/10 border border-muted-foreground/10 hover:border-primary/20 hover:shadow-md transition-all duration-300 cursor-pointer">
                    {/* Left Section - Status & Info */}
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="relative">
                        <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background animate-pulse" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold text-foreground truncate">
                            {doc.currentStatus}
                          </p>
                          <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full capitalize">
                            {doc.paymentSource}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-xs">
                          <span className="flex items-center gap-1 text-green-600 font-semibold">
                            <Calendar className="w-3 h-3" />
                            {doc.date}
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <User className="w-3 h-3" />
                            {doc.accountant}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Section - Price & Actions */}
                    <div className="flex items-center gap-4 ml-4">
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">
                          {doc.price} ر.س
                        </p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {doc.paymentSource}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Separator */}
                  {index < request.documents.length - 1 && (
                    <div className="flex justify-center">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              المستندات المرفوعة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-[50vh] overflow-y-auto">
              {request.documents.map((doc, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {doc.status}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  {index < request.documents.length - 1 && (
                    <Separator className="my-2" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RequestDetails;
