import React, { useState, useEffect, useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import blogLogo from '../assets/blogLogo.png'
import defaultPFP from '../assets/defaultPFP.png'

const NavBar = () => {

    const [showDropDown, setShowDropDown] = useState(false)
    const [isLogin, setIsLogin] = useState(false)

    const navigate = useNavigate()

    const dropDownRef = useRef(null)

    useEffect(() => {
        function handleClick(e) {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setShowDropDown(false)
            }
        }
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])


    return (
        <div id='navbar' className='bg-[#FAF9F6] w-[69.5vw] h-[12vh] flex fixed top-0 z-10 border-b border-slate-200'>
            <div id='left' className='w-[40%] flex items-center'>
                {/* <h1 className='font-bold text-5xl text-slate-800'>Blog</h1> */}
                <img src={blogLogo} alt="logo" className='h-[80%]' />
            </div>
            <div id="right" ref={dropDownRef} className='w-[60%] flex justify-evenly items-center relative'>
                <li className='list-none font-sans font-medium text-slate-800 cursor-pointer hover:text-green-500 transition-colors'>ART</li>
                <li className='list-none font-sans font-medium text-slate-800 cursor-pointer hover:text-green-500 transition-colors'>SCIENCE</li>
                <li className='list-none font-sans font-medium text-slate-800 cursor-pointer hover:text-green-500 transition-colors'>TECHNOLOGY</li>
                <li className='list-none font-sans font-medium text-slate-800 cursor-pointer hover:text-green-500 transition-colors'>CINEMA</li>
                <li className='list-none font-sans font-medium text-slate-800 cursor-pointer hover:text-green-500 transition-colors'>DESIGN</li>
                <li className='list-none font-sans font-medium text-slate-800 cursor-pointer hover:text-green-500 transition-colors'>FOOD</li>
                <button id="profile-btn" className='h-[47%] w-[7.5%] rounded-full bg-slate-100 border-2 border-slate-200 hover:border-green-500 transition-colors shadow-lg' onClick={() => {
                    setShowDropDown(!showDropDown)
                }}>
                    <img src={defaultPFP} alt="PFP" className='rounded-full' />
                </button>
                {showDropDown && (
                    <div id="drop-down" className='h-auto w-[9vw] bg-[#F1EFEA] absolute right-7 top-18 rounded-3xl shadow-lg flex flex-col p-4 gap-3'>
                        {!isLogin && (
                            <div className="flex w-full h-[12%]">
                                <button className='w-full flex active:scale-95' onClick={() => {
                                    navigate('/login')
                                }}>
                                    <div className='flex items-center justify-center w-[20%]'> {/* icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-log-in-icon lucide-log-in"><path d="m10 17 5-5-5-5" /><path d="M15 12H3" /><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /></svg>
                                    </div>
                                    <div className='flex items-center justify-center w-[80%] hover:text-green-500'> {/* element name */}
                                        Login
                                    </div>
                                </button>
                            </div>
                        )}
                        {isLogin && (
                            <div className='flex w-full flex-col gap-4'>
                                <div className='flex w-full h-[12%]'> {/*elements inside dropdown */}
                                    <button className='w-full flex active:scale-95 hover:text-green-500 transition-colors'>
                                        <div className='flex items-center justify-center w-[20%]'> {/* icon */}
                                            <img src={defaultPFP} className='rounded-full'></img>
                                        </div>
                                        <div className='flex items-center justify-center w-[80%]'> {/* element name */}
                                            Profile
                                        </div>
                                    </button>
                                </div>

                                <div className='flex w-full h-[12%]'> {/*elements inside dropdown */}
                                    <button className="w-full flex active:scale-95">
                                        <div className='flex items-center justify-center w-[25%] pr-1'> {/* icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-badge-plus-icon lucide-badge-plus"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><line x1="12" x2="12" y1="8" y2="16" /><line x1="8" x2="16" y1="12" y2="12" /></svg>
                                        </div>
                                        <div className='flex items-center justify-center w-[80%] hover:text-green-500 transition-colors'> {/* element name */}
                                            New Blog
                                        </div>
                                    </button>
                                </div>

                                <hr></hr>

                                <div className='flex w-full h-[12%]'> {/*elements inside dropdown */}
                                    <button className="w-full flex text-red-500 active:scale-95">
                                        <div className='flex items-center justify-center w-[20%]'> {/* icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /></svg>
                                        </div>
                                        <div className='flex items-center justify-center w-[80%] hover:underline'> {/* element name */}
                                            Logout
                                        </div>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavBar