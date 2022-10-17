import { useEffect } from "react"

const Posts = (props) => {
    useEffect(() => {
        if (props.posts.length === 0) {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                // .then(posts => props.getPosts(posts))
                .then(posts => console.log(posts))
        }
    },[])
    const posts = props.posts.map((post)=>{
        return (
            <li id={post.id} key={post.id}>
                <div>{post.post}</div>
            </li>
        )
    })
    return(
        <div className="users">
            <ul>
                {posts}
            </ul>
        </div>
    )
}

export default Posts