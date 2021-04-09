import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import "./navbar.scss";
import { InputGroup, FormControl, Button, Dropdown } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";

function NavBar() {;
  
    const currentUser = useSelector(state => state.user.currentUser )
  const history = useHistory();
  const routerLocation = useLocation();
  const [showNav, setShowNav] = useState(true);
  const [location, setLocation] = useState(["/login", "/signup"]);
  console.log(history.location.pathname, "lllllllllllllllll");

  const signedHandler = () => {
    setLocation(["/login", "signup"]);
    history.push("/login");
  };

  console.log(currentUser?.image, "testtttttttttttttttstst")

  // const currentUser = useSelector((state=> state.user.currentUser))

  useEffect(() => {
    const { pathname } = routerLocation;
    if (location.includes(pathname)) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [routerLocation]);

  const [home, setHome] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [books, setBooks] = useState(false);
  const [notifications, setNotifications] = useState(false);

  const test = (event) =>{
      event.preventDefault()
      history.push("/profile/posts")
  }

  const showNavBar = () => {
    return (
      <div className="nav-container border">
        <div className="nav-container-child d-flex justify-content-between align-items-center">
          <div className="mr-4">
            {/* <img id="logo" src="https://res.cloudinary.com/de6vmr2ma/image/upload/v1617821985/logo/LogoMakr-2ekfkU_gmk2pl.png" alt=""/> */}
            <Link style={{textDecoration: "none"}} to="/home">
                <h1 className="main-logo">Curiosity</h1>
            </Link>
          </div>
          <div className="d-flex main-icons-container align-items-center myMy">
            <Link
              to="/home"
              className={`nav-icon-link ${
                routerLocation.pathname === "/home"
                  ? "nav-icon-link-active"
                  : ""
              }`}
            >
              <i
                className={`fas fa-home nav-icon py-2 px-3 my-1 ${
                  routerLocation.pathname === "/home" ? "active" : ""
                }`}
              ></i>
            </Link>

            <Link
              to="/questions"
              className={`nav-icon-link ${
                routerLocation.pathname === "/questions"
                  ? "nav-icon-link-active"
                  : ""
              }`}
            >
              <i
                className={`fas fa-poll-h nav-icon py-2 px-3 my-1 ${
                  routerLocation.pathname === "/questions" ? "active" : ""
                }`}
              ></i>
            </Link>

            <Link
              to="/books"
              className={`nav-icon-link ${
                routerLocation.pathname === "/books"
                  ? "nav-icon-link-active"
                  : ""
              }`}
            >
              <i
                className={`fas fa-book-open nav-icon py-2 px-3 my-1 ${
                  routerLocation.pathname === "/books" ? "active" : ""
                }`}
              ></i>
            </Link>

            <Link
              to="/notifications"
              className={`nav-icon-link ${
                routerLocation.pathname === "/notifications"
                  ? "nav-icon-link-active"
                  : ""
              }`}
            >
              <i
                className={`fas fa-bell nav-icon py-2 px-3 my-1 ${
                  routerLocation.pathname === "/notifications" ? "active" : ""
                }`}
              ></i>
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
              <Dropdown className="m-0 p-0">
                <Dropdown.Toggle className="profile-dropdown top m-0 p-0">
                  { currentUser?.image ? <img src={currentUser?.image} alt="" className="navbar-user-img nav-icon-2 p-0"/> :
                  <i className="fas fa-user-circle nav-icon-2 mx-2"></i>}
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-container p-0">
                      <Dropdown.Item className="nav-dropdown d-flex align-items-center border-bottom p-2" onClick={(event)=>{test(event)}}>
                  { currentUser?.image ? <img src={currentUser?.image} alt="" className="navbar-user-img nav-icon-2 p-0 mx-2" style={{ width: "3rem", height: "3rem"}}/> :
                  <i
                  className="fas fa-user-circle nav-icon-2 mx-2"
                  style={{ fontSize: "3rem" }}
                ></i>}
                    <div>
                        <h6 className="p-0 m-0 text-dark">{currentUser?.name} {currentUser?.surname}</h6>
                        <span className="text-dark">{currentUser?.email}</span>
                    </div>
                     </Dropdown.Item>
                  <div className="py-3">
                    <Dropdown.Item className="nav-dropdown" href="/profile/posts" onClick={(event)=>{test(event)}}>
                      <i className="mr-2 far fa-user"></i>
                      <span>Profile</span>
                    </Dropdown.Item>
                    <Dropdown.Item className="nav-dropdown" href="#/action-2">
                      <i className="mr-2 far fa-envelope-open"></i>
                      <sapn>Messages</sapn>
                    </Dropdown.Item>
                    <Dropdown.Item className="nav-dropdown" href="#/action-3">
                      <i className="mr-2 far fa-bookmark"></i>
                      <sapn>Saved</sapn>
                    </Dropdown.Item>
                    <Dropdown.Item className="nav-dropdown" href="#/action-3">
                      <i className="mr-2 far fa-chart-bar"></i>
                      <span>Activity</span>
                    </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
              <i className="fas fa-question-circle nav-icon-2 mx-2 p-0"></i>
            <div className="ask-btn-container mx-1">
              <Button
                className="ask-btn p-1 d-flex alig-items-center justify-content-center"
                onClick={() => signedHandler()}
              >
                Ask question
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div>{showNav && showNavBar()}</div>;
}

export default NavBar;
