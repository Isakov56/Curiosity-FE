import React, { useState } from "react";
import {
  Modal,
  Button,
  InputGroup,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { newPost, addPostImage } from "../../../../../../store";

const mapStateToProps = (state) => {
  return {
    currentUser: state?.user?.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newPost: (postInfo, handleClose, fileData) => dispatch(newPost(postInfo, handleClose, fileData))
  };
};

function PostModal({ show, handleClose, newPost, currentUser}) {
  const [anyone, setAnyone] = useState(true);
  const [file, setFile] = useState();
  const [fileData, setFileData] = useState()
  const [postInfo, setPostInfo] = useState({
    title: null,
    content: null,
  });

const handleUserImg = (e) => {
    const formData = new FormData();
    formData.append("post", e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileData(formData)
  };

  const handleCloseModal =()=> {
      setFile(null)
      setFileData(null)
      handleClose()
  }

  const handlePostCloseModal = (postInfo, handleClose, fileData)=> {
    newPost(postInfo, handleClose, fileData)
    setFileData(null)
    setFile(null)
  }

  return (
    <div>
      <Modal show={show} onHide={() => handleCloseModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center">
            {currentUser?.image ? <img src={currentUser.image} className="post-user-img mr-2"/> : <i className="fas fa-user-circle user-img-question mr-2"></i>}
            <div className="">
              <Link to="#" className="text-dark">
                <h5 className="m-0">{currentUser?.name} {currentUser?.surname}</h5>
              </Link>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="py-0 px-2 my-1 d-flex align-items-center"
                >
                  {anyone ? "Anyone" : "Connections only"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="" onClick={() => setAnyone(true)}>
                    Anyone
                  </Dropdown.Item>
                  <Dropdown.Item href="" onClick={() => setAnyone(false)}>
                    Connections only
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <InputGroup className="my-1">
            <FormControl
              placeholder="Title of your post"
              className="px-1 textarea"
              onChange={(e) =>
                setPostInfo({ ...postInfo, title: e.target.value })
              }
            />
          </InputGroup>

          <textarea
            placeholder="The content of your post"
            className="w-100 my-1 px-1 textarea"
            style={{ height: "10rem" }}
            onChange={(e) =>
              setPostInfo({ ...postInfo, content: e.target.value })
            }
          ></textarea>
          <img src={file} alt="" style={{width: "100%"}}/>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <div className="d-flex post-modal-footer">
                <label className="d-flex m-0">
                <i className="fas fa-image text-secondary" style={{cursor: "pointer"}}></i>
                <input
                    className="file-upload"
                    type="file"
                    multiple
                    onChange={(e) => handleUserImg(e)}
                    style={{ display: "none" }}
                />
                </label>
              
            
            <i className="fab fa-youtube text-secondary"></i>
            <i className="fas fa-sticky-note text-secondary"></i>
          </div>

          <button
            variant="primary"
            className="p-1 post-btn font-weight-normal px-2"
            onClick={() =>handlePostCloseModal(postInfo, handleClose, fileData)}
          >
            Post
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
