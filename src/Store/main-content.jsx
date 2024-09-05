import { createContext, useReducer } from "react";

export const postList = createContext({})

let uploadNewPosts = (currentPost, action) => {
    let delpost = currentPost;
    if (action.type === "DELETE_POST") {
        delpost = delpost.filter((po) => po.id !== action.payload.postid)
    } else if (action.type === 'ADD_ALL_POST') {
        delpost = action.payload.posts;
    }

    else if (action.type === 'ADD_POST') {
        const titleEl = action.payload.title;
        const bodyEl = action.payload.body;
        const tags = action.payload.tags;


        delpost = [{ title: titleEl, body: bodyEl, hastags: tags }, ...currentPost]

    }

    return delpost
}

let PostlistProvider = ({ children }) => {
    let [currPost, dispatchPost] = useReducer(uploadNewPosts, [])



    let addPost = (title, body, tags) => {

        dispatchPost({
            type: 'ADD_POST',
            payload: {
                title,
                body,
                tags,
            }
        });

    };

    let addPosts = (posts) => {

        dispatchPost({
            type: 'ADD_ALL_POST',
            payload: { posts, }
        });

    };


    let deletePost = (postid) => {
        dispatchPost({
            type: 'DELETE_POST',
            payload: { postid, },
        });

    };



    return <postList.Provider value={{ currPost, addPost, deletePost, addPosts }}>{children}</postList.Provider>
}

export default PostlistProvider;
