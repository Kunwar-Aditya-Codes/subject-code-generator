import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='h-screen bg-[#1a1a1a] text-[#e3e0e0]'>
      <Outlet />
    </div>
  );
};

export default Layout;
