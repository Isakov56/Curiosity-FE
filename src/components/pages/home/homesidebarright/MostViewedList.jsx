import React from 'react'
import {Link} from "react-router-dom"

export default function MostViewedList() {
    return (
        <div>
            <div className="my-2 px-2">
                <Link to="#" className="text-dark">
                    <h6 className="m-0">How are you doing today?</h6>
                </Link>
                <Link to="#" className="text-secondary">
                    <span>2 replies</span>
                        </Link>
            </div>
        </div>
    )
}
