import React, {useState} from 'react'
import PostsCard from "./PostsCard"
import PostModal from "./PostModal"
import "./posts.scss"

export default function Posts() {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="d-flex justify-content-between my-2">
                <h6 className="m-0 d-flex align-items-center">2 posts</h6>
                <div>
                    <button className="make-post-btn p-1" onClick={handleShow}>Make a post</button>
                </div>
            </div>
            <div className="posts-card border-top border-bottom">
                <PostsCard />
            </div>
                <PostsCard />
            <PostModal show={show} handleClose={handleClose}/>
        </div>
    )
}
