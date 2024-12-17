import {Route, Routes} from "react-router-dom";
import Home from "../components/Home/Home.jsx";

const Router1 = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default Router1;