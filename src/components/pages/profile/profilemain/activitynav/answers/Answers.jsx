import React, {useState} from 'react'
import AnswersCard from './AnswersCard'
import {Dropdown} from "react-bootstrap"
import "./answers.scss"

export default function Answers() {
    const [mostRecent, setMostRecent ] = useState(false)
    return (
        <div>
            <div className="d-flex justify-content-between my-2">
                <h6 className="m-0 d-flex align-items-center">2 answers</h6>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='px-2 p-0 h6'>
                        {mostRecent ? "Most recent" : "All"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="" onClick={()=>setMostRecent(true)}>Most recent</Dropdown.Item>
                        <Dropdown.Item href="" onClick={()=>setMostRecent(false)}>All</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <AnswersCard />
            <AnswersCard />
        </div>
    )
}
