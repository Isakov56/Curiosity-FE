import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { fetchCurrentPostComments, addComment } from "../../../../../../store";
import {Form, FormControl } from 'react-bootstrap'
import { connect } from "react-redux";

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


function PostCommentsList({postId, currentUser, setCommentContent, commentContent, fetchCurrentPostComments, addComment, showLoadMoreBtn, setShowLoadMoreBtn}) {
    useEffect(() => {
        //fetchCurrentPostComments(postId)
    }, [])

    const currentPostComments = useSelector(state => state?.comment?.postComments)
    const [showTwoComments, setShowTwoComments] = useState(2)
    

    return (
        <div>

            <div className="w-100 my-2">
                <div className="d-flex align-items-center w-100 py-1 px-2">  
                    <img src={currentUser?.image} alt="" className="comments-user-img"/> 
                    <Form className="d-flex align-items-center w-100" onSubmit={e => e.preventDefault()}>
                        <Form.Group className=" m-0 align-items-center w-100 mx-1">
                            <FormControl
                            placeholder="Write your comment..."
                            className="px-1 textarea comment"
                            onChange={(e) =>setCommentContent( {commentContent: e.target.value} )}/>
                        </Form.Group>
                        <button className={`post-btn h-100 comments py-auto ${commentContent.commentContent === null || commentContent?.commentContent?.length === 0 ? 'disabled' : ''}`} 
                        onClick={() => {addComment(postId, commentContent); fetchCurrentPostComments(postId); setCommentContent( {commentContent: ""})}}
                        
                        >Post</button>
                    </Form>
                </div>
            </div>
            
            <div className="w-100">
            {currentPostComments?.length !== 0 ? currentPostComments?.slice(0).reverse().slice(0, showTwoComments).map(comment => 
                <div className=" border-top w-100 px-2 pb-1">
                    <div className="d-flex align-items-center mt-1">
                        <img src={comment?.user?.image} alt="" className="comments-user-img"/>
                        <h6 className="m-0 ml-1">{comment?.user?.name} {comment?.user?.surname}</h6>
                    </div>
                    <div className="d-flex align-items-center">
                        <div style={{width: '2.4rem'}}></div>
                        <span className="">{comment?.commentContent}</span>
                    </div>
                </div> 
                ) : ""}
            </div>
            <div className="d-flex justify-content-center">
                {showLoadMoreBtn ? <div className="load-more-comments d-flex justify-content-center mb-2" onClick={() => setShowTwoComments(showTwoComments + 2)}>load more</div> : ''}
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCommentsList);
