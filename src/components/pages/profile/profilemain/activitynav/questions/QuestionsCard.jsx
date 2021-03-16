import React from 'react'
import {Link} from 'react-router-dom'
export default function QuestionsCard() {
    return (
        <div>
            <div className="answers-card d-flex border-top p-2 border-bottom">
                <div className="d-flex flex-column align-items-start" style={{width: "100%"}}>
                    <div className="my-2">
                        <Link to="#" className="text-dark">
                            <h5>How are you doing today?</h5>
                        </Link>
                        <Link to="#" className="text-secondary">
                            <span>2 replies</span>
                        </Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="">
                            
                        </div>
                        <div className="d-flex justify-content-center answers-share-more">
                            <i class="fas fa-share p-2"></i>
                            <i class="fas fa-ellipsis-h p-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
