"use client";

import { useState, useEffect } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import DashboardScreen from "@/components/admin/screens/DashboardScreen";
import SuppliersScreen from "@/components/admin/screens/SuppliersScreen";
import ProductsScreen from "@/components/admin/screens/ProductsScreen";
import OrdersScreen from "@/components/admin/screens/OrdersScreen";
import UsersScreen from "@/components/admin/screens/UsersScreen";
import AnalyticsScreen from "@/components/admin/screens/AnalyticsScreen";
import SettingsScreen from "@/components/admin/screens/SettingsScreen";

export default function AdminDashboard() {
  const [activeScreen, setActiveScreen] = useState("dashboard");
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for admin token in localStorage
    const adminToken = localStorage.getItem("adminToken");
    const adminUser = localStorage.getItem("adminUser");
    
    if (!adminToken) {
      // Redirect to login if no token
      window.location.href = "/admin/login";
    } else if (adminUser) {
      // Set user from localStorage
      setUser(JSON.parse(adminUser));
      setIsLoading(false);
    } else {
      // Fallback: create admin user object
      setUser({
        email: "admin@aveoearth.com",
        user_role: "admin",
        name: "Admin"
      });
      setIsLoading(false);
    }
  }, []);

  const renderScreen = () => {
    switch (activeScreen) {
      case "dashboard":
        return <DashboardScreen />;
      case "analytics":
        return <AnalyticsScreen />;
      case "users":
        return <UsersScreen />;
      case "suppliers":
        return <SuppliersScreen />;
      case "products":
        return <ProductsScreen />;
      case "orders":
        return <OrdersScreen />;
      case "settings":
        return <SettingsScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-olive-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar 
        activeScreen={activeScreen} 
        onScreenChange={setActiveScreen} 
      />
      
      {/* Main Content */}
      <div className="ml-60">
        {/* Top Bar */}
        <AdminTopbar user={user} />
        
        {/* Page Content */}
        <main className="p-6">
          {renderScreen()}
        </main>
      </div>
    </div>
  );
}
