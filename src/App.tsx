import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Requests from "./pages/Requests";
import RequestDetails from "./pages/RequestDetails";
import NewRequest from "./pages/NewRequest";
import ProfessionalRequests from "./pages/ProfessionalRequests";
import DomesticRequests from "./pages/DomesticRequests";
import Users from "./pages/Users";
import Workers from "./pages/Workers";
import Employees from "./pages/Employees";
import Offices from "./pages/Offices";
import Professions from "./pages/Professions";
import Countries from "./pages/Countries";
import Cities from "./pages/Cities";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Profile from "./pages/Profile";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/requests/new" element={<NewRequest />} />
            <Route path="/requests/professional" element={<ProfessionalRequests />} />
            <Route path="/requests/domestic" element={<DomesticRequests />} />
            <Route path="/requests/:id" element={<RequestDetails />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workers" element={<Workers />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/offices" element={<Offices />} />
            <Route path="/professions" element={<Professions />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
