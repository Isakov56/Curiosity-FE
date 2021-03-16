import React from 'react'
import Answers from './activitynav/answers/Answers'
import Questions from './activitynav/questions/Questions'
import Posts from './activitynav/posts/Posts'
import Followers from './activitynav/followers/Followers'
import { Link } from 'react-router-dom'
import {Route} from 'react-router-dom'
import './profilemain.scss'

export default function ProfileMain() {
    return (
        <div className="profilemain-container">
            <div className="profilemain-info pb-4">
                <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-user-circle user-img mr-3"></i>
                    <div>
                        <div className="d-flex align-items-center"> 
                            <h3>Name Surname</h3>
                            <Link>
                                <span className="text-secondary">Edit</span>
                            </Link>
                        </div>
                        <Link>
                            <span className="text-secondary">Add qualification</span>
                        </Link>
                    </div>
                </div>
                <Link>
                    <span className="text-secondary">Write a description to yourself</span>
                </Link>
            </div>
            <div className="d-flex border-bottom pt-1">
                    <Link to="/profile/answers" className="activity-nav-container pb-1 mr-3">
                        <span className=" p-1 text-secondary activity-nav"> answers</span> 
                    </Link>
               
                    <Link to="/profile/questions" className="activity-nav-container pb-1 mr-3">
                        <span className=" p-1 text-secondary activity-nav">questions</span>  
                    </Link>
                
                
                    <Link to="/profile/posts" className="activity-nav-container pb-1 mr-3">
                        <span className=" p-1 text-secondary activity-nav">posts</span>  
                    </Link>

                    <Link to="/profile/followers" className="activity-nav-container pb-1 mr-3">
                        <span  className=" p-1 text-secondary activity-nav"> followers</span> 
                    </Link>
                
                    <Link to="#" className="activity-nav-container pb-1 mr-3">
                        <span className=" p-1 text-secondary activity-nav"> following </span>
                    </Link>
            </div>
            <Route path="/profile/questions" exact component={Questions} />
            <Route path="/profile/answers" exact component={Answers} />
            <Route path="/profile/posts" exact component={Posts} />
            <Route path="/profile/followers" exact component={Followers} />
        </div>
    )
}
