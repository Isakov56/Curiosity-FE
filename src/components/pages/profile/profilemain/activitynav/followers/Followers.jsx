import React from 'react'
import {Link } from "react-router-dom"
import FollowersList from './FollowersList'
import "./followers.scss"

export default function Followers() {
    return (
        <div>
            <div className="d-flex justify-content-between my-2">
                <h6 className="m-0 d-flex align-items-center">6 Followers</h6>
            </div>
            <FollowersList />
            <FollowersList />
            <FollowersList />
            <FollowersList />
            <FollowersList />
            <FollowersList />
        </div>
    )
}
