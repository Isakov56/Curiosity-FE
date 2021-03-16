import React from 'react'
import {Link} from 'react-router-dom'

export default function QuestionsCardQuestions() {
    return (
        <div>
            <div className="answers-card questions d-flex border-top p-2 border-bottom">
                <div className="d-flex flex-column align-items-start" style={{width: "100%"}}>
                    <div className="d-flex align-items-center">
                        <i className="fas fa-user-circle user-img-question mr-2"></i>
                        <div className="">
                            <Link to="#" className="text-dark">
                                <h6 className="m-0">Name Surname</h6>
                            </Link>
                            <span>qualification</span>
                        </div>
                    </div>
                    <div className="my-2">
                        <Link to="#" className="text-dark">
                            <h5>How are you doing today?</h5>
                        </Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="d-flex align-items-center questions-i">
                            <div className="d-flex align-items-center answers-reaction px-3 py-1 justify-content-center mr-2">
                                <i className="far fa-thumbs-up pr-2 mr-2 border-right"><span></span></i>
                                <i className="far fa-thumbs-down"></i>
                            </div>
                            <div className="left-icons">
                                <i class="fas fa-comment p-2"></i>
                                <i className="fas fa-reply p-2"></i>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center answers-share-more">
                            <i class="fas fa-share p-2"></i>
                            <i class="fas fa-ellipsis-h p-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
