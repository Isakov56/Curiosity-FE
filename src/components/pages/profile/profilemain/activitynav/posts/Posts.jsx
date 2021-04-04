import React, {useState, useEffect} from 'react'
import PostsCard from "./PostsCard"
import PostModal from "./PostModal"
import "./posts.scss"
import { connect } from "react-redux";
import { fetchCurrentUserPosts } from "../../../../../../store";

const mapStateToProps = (state) => {
  return {
    posts: state?.post?.currentUserPosts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUserPosts: () => dispatch(fetchCurrentUserPosts()),
  }
}

 function Posts({ fetchCurrentUserPosts, posts }) {

    useEffect(() => {
        //fetchCurrentUserPosts()
      }, []);
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="d-flex justify-content-between my-2">
                <h6 className="m-0 d-flex align-items-center">{posts?.length} posts</h6>
                <div>
                    <button className="make-post-btn p-1" onClick={handleShow}>Make a post</button>
                </div>
            </div>
            <div className="posts-card border-top border-bottom">
                <PostsCard />
            </div>
            <PostModal show={show} handleClose={handleClose}/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
