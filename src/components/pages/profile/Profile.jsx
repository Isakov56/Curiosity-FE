import React, { useEffect, useState } from "react";
import { Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { editCurrentUserInfo, fetchAllUsers, fetchCurrentUser, fetchCurrentUserPosts } from "../../../store";
import "./profile.scss";
import ProfileMain from "./profilemain/ProfileMain";
import ProfileSideBar from "./profilesidebar/ProfileSideBar";

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    editCurrentUserInfo: (userInfo, handleClose) => dispatch(editCurrentUserInfo(userInfo, handleClose)),
    fetchCurrentUserPosts: () => dispatch(fetchCurrentUserPosts())
  }
}

function Profile ({ currentUser, fetchCurrentUser, editCurrentUserInfo, fetchAllUsers, fetchCurrentUserPosts }) {

  useEffect(() => {
    fetchCurrentUser()
    fetchAllUsers()
    //fetchCurrentUserPosts()
    // console.log(localStorage.getItem("JWTToken"), "my TTTTTTTTTTTTTTTT");
  }, []);

  const history = useHistory();

  const [show, setShow] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [showQualificationModal, setShowQualificationModal] = useState(false);
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [showUserImgModal, setShowUserImgModal] = useState(false);
  
  const [userInfo, setUserInfo] = useState({
    name: currentUser?.name,
    surname: currentUser?.surname,
    username: currentUser?.username,
    email: currentUser?.email,
    jobQualification: currentUser?.jobQualification,
    description: currentUser?.description,
    education: currentUser?.education,
})

const handleClose = () => {
  setShow(false)
  setShowNameModal(false)
  setShowQualificationModal(false)
  setShowDescriptionModal(false)
  setShowUserImgModal(false)

}
const handleShow = () => setShow(true);
const handleNameModalShow = () => setShowNameModal(true);
const handleQualificationModalShow = () => setShowQualificationModal(true);
const handleDescriptionModalShow = () => setShowDescriptionModal(true);

  return (
    <div className="profile-container">
      <div className="d-flex profile-container-child mx-auto pt-4 align-items-stretch">
        <div className="col-8">
          <ProfileMain 
          handleShow={handleShow} 
          handleNameModalShow={handleNameModalShow} 
          handleQualificationModalShow={handleQualificationModalShow}
          handleDescriptionModalShow={handleDescriptionModalShow}
          />
        </div>
        <div className="col-4 ml-3">
          <ProfileSideBar handleShow={handleShow} handleQualificationModalShow={handleQualificationModalShow}/>
        </div>
      </div>
      <div className="">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            {showNameModal ? <Modal.Title>Edit name</Modal.Title> : ""}
            {showQualificationModal ? <Modal.Title>Edit Qualification</Modal.Title> : ""}
            {showDescriptionModal ? <Modal.Title>Edit Description</Modal.Title> : ""}
          </Modal.Header>
          <Modal.Body>
            {showNameModal ? 
            <div>
              <div className="d-flex align-items-center">
                <span style={{width: "40%"}}>Given name</span>
                <InputGroup className="my-1">
                  <FormControl placeholder="Your name" value={userInfo.name} className="px-1 name-input" onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}/>
                </InputGroup>
              </div>
              <div className="d-flex align-items-center">
                <span style={{width: "40%"}}>Surname</span>
                <InputGroup className="my-1">
                  <FormControl placeholder="Your surname" value={userInfo.surname} className="px-1 name-input" onChange={(e) => setUserInfo({...userInfo, surname: e.target.value})}/>
                </InputGroup>
              </div>
            </div> : ""}
            {showQualificationModal ? 
            <div className="d-flex align-items-center">
              <span style={{width: "40%"}}>Qualification</span>
              <InputGroup className="my-1">
                <FormControl placeholder="Your qualification" value={userInfo.jobQualification} className="px-1 name-input" onChange={(e) => setUserInfo({...userInfo, jobQualification: e.target.value})}/>
              </InputGroup>
            </div> : ""}
            {showDescriptionModal ? 
            <div className="d-flex align-items-start">
              <span style={{width: "40%"}} className="mt-1">Description</span>
              <InputGroup className="my-1">
                  <Form.Control as="textarea" rows={5} type="textarea" placeholder="Describe yourself" value={userInfo.description} className="px-1 py-0 textarea" onChange={(e) => setUserInfo({...userInfo, description: e.target.value})}/>
              </InputGroup>
            </div> : ""}
          </Modal.Body>
          <Modal.Footer>
          <button className="following-btn p-1" onClick={handleClose}>
           Cancel
          </button>
          <button className="make-post-btn p-1" onClick={() => editCurrentUserInfo(userInfo, handleClose)}>Edit</button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
