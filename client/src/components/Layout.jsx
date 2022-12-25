import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen flex-col bg-[#1a1a1a] text-[#e3e0e0]">
      <div className="flex-grow">
        <Outlet />
      </div>
      <footer className="bg-[#111111] p-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Chat App - Kunwar Aditya. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
