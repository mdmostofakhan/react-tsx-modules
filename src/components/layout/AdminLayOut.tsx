import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const AdminLayOut = () => {
    return (
        <div className="flex">
            <div className="flex-[1]">
            <Sidebar></Sidebar>
            </div>
           <div className="flex-[4]">
           <Outlet></Outlet>
           </div>
           
        </div>
    )
}

export default AdminLayOut;