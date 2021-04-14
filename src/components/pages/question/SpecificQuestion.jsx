import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import MyEditor from '../questions/Draft'
import AnswerCard from "./AnswerCard";
import "./SpecificQuestion.scss";
import axios from "axios";
import {Modal, Button} from "react-bootstrap"
import { connect } from "react-redux";
import { fetchCurrentUserAnswers, addAnswer, fetchCurrentQuestionAnswers } from "../../../store";

const mapStateToProps = (state) => {
  return {
    currentUserAnswers: state?.answer?.userAnswers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentQuestionAnswers: () => dispatch(fetchCurrentQuestionAnswers()),
    addAnswer: (questionId, myAnswer, handleClose, fileData) => dispatch(addAnswer(questionId, myAnswer, handleClose, fileData)),
  };
};

function SpecificQuestion({ fetchCurrentUserAnswers, currentUserAnswers, addAnswer, fetchCurrentQuestionAnswers }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const [myQuestion, setMyQuestion] = useState({});
  const [myAnswer, setMyAnswer] = useState({content: null});
  const [draftShow, setDraftShow] = useState(false);
  const { questionId } = useParams();
  const [file, setFile] = useState();
  const [fileData, setFileData] = useState()
  console.log(fileData, "tesstt FFFFFFFFFFFFFF");

const handleUserImg = (e) => {
    const formData = new FormData();
    formData.append("answer", e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileData(formData)
  };
  const getQuestion = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BE_URL}/questions/${questionId}`
    );
    setMyQuestion(res.data);
  };
  useEffect(() => {
    getQuestion();
    //fetchCurrentQuestionAnswers(questionId);
  }, []);
  const handleClear = () => {
    handleClose()
   setFileData(null) 
   setFile(null)
  }

  return (
    <div className="question-container d-flex profile-container-child mx-auto pt-4 align-items-stretch">
      <div className="col-8">
        <div className="">
          <div className="align-self-start border-bottom">
            <h2>{myQuestion?.question}</h2>
          </div>
        </div> 
        <div className="my-2 mt-4">
          <div className="d-flex flex-column justify-content-center align-items-center">
            {currentUserAnswers ? (
              <div className="">
                <img
                  src={myQuestion?.user?.image}
                  alt=""
                  className="user-img"
                />
              </div>
            ) : (
              <i
                className="fas fa-user-circle mx-2"
                style={{ fontSize: "3rem" }}
              ></i>
            )}
            <h5 className="d-flex justify-content-center m-0">
              <div style={{textTransform: "capitalize"}}>{myQuestion?.user?.name}</div>, can you answer this question?
            </h5>
            {myQuestion?.answers?.length >= 5 ? "" : <span className="text-secondary">People are searching for an answer to this question.</span>}
          </div>
          <button
            className="d-flex justify-content-center mx-auto mb-2 align-items-center p-1 py-2 my-3"
            onClick={() => handleShow()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-pencil-square mx-1"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
            <div className="mr-1 h5 m-0 "> Answer</div>
          </button>
          <div></div>
        </div>
        <div className="my-2">
          { (
            <AnswerCard myQuestion={myQuestion} getQuestion={getQuestion}/>
          ) }
        </div>
        <Modal show={show} onHide={() => handleClear()}>
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
            <img src={file} alt="" style={{width: "100%"}}/>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
                <div className="d-flex post-modal-footer">
                      <label className="d-flex m-0">
                      <i className="fas fa-image text-secondary" style={{cursor: "pointer"}}></i>
                      <input
                          className="file-upload"
                          type="file"
                          multiple
                          onChange={(e) => handleUserImg(e)}
                          style={{ display: "none" }}
                      />
                      </label>
                    
                  
                  <i className="fab fa-youtube text-secondary"></i>
                  <i className="fas fa-sticky-note text-secondary"></i>
                </div>
                <div onClick={() => setTimeout(() => {
                        getQuestion();
                      }, 1000)}>
                  <button
                      variant="primary"
                      className="p-1 post-btn font-weight-normal px-2"
                      onClick={() =>{addAnswer(questionId, myAnswer, handleClose, fileData); setTimeout(() => {
                        getQuestion();
                      }, 2000); setFileData(''); setFile(null)}}
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
