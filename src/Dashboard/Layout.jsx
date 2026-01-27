// import React from 'react'
// import { Menubar } from './Menubar'
// import { DashHead } from './DashHead'
// import {SidebarMobile} from './SidebarMobile'
// import { Outlet } from 'react-router-dom'

// export const Layout = () => {
//     return (
//         <>
//             <div className=' bg-[#1F1D2B]-500 flex w-full h-screen '>
//                 <DashHead />
//                 <Menubar />

//                 <Outlet/>


//             </div>



//         </>
//     )
// }



import React from 'react'
import { Menubar } from './Menubar'
import { DashHead } from './DashHead'
import { SidebarMobile } from './SidebarMobile'
import { Outlet } from 'react-router-dom'
import { useDash } from '../context/DashContext'
import Addcategory from './Addcategory'

export const Layout = () => {

const {showcategory} = useDash();

    return (
        <div className="w-full h-screen flex ">

            {/* Header - stays on top */}

            <div className="lg:w-50 w-15  ">
                <Menubar />
            </div>
            {/* Body */}
            <div className="flex flex-1 overflow-hidden flex-col">

                <div className="w-full h-16 ">
                    <DashHead />
                </div>
                {/* Sidebar */}


                {/* Main Content */}
                <div className="flex-1 overflow-y-auto bg-gray-800">
                    <Outlet />
                </div>

                {showcategory && <Addcategory/>}

            </div>

        </div>
    )
}
