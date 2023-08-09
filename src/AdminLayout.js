import React from "react";
import Header from "./Admin/Include/Header";
import Footer from "./Admin/Include/Footer";
import Sidebar from "./Admin/Include/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="col-lg-12">
        <div className="row">
          <Sidebar />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
