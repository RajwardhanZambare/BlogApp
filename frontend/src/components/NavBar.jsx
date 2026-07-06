import React from 'react'

const NavBar = () => {
    return (
        <div id='navbar' className='bg-purple-500 w-[69.5vw] h-[12vh] flex fixed top-0'>
            <div id='left' className='w-[40%] flex items-center'>
                <h1 className='font-bold text-5xl'>Blog</h1>
            </div>
            <div id="right" className='w-[60%] flex justify-evenly items-center'>
                <li type='none'>ART</li>
                <li type='none'>SCIENCE</li>
                <li type='none'>TECHNOLOGY</li>
                <li type='none'>CINEMA</li>
                <li type='none'>DESIGN</li>
                <li type='none'>FOOD</li>
                <button id="profile-btn" className='h-[47%] w-[7.5%] rounded-[50%] bg-amber-300'>
                    
                </button>
            </div>
        </div>
    )
}

export default NavBar