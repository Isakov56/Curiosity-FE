import React from 'react'
import {Link} from "react-router-dom"

export default function SidebarFooter() {
    return (
        <div>
            <div className="d-flex justify-content-between px-5">
                <Link><small>About</small></Link>
                <Link><small>Help</small></Link>
                <Link><small>Terms</small></Link>
            </div>
            <div className="d-flex justify-content-between px-5">
                <Link><small>Press</small></Link>
                <Link><small>Advertise</small></Link>
                <Link><small>Privacy</small></Link>
            </div>
            <div className="d-flex justify-content-between px-5">
                <Link><small>About</small></Link>
                <Link><small>Help</small></Link>
                <Link><small>Terms</small></Link>
            </div>
            <div className="d-flex justify-content-between px-5">
                <Link><small>About</small></Link>
                <Link><small>Help</small></Link>
                <Link><small>Terms</small></Link>
            </div>
        </div>
    )
}
