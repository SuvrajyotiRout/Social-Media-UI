import { useContext } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import { postList } from "../Store/main-content";
let PreviousPost = ({ post }) => {
    const { deletePost } = useContext(postList);

    return <>
        <div className="card posts" style={{ width: "30rem" }}>

            <div className="card-body">
                <h5 className="card-title">{post.title}  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
                    <FiDelete />

                </span> </h5>

                <p className="card-text">{post.body}</p>
                <a href="#" className="btn btn-primary"> <span class="badge rounded-pill text-bg-primary">{post.tags}</span></a>

                <div class="alert alert-info likearea" role="alert">
                    <BiLike style={{ fontSize: "30px" }} />
                    <BiDislike style={{ fontSize: "30px" }} />
                </div>
            </div>
        </div>
    </>
}
export default PreviousPost