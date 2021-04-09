import React, {useState, useEffect} from 'react'
import AnswersCard from './AnswersCard'
import {Dropdown} from "react-bootstrap"
import "./answers.scss"
import { connect } from "react-redux";
import { fetchCurrentUserAnswers } from "../../../../../../store";

const mapStateToProps = (state) => {
  return {
    currentUserAnswers: state?.answer?.userAnswers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUserAnswers: () => dispatch(fetchCurrentUserAnswers()),
  }
}

function Answers({fetchCurrentUserAnswers}) {
    const [mostRecent, setMostRecent ] = useState(false)
    useEffect(() => {
        fetchCurrentUserAnswers()
    }, [])
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
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
