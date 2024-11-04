import React, { memo } from "react";
import Header from "../header";

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default memo(Layout);
