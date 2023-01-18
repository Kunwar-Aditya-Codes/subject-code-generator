import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen flex-col  bg-zinc-200 ">
      <div className="flex-grow">
        <Outlet />
      </div>
      <footer className="border-t-4 border-t-[#7f1f5d] bg-white p-4 font-medium ">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Subject Code Generator - Kunwar
          Aditya & Basab Nath. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
