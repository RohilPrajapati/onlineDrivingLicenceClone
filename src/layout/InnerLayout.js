import { Outlet } from "react-router-dom";
import InsideHeader from "../components/InsideHeader";
import InsideNav from "../components/InsideNav";

const MainLayout = () => {
    return (
        <div>
            <InsideHeader />
            <InsideNav />
            <div className="container">
            <Outlet />
            </div>
        </div>
    )
    

}
export default MainLayout;