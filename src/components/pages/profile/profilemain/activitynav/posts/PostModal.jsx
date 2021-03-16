import React, {useState} from 'react'
import { Modal, Button, InputGroup, FormControl, Dropdown} from "react-bootstrap"
import { Link } from "react-router-dom"

export default function PostModal({show, handleClose}) {
    const [anyone, setAnyone] = useState(true)

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex align-items-center">
                        <i className="fas fa-user-circle user-img-question mr-2"></i>
                        <div className="">
                            <Link to="#" className="text-dark">
                                <h5 className="m-0">Name Surname</h5>
                            </Link>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="py-0 px-2 my-1 d-flex align-items-center">
                                    {anyone ? "Anyone" : "Connections only"}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="" onClick={() => setAnyone(true)}>Anyone</Dropdown.Item>
                                    <Dropdown.Item href="" onClick={() => setAnyone(false)}>Connections only</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <InputGroup className="my-1">
                        <FormControl placeholder="Title of your post" className="px-1 textarea"/>
                    </InputGroup>

                    <textarea placeholder="The content of your post" className="w-100 my-1 px-1 textarea" style={{height: "10rem"}}></textarea>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <div className="d-flex post-modal-footer">
                        <i className="fas fa-image text-secondary"></i>
                        <i className="fab fa-youtube text-secondary"></i>
                        <i className="fas fa-sticky-note text-secondary"></i>
                    </div>

                    <button variant="primary" className="h5 post-btn font-weight-normal px-2" onClick={handleClose}>
                        Post
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
