import { Menubar } from './Menubar'
import { DashHead } from './DashHead'
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
