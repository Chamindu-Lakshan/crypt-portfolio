import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<"hero" | "app">("hero");
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleGetStarted = () => {
    setCurrentView("app");
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  if (currentView === "hero") {
    return <HeroSection onGetStarted={handleGetStarted} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === "dashboard" && <Dashboard />}
        {activeSection === "portfolio" && (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold mb-4">Portfolio Management</h2>
            <p className="text-muted-foreground">Advanced portfolio analytics and management tools coming soon.</p>
          </div>
        )}
        {activeSection === "analytics" && (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold mb-4">Analytics</h2>
            <p className="text-muted-foreground">Detailed performance analytics and reporting tools coming soon.</p>
          </div>
        )}
        {activeSection === "security" && (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold mb-4">Security Settings</h2>
            <p className="text-muted-foreground">API key management and security configuration coming soon.</p>
          </div>
        )}
        {activeSection === "settings" && (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold mb-4">Settings</h2>
            <p className="text-muted-foreground">Account settings and preferences coming soon.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
