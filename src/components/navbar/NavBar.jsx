import React, {useState} from 'react'
import "./navbar.scss"
import {InputGroup, FormControl, Button, Dropdown} from "react-bootstrap"
import {Link, useHistory} from "react-router-dom"

export default function NavBar() {
    const history = useHistory()
    const [location, setLocation] = useState(["/login", "signup"])
    console.log(history.location.pathname, "lllllllllllllllll")

    const signedHandler = () => {
        setLocation(["/login", "signup"])
        history.push("/login")
    }

    const [home, setHome] = useState(false)
    const [questions, setQuestions] = useState(false)
    const [books, setBooks] = useState(false)
    const [notifications, setNotifications] = useState(false)

    const showNavBar = () => {
        return (
            <div className="nav-container border">
                <div className="nav-container-child d-flex justify-content-between align-items-center">
                    <div className="mr-4">  
                        <img id="logo" src="https://www.freelogodesign.org/file/app/client/thumb/e5c9fc69-2275-42e6-96a0-799bcc0fd669_200x200.png?1615374407041" alt=""/>
                    </div>
                    <div className="d-flex main-icons-container align-items-center myMy">
                        <Link to="/home" className={"nav-icon-link"}>
                            <i className="fas fa-home nav-icon py-2 px-3 my-1" style={{color: "#e84723"}}></i>
                        </Link>

                        <Link to="/questions" className={"nav-icon-link"}>
                            <i className="fas fa-poll-h nav-icon py-2 px-3 my-1"></i>
                        </Link>

                        <Link to="/books" className={"nav-icon-link"}>
                            <i className="fas fa-book-open nav-icon py-2 px-3 my-1"></i>
                        </Link>

                        <Link to="/notifications" className={"nav-icon-link"}>
                            <i className="fas fa-bell nav-icon py-2 px-3 my-1"></i>
                        </Link>
                    </div>

                    <div className="nav-search ml-5 mr-2">
                        <InputGroup className="p-1">
                            <FormControl
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                            className="nav-search-form-control"
                            />
                        </InputGroup>
                    </div>
                    
                    <div className="d-flex align-items-center">
                        <div>
                        <Dropdown>
                                <Dropdown.Toggle className="profile-dropdown m-0 p-0">
                                    <i className="fas fa-user-circle nav-icon-2 mx-2"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-container p-0">
                                    <div className="d-flex align-items-center border-bottom p-2">
                                        <i className="fas fa-user-circle nav-icon-2 mx-2" style={{fontSize: "3rem"}}></i> 
                                        <Link>
                                            <h6 className="p-0 m-0 text-dark">Name Surname</h6>
                                            <span className="text-dark">someones@mail.com</span>
                                        </Link>     
                                    </div>
                                    <div className="py-3">
                                        <Dropdown.Item href="/profile">
                                            <i className="mr-2 far fa-user"></i>
                                            <span>Profile</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            <i className="mr-2 far fa-envelope-open"></i>
                                            <sapn>Messages</sapn>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            <i className="mr-2 far fa-bookmark"></i>
                                            <sapn>Saved</sapn>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            <i className="mr-2 far fa-chart-bar"></i>
                                            <span>Activity</span>
                                        </Dropdown.Item>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div>
                            <i className="fas fa-question-circle nav-icon-2 mx-2" ></i>
                        </div>
                        <div className="ask-btn-container mx-1">
                            <Button className="ask-btn p-1 d-flex alig-items-center justify-content-center" onClick={() => signedHandler()}>Ask question</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {
                history.location.pathname === location[0] ||
                history.location.pathname === location[1] ?
                "" :
                showNavBar()
            }
        </div>
    )
}
