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
import { Search, Plus, Edit, Trash2 } from "lucide-react";

const Workers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const workers = [
    {
      id: "1",
      name: "أحمد محمود",
      nationality: "مصري",
      profession: "سائق خاص",
      age: "35",
      experience: "10 سنوات",
      status: "متاح",
      passportNo: "A12345678",
      idNumber: "1234567890",
      phoneNumber: "01234567890",
    },
    {
      id: "2",
      name: "فاطمة أحمد",
      nationality: "فلبيني",
      profession: "عاملة منزلية",
      age: "28",
      experience: "5 سنوات",
      status: "محجوز",
      passportNo: "P98765432",
      idNumber: "1234567890",
      phoneNumber: "01234567890",
    },
    {
      id: "3",
      name: "راجا سينغ",
      nationality: "هندي",
      profession: "طباخ",
      age: "42",
      experience: "15 سنة",
      status: "متاح",
      passportNo: "H45678912",
      idNumber: "1234567890",
      phoneNumber: "01234567890",
    },
  ];

  const getStatusBadge = (status: string) => {
    return status === "متاح" ? (
      <Badge
        variant="outline"
        className="bg-success/10 text-success border-success"
      >
        {status}
      </Badge>
    ) : (
      <Badge variant="secondary">{status}</Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">إدارة العمال</h1>
          <p className="text-muted-foreground">
            عرض وإدارة جميع العمال المسجلين في النظام
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              إضافة عامل جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>إضافة عامل جديد</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم الكامل</Label>
                <Input id="name" placeholder="أدخل الاسم الكامل" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">الجنسية</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الجنسية" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="egyptian">مصري</SelectItem>
                    <SelectItem value="filipino">فلبيني</SelectItem>
                    <SelectItem value="indian">هندي</SelectItem>
                    <SelectItem value="bangladeshi">بنغلاديشي</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="profession">المهنة</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المهنة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="driver">سائق خاص</SelectItem>
                    <SelectItem value="housemaid">عاملة منزلية</SelectItem>
                    <SelectItem value="cook">طباخ</SelectItem>
                    <SelectItem value="gardener">بستاني</SelectItem>
                    <SelectItem value="nanny">مربية أطفال</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">العمر</Label>
                <Input id="age" type="number" placeholder="أدخل العمر" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">سنوات الخبرة</Label>
                <Input id="experience" placeholder="مثال: 5 سنوات" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="passport">رقم جواز السفر</Label>
                <Input id="passport" placeholder="أدخل رقم جواز السفر" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">رقم الهاتف</Label>
                <Input id="phone" placeholder="أدخل رقم الهاتف " />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneTwo">رقم هاتف اخر</Label>
                <Input id="phoneTwo" placeholder="أدخل رقم الهاتف اخر ان وجد " />
              </div>
              <div className="space-y-2">
                <Label htmlFor="idNumber">رقم الهوية</Label>
                <Input
                  id="idNumber"
                  placeholder="1234567890"
                  className="text-right"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">الحالة</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">متاح</SelectItem>
                    <SelectItem value="reserved">محجوز</SelectItem>
                    <SelectItem value="unavailable">غير متاح</SelectItem>
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
          <CardTitle>البحث عن عامل</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="بحث بالاسم، الجنسية، أو المهنة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 text-right"
            />
          </div>
        </CardContent>
      </Card>

      {/* Workers Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">الرقم</TableHead>
                <TableHead className="text-right">الاسم</TableHead>
                <TableHead className="text-right">الجنسية</TableHead>
                <TableHead className="text-right">المهنة</TableHead>
                <TableHead className="text-right">العمر</TableHead>
                <TableHead className="text-right">الخبرة</TableHead>
                <TableHead className="text-right">رقم الجواز</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">رقم الهوية</TableHead>
                <TableHead className="text-right">رقم الهاتف</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workers.map((worker) => (
                <TableRow key={worker.id} className="hover:bg-muted/50">
                  <TableCell className="font-mono font-bold">
                    #{worker.id}
                  </TableCell>
                  <TableCell className="font-medium">{worker.name}</TableCell>
                  <TableCell>{worker.nationality}</TableCell>
                  <TableCell>{worker.profession}</TableCell>
                  <TableCell>{worker.age}</TableCell>
                  <TableCell>{worker.experience}</TableCell>
                  <TableCell className="font-mono">
                    {worker.passportNo}
                  </TableCell>
                  <TableCell>{getStatusBadge(worker.status)}</TableCell>
                  <TableCell className="font-mono">{worker.idNumber}</TableCell>
                  <TableCell className="font-mono">{worker.phoneNumber}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive"
                      >
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

export default Workers;
