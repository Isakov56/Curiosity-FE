import React, { useState, useEffect } from "react";
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
import SinglePost from "./SinglePost";

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
// const handleComment = (currentUser, setCommentContent, commentContent, fetchCurrentPostComments, addComment, postId) =>{
//     console.log(currentUser, "kkjksjksjkdjskdj")
//     const userImg = currentUser?.image
//     console.log(commentContent, "comment comment content content contrnt contrbtfddfjnskdfbh hsgjhdfgsjdkgku ")
//     const handlePostComment = (postId, commentContent) =>{
//         fetchCurrentPostComments(postId)
//         addComment(postId, commentContent)
//     }
//     return(

//         <div className="w-100 my-2">
//                 <div className="d-flex align-items-center w-100">
//                     <img src={currentUser?.image} alt="" className="comments-user-img"/>
//                     <Form className="d-flex align-items-center w-100" onSubmit={e => e.preventDefault()}>
//                         <Form.Group className=" m-0 align-items-center w-100 mx-1">
//                             <FormControl
//                             placeholder="Write your comment..."
//                             className="px-1 textarea comment"
//                             onChange={(e) =>
//                                 setCommentContent( {commentContent: e.target.value} )
//                             }
//                             />
//                         </Form.Group>
//                         <button className={`post-btn h-100 comments py-auto ${commentContent === null || commentContent?.length === 0 ? 'disabled' : ''}`}
//                         onClick={() => handlePostComment(postId, commentContent)}

//                         >Post</button>
//                     </Form>
//                 </div>
//           </div>
//       )
//     }

function PostsCard({
  deletePost,
  fetchCurrentPostComments,
  handleLike,
  addComment,
}) {
  const [commentContent, setCommentContent] = useState({
    commentContent: null,
  });
  const [contentLength, setContentLength] = useState(true);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const currentUserPosts = useSelector((state) => state.post.currentUserPosts);
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleDelete = (postId) => {
    deletePost(postId);
    fetchCurrentUserPosts();
  };

  const handleLikeTest = (postId) => {
    console.log(postId, "hellllskjjdkjfkjskfj");
    //dispatch(fetchPostRequest())
    axios.post(`http://localhost:3003/api/posts/${postId}/like`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("JWTToken")}` },
    });
  };

  //console.log(currentUser, 'hellllllooldsjfkdjfsdjhgfkdfgkjhfksdhfghsdgfjsfhdg')
  return (
    <div>
      {currentUserPosts
        ?.slice(0)
        ?.reverse()
        ?.map((post, key) => ( <SinglePost post={post}/>
        //   <div className=" answers-card border-bottom" key={key}>
        //     <div
        //       className="d-flex flex-column p-2 align-items-start"
        //       style={{ width: "100%" }}
        //     >
        //       <div className="my-2">
        //         <h5>{post?.title}</h5>
        //         {post?.content?.length > 200 && contentLength ? (
        //           <span>
        //             {" "}
        //             {post?.content?.slice(0, 200)}...
        //             <button
        //               onClick={() => setContentLength(false)}
        //               className="read-all-btn"
        //             >
        //               read all
        //             </button>
        //           </span>
        //         ) : (
        //           <span>
        //             {" "}
        //             {!contentLength ? (
        //               <sapn>
        //                 {post?.content}
        //                 <button
        //                   onClick={() => setContentLength(true)}
        //                   className="read-all-btn"
        //                 >
        //                   read less
        //                 </button>{" "}
        //               </sapn>
        //             ) : (
        //               <sapn>{post?.content}</sapn>
        //             )}
        //           </span>
        //         )}
        //         <img src={post?.image} className="w-100 my-2" alt="" />
        //       </div>
        //       <div className="d-flex align-items-center justify-content-between w-100">
        //         <div className="d-flex align-items-center">
        //           <div className="d-flex align-items-center answers-reaction px-3 py-1 justify-content-center mr-2">
        //             <i
        //               className="far fa-thumbs-up pr-2 mr-2 border-right"
        //               onClick={() => handleLikeTest(post?._id)}
        //             >
        //               <span>{post?.likes?.length}</span>
        //             </i>
        //             <i className="far fa-thumbs-down"></i>
        //           </div>
        //           <i
        //             className="far fa-comment p-2"
        //             onClick={() => {
        //               fetchCurrentPostComments(post?._id);
        //               setTimeout(() => {
        //                 setShowLoadMoreBtn(true);
        //               }, 500);
        //             }}
        //           ></i>
        //         </div>
        //         <div className="d-flex justify-content-center answers-share-more">
        //           <i class="fas fa-share p-2"></i>
        //           <Dropdown>
        //             <Dropdown.Toggle
        //               variant="success"
        //               id="post-card-dropdaown"
        //               className="p-0"
        //             >
        //               <i class="fas fa-ellipsis-h p-2"></i>
        //             </Dropdown.Toggle>

        //             <Dropdown.Menu>
        //               <Dropdown.Item href="#/action-1">Save</Dropdown.Item>
        //               <Dropdown.Item
        //                 href=""
        //                 onClick={() => handleDelete(post?._id)}
        //               >
        //                 Delete
        //               </Dropdown.Item>
        //               <Dropdown.Item href="#/action-3">Edit</Dropdown.Item>
        //             </Dropdown.Menu>
        //           </Dropdown>
        //         </div>
        //       </div>
        //     </div>
        //     <div
        //       className="comment-area w-100"
        //       onClick={() => fetchCurrentPostComments(post?._id)}
        //     >
        //       {/* <div className="w-100 py-1 px-2">{handleComment(currentUser, setCommentContent, commentContent, fetchCurrentPostComments, addComment, post?._id)}</div> */}
        //       <PostCommentsList
        //         postId={post?._id}
        //         currentUser={currentUser}
        //         setCommentContent={setCommentContent}
        //         commentContent={commentContent}
        //         fetchCurrentPostComments={fetchCurrentPostComments}
        //         addComment={addComment}
        //         showLoadMoreBtn={showLoadMoreBtn}
        //         setShowLoadMoreBtn={setShowLoadMoreBtn}
        //       />
        //     </div>
        //   </div>
        ))}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsCard);
