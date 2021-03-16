import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ProfileSideBar from './profilesidebar/ProfileSideBar'
import ProfileMain from './profilemain/ProfileMain'
import "./profile.scss"

export default function Profile() {
  const [user, setUser] = useState({});
  const history = useHistory();
  

  useEffect( async () => {
    const JWTToken = localStorage.getItem("JWTToken");
    if (JWTToken) {
        const res = await fetch("http://localhost:3003/users/me", {
          method: "GET",
          headers: {
              Authorization: "Bearer "+ JWTToken
          }
    })
    const data = await res.json();
    if(data){
        setUser(data)
    }
    } else {
      history.push("/login");
    }
  }, []);
  return <div className="profile-container">
      <div className="d-flex profile-container-child mx-auto pt-4 align-items-stretch">
          <div className="col-8">
            <ProfileMain />
          </div>
          <div className="col-4 ml-3">
            <ProfileSideBar/>
          </div>
      </div>
      
  </div>;
}
