import React, {useState, useEffect} from 'react'
import QuestionsCard from "./QuestionsCard"
import QuestionModal from "./QuestionModal"
import { Link } from 'react-router-dom'
import {Modal, Button, Dropdown} from 'react-bootstrap'
import "./questions.scss"
import { fetchCurrentUserQuestions, newQuestion, deleteQuestion, editQuestion } from "../../../../../../store";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    currentUserQuestions: state?.question?.currentUserQuestions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUserQuestions: () => dispatch(fetchCurrentUserQuestions()),
    newQuestion: (data, handleClose) => dispatch(newQuestion(data, handleClose)),
    editQuestion: (questionId, modefiedData, handleClose, setNewQuestionState) => dispatch(editQuestion(questionId, modefiedData, handleClose, setNewQuestionState)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
  }
}

function Questions({fetchCurrentUserQuestions, currentUserQuestions, newQuestion, editQuestion}) {
    useEffect(() => {
        fetchCurrentUserQuestions()
    }, []);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="d-flex justify-content-between my-2">
                <h6 className="m-0 d-flex align-items-center">{currentUserQuestions?.length} questions</h6>
                <div>
                    <button className="make-post-btn p-1" onClick={() => handleShow()}>Ask question</button>
                </div>
            </div>
            <QuestionsCard/>
            <QuestionModal  handleShow={handleShow} handleClose={handleClose} show={show}/>
            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Ask Question</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="d-flex align-items-center">
                    {currentUser?.image ? <img src={currentUser.image} className="post-user-img mr-2"/> : <i className="fas fa-user-circle user-img-question mr-2"></i>}
                    <div className="">
                    <Link to="#" className="text-dark">
                        <h5 className="m-0">{currentUser?.name} {currentUser?.surname}</h5>
                    </Link>
                    <Dropdown>
                        <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="py-0 px-2 my-1 d-flex align-items-center"
                        >
                        {anyone ? "Anyone" : "Connections only"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href="" onClick={() => setAnyone(true)}>
                            Anyone
                        </Dropdown.Item>
                        <Dropdown.Item href="" onClick={() => setAnyone(false)}>
                            Connections only
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                </div>
                    <div>
                    <textarea
                        placeholder="Start your question with 'What', 'Why', 'How'. etc..."
                        className="w-100 my-1 px-1 textarea"
                        style={{ height: "5rem" }}
                        defaultValue={questionContent}
                        onChange={(e) =>
                        setNewQuestionState({ ...newQuestion, question: e.target.value })
                        }
                    ></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <button
                    variant="primary"
                    className="p-1 post-btn font-weight-normal px-2"
                    onClick={() =>{currentQuestion ? editQuestion(currentQuestion, newQuestionState, handleClose, setNewQuestionState) : newQuestion(newQuestionState, handleClose)}}
                >
                    Post
                </button>
                </Modal.Footer>
            </Modal> */}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);

