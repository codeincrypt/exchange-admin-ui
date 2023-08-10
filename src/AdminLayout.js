import React from "react";
import Header from "./Admin/Include/Header";
import Sidebar from "./Admin/Include/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Header />
        {children}
      </main>
    </>
  );
};

export default AdminLayout;
