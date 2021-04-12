import React, {useEffect} from 'react'
import StickyBox from 'react-sticky-box'
import "./questions.scss"
import QuestionsCardQuestions from './QuestionsCardQuestions'
import { connect } from "react-redux";
import { fetchAllQuestions } from "../../../store";

const mapStateToProps = (state) => {
  return {
    allQuestions: state?.question?.allQuestions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllQuestions: () => dispatch(fetchAllQuestions()),
  };
};

function Questions({fetchAllQuestions, allQuestions}) {
    useEffect(() => {
        fetchAllQuestions()
    }, [])
    return (
        <div className="container-main">
            <div className="questions-container container-main-child d-flex mx-auto pt-4 align-items-stretch ">
                <div className="w-100 col-2 p-0 mr-4">
                    <h5 className="border-bottom pl-3">Questions</h5>
                    <div className="questions-sidebar my-btns d-flex flex-column">
                        <button className="d-flex align-items-start pl-3 border-0"> Intresting</button>
                        <button className="d-flex align-items-start pl-3 border-0"> Math</button>
                        <button className="d-flex align-items-start pl-3 border-0"> Chemistry</button>
                        <button className="d-flex align-items-start pl-3 border-0"> Physics</button>
                    </div>
                </div>
                <div className="w-100 col-10 p-0 question-main border rounded">
                    <h3 className="m-0 border-bottom p-2"> Questions</h3>
                    <QuestionsCardQuestions allQuestions={allQuestions}/>
                </div>
            </div>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
