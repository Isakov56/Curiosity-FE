import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteAnswer, getQuestion } from "../../../../store";

const mapStateToProps = (state) => {
  return {
    currentUserAnswers: state?.answer?.userAnswers,
    question: state?.question?.getQuestion
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAnswer: (questionId, answerId) =>
      dispatch(deleteAnswer(questionId, answerId)),
    getQuestion: (questionId) =>
      dispatch(getQuestion(questionId)),
  };
};

function PostsCard({ fetchAllAnswers, answer, getQuestion, question }) {
  const [content, setContent] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae malesuada nunc. Integer ultricies diam et justo pellentesque tincidunt. Sed luctus commodo tortor, ac sagittis neque eleifend vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ullamcorper lacus sed risus sodales convallis eleifend in arcu. Donec at ipsum quis nisl ullamcorper aliquet. Aenean sed euismod libero, sit amet fringilla velit. Aenean in lacus fringilla, imperdiet nisl ut, efficitur ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vel velit gravida, fringilla erat a, auctor nisi."
  );
  const [contentLength, setContentLength] = useState(true);
  // useEffect(() => {}, []);
  return (
    <div>
      <div className="home-post-card d-flex my-2 pt-3 rounded border">
        <div
          className="d-flex flex-column align-items-start"
          style={{ width: "100%" }}
        >
            <div className="px-3">

                <div className="d-flex align-items-center">
                    <img
                    src={answer?.user?.image}
                    alt=""
                    className="user-img-answer mr-2"
                    />
                    <div className="">
                    <Link to="#" className="text-dark">
                        <h6 className="m-0">
                        {answer?.user?.name} {answer?.user?.surname}
                        </h6>
                    </Link>
                    <span>{answer?.user?.jobQualification}</span>
                    </div>
                </div>
                <Link to={`/questions/${answer?.question?._id}`} className="text-dark mt-2">
                    <h5 className="m-0 mt-2">{answer?.question?.question}</h5>
                    {/* {getQuestion(answer?.question?._id)} */}
                    {/* <sapn>{question?.answers?.length} replise</sapn> */}
                </Link>
                <div className="mt-1">
                    {answer?.content?.length > 200 && contentLength ? (
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
                    )}
                </div>
            </div>
            <img src={answer?.image} className="w-100 mt-2 mb-1" alt="" />
          <div className="d-flex align-items-center pb-1 justify-content-between w-100 pl-3">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center answers-reaction px-3 py-1 justify-content-center mr-2">
                <i className="far fa-thumbs-up pr-2 mr-2 border-right">
                  <span></span>
                </i>
                <i className="far fa-thumbs-down"></i>
              </div>
              <i className="far fa-comment p-2"></i>
            </div>
            <div className="d-flex justify-content-center answers-share-more">
              <i class="fas fa-share p-2 pr-0"></i>
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
                  <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostsCard);
