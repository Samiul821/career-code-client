import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
