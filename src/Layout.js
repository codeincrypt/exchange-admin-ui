import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
        <div className="container">
          {children}
        </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
