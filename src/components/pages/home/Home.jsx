import React from 'react'
import HomeMain from "./homemain/HomeMain"
import HomeSidebarRight from "./homesidebarright/HomeSideBarRight"
import StickyBox from 'react-sticky-box'
import "./home.scss"

export default function Home() {
    return (
        <div className="container-main">
            <div className="container-main-child d-flex mx-auto pt-3 align-items-stretch d-flex justify-content-between">
                <div className="col-8 mr-0 pl-0">
                    <HomeMain />
                </div>
                <div className=" ml-2 p-0">
                    <StickyBox>
                        <HomeSidebarRight />
                    </StickyBox>
                </div>  
            </div>
        </div>
    )
}
