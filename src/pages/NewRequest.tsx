import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Save } from "lucide-react";

const NewRequest = () => {
  const navigate = useNavigate();
  const [requestType, setRequestType] = useState("");

  // بيانات وهمية للاختيار من القوائم
  const employers = [
    { id: "1", name: "محمد أحمد السعيد", nationalId: "1234567890" },
    { id: "2", name: "فاطمة علي الزهراني", nationalId: "0987654321" },
    { id: "3", name: "عبدالله خالد المطيري", nationalId: "1122334455" },
  ];

  const workers = [
    {
      id: "1",
      name: "أحمد محمود",
      nationality: "مصري",
      profession: "سائق خاص",
    },
    {
      id: "2",
      name: "فاطمة أحمد",
      nationality: "فلبيني",
      profession: "عاملة منزلية",
    },
    { id: "3", name: "راجا سينغ", nationality: "هندي", profession: "طباخ" },
  ];

  const employees = [
    { id: "1", name: "محمد أحمد السعيد", department: "إدارة الطلبات" },
    { id: "2", name: "سارة علي الزهراني", department: "خدمة العملاء" },
    { id: "3", name: "عبدالله خالد المطيري", department: "الموارد البشرية" },
  ];

  const offices = [
    {
      id: "1",
      name: "مكتب الرياض المركزي",
      location: "الرياض - حي النخيل",
      phone: "0112345678",
    },
    {
      id: "2",
      name: "مكتب جدة الرئيسي",
      location: "جدة - حي الزهراء",
      phone: "0122345678",
    },
    {
      id: "3",
      name: "مكتب الدمام",
      location: "الدمام - حي الفيصلية",
      phone: "0132345678",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">إنشاء طلب استقدام جديد</h1>
          <p className="text-muted-foreground">
            قم بملء جميع البيانات المطلوبة لإنشاء طلب استقدام
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => navigate("/requests")}
          className="gap-2"
        >
          <ArrowRight className="w-4 h-4" />
          العودة للطلبات
        </Button>
      </div>

      <form className="space-y-6">
        {/* معلومات أساسية */}
        <Card>
          <CardHeader>
            <CardTitle>معلومات الطلب الأساسية</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="request-type">نوع الطلب *</Label>
                <Select value={requestType} onValueChange={setRequestType}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر نوع الطلب" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="family">استقدام منزلي</SelectItem>
                    <SelectItem value="professional">استقدام مهني</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {requestType === "family" && (
                <div className="space-y-2">
                  <Label htmlFor="mosaned">رقم مساند</Label>
                  <Input id="mosaned" type="number" placeholder="3535436363" />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="contract-duration">مدة العقد (بالأشهر) *</Label>
                <Input
                  id="contract-duration"
                  type="number"
                  placeholder="مثال: 24"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="request-date">تاريخ الطلب *</Label>
                <Input id="request-date" type="date" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* اختيار صاحب العمل */}
        <Card>
          <CardHeader>
            <CardTitle>بيانات صاحب العمل (المستقدم)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="employer">اختر صاحب العمل *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="اختر صاحب العمل من القائمة" />
                </SelectTrigger>
                <SelectContent>
                  {employers.map((employer) => (
                    <SelectItem key={employer.id} value={employer.id}>
                      {employer.name} - {employer.nationalId}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground">
              إذا لم يكن صاحب العمل مسجلاً في النظام، يمكنك إضافته من صفحة{" "}
              <Button
                variant="link"
                className="p-0 h-auto"
                onClick={() => navigate("/users")}
              >
                إدارة المستخدمين
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* اختيار العامل */}
        <Card>
          <CardHeader>
            <CardTitle>بيانات العامل</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="worker">اختر العامل *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="اختر العامل من القائمة" />
                </SelectTrigger>
                <SelectContent>
                  {workers.map((worker) => (
                    <SelectItem key={worker.id} value={worker.id}>
                      {worker.name} - {worker.nationality} - {worker.profession}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground">
              إذا لم يكن العامل مسجلاً في النظام، يمكنك إضافته من صفحة{" "}
              <Button
                variant="link"
                className="p-0 h-auto"
                onClick={() => navigate("/workers")}
              >
                إدارة العمال
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* اختيار المكتب (للطلبات المنزلية فقط) */}
        {requestType === "family" && (
          <Card>
            <CardHeader>
              <CardTitle>بيانات المكتب</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="office">اختر المكتب *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المكتب من القائمة" />
                  </SelectTrigger>
                  <SelectContent>
                    {offices.map((office) => (
                      <SelectItem key={office.id} value={office.id}>
                        {office.name} - {office.location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="text-sm text-muted-foreground">
                إذا لم يكن المكتب مسجلاً في النظام، يمكنك إضافته من صفحة{" "}
                <Button
                  variant="link"
                  className="p-0 h-auto"
                  onClick={() => navigate("/offices")}
                >
                  إدارة المكاتب
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* اختيار الموظف المسؤول */}
        <Card>
          <CardHeader>
            <CardTitle>الموظف المسؤول عن الطلب</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="employee">اختر الموظف المسؤول *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الموظف المسؤول من القائمة" />
                </SelectTrigger>
                <SelectContent>
                  {employees.map((employee) => (
                    <SelectItem key={employee.id} value={employee.id}>
                      {employee.name} - {employee.department}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* ملاحظات إضافية */}
        <Card>
          <CardHeader>
            <CardTitle>ملاحظات إضافية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="notes">ملاحظات</Label>
              <Textarea
                id="notes"
                placeholder="أدخل أي ملاحظات إضافية حول الطلب..."
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        {/* أزرار الإجراءات */}
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => navigate("/requests")}>
            إلغاء
          </Button>
          <Button type="submit" className="gap-2">
            <Save className="w-4 h-4" />
            حفظ الطلب
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewRequest;
