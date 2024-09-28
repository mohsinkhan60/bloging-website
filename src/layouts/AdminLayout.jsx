import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      <h1>Sidebar</h1>
      <div>
        <h1>Navbar</h1>
        <Outlet />
      </div>
    </div>
  );
};
export default AdminLayout;
