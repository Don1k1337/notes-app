import MainHeader from "../components/MainHeader";
import {Outlet} from "react-router-dom";
import React from "react";

const MainLayout: React.FC = () => {
    return <>
        <MainHeader />
        <Outlet />
    </>
}

export default MainLayout;