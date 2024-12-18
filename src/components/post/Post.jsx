import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { blogPosts } from "../../utilities/BlogsApi.jsx";

const Post = () => {
    const [post, setPost] = useState({}); // Initialize with null

    const { postId } = useParams(); // Correct destructuring

    useEffect(() => {
        const foundPost = blogPosts.find(post => post.id === parseInt(postId));
        setPost(foundPost || {}); // Fallback to an empty object
    }, [postId]);

    if (!post) {
        return <div>Post not found</div>; // Optional fallback UI
    }

    return (
        <div className="w-2/4 m-auto mt-5 p-6">
            <h1 className="text-3xl font-bold text-center mt-4">{post.blogTitle}</h1>

            <div className="border-t-2 border-b p-1 mt-2 flex justify-between items-center">
                <div>
                    <img
                        className="w-10 h-10 rounded-full inline ml-4"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="created user avatar"
                    />
                    <p className="inline ml-3">{post.createBy}</p>
                </div>
                <div>
                    <p className="inline ml-3">{post.createAt}</p>
                </div>
            </div>
            <div>
                <p className="mt-6 text-justify ml-4 mr-4">{post.blogDescription}</p>
            </div>
        </div>
    );
};

export default Post;