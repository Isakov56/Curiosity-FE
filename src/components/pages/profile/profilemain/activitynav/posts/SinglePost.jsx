import React, {useState} from "react";
import { Dropdown, Form, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import axios from "axios";
import PostCommentsList from "./PostCommentsList";
import {
  deletePost,
  fetchCurrentUserPosts,
  fetchCurrentPostComments,
  handleLike,
  addComment,
} from "../../../../../../store";
  
  const mapStateToProps = (state) => {
    return {
      currentUser: state?.user?.currentUser,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      deletePost: (postId) => dispatch(deletePost(postId)),
      fetchCurrentUserPosts: () => dispatch(fetchCurrentUserPosts()),
      fetchCurrentPostComments: (postId) => dispatch(fetchCurrentPostComments(postId)),
      handleLike: (postId) => dispatch(handleLike(postId)),
      addComment: (postId, commentContent) => dispatch(addComment(postId, commentContent)),
    };
  };

function SinglePost({ post, deletePost, fetchCurrentPostComments, handleLike, addComment}) {
    const [commentContent, setCommentContent] = useState({
        commentContent: null,
      });
      const [showTwoComments, setShowTwoComments] = useState(2)
  const [contentLength, setContentLength] = useState(true);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleDelete = (postId) => {
    deletePost(postId);
    fetchCurrentUserPosts();
  };
  const handleLoadMore = () => {
    setShowComments(false)
    setShowTwoComments(2)
  }
  return (
    <div className=" answers-card border-bottom" >
      <div
        className="d-flex flex-column p-2 align-items-start"
        style={{ width: "100%" }}
      >
        <div className="my-2">
          <h5>{post?.title}</h5>
          {post?.content?.length > 200 && contentLength ? (
            <span>
              {" "}
              {post?.content?.slice(0, 200)}...
              <button
                onClick={() => setContentLength(false)}
                className="read-all-btn"
              >
                read all
              </button>
            </span>
          ) : (
            <span>
              {" "}
              {!contentLength ? (
                <sapn>
                  {post?.content}
                  <button
                    onClick={() => setContentLength(true)}
                    className="read-all-btn"
                  >
                    read less
                  </button>{" "}
                </sapn>
              ) : (
                <sapn>{post?.content}</sapn>
              )}
            </span>
          )}
          <img src={post?.image} className="w-100 my-2" alt="" />
        </div>
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center answers-reaction px-3 py-1 justify-content-center mr-2">
              <i
                className="far fa-thumbs-up pr-2 mr-2 border-right"
                onClick={() => handleLike(post?._id)}
              >
                <span></span>
              </i>
              <i className="far fa-thumbs-down"></i>
            </div>
            <i
              className="far fa-comment p-2"
              onClick={() => {
              {showComments ? handleLoadMore() : setShowComments(true)};
              {post?.comments?.length > 2 ? setShowLoadMoreBtn(true) : setShowLoadMoreBtn(false)}; 
              
              }}
            ></i>
          </div>
          <div className="d-flex justify-content-center answers-share-more">
            <i class="fas fa-share p-2"></i>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="post-card-dropdaown"
                className="p-0"
              >
                <i class="fas fa-ellipsis-h p-2"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Save</Dropdown.Item>
                <Dropdown.Item href="" onClick={() => handleDelete(post?._id)}>
                  Delete
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Edit</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div
        className="comment-area w-100"
        onClick={() => fetchCurrentPostComments(post?._id)}
      >
        {/* <div className="w-100 py-1 px-2">{handleComment(currentUser, setCommentContent, commentContent, fetchCurrentPostComments, addComment, post?._id)}</div> */}
      {showComments &&  <PostCommentsList
          postId={post?._id}
          currentUser={currentUser}
          setCommentContent={setCommentContent}
          commentContent={commentContent}
          fetchCurrentPostComments={fetchCurrentPostComments}
          addComment={addComment}
          showLoadMoreBtn={showLoadMoreBtn}
          setShowLoadMoreBtn={setShowLoadMoreBtn}
          showTwoComments={showTwoComments}
          setShowTwoComments={setShowTwoComments}
          setShowLoadMoreBtn={setShowLoadMoreBtn}
        />}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
