import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {Modal, Button, Dropdown} from 'react-bootstrap'
import { connect } from "react-redux";
import SpecificQuestion from '../../../../question/SpecificQuestion'
import { fetchCurrentUserQuestions, newQuestion, deleteQuestion } from "../../../../../../store";

const mapStateToProps = (state) => {
  return {
    currentUser: state?.user?.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUserQuestions: () => dispatch(fetchCurrentUserQuestions()),
    newQuestion: (data, handleClose) => dispatch(newQuestion(data, handleClose)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
  }
}
function QuestionsCard({deleteQuestion, handleShow, setCurrentQuestion, setQuestionContent}) {
    const currentUserQuestions = useSelector(state => state?.question?.currentUserQuestions)
    return (
        <div>
            {currentUserQuestions?.slice(0)?.reverse()?.map((question, key) =>(
                
            <div className="answers-card d-flex border-top p-2 border-bottom" key={key}>
                <div className="d-flex flex-column align-items-start" style={{width: "100%"}}>
                    <div className="my-2">
                        <Link to={`/questions/${question?._id}`} className="text-dark">
                            <h5>{question?.question}</h5>
                        </Link>
                        <Link to="#" className="text-secondary">
                            <span>{question?.answers?.length} replies</span>
                        </Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="">
                            
                        </div>
                        <div className="d-flex justify-content-center answers-share-more">
                            <i class="fas fa-share p-2"></i>
                            <Dropdown>
                                    <Dropdown.Toggle variant="success" id="post-card-dropdaown" className="p-0">
                                        <i class="fas fa-ellipsis-h p-2" ></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="">Save</Dropdown.Item>
                                        <Dropdown.Item href="" 
                                        onClick={() =>deleteQuestion(question?._id)}
                                        >Delete</Dropdown.Item>
                                        <Dropdown.Item href="" onClick={()=>{handleShow(); setCurrentQuestion(question?._id); setQuestionContent(question?.question)}}>Edit</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            ))
            }
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionsCard);
