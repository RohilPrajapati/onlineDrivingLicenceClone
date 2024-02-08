import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Nav />
            <div className="container">
            <Outlet />
            </div>
        </div>
    )
    

}
export default MainLayout;