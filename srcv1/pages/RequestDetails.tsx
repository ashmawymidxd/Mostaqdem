import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  User,
  Briefcase,
  FileText,
  CheckCircle2,
  XCircle,
  Clock,
  Download,
} from "lucide-react";
import { toast } from "sonner";

const RequestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
    },
    worker: {
      name: "أحمد محمود",
      nationality: "مصري",
      profession: "سائق خاص",
      birthDate: "1990-05-15",
      passportNumber: "A12345678",
      experience: "8 سنوات",
    },
    requestInfo: {
      type: "استقدام عائلي",
      duration: "سنتان",
      salary: "2000 ريال",
      submissionDate: "2024-01-15",
      expectedStartDate: "2024-02-01",
    },
    documents: [
      { name: "عقد العمل", status: "مرفوع" },
      { name: "صورة الهوية", status: "مرفوع" },
      { name: "السيرة الذاتية", status: "مرفوع" },
      { name: "الشهادات", status: "مرفوع" },
    ],
    status: "جديد",
  };

  const handleApprove = () => {
    toast.success("تم الموافقة على الطلب بنجاح");
  };

  const handleReject = () => {
    toast.error("تم رفض الطلب");
  };

  const handleRequestDocs = () => {
    toast.info("تم إرسال طلب مستندات إضافية");
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
        <Badge className="text-base px-4 py-2">
          {request.status}
        </Badge>
      </div>

      {/* Action Buttons */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <Button onClick={handleApprove} className="gap-2 flex-1">
              <CheckCircle2 className="w-5 h-5" />
              قبول الطلب
            </Button>
            <Button
              onClick={handleReject}
              variant="destructive"
              className="gap-2 flex-1"
            >
              <XCircle className="w-5 h-5" />
              رفض الطلب
            </Button>
            <Button
              onClick={handleRequestDocs}
              variant="outline"
              className="gap-2 flex-1"
            >
              <FileText className="w-5 h-5" />
              طلب مستندات إضافية
            </Button>
          </div>
        </CardContent>
      </Card>

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
                <p className="font-semibold font-mono">{request.employer.idNumber}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">رقم الجوال</p>
                <p className="font-semibold font-mono">{request.employer.phone}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">البريد الإلكتروني</p>
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
                <p className="text-sm text-muted-foreground">رقم الجواز</p>
                <p className="font-semibold font-mono">{request.worker.passportNumber}</p>
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
                <p className="text-sm text-muted-foreground">الراتب</p>
                <p className="font-semibold text-lg text-primary">
                  {request.requestInfo.salary}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">تاريخ التقديم</p>
                <p className="font-semibold">{request.requestInfo.submissionDate}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">تاريخ البدء المتوقع</p>
                <p className="font-semibold">{request.requestInfo.expectedStartDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              المستندات المرفقة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {request.documents.map((doc, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">{doc.status}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
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
