import React from 'react'
import QuestionsCard from "./QuestionsCard"
import { Link } from 'react-router-dom'
import "./questions.scss"

export default function Questions() {
    return (
        <div>
            <div className="d-flex justify-content-between my-2">
                <h6 className="m-0 d-flex align-items-center">2 questions</h6>
            </div>
            <QuestionsCard />
            <QuestionsCard />
        </div>
    )
}

