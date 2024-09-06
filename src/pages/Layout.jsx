import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu/Menu";

export function Layout(){
    return (
        <div className="flex bg-red-200 w-full">
            <Menu/>
            <Outlet/>
        </div>
    )
}
