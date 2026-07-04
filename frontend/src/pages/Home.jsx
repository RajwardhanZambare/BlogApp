import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Blog from '../components/Blog.jsx'

const Home = () => {
    return (
        <div className='h-screen w-screen flex flex-col items-center'>
            <div id="navbar" className='w-[70%] flex'>
                <NavBar />
            </div>
            <div id="blog-section" className='w-[70%] flex flex-col items-center bg-pink-600'>
                <Blog />
                <Blog />
                <Blog />
            </div>
        </div>
    )
}

export default Home