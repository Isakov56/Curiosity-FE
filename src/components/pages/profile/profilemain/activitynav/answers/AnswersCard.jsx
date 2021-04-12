import React from 'react'
import { Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import SingleAnswer from './SingleAnswer'

export default function AnswersCard({fetchCurrentUserAnswers}) {
    const currentUserAnswers = useSelector(state => state.answer.userAnswers)
    return (
        <div>
            {currentUserAnswers
        ?.slice(0)
        ?.reverse()
        ?.map((answer, key) => ( <SingleAnswer answer={answer} fetchCurrentUserAnswers={fetchCurrentUserAnswers}/>))}
        </div>
    )
}
