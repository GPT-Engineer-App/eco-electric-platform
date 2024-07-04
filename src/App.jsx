import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, BookOpen, Tools, Globe, Newspaper, User } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Change to sidebar layout
import Index from "./pages/Index.jsx";
import EducationalResources from "./pages/EducationalResources.jsx";
import DesignTools from "./pages/DesignTools.jsx";
import RegionalAdaptationTools from "./pages/RegionalAdaptationTools.jsx";
import ContentUpdates from "./pages/ContentUpdates.jsx";
import UserAuthentication from "./pages/UserAuthentication.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Educational Resources",
    to: "/educational-resources",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "Design Tools",
    to: "/design-tools",
    icon: <Tools className="h-4 w-4" />,
  },
  {
    title: "Regional Adaptation Tools",
    to: "/regional-adaptation-tools",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    title: "Content Updates",
    to: "/content-updates",
    icon: <Newspaper className="h-4 w-4" />,
  },
  {
    title: "User Authentication",
    to: "/user-authentication",
    icon: <User className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="educational-resources" element={<EducationalResources />} />
              <Route path="design-tools" element={<DesignTools />} />
              <Route path="regional-adaptation-tools" element={<RegionalAdaptationTools />} />
              <Route path="content-updates" element={<ContentUpdates />} />
              <Route path="user-authentication" element={<UserAuthentication />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;