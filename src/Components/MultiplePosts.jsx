import { useContext, useEffect, useState } from "react"
import PreviousPost from "./PreviousPost"
import { postList } from "../Store/main-content";
import WelcomeMessage from "./WelcomeMessage"
import Loading from "./Loading";
let MultiplePosts = () => {
    let { currPost, addPosts } = useContext(postList);
    let [fetching, setFetching] = useState(false)

    useEffect(() => {
        setFetching(true)
        fetch('http://dummyjson.com/users/5/posts')
            .then(res => res.json())
            .then(data => {
                addPosts(data.posts)
                setFetching(false)
            });


    }, [])

    return <>
        {fetching && <Loading></Loading>}
        {!fetching && currPost.length === 0 && <WelcomeMessage></WelcomeMessage>}
        {!fetching && currPost.map(post => <PreviousPost key={post.id} post={post}></PreviousPost>)}


    </>
}
export default MultiplePosts