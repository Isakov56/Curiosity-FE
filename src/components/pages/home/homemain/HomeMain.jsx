import React from 'react'
import HomeMainPostCard from "./HomeMainPostCard"
import {useSelector} from 'react-redux'
import "./homemain.scss"

export default function HomeMain() {
    const currentUser = useSelector(state => state?.user?.currentUser)
    return (
        <div className="home-main-container">
            <div className="container-main-question-feed p-2 rounded border">
                <div className="d-flex align-items-center">
                    {currentUser?.image ? <img src={currentUser?.image} className="user-img-home mr-1"/> :
                        <i className="fas fa-user-circle mr-2 "></i>}
                    <span>{currentUser?.name} {currentUser?.surname}</span>
                </div>
                <button className="text-medium text-scondary mt-2 border-0">What is your question?</button>
            </div>
            <div className="my-2 rounded home-post-card-container">
                <HomeMainPostCard />
                <HomeMainPostCard />
            </div>
        </div>
    )
}
