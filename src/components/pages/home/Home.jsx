import React from 'react'
import HomeMain from "./homemain/HomeMain"
import HomeSidebarRight from "./homesidebarright/HomeSideBarRight"
import StickyBox from 'react-sticky-box'
import "./home.scss"

export default function Home() {
    return (
        <div className="container-main">
            <div className="container-main-child d-flex mx-auto pt-4 align-items-stretch">
                <div className="col-8">
                    <HomeMain />
                </div>
                <div className="col-4 p-0">
                    <StickyBox>
                        <HomeSidebarRight />
                    </StickyBox>
                </div>  
            </div>
        </div>
    )
}
