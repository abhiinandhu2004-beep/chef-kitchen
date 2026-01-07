import React from 'react'
import { Menubar } from './Menubar'
import { DashHead } from './DashHead'


export const Layout = () => {
    return (
        <>
            <div className=' bg-[#1F1D2B]-500 flex w-full h-screen flex-col'>
                <DashHead />
                
                <Menubar />
            </div>
        
                
            
        </>
    )
}
