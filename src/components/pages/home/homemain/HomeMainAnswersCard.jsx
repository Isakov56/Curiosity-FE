import React, {useEffect} from "react";
import HomeMainSingleAnswer from "./HomeMainSingleAnswer";
import { connect, useSelector } from "react-redux";
import { fetchCurrentQuestionAnswers } from "../../../../store";

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

function HomeMainAnswersCard({ fetchAllAnswers}) {
    const allAnswers = useSelector(state => state.answer.allAnswers)
  return (
    <div>
       <div>
        {allAnswers
            ?.slice(0)
            ?.reverse()
            ?.map((answer, key) => (
            <HomeMainSingleAnswer answer={answer}/>
            ))}
        </div>  
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMainAnswersCard);