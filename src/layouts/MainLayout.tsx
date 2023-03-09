import MainHeader from "../components/MainHeader.js";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return <>
        <MainHeader />
        <Outlet />
    </>
}

export default MainLayout;