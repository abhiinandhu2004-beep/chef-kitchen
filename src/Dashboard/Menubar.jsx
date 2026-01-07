import React from 'react'
import { TextAlignJustify } from 'lucide-react';
import {  useDash } from '../context/DashContext';
export const Menubar = () => {

    const{
        setShowMenu
    }=useDash();

    

  return (
    <div className='flex w-60 h-screen overflow-hidden bg-amber-500 justify-between'>
        Menubar
        <TextAlignJustify onClick={()=>setShowMenu(false)}/>
        </div>
  )
}
