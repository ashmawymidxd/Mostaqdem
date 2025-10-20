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

export default function Countries() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([
    { id: 1, nameAr: "الفلبين", nameEn: "Philippines", code: "PH", status: "نشط" },
    { id: 2, nameAr: "إندونيسيا", nameEn: "Indonesia", code: "ID", status: "نشط" },
    { id: 3, nameAr: "بنغلاديش", nameEn: "Bangladesh", code: "BD", status: "نشط" },
    { id: 4, nameAr: "الهند", nameEn: "India", code: "IN", status: "نشط" },
    { id: 5, nameAr: "باكستان", nameEn: "Pakistan", code: "PK", status: "نشط" },
  ]);

  const handleDelete = (id: number) => {
    setCountries(countries.filter((c) => c.id !== id));
    toast.success("تم حذف الدولة بنجاح");
  };

  const filteredCountries = countries.filter(
    (country) =>
      country.nameAr.includes(searchTerm) ||
      country.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">إدارة الدول</h1>
          <p className="text-muted-foreground mt-2">
            إدارة وإضافة دول الاستقدام المتاحة
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              إضافة دولة جديدة
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>إضافة دولة جديدة</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label>اسم الدولة (عربي)</Label>
                <Input placeholder="أدخل اسم الدولة بالعربي" />
              </div>
              <div>
                <Label>اسم الدولة (إنجليزي)</Label>
                <Input placeholder="Enter country name in English" />
              </div>
              <div>
                <Label>رمز الدولة</Label>
                <Input placeholder="مثال: SA, PH, IN" maxLength={2} />
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
              placeholder="البحث عن دولة..."
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
              <TableHead className="text-right">رمز الدولة</TableHead>
              <TableHead className="text-right">الحالة</TableHead>
              <TableHead className="text-right">الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCountries.map((country) => (
              <TableRow key={country.id}>
                <TableCell>{country.id}</TableCell>
                <TableCell className="font-medium">{country.nameAr}</TableCell>
                <TableCell>{country.nameEn}</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-md bg-muted font-mono">
                    {country.code}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                    {country.status}
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
                      onClick={() => handleDelete(country.id)}
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
