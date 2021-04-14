import React, {useState} from 'react'
import Answers from './activitynav/answers/Answers'
import Questions from './activitynav/questions/Questions'
import Posts from './activitynav/posts/Posts'
import Followers from './activitynav/followers/Followers'
import ProtectedRoute from "../../../../customComponents/ProtectedRoute";
import { Link, useLocation} from 'react-router-dom'
import {Route} from 'react-router-dom'
import './profilemain.scss'
import {BrowserRouter as Router} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { editUserImg } from "../../../../store";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
      currentUser: state.user.currentUser,
    };
  }
  
const mapDispatchToProps = dispatch => {
return {
    editUserImg: (userInfo) => dispatch(editUserImg(userInfo))
}
}

function ProfileMain({handleShow, handleNameModalShow, handleQualificationModalShow, handleDescriptionModalShow, editUserImg}) {
    const currentUser = useSelector(state => state.user.currentUser)

    const routerLocation = useLocation()

    const handleEdit = () =>{
        handleNameModalShow()
        handleShow()
    }
    const handleQualification = () =>{
        handleQualificationModalShow()
        handleShow()
    }

    const handleDescription = () =>{
        handleDescriptionModalShow()
        handleShow()
    }

    const handleUserImg = (e) =>{
        const formData = new FormData();
		formData.append("image", e.target.files[0]);

		setFile(formData);
        editUserImg(formData);
    }

    const [editQualificationShow, setEditQualificationShow ] = useState(false)
    const [editNameShow, setEditNameShow ] = useState(false)
    const [editDescriptionShow, setEditDescriptionShow ] = useState(false)
    const [imgBtnShow, setImgBtnShow ] = useState(false)
    const [file, setFile ] = useState()

    return (
        <div className="profilemain-container">
            <div className="profilemain-info pb-4">
                <div className="d-flex align-items-center mb-2">
                    <div className="user-img-btn-container" onMouseOver={() => setImgBtnShow(true)} onMouseOut={() => setImgBtnShow(false)}>
                        {currentUser?.image ?
                            <img src={currentUser?.image} alt="" className="user-img"/> :
                            <i className="fas fa-user-circle user-img-i"></i>
                        }
                        <div className="" style={imgBtnShow ? {visibility: "visible", height: "0px"} : {visibility: "hidden", height: "0px"}}>
                            <label style={{}}>
                                <i className="fas fa-camera-retro user-img-btn"></i>
                                <input
                                    className='file-upload'
                                    type='file'
                                    multiple
                                    onChange={(e) => handleUserImg(e)}
                                    style={{display: "none", height: "0px"}}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="ml-2">
                        <div className="d-flex align-items-center" onMouseOver={() => setEditNameShow(true)} onMouseOut={() => setEditNameShow(false)}>
                            <h3>{currentUser?.name} {currentUser?.surname}</h3>
                            <Link style={editNameShow ? {visibility: "visible"} : {visibility: "hidden"}}>
                                <span className="text-secondary" onClick={() => handleEdit()}>Edit</span>
                            </Link>
                        </div>
                        {currentUser?.jobQualification?.length === 0 ? 
                        <Link>
                            <span className="text-secondary" onClick={() => handleQualification()}>
                                <div >
                                    Add qualification
                                </div>  
                            </span>
                        </Link> :
                        <div className="d-flex" onMouseOver={() => setEditQualificationShow(true)} onMouseOut={() => setEditQualificationShow(false)}>
                            <div style={{textTransform: "capitalize"}} className="h5 font-weight-normal" >
                                {currentUser?.jobQualification}
                                <Link onClick={() => handleQualification()} className="small text-secondary" style={editQualificationShow ? {visibility: "visible"} : {visibility: "hidden"}}><span>Edit</span></Link>
                            </div> 
                        </div>
                        }
                    </div>
                </div>
                {currentUser?.description.length === 0 ?
                <Link>
                    <span className="text-secondary" onClick={() => handleDescription()}>
                        <div>
                            Write a description to yourself
                        </div> 
                    </span>
                </Link> :
                <div className="" onMouseOver={() => setEditDescriptionShow(true)} onMouseOut={() => setEditDescriptionShow(false)}>
                    <div>
                        {currentUser?.description}
                        <span>
                            <Link onClick={() => handleDescription()} className="text-secondary" style={editDescriptionShow ? {visibility: "visible"} : {visibility: "hidden"}}><span>Edit</span></Link>
                        </span>
                    </div>
                </div>
                }
            </div>
            <div className="d-flex border-bottom pt-1">
                    <Link to="/profile/answers" className={`activity-nav-container pb-1 mr-3 ${routerLocation.pathname === '/profile/answers' ? 'active' : ''}`}>
                        <span className={` p-1 text-secondary activity-nav answers`}>answers</span> 
                    </Link>
               
                    <Link to="/profile/questions" className={`activity-nav-container pb-1 mr-3 ${routerLocation.pathname === '/profile/questions' ? 'active' : ''}`}>
                        <span className=" p-1 text-secondary activity-nav">questions</span>  
                    </Link>
                
                
                    <Link to="/profile/posts" className={`activity-nav-container pb-1 mr-3 ${routerLocation.pathname === '/profile/posts' ? 'active' : ''}`}>
                        <span className=" p-1 text-secondary activity-nav">posts</span>  
                    </Link>

                    <Link to="/profile/followers" className={`activity-nav-container pb-1 mr-3 ${routerLocation.pathname === '/profile/followers' ? 'active' : ''}`}>
                        <span  className=" p-1 text-secondary activity-nav"> followers</span> 
                    </Link>
                
                    <Link to="/profile/following" className={`activity-nav-container pb-1 mr-3 ${routerLocation.pathname === '/profile/following' ? 'active' : ''}`}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMain)
