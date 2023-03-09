import MainHeader from "../components/MainHeader";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return <>
        <MainHeader />
        <Outlet />
    </>
}

export default MainLayout;