import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import MyEditor from '../questions/Draft'
import AnswerCard from "./AnswerCard";
import "./SpecificQuestion.scss";
import axios from "axios";
import { connect } from "react-redux";
import { fetchCurrentUserAnswers, addAnswer } from "../../../store";
import {Modal, Button} from "react-bootstrap"

const mapStateToProps = (state) => {
  return {
    currentUserAnswers: state?.answer?.userAnswers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentUserAnswers: () => dispatch(fetchCurrentUserAnswers()),
    addAnswer: (questionId, myAnswer, handleClose) => dispatch(addAnswer(questionId, myAnswer, handleClose)),
  };
};

function SpecificQuestion({ fetchCurrentUserAnswers, currentUserAnswers, addAnswer }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const [myQuestion, setMyQuestion] = useState({});
  const [myAnswer, setMyAnswer] = useState({content: null});
  const [draftShow, setDraftShow] = useState(false);
  const { questionId } = useParams();
  const getQuestion = async () => {
    const res = await axios.get(
      `http://localhost:3003/api/questions/${questionId}`
    );
    setMyQuestion(res.data);
  };
  useEffect(() => {
    getQuestion();
    fetchCurrentUserAnswers();
  }, []);

  return (
    <div className="question-container d-flex profile-container-child mx-auto pt-4 align-items-stretch">
      <div className="col-8">
        <div className="">
          <div className="d-flex justify-content-center border-bottom">
            <h2>{myQuestion?.question}</h2>
          </div>
        </div>
        <div className="my-2">
          {currentUserAnswers ? (
            <div className="justify-content-center d-flex">
              <img
                src={currentUserAnswers[0]?.user?.image}
                alt=""
                className="user-img"
              />
            </div>
          ) : (
            <i
              className="fas fa-user-circle mx-2 justify-content-center d-flex"
              style={{ fontSize: "3rem" }}
            ></i>
          )}
          <h5 className="d-flex justify-content-center">
            {myQuestion?.user?.name}, Can you answer this question?
          </h5>
          <button
            className="d-flex justify-content-center mx-auto mb-2 align-items-center"
            onClick={() => handleShow()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
            <div>Answer</div>
          </button>
          <button onClick={() => fetchCurrentUserAnswers()}>fetch</button>
          <div></div>
        </div>
        <div className="my-2">
          {currentUserAnswers ? (
            <AnswerCard></AnswerCard>
          ) : (
            <h5 className="d-flex justify-content-center">No answers yet</h5>
          )}
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="border-0 ">
            <Modal.Title className="border-0">{myQuestion?.question}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="py-0">
            <textarea
                placeholder="Type your answer here"
                className="w-100 my-1 px-1 textarea"
                style={{ height: "10rem" }}
                onChange={(e) =>
                  setMyAnswer({ ...myAnswer, content: e.target.value })
                }
            ></textarea>
            </Modal.Body>
            <Modal.Footer>
                <div onClick={() =>  fetchCurrentUserAnswers()}>
                    <button
                        variant="primary"
                        className="p-1 post-btn font-weight-normal px-2"
                        onClick={() =>{addAnswer(myQuestion._id, myAnswer, handleClose); fetchCurrentUserAnswers()}}
                    >
                        Post
                    </button>
                </div>
            </Modal.Footer>
        </Modal>
      </div>
      <div className="col-4 ml-4">
        <h5 className="border-bottom py-2">Related Questions</h5>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecificQuestion);
