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

export default function Professions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [professions, setProfessions] = useState([
    { id: 1, nameAr: "سائق", nameEn: "Driver", category: "مهني", status: "نشط" },
    { id: 2, nameAr: "خادمة منزلية", nameEn: "Maid", category: "منزلي", status: "نشط" },
    { id: 3, nameAr: "مهندس", nameEn: "Engineer", category: "مهني", status: "نشط" },
    { id: 4, nameAr: "طباخ", nameEn: "Cook", category: "منزلي", status: "نشط" },
  ]);

  const handleDelete = (id: number) => {
    setProfessions(professions.filter((p) => p.id !== id));
    toast.success("تم حذف المهنة بنجاح");
  };

  const filteredProfessions = professions.filter(
    (profession) =>
      profession.nameAr.includes(searchTerm) ||
      profession.nameEn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">إدارة المهن</h1>
          <p className="text-muted-foreground mt-2">
            إدارة وإضافة المهن المتاحة في النظام
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              إضافة مهنة جديدة
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>إضافة مهنة جديدة</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label>اسم المهنة (عربي)</Label>
                <Input placeholder="أدخل اسم المهنة بالعربي" />
              </div>
              <div>
                <Label>اسم المهنة (إنجليزي)</Label>
                <Input placeholder="Enter profession name in English" />
              </div>
              <div>
                <Label>التصنيف</Label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option value="مهني">مهني</option>
                  <option value="منزلي">منزلي</option>
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
              placeholder="البحث عن مهنة..."
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
              <TableHead className="text-right">التصنيف</TableHead>
              <TableHead className="text-right">الحالة</TableHead>
              <TableHead className="text-right">الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProfessions.map((profession) => (
              <TableRow key={profession.id}>
                <TableCell>{profession.id}</TableCell>
                <TableCell className="font-medium">{profession.nameAr}</TableCell>
                <TableCell>{profession.nameEn}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      profession.category === "مهني"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {profession.category}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                    {profession.status}
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
                      onClick={() => handleDelete(profession.id)}
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
