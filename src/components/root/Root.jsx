import { Outlet } from "react-router-dom";
import Home from "../home/Home";
import Header from "../header/Header";
import Banner from "../banner/Banner";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;