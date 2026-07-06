import React, { useState } from 'react'
import NavBar from '../components/NavBar.jsx'
import Blog from '../components/Blog.jsx'

const Home = () => {

    const [blogs, setBlogs] = useState([1,2,3,4,5])

    return (
        <div id='app' className='min-h-screen w-full flex justify-center bg-[#FAF9F6]'>
            <div className='w-[70%] flex flex-col items-center'>
                <NavBar />
                <div id="blogs-div" className='w-full pt-[12vh] pb-[1vh]'>
                    {blogs.map((blog, index) => {
                        return(
                            <Blog key={index} index={index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home