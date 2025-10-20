import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User, Lock, History, Edit, Camera } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const userInfo = {
    name: "أحمد السعيد",
    email: "ahmed@example.com",
    phone: "+966501234567",
    idNumber: "1234567890",
    role: "مدير النظام",
    joinDate: "2024-01-01",
  };

  const activityLog = [
    {
      action: "تسجيل دخول",
      date: "2024-01-15 10:30 AM",
      ip: "192.168.1.1",
      device: "Chrome on Windows",
    },
    {
      action: "الموافقة على طلب #12345",
      date: "2024-01-15 11:15 AM",
      ip: "192.168.1.1",
      device: "Chrome on Windows",
    },
    {
      action: "تحديث بيانات مستخدم",
      date: "2024-01-15 02:30 PM",
      ip: "192.168.1.1",
      device: "Chrome on Windows",
    },
    {
      action: "تصدير تقرير",
      date: "2024-01-15 04:00 PM",
      ip: "192.168.1.1",
      device: "Chrome on Windows",
    },
  ];

  const handleSaveProfile = () => {
    toast.success("تم حفظ التغييرات بنجاح");
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    toast.success("تم تغيير كلمة المرور بنجاح");
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">الملف الشخصي</h1>
        <p className="text-muted-foreground">
          إدارة معلوماتك الشخصية وإعداداتك
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <Avatar className="w-32 h-32">
                  <AvatarFallback className="bg-primary text-primary-foreground text-4xl">
                    {userInfo.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute bottom-0 left-0 rounded-full w-10 h-10"
                >
                  <Camera className="w-5 h-5" />
                </Button>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{userInfo.name}</h2>
                <p className="text-muted-foreground">{userInfo.email}</p>
              </div>
              <Badge variant="secondary" className="text-base px-4 py-1">
                {userInfo.role}
              </Badge>
              <div className="w-full pt-4 border-t space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">تاريخ التسجيل</span>
                  <span className="font-semibold">{userInfo.joinDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">رقم الهوية</span>
                  <span className="font-mono font-semibold">{userInfo.idNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">رقم الجوال</span>
                  <span className="font-mono font-semibold">{userInfo.phone}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Card className="lg:col-span-2">
          <Tabs defaultValue="info" className="w-full">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="info">المعلومات الشخصية</TabsTrigger>
                {/* <TabsTrigger value="security">الأمان</TabsTrigger> */}
                <TabsTrigger value="activity">سجل النشاط</TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent>
              {/* Personal Info */}
              <TabsContent value="info" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">المعلومات الأساسية</h3>
                  {!isEditing ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditing(true)}
                      className="gap-2"
                    >
                      <Edit className="w-4 h-4" />
                      تعديل
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(false)}
                      >
                        إلغاء
                      </Button>
                      <Button size="sm" onClick={handleSaveProfile}>
                        حفظ
                      </Button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">الاسم الكامل</Label>
                    <Input
                      id="fullName"
                      defaultValue={userInfo.name}
                      disabled={!isEditing}
                      className="text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={userInfo.email}
                      disabled={!isEditing}
                      className="text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الجوال</Label>
                    <Input
                      id="phone"
                      defaultValue={userInfo.phone}
                      disabled={!isEditing}
                      className="text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="idNumber">رقم الهوية</Label>
                    <Input
                      id="idNumber"
                      defaultValue={userInfo.idNumber}
                      disabled
                      className="text-right"
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Security */}
              <TabsContent value="security" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">تغيير كلمة المرور</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">كلمة المرور الحالية</Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        placeholder="••••••••"
                        className="text-right"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">كلمة المرور الجديدة</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        placeholder="••••••••"
                        className="text-right"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        className="text-right"
                      />
                    </div>
                    <Button onClick={handleChangePassword} className="gap-2">
                      <Lock className="w-4 h-4" />
                      تغيير كلمة المرور
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Activity Log */}
              <TabsContent value="activity" className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-4">آخر النشاطات</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-right">الإجراء</TableHead>
                        <TableHead className="text-right">التاريخ</TableHead>
                        <TableHead className="text-right">IP</TableHead>
                        <TableHead className="text-right">الجهاز</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {activityLog.map((log, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{log.action}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {log.date}
                          </TableCell>
                          <TableCell className="font-mono text-sm">
                            {log.ip}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {log.device}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
