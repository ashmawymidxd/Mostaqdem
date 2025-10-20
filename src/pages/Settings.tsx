import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Settings as SettingsIcon,
  Bell,
  Shield,
  Users,
  Globe,
  Mail,
  Lock,
} from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [autoApprove, setAutoApprove] = useState(false);

  const handleSaveSettings = () => {
    toast.success("تم حفظ الإعدادات بنجاح");
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">الإعدادات</h1>
        <p className="text-muted-foreground">
          إدارة إعدادات النظام والتفضيلات
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[600px]">
          <TabsTrigger value="general">عام</TabsTrigger>
          <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
          {/* <TabsTrigger value="security">الأمان</TabsTrigger> */}
          <TabsTrigger value="permissions">الصلاحيات</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                معلومات النظام
              </CardTitle>
              <CardDescription>
                الإعدادات الأساسية للنظام
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="systemName">اسم النظام</Label>
                  <Input
                    id="systemName"
                    defaultValue="نظام الاستقدام السعودي"
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="systemEmail">البريد الإلكتروني للنظام</Label>
                  <Input
                    id="systemEmail"
                    type="email"
                    defaultValue="info@recruitment.sa"
                    className="text-right"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="systemPhone">رقم الهاتف</Label>
                <Input
                  id="systemPhone"
                  defaultValue="+966112345678"
                  className="text-right"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="systemAddress">العنوان</Label>
                <Textarea
                  id="systemAddress"
                  defaultValue="الرياض، المملكة العربية السعودية"
                  className="text-right min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SettingsIcon className="w-5 h-5" />
                إعدادات الطلبات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>الموافقة التلقائية</Label>
                  <p className="text-sm text-muted-foreground">
                    الموافقة تلقائياً على الطلبات المستوفية للشروط
                  </p>
                </div>
                <Switch checked={autoApprove} onCheckedChange={setAutoApprove} />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="maxProcessingDays">الحد الأقصى لأيام المعالجة</Label>
                <Input
                  id="maxProcessingDays"
                  type="number"
                  defaultValue="14"
                  className="text-right"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="minSalary">الحد الأدنى للراتب (ريال)</Label>
                <Input
                  id="minSalary"
                  type="number"
                  defaultValue="1000"
                  className="text-right"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={handleSaveSettings}>حفظ التغييرات</Button>
          </div>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                تفضيلات الإشعارات
              </CardTitle>
              <CardDescription>
                اختر كيفية تلقي الإشعارات
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>إشعارات البريد الإلكتروني</Label>
                    <p className="text-sm text-muted-foreground">
                      تلقي إشعارات عبر البريد الإلكتروني
                    </p>
                  </div>
                  <Switch
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>إشعارات الرسائل النصية</Label>
                    <p className="text-sm text-muted-foreground">
                      تلقي إشعارات عبر الرسائل النصية SMS
                    </p>
                  </div>
                  <Switch
                    checked={smsNotifications}
                    onCheckedChange={setSmsNotifications}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                إعدادات البريد الإلكتروني
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="smtpHost">خادم SMTP</Label>
                  <Input
                    id="smtpHost"
                    defaultValue="smtp.example.com"
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpPort">منفذ SMTP</Label>
                  <Input
                    id="smtpPort"
                    type="number"
                    defaultValue="587"
                    className="text-right"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="smtpUser">اسم المستخدم</Label>
                  <Input
                    id="smtpUser"
                    defaultValue="admin@recruitment.sa"
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpPass">كلمة المرور</Label>
                  <Input
                    id="smtpPass"
                    type="password"
                    defaultValue="••••••••"
                    className="text-right"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={handleSaveSettings}>حفظ التغييرات</Button>
          </div>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                الأمان وكلمات المرور
              </CardTitle>
              <CardDescription>
                إدارة إعدادات الأمان والمصادقة
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="minPasswordLength">الحد الأدنى لطول كلمة المرور</Label>
                <Input
                  id="minPasswordLength"
                  type="number"
                  defaultValue="8"
                  className="text-right"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sessionTimeout">مهلة الجلسة (بالدقائق)</Label>
                <Input
                  id="sessionTimeout"
                  type="number"
                  defaultValue="30"
                  className="text-right"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxLoginAttempts">الحد الأقصى لمحاولات تسجيل الدخول</Label>
                <Input
                  id="maxLoginAttempts"
                  type="number"
                  defaultValue="5"
                  className="text-right"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                المصادقة الثنائية
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>تفعيل المصادقة الثنائية</Label>
                  <p className="text-sm text-muted-foreground">
                    إضافة طبقة أمان إضافية لحسابك
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={handleSaveSettings}>حفظ التغييرات</Button>
          </div>
        </TabsContent>

        {/* Permissions Settings */}
        <TabsContent value="permissions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                إدارة الصلاحيات
              </CardTitle>
              <CardDescription>
                تحديد صلاحيات المجموعات المختلفة
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">مدير النظام</h3>
                  <div className="space-y-2 pr-4">
                    <div className="flex items-center gap-2">
                      <Switch defaultChecked />
                      <Label>عرض جميع الطلبات</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch defaultChecked />
                      <Label>الموافقة على الطلبات</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch defaultChecked />
                      <Label>إدارة المستخدمين</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch defaultChecked />
                      <Label>إدارة الإعدادات</Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3">موظف المراجعة</h3>
                  <div className="space-y-2 pr-4">
                    <div className="flex items-center gap-2">
                      <Switch defaultChecked />
                      <Label>عرض الطلبات</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch defaultChecked />
                      <Label>مراجعة الطلبات</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch />
                      <Label>إدارة المستخدمين</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch />
                      <Label>إدارة الإعدادات</Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3">مكتب الاستقدام</h3>
                  <div className="space-y-2 pr-4">
                    <div className="flex items-center gap-2">
                      <Switch defaultChecked />
                      <Label>إضافة طلبات جديدة</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch defaultChecked />
                      <Label>عرض طلباتهم فقط</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch />
                      <Label>عرض جميع الطلبات</Label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={handleSaveSettings}>حفظ التغييرات</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
