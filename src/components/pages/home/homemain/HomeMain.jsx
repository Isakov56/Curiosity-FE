import React, {useEffect, useState} from 'react'
import HomeMainAnswersCard from "./HomeMainAnswersCard"
import {useSelector} from 'react-redux'
import "./homemain.scss"
import {Link} from 'react-router-dom'
import AnswersCard from '../../profile/profilemain/activitynav/answers/AnswersCard'
import QuestionModal from '../../../pages/profile/profilemain/activitynav/questions/QuestionModal'
import { connect } from "react-redux";
import { fetchAllAnswers, fetchCurrentUserQuestions } from "../../../../store";
import Cookies from 'js-cookie';

const mapStateToProps = (state) => {
  return {
    currentUserAnswers: state?.answer?.userAnswers,
    currentUserQuestions: state?.question?.currentUserQuestions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllAnswers: () => dispatch(fetchAllAnswers()),
    fetchCurrentUserQuestions: () => dispatch(fetchCurrentUserQuestions()),
  }
}

function HomeMain({fetchAllAnswers, fetchCurrentUserQuestions, currentUserQuestions}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        fetchAllAnswers()
        fetchCurrentUserQuestions()
        console.log(Cookies.get('isAuthUser'), "mylovleycookie")
        console.log('eelllton')
    }, [])
    const currentUser = useSelector(state => state?.user?.currentUser)
    return (
        <div className="home-main-container">
            <div className="container-main-question-feed pt-3 rounded border">
                <div className="d-flex align-items-center px-3">
                    {currentUser?.image ? <img src={currentUser?.image} className="user-img-home mr-1"/> :
                        <i className="fas fa-user-circle mr-2 "></i>}
                    <span>{currentUser?.name} {currentUser?.surname}</span>
                </div>
                <div className="border-bottom px-3 ">
                    <button className="text-medium text-scondary mt-2 border-0 px-0" onClick={() => handleShow()}>What is your question?</button>

                </div>
                <div className="px-3 my-2 mb-3 ">
                    <span className="text-secondary">you recently asked</span>
                    <Link to={`/questions/${currentUserQuestions[currentUserQuestions?.length - 1]?._id}`} className="text-dark">
                    <h4>{currentUserQuestions[currentUserQuestions.length - 1]?.question}</h4>
                    </Link>
                </div>

                <QuestionModal handleShow={handleShow} handleClose={handleClose} show={show}/>
            </div>
            <div className="my-2 rounded home-post-card-container">
                <HomeMainAnswersCard fetchAllAnswers={fetchAllAnswers}/>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMain);

