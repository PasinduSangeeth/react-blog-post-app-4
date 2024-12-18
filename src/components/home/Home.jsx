import { blogPosts } from "../../utilities/BlogsApi.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            {blogPosts?.length ? (
                blogPosts.map(post => (
                    <div
                        key={post.id}
                        className="w-2/4 m-auto mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                        <h5
                            className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer"
                            onClick={() => navigate(`/blogs/${post.id}`)}
                        >
                            {post.blogTitle}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {post.shortDescription}
                        </p>
                        <button
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => navigate(`/blogs/${post.id}`)}
                        >
                            Read more
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </button>
                    </div>
                ))
            ) : (
                <p className="text-center mt-5">No posts available</p>
            )}
        </>
    );
};

export default Home;
