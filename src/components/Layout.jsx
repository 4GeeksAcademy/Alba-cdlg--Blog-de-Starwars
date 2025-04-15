import { Children } from "react";
import Navbar from "./Navbar";

const Layout = ({ Children }) => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">{Children}</div>
    </>
  );
};

export default Layout
