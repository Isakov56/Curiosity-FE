import React, {useState, useEffect} from 'react'
import {Modal, Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { fetchCurrentUserQuestions, newQuestion, deleteQuestion, editQuestion } from "../../../../../../store";


const mapStateToProps = (state) => {
  return {
    currentUser: state?.user?.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUserQuestions: () => dispatch(fetchCurrentUserQuestions()),
    newQuestion: (data, handleClose) => dispatch(newQuestion(data, handleClose)),
    editQuestion: (questionId, modefiedData, handleClose, setNewQuestionState) => dispatch(editQuestion(questionId, modefiedData, handleClose, setNewQuestionState)),
  }
}

function QuestionModal({fetchCurrentUserQuestions, newQuestion, editQuestion, currentUser, handleClose, show}) {
    useEffect(() => {
        fetchCurrentUserQuestions()
    }, []);

    const [newQuestionState, setNewQuestionState] = useState({question: "?"})
    const [currentQuestion, setCurrentQuestion] = useState()
    const [questionContent, setQuestionContent] = useState(null)
    const [anyone, setAnyone] = useState(true);
    
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
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
            </Modal>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionModal);

