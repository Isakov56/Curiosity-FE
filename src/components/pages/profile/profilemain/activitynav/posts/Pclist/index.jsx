import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { connect, useSelector } from 'react-redux';
const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //fetchCurrentPostComments: (postId) => dispatch(fetchCurrentPostComments(postId)),
  }
}


function PostCommentsList({postId, currentUser, setCommentContent, commentContent, showTwoComments, addComment, showLoadMoreBtn, setShowTwoComments, setShowLoadMoreBtn}) {
    const  [comments, setComments] = useState([])
    const fetchComments = () => {
 
            axios.get(`http://localhost:3003/api/comments/${postId}`, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(res => {
                const currentPostComments = res.data
                setComments(currentPostComments)
             
            })
            .catch(err => {
               // dispatch(fetchCommentFailure(err.message))
            })

            
            
            
        }
        const deleteComment = (commentId) => {
     
                axios.delete(`http://localhost:3003/api/comments/${postId}/${commentId}`, {
                    headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
                })
                .catch(err => {
                   // dispatch(fetchCommentFailure(err.message))
                })
            }
    useEffect(() => {
      fetchComments()
    }, [])

 
    return (
        <div>

            <div className="w-100 my-2">
                <div className="d-flex align-items-center w-100 py-1 px-2" >  
                    <img src={currentUser?.image} alt="" className="comments-user-img"/> 
                    <Form className="d-flex align-items-center w-100" onSubmit={e => e.preventDefault()}>
                        <Form.Group className=" m-0 align-items-center w-100 mx-1">
                            <FormControl
                            placeholder="Write your comment..."
                            className="px-1 textarea comment"
                            onChange={(e) =>setCommentContent( {commentContent: e.target.value} )}/>
                        </Form.Group>
                        <div onClick={() =>{fetchComments(); setCommentContent( {commentContent: ""} )}}>
                            <button className={`post-btn h-100 comments py-auto ${commentContent.commentContent === null || commentContent?.commentContent?.length === 0 ? 'disabled' : ''}`} 
                            onClick={() => {addComment(postId, commentContent); fetchComments();  setCommentContent( {commentContent: ""})}}
                            
                            >Post</button>
                        </div>
                    </Form>
                </div>
            </div>
            
            <div className="w-100">
            {comments?.length !== 0 ? comments?.slice(0).reverse().slice(0, showTwoComments).map(comment => 
                <div className=" border-top w-100 px-2 pb-1 d-flex justify-content-between align-items-center">
                    <div className=''>
                        <div className="d-flex align-items-center mt-1">
                            <img src={comment?.user?.image} alt="" className="comments-user-img"/>
                            <h6 className="m-0 ml-1">{comment?.user?.name} {comment?.user?.surname}</h6>
                        </div>
                        <div className="d-flex align-items-center">
                            <div style={{width: '2.4rem'}}></div>
                            <span className="">{comment?.commentContent}</span>
                        </div>
                    </div>
                    <div onclick={() =>{deleteComment(comment._id)}}>
                        <i class="fas fa-trash-alt" onclick={() =>{deleteComment(comment._id)}}></i>
                    </div>
                </div> 
                ) : ""}
            </div>
            {showTwoComments !== comments?.length ? <div className="d-flex justify-content-center">
                {comments?.length > 2 ? setShowLoadMoreBtn(true) : setShowLoadMoreBtn(false)}
                {showLoadMoreBtn ? <div className="load-more-comments d-flex justify-content-center mb-2" onClick={() => { comments?.length <=  showTwoComments ? setShowTwoComments(showTwoComments + 1) : setShowTwoComments(showTwoComments + 2)}}>load more</div> : ""}
            </div> : 
            <div className="d-flex justify-content-center">
                <div className="load-more-comments d-flex justify-content-center mb-2" onClick={() => { comments?.length === 3 ||  comments?.length <=  showTwoComments ? setShowTwoComments(showTwoComments - 1) : setShowTwoComments(showTwoComments - 2)}}>show less</div>

            </div>}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCommentsList);
