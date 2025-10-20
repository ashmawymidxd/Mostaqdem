import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { toast } from "sonner";

export default function Cities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState([
    { id: 1, nameAr: "الرياض", nameEn: "Riyadh", region: "وسط", status: "نشط" },
    { id: 2, nameAr: "جدة", nameEn: "Jeddah", region: "غرب", status: "نشط" },
    { id: 3, nameAr: "الدمام", nameEn: "Dammam", region: "شرق", status: "نشط" },
    { id: 4, nameAr: "مكة المكرمة", nameEn: "Makkah", region: "غرب", status: "نشط" },
    { id: 5, nameAr: "المدينة المنورة", nameEn: "Madinah", region: "غرب", status: "نشط" },
  ]);

  const handleDelete = (id: number) => {
    setCities(cities.filter((c) => c.id !== id));
    toast.success("تم حذف المدينة بنجاح");
  };

  const filteredCities = cities.filter(
    (city) =>
      city.nameAr.includes(searchTerm) ||
      city.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.region.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">إدارة المدن</h1>
          <p className="text-muted-foreground mt-2">
            إدارة وإضافة المدن السعودية في النظام
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              إضافة مدينة جديدة
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>إضافة مدينة جديدة</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label>اسم المدينة (عربي)</Label>
                <Input placeholder="أدخل اسم المدينة بالعربي" />
              </div>
              <div>
                <Label>اسم المدينة (إنجليزي)</Label>
                <Input placeholder="Enter city name in English" />
              </div>
              <div>
                <Label>المنطقة</Label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option value="وسط">وسط</option>
                  <option value="غرب">غرب</option>
                  <option value="شرق">شرق</option>
                  <option value="شمال">شمال</option>
                  <option value="جنوب">جنوب</option>
                </select>
              </div>
              <Button className="w-full">حفظ</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="p-6">
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="البحث عن مدينة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">#</TableHead>
              <TableHead className="text-right">الاسم بالعربي</TableHead>
              <TableHead className="text-right">الاسم بالإنجليزي</TableHead>
              <TableHead className="text-right">المنطقة</TableHead>
              <TableHead className="text-right">الحالة</TableHead>
              <TableHead className="text-right">الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCities.map((city) => (
              <TableRow key={city.id}>
                <TableCell>{city.id}</TableCell>
                <TableCell className="font-medium">{city.nameAr}</TableCell>
                <TableCell>{city.nameEn}</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                    {city.region}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                    {city.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(city.id)}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
