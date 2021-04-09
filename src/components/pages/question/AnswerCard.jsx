import React from "react";
import "./SpecificQuestion.scss";
import SingleAnswer from "./SingleAnswer";
import { connect } from "react-redux";
import { fetchCurrentUserAnswers } from "../../../store";

const mapStateToProps = (state) => {
  return {
    currentUserAnswers: state?.answer?.userAnswers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentUserAnswers: () => dispatch(fetchCurrentUserAnswers()),
  };
};

function AnswerCard({ currentUserAnswers, fetchCurrentUserAnswers }) {
  return (
    <div>
        <h6 className="border-top m-0 border-bottom py-1">21 Answer</h6>
      {currentUserAnswers
        ?.slice(0)
        ?.reverse()
        ?.map((answer, key) => (
          <SingleAnswer answer={answer} />
        ))}
      
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerCard);
