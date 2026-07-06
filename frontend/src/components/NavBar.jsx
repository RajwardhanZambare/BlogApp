import React from 'react'
import blogLogo from '../assets/blogLogo.png'

const NavBar = () => {
    return (
        <div id='navbar' className='bg-[#FAF9F6] w-[69.5vw] h-[12vh] flex fixed top-0 z-10 border-b border-slate-200'>
            <div id='left' className='w-[40%] flex items-center'>
                {/* <h1 className='font-bold text-5xl text-slate-800'>Blog</h1> */}
                <img src={blogLogo} alt="logo" className='h-[80%]'/>
            </div>
            <div id="right" className='w-[60%] flex justify-evenly items-center'>
                <li className='list-none font-medium text-slate-800 cursor-pointer hover:text-green-500 transition-colors'>ART</li>
                <li className='list-none font-medium text-slate-800 cursor-pointer hover:text-green-500 transition-colors'>SCIENCE</li>
                <li className='list-none font-medium text-slate-800 cursor-pointer hover:text-green-500 transition-colors'>TECHNOLOGY</li>
                <li className='list-none font-medium text-slate-800 cursor-pointer hover:text-green-500 transition-colors'>CINEMA</li>
                <li className='list-none font-medium text-slate-800 cursor-pointer hover:text-green-500 transition-colors'>DESIGN</li>
                <li className='list-none font-medium text-slate-800 cursor-pointer hover:text-green-500 transition-colors'>FOOD</li>
                <button id="profile-btn" className='h-[47%] w-[7.5%] rounded-full bg-slate-100 border-2 border-slate-200'>
                </button>
            </div>
        </div>
    )
}

export default NavBar