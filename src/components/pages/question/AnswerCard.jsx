import React, {useEffect} from "react";
import "./SpecificQuestion.scss";
import SingleAnswer from "./SingleAnswer";
import { connect } from "react-redux";
import { fetchCurrentQuestionAnswers } from "../../../store";

const mapStateToProps = (state) => {
  return {
    //currentQuestionAnswers: state?.answer?.questionAnswers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentQuestionAnswers: (questionId) => dispatch(fetchCurrentQuestionAnswers(questionId)),
  };
};

function AnswerCard({ fetchCurrentQuestionAnswers, myQuestion, getQuestion }) {
    const currentQuestionAnswers = myQuestion?.answers
  return (
    <div>
        {currentQuestionAnswers?.length > 0 ? <div>
          <h6 className="border-top m-0 border-bottom py-1">{currentQuestionAnswers?.length} Answers</h6>
          
          <div>
          {currentQuestionAnswers
              ?.slice(0)
              ?.reverse()
              ?.map((answer, key) => (
              <SingleAnswer answer={answer} question={myQuestion} getQuestion={getQuestion}/>
              ))}
          </div>  
        </div> : 
        <div className="no-answer d-flex justify-content-center align-items-center border-top border-bottom">
          <div className=" d-flex flex-column">
            <i className="fas fa-pen text-center pen mb-2"></i>
            <span>No answers yet</span>
          </div>
        </div>
        }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerCard);
