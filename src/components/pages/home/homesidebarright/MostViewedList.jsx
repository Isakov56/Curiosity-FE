import React from 'react'
import {Link} from "react-router-dom"

export default function MostViewedList({allQuestions}) {
    return (
        <div>
            <div className="my-2 px-2">
                { allQuestions.slice(0, 6).map((question, key ) => (
                    <Link to={`/questions/${question._id}`} className="text-dark">
                        <div className="my-1">
                            <h6 className="m-0">{question?.question}</h6>
                            <span>{question?.answers?.length} {question?.answers?.length === 1 ? "reply" : "replies"}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
