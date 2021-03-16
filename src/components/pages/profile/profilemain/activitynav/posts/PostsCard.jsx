import React, {useState, useEffect} from 'react'
import {Dropdown } from "react-bootstrap"


export default function PostsCard() {
    const [content, setContent] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae malesuada nunc. Integer ultricies diam et justo pellentesque tincidunt. Sed luctus commodo tortor, ac sagittis neque eleifend vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ullamcorper lacus sed risus sodales convallis eleifend in arcu. Donec at ipsum quis nisl ullamcorper aliquet. Aenean sed euismod libero, sit amet fringilla velit. Aenean in lacus fringilla, imperdiet nisl ut, efficitur ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vel velit gravida, fringilla erat a, auctor nisi.")
    const [contentLength, setContentLength] = useState(true)
    useEffect(() => {
    }, [])
    return (
        <div>
            <div className=" answers-card d-flex p-2">
                <div className="d-flex flex-column align-items-start" style={{width: "100%"}}>
                    <div className="my-2">
                        <h5>Title of the post</h5>
                        {content.length > 20 && contentLength ? <span> {content.slice(0, 200)}...<button onClick={() => setContentLength(false)} className="read-all-btn">read all</button></span> : <span>{content} <button onClick={() => setContentLength(true)} className="read-all-btn">read less</button></span>  }
                        <img src="https://www.sienanews.it/wp-content/uploads/2019/09/dory-disney-maxw-824.jpg" className="w-100 my-2" alt=""/>
                    </div>
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center answers-reaction px-3 py-1 justify-content-center mr-2">
                                <i className="far fa-thumbs-up pr-2 mr-2 border-right"><span></span></i>
                                <i className="far fa-thumbs-down"></i>
                            </div>
                            <i className="far fa-comment p-2"></i>
                        </div>
                        <div className="d-flex justify-content-center answers-share-more">
                            <i class="fas fa-share p-2"></i>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="post-card-dropdaown" className="p-0">
                                    <i class="fas fa-ellipsis-h p-2"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Save</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
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
