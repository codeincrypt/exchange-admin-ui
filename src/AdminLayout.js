import React from "react";
import Header from "./Admin/Include/Header";
import Sidebar from "./Admin/Include/Sidebar";
import Footer from "./Admin/Include/Footer";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default AdminLayout;
