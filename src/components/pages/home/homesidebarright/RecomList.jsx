import React from 'react'
import {Link} from "react-router-dom"

export default function RecomList({allUsers}) {
    return (
        <div>
            {allUsers.slice(0, 6).map((user, key ) => (
            <div className="d-flex align-items-center px-2 py-1 justify-content-between">
                    <div className="d-flex align-items-center">
                        {user?.image === null ?  <img src={user.img} alt=""/> :
                            <i className="fas fa-user-circle user-img-sidebar mr-1 "></i>
                        }
                        <Link className="text-dark">
                            <h6 className="m-0">{user?.name} {user?.surname}</h6>
                            <small>Qualification</small>
                        </Link>
                    </div>
                    <div>
                        <button className="user-plus">
                            <i className="fas fa-user-plus "></i>
                        </button>
                    </div>
                </div>
            ))
        }
        </div>
    )
}
