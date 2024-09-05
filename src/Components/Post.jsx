import { useContext, useRef } from "react"
import { postList } from "../Store/main-content"

let Post = () => {
    const { addPost } = useContext(postList)


    let title = useRef()
    let body = useRef()
    let tags = useRef()
    console.log(title);

    let getPosts = () => {
        const titleElement = title.current.value;
        const bodyElement = body.current.value;
        const tagsElements = tags.current.value;

        title.current.value = ""
        body.current.value = ""
        tags.current.value = ""
        addPost(titleElement, bodyElement, tagsElements)
    }


    return <>

        <div className="mb-3">
            <label htmlFor="Title" className="form-label">Enter Title</label>
            <input type="Text" className="form-control" id="Title" ref={title} />
        </div>
        <div className="mb-3">
            <label htmlFor="Textarea" className="form-label">More about this.....</label>
            <textarea className="form-control" id="Textarea" rows="3" ref={body} ></textarea>
            <label htmlFor="tags" className="form-label" >Hastags</label>
            <input type="Text" className="form-control" id="tags" placeholder="Hastags.." ref={tags} />
            <input class="btn btn-primary" type="submit" value="Post" onClick={getPosts}></input>
        </div>
    </>
}
export default Post