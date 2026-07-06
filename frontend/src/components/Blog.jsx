import React from 'react'
import '../index.css'
import demoBlog from '../assets/demoBlog.png'

const Blog = ({index}) => {

    const isReverse = index % 2 !== 0

    return (
        <div id='blog' className={`h-[60vh] w-full flex items-center justify-center border-b ${isReverse ? 'flex-row-reverse gap-10' : ''}`}>
            <div id="left" className='w-[55%] h-full flex flex-col justify-center pl-1'>
                <div id="blog-title" className='w-full h-[40%] flex items-center justify-center'>
                    <h1 className='font-bold text-5xl'>
                        The discovery of the Nuetron Star
                    </h1>
                </div>
                <div id="blog-discription" className='w-full h-[40%] font-medium'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sunt totam omnis obcaecati! Voluptate doloribus non numquam necessitatibus placeat itaque, natus dolores fuga sed distinctio nobis corporis, velit et laudantium Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sunt totam omnis obcaecati! Voluptate.....
                </div>
                <div id="read-more" className='w-[70%] h-[20%] flex items-start pl-[10%]'>
                    <button id="read-more-btn" className='w-[40%] h-[50%] border-2 border-green-500 text-green-500'>
                        Read More
                    </button>
                </div>
            </div>
            <div id="right" className='w-[45%] flex justify-center items-center pr-1'>
                <img src={demoBlog} className='rounded-3xl object-cover'></img>
            </div>
        </div>
    )
}

export default Blog