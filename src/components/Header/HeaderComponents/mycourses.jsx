import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "umi";
import { Progress } from 'antd';

const MyCourses = () => {
    const [showCourses, setShowCourses] = useState(false)
    const handleClick = () => {
        setShowCourses(!showCourses)
        const handleShowCourses = () => {
            setShowCourses(false)
        }
        window.addEventListener('mousedown', handleShowCourses)

        return () => {
            window.removeEventListener('mousedown', handleShowCourses)
        }
    }
    return (
        <>
            <button className='relative p-2'
                onClick={handleClick}
            >
                <h4 className='font-semibold text-sm m-0'>
                    Khóa học của tôi
                </h4>
                {
                    showCourses &&
                    (<div className='absolute top-10 right-0 flex flex-col min-w-[380px] bg-white shadow-[0_0_20px_0px_rgba(0,0,0,0.1)] rounded-lg z-50 pb-4 overflow-hidden'>
                        <ul className='flex flex-col mb-0'>
                            <div className='px-5 py-2'>
                                <h3 className='font-semibold text-lg text-start'>Khóa học của tôi</h3>
                            </div>
                            <div className='max-h-[250px] overflow-y-scroll overflow-hidden scrollbar' >
                                <div className='flex items-center justify-between mx-2 px-3 py-2 rounded-lg bg-white hover:bg-gray-100'>
                                    <Link to={'./'}>
                                        <img className='w-[120px] min-h-fit rounded-lg' src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="avt" />
                                    </Link>
                                    <div className='flex flex-col'>
                                        <h4 className='font-sans font-semibold text-sm'>
                                            <Link to={'./'}>Xây Dựng Website với ReactJS</Link>
                                        </h4>
                                        <span className='font-sans font-normal text-xs text-gray-500'>Học cách đây 2 ngày trước</span>
                                        <Progress
                                            percent={60}
                                            showInfo={false}
                                            strokeColor={'#F05123'}
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center justify-between mx-2 px-3 py-2 rounded-lg bg-white hover:bg-gray-100'>
                                    <Link to={'./'}>
                                        <img className='w-[120px] min-h-fit rounded-lg' src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="avt" />
                                    </Link>
                                    <div className='flex flex-col'>
                                        <h4 className='font-sans font-semibold text-sm'>
                                            <Link to={'./'}>Xây Dựng Website với ReactJS</Link>
                                        </h4>
                                        <span className='font-sans font-normal text-xs text-gray-500'>Học cách đây 2 ngày trước</span>
                                        <Progress
                                            percent={60}
                                            showInfo={false}
                                            strokeColor={'#F05123'}
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center justify-between mx-2 px-3 py-2 rounded-lg bg-white hover:bg-gray-100'>
                                    <Link to={'./'}>
                                        <img className='w-[120px] min-h-fit rounded-lg' src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="avt" />
                                    </Link>
                                    <div className='flex flex-col'>
                                        <h4 className='font-sans font-semibold text-sm'>
                                            <Link to={'./'}>Xây Dựng Website với ReactJS</Link>
                                        </h4>
                                        <span className='font-sans font-normal text-xs text-gray-500'>Học cách đây 2 ngày trước</span>
                                        <Progress
                                            percent={60}
                                            showInfo={false}
                                            strokeColor={'#F05123'}
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center justify-between mx-2 px-3 py-2 rounded-lg bg-white hover:bg-gray-100'>
                                    <Link to={'./'}>
                                        <img className='w-[120px] min-h-fit rounded-lg' src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="avt" />
                                    </Link>
                                    <div className='flex flex-col'>
                                        <h4 className='font-sans font-semibold text-sm'>
                                            <Link to={'./'}>Xây Dựng Website với ReactJS</Link>
                                        </h4>
                                        <span className='font-sans font-normal text-xs text-gray-500'>Học cách đây 2 ngày trước</span>
                                        <Progress
                                            percent={60}
                                            showInfo={false}
                                            strokeColor={'#F05123'}
                                        />
                                    </div>
                                </div>
                            </div>

                        </ul>
                    </div>)
                }
            </button>
        </>
    )
}

export default MyCourses;