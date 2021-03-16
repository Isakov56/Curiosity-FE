import React from 'react'
import HomeMainPostCard from "./HomeMainPostCard"
import "./homemain.scss"

export default function HomeMain() {
    return (
        <div className="home-main-container">
            <div className="container-main-question-feed p-2 rounded border">
                <div className="d-flex align-items-center">
                    <i className="fas fa-user-circle user-img-question mr-2 "></i>
                    <span>Name Surname</span>
                </div>
                <button className="text-medium text-scondary mt-2">What is your question?</button>
            </div>
            <div className="my-2 rounded home-post-card-container">
                <HomeMainPostCard />
                <HomeMainPostCard />
            </div>
        </div>
    )
}
