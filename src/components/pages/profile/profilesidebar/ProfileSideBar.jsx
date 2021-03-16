import React, {useState} from 'react'
import PostModal from "../profilemain/activitynav/posts/PostModal"
import {Link } from "react-router-dom"
import './profilesidebar.scss'

export default function ProfileSideBar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div>
                <div>
                    <h6 className="border-bottom w-100 py-2">Qualifications and information</h6>
                    <div className="my-2">
                        <div className="d-flex align-items-center sidebar-list my-2 w-100">
                            <i className="fas fa-briefcase mr-3 text-secondary"></i>
                            <Link className="text-dark sidebar-list-link">
                                <span>Add job qualifacitons</span>
                            </Link>
                        </div>
                        <div className="d-flex align-items-center sidebar-list my-2 w-100">
                            <i className="fas fa-graduation-cap mr-2 text-secondary"></i>
                            <Link className="text-dark sidebar-list-link ">
                                <span>Add an educational-related qualification</span>
                            </Link>
                        </div>
                        <div className="d-flex align-items-center sidebar-list my-2 w-100">
                            <i className="fas fa-map-marker-alt mr-3 text-secondary"></i>
                            <Link className="text-dark sidebar-list-link ">
                                <span>Add location information</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h6 className="border-bottom py-2 mt-5">Posts</h6>
                    <div className="d-flex justify-content-center aling-itens-center post-box w-100 border my-2">
                        <i className="fas fa-plus-circle align-self-center" onClick={handleShow}></i>
                    </div>
                </div>
                <PostModal show={show} handleClose={handleClose} />
            </div>
        </div>
    )
}
