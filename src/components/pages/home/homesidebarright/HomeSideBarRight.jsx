import React from 'react'
import RecomList from './RecomList'
import MostviewedList from './MostViewedList'
import SidebarFooter from './SidebarFooter'

export default function HomeSideBarRight() {
    return (
        <div>
            <div className=" recommendations-container w-100 rounded mb-2 border">
                <h6 className="border-bottom px-2 py-2">Recomendations for you</h6>
                <div className="pb-3">
                    <RecomList />
                    <RecomList />
                    <RecomList />
                    <RecomList />
                </div>
            </div>
            <div className=" recommendations-container w-100 rounded border mb-2">
                <h6 className="border-bottom px-2 py-2">Today's most viewed</h6>
                <div className="pb-3">
                    <MostviewedList />
                    <MostviewedList />
                    <MostviewedList />
                </div>
            </div>

            <div className=" recommendations-container py-2 w-100 rounded border">
                <SidebarFooter />
            </div>

        </div>
    )
}
