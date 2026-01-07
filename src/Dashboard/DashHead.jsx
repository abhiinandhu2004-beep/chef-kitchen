import React from 'react'
import { useDash } from '../context/DashContext'

export const DashHead = () => {

const {
    setShowMenu
}=useDash();

  return (
    <div className='flex h-30 w-full  bg-[#1F1D2B]'>
        <h1 className="text-[#E0E6E9] text-3xl p-4">Chef Kitchen</h1>
        </div>
  )
}
