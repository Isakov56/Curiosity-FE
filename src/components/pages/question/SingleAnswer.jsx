import React, {useState} from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchCurrentQuestionAnswers, deleteAnswer } from "../../../store";

const mapStateToProps = (state) => {
  return {
    currentUserAnswers: state?.answer?.userAnswers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentQuestionAnswers: (questionId) => dispatch(fetchCurrentQuestionAnswers(questionId)),
    deleteAnswer: (questionId, answerId) => dispatch(deleteAnswer(questionId, answerId)),
  };
};

function SingleAnswer({ answer, deleteAnswer, fetchCurrentQuestionAnswers, question, getQuestion }) {
  const [contentLength, setContentLength] = useState(true);

  console.log(answer?.question, "question object")
  return (
    <div>
     <div>
        <div className="py-2 border-bottom">
          <div className="d-flex">
            <img
              src={answer?.user?.image}
              alt=""
              className="question-user-img mr-1"
            />
            <div>
              <h5 className="m-0">
                {answer?.user?.name} {answer?.user?.surname}
              </h5>
              <span className="text-secondary">time</span>
            </div>
          </div>
          <span className="text-secondary">
            Originally answered: {question?.question}
          </span>
          <div className="mt-1 mb-2">{answer?.content?.length > 200 && contentLength ? (
            <span>
                {" "}
                {answer?.content?.slice(0, 200)}...
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
                    {answer?.content}
                    <button
                    onClick={() => setContentLength(true)}
                    className="read-all-btn"
                    >
                    read less
                    </button>{" "}
                </sapn>
                ) : (
                <sapn>{answer?.content}</sapn>
                )}
            </span>
            )}</div>
          {console.log(answer, "myanswesrsrsr")}
          <img src={answer?.image} alt="" className="w-100"/>
          <div className="d-flex align-items-center mt-1 justify-content-between w-100">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center answers-reaction px-3 py-1 justify-content-center mr-2">
                <i className="far fa-thumbs-up pr-2 mr-2 border-right"></i>
                <i className="far fa-thumbs-down"></i>
              </div>
              <i
                className="far fa-comment p-2"
                //   onClick={() => {
                //   setShowComments(true)
                //     setTimeout(() => {
                //       setShowLoadMoreBtn(true);
                //     }, 500);
                //   }}
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
                  <div
                    onClick={() => {
                        getQuestion(question?._id);
                    }}
                  >
                    <Dropdown.Item
                      href=""
                      onClick={() => {
                        deleteAnswer(question?._id, answer?._id);
                        getQuestion(question?._id);
                      }}
                    >
                      Delete
                    </Dropdown.Item>
                  </div>
                  <Dropdown.Item href="#/action-3">Edit</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleAnswer);
