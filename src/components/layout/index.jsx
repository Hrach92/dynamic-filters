import React, { memo } from "react";
import Header from "../header";
import Sidebar from "../sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Sidebar />
    </>
  );
};
export default memo(Layout);
