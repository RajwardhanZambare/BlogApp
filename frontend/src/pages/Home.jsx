import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Blog from '../components/Blog.jsx'

const Home = () => {
    return (
        <div id='app' className='h-screen w-full flex  justify-center'>
            <div className='h-screen w-[70%] flex flex-col items-center'>
                <NavBar />
                <div id="blogs-div" className='w-full pt-[12vh] pb-[1vh]'>
                    <Blog />
                    <Blog />
                    <Blog />
                </div>
            </div>
        </div>
    )
}

export default Home