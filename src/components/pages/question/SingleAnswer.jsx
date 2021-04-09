import React from 'react'
import { Dropdown } from "react-bootstrap";


export default function SingleAnswer({answer}) {
    return (
        <div>
            <div>
        
        <div className="py-2 border-bottom">
          <div className="d-flex">
            <img
              src={answer?.user?.image}
              alt=""
              className="question-user-img mr-1"
            />
            <div>
              <h5 className="m-0">{answer?.user?.name} {answer?.user?.surname}</h5>
              <span className="text-secondary">time</span>
            </div>
          </div>
          <span className="text-secondary">
            Originally answered: {answer?.question?.question}
          </span>
          <div className="my-2">
            {answer?.content}
          </div>
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center answers-reaction px-3 py-1 justify-content-center mr-2">
                <i className="far fa-thumbs-up pr-2 mr-2 border-right">
                </i>
                <i className="far fa-thumbs-down"></i>
              </div>
              <i
                className="far fa-comment p-2"
                //   onClick={() => {
                //   setShowComments(true)
                //     setTimeout(() => {
                //       setShowLoadMoreBtn(true);
                //     }, 500);
                //   }}
              ></i>
            </div>
            <div className="d-flex justify-content-center answers-share-more">
              <i class="fas fa-share p-2"></i>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="post-card-dropdaown"
                  className="p-0"
                >
                  <i class="fas fa-ellipsis-h p-2"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Save</Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    // onClick={() => handleDelete(post?._id)}
                  >
                    Delete
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Edit</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
