import React from 'react'
import {Link } from "react-router-dom"
import "./followers.scss"

export default function Followers() {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-between border-top p-2 border-bottom">
                <div className="d-flex align-items-center">
                    <i className="fas fa-user-circle user-img-question mr-2"></i>
                    <Link className="text-dark d-flex">
                        <h6 className="m-0 mr-1 font-weight-bold">Name Surname,</h6>
                    </Link>
                    <span>qualification</span>
                </div>
                <button className="following-btn p-1">
                    <i class="fas fa-user-check mr-1"></i>
                    <span>following</span>
                </button>
            </div>
        </div>
    )
}