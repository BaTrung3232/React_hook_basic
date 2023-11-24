import useFetch from "../customize/fetch";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Blog.scss";

const Blog = () => {
    let history = useHistory();
    const { data: dataBlogs, isLoading } = useFetch(
        "https://jsonplaceholder.typicode.com/posts",
        false
    );
    let newData = [];
    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(0, 9);
    }
    console.log("check data: ", dataBlogs);

    const handleAddNew = () => {
        history.push("/add-new-blog");
    };
    return (
        <>
            <div>
                <button className="btn-add-new" onClick={handleAddNew}>
                    + Add new blog
                </button>
            </div>
            <div className="blogs-container">
                {newData &&
                    newData.length > 0 &&
                    newData.map((item) => {
                        return (
                            <div className="single-blog">
                                <div className="title">Title: {item.title}</div>
                                <div className="content">Body: {item.body}</div>
                                <button>
                                    {" "}
                                    <Link to={`/blog/${item.id}`}>
                                        View Detail
                                    </Link>
                                </button>
                            </div>
                        );
                    })}

                {isLoading === true && (
                    <div
                        style={{ textAlign: "center !important", with: "100%" }}
                    >
                        Loading data...
                    </div>
                )}
            </div>
        </>
    );
};

export default Blog;
