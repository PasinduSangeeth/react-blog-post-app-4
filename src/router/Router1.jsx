import {Route, Routes} from "react-router-dom";
import Home from "../components/home/Home.jsx";
import Post from "../components/post/Post.jsx";

const Router1 = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs/:postId" element={<Post/>}/>
        </Routes>
    );
};
export default Router1;