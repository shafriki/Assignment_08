import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-288px)]">
                <Outlet></Outlet>
            </div>
            {/* <div className="min-h-[calc(100vh-232)]"><Outlet></Outlet></div> */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;