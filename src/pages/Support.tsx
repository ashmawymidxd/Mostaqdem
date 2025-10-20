import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  Plus,
  MessageSquare,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";

const Support = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const tickets = [
    {
      id: "TKT-001",
      subject: "مشكلة في رفع المستندات",
      category: "تقني",
      status: "مفتوح",
      priority: "عالية",
      date: "2024-01-15",
      lastUpdate: "منذ ساعتين",
    },
    {
      id: "TKT-002",
      subject: "استفسار عن حالة الطلب",
      category: "استفسار",
      status: "قيد المعالجة",
      priority: "متوسطة",
      date: "2024-01-14",
      lastUpdate: "منذ 5 ساعات",
    },
    {
      id: "TKT-003",
      subject: "تحديث بيانات المستخدم",
      category: "حساب",
      status: "مغلق",
      priority: "منخفضة",
      date: "2024-01-10",
      lastUpdate: "منذ 3 أيام",
    },
  ];

  const faqs = [
    {
      question: "كيف يمكنني تقديم طلب استقدام جديد؟",
      answer:
        "يمكنك تقديم طلب استقدام جديد من خلال الذهاب إلى صفحة 'طلبات الاستقدام' والنقر على زر 'طلب جديد'. ستحتاج إلى ملء جميع البيانات المطلوبة وإرفاق المستندات اللازمة.",
    },
    {
      question: "ما هي المستندات المطلوبة للاستقدام؟",
      answer:
        "المستندات المطلوبة تشمل: صورة الهوية الوطنية، عقد العمل الموقع، الشهادات العلمية للعامل، صورة جواز السفر، والفحص الطبي.",
    },
    {
      question: "كم يستغرق وقت معالجة الطلب؟",
      answer:
        "متوسط وقت معالجة الطلب يتراوح بين 7-14 يوم عمل، حسب اكتمال المستندات المطلوبة والمراجعات اللازمة.",
    },
    {
      question: "كيف يمكنني تتبع حالة طلبي؟",
      answer:
        "يمكنك تتبع حالة طلبك من خلال صفحة 'طلبات الاستقدام' حيث ستجد جميع طلباتك مع حالتها الحالية. كما ستصلك إشعارات عند أي تحديث على الطلب.",
    },
    {
      question: "ماذا أفعل إذا تم رفض طلبي؟",
      answer:
        "في حالة رفض الطلب، سيتم إرسال الأسباب تفصيلياً عبر البريد الإلكتروني. يمكنك تصحيح المشاكل وتقديم طلب جديد أو التواصل مع الدعم الفني للمساعدة.",
    },
  ];

  const handleCreateTicket = () => {
    toast.success("تم إنشاء التذكرة بنجاح. سنتواصل معك قريباً.");
    setIsDialogOpen(false);
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<
      string,
      { variant: "default" | "secondary" | "destructive" | "outline"; icon: any }
    > = {
      "مفتوح": { variant: "default", icon: AlertCircle },
      "قيد المعالجة": { variant: "secondary", icon: Clock },
      "مغلق": { variant: "outline", icon: CheckCircle2 },
    };
    const config = variants[status] || { variant: "default", icon: AlertCircle };
    const Icon = config.icon;
    return (
      <Badge variant={config.variant} className="gap-1">
        <Icon className="w-3 h-3" />
        {status}
      </Badge>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const colors: Record<string, string> = {
      "عالية": "bg-destructive/10 text-destructive border-destructive",
      "متوسطة": "bg-warning/10 text-warning border-warning",
      "منخفضة": "bg-success/10 text-success border-success",
    };
    return (
      <Badge variant="outline" className={colors[priority]}>
        {priority}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">الدعم الفني</h1>
          <p className="text-muted-foreground">
            مركز المساعدة والدعم الفني
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              تذكرة جديدة
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>إنشاء تذكرة دعم جديدة</DialogTitle>
              <DialogDescription>
                أدخل تفاصيل المشكلة أو الاستفسار
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="subject">الموضوع</Label>
                <Input id="subject" placeholder="اكتب موضوع التذكرة" className="text-right" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">التصنيف</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر التصنيف" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">تقني</SelectItem>
                    <SelectItem value="inquiry">استفسار</SelectItem>
                    <SelectItem value="account">حساب</SelectItem>
                    <SelectItem value="request">طلب</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="priority">الأولوية</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الأولوية" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">عالية</SelectItem>
                    <SelectItem value="medium">متوسطة</SelectItem>
                    <SelectItem value="low">منخفضة</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">الوصف</Label>
                <Textarea
                  id="description"
                  placeholder="اشرح المشكلة أو الاستفسار بالتفصيل..."
                  className="text-right min-h-[120px]"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                إلغاء
              </Button>
              <Button onClick={handleCreateTicket}>إنشاء التذكرة</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Support Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">تذاكر مفتوحة</p>
                <p className="text-3xl font-bold text-primary">
                  {tickets.filter((t) => t.status === "مفتوح").length}
                </p>
              </div>
              <AlertCircle className="w-10 h-10 text-primary opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">قيد المعالجة</p>
                <p className="text-3xl font-bold text-warning">
                  {tickets.filter((t) => t.status === "قيد المعالجة").length}
                </p>
              </div>
              <Clock className="w-10 h-10 text-warning opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">تذاكر مغلقة</p>
                <p className="text-3xl font-bold text-success">
                  {tickets.filter((t) => t.status === "مغلق").length}
                </p>
              </div>
              <CheckCircle2 className="w-10 h-10 text-success opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tickets */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            تذاكر الدعم
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <Card key={ticket.id} className="hover:shadow-md transition-smooth">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm text-muted-foreground">
                          {ticket.id}
                        </span>
                        {getStatusBadge(ticket.status)}
                        {getPriorityBadge(ticket.priority)}
                      </div>
                      <h3 className="font-semibold text-lg">{ticket.subject}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>التصنيف: {ticket.category}</span>
                        <span>•</span>
                        <span>تاريخ الإنشاء: {ticket.date}</span>
                        <span>•</span>
                        <span>آخر تحديث: {ticket.lastUpdate}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      عرض التفاصيل
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* FAQs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5" />
            الأسئلة الشائعة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-right hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-right text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card>
        <CardHeader>
          <CardTitle>معلومات التواصل</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <MessageSquare className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">الدعم المباشر</h3>
              <p className="text-sm text-muted-foreground">متاح من 9 صباحاً - 5 مساءً</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="font-semibold mb-1">الهاتف</h3>
              <p className="text-sm text-muted-foreground font-mono">+966-11-234-5678</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="font-semibold mb-1">البريد الإلكتروني</h3>
              <p className="text-sm text-muted-foreground">support@recruitment.sa</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Support;
