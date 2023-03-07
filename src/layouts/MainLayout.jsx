import MainHeader from "../components/MainHeader.jsx";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return <>
        <MainHeader />
        <Outlet />
    </>
}

export default MainLayout;