import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "umi";
import { BellFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import logo from '@/assets/logo.png'

const Notification = () => {
    const [showNotis, setShowNotis] = useState(false)
    const handleClick = () => {
        setShowNotis(true)
        const handleShowNotis = () => {
            setShowNotis(false)
        }
        window.addEventListener('mousedown', handleShowNotis)

        return () => {
            window.removeEventListener('mousedown', handleShowNotis)
        }
    }
    return (
        <>
            <button className='relative p-2 flex items-center'
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={faBell} />
                {
                    showNotis &&
                    (<div className='absolute top-10 right-0 flex flex-col w-[400px] bg-white shadow-[0_0_20px_0px_rgba(0,0,0,0.1)] rounded-lg z-50 pb-2 overflow-hidden'>
                        <ul className='flex flex-col mb-0'>
                            <div className='px-5 py-4'>
                                <h3 className='font-sans font-semibold text-lg text-start'>Thông báo</h3>
                            </div>
                            <div className='max-h-[250px] overflow-y-scroll overflow-hidden scrollbar' >
                                <div className='grid grid-cols-[1fr_9fr] items-center justify-betweens mx-2 mb-2 pl-3 py-2 pr-9 rounded-lg bg-white hover:bg-gray-100'>
                                    <Link to={'./'} className='flex items-center w-12 h-12 rounded-full'>
                                        <img className='w-full min-h-fit object-cover rounded-full' src={logo} alt="avt" />
                                    </Link>
                                    <div className='text-start ml-4 mr-2'>
                                        <h6 className='font-sans font-normal text-sm text-gray-500'>
                                            Chào mừng  đã gia nhập F8. Hãy luôn đam mê, kiên trì và theo đuổi mục tiêu tới cùng bạn nhé ❤️
                                        </h6>
                                        <span className='font-sans font-normal text-xs text-[#f05123]'>2 tháng trước</span>
                                    </div>
                                </div>
                                <div className='grid grid-cols-[1fr_9fr] items-center justify-betweens mx-2 mb-2 pl-3 py-2 pr-9 rounded-lg bg-white hover:bg-gray-100'>
                                    <Link to={'./'} className='flex items-center w-12 h-12 rounded-full'>
                                        <img className='w-full min-h-fit object-cover rounded-full' src={logo} alt="avt" />
                                    </Link>
                                    <div className='text-start ml-4 mr-2'>
                                        <h6 className='font-sans font-normal text-sm text-gray-500'>
                                            Chào mừng  đã gia nhập F8. Hãy luôn đam mê, kiên trì và theo đuổi mục tiêu tới cùng bạn nhé ❤️
                                        </h6>
                                        <span className='font-sans font-normal text-xs text-[#f05123]'>2 tháng trước</span>
                                    </div>
                                </div>
                                <div className='grid grid-cols-[1fr_9fr] items-center justify-betweens mx-2 mb-2 pl-3 py-2 pr-9 rounded-lg bg-white hover:bg-gray-100'>
                                    <Link to={'./'} className='flex items-center w-12 h-12 rounded-full'>
                                        <img className='w-full min-h-fit object-cover rounded-full' src={logo} alt="avt" />
                                    </Link>
                                    <div className='text-start ml-4 mr-2'>
                                        <h6 className='font-sans font-normal text-sm text-gray-500'>
                                            Chào mừng  đã gia nhập F8. Hãy luôn đam mê, kiên trì và theo đuổi mục tiêu tới cùng bạn nhé ❤️
                                        </h6>
                                        <span className='font-sans font-normal text-xs text-[#f05123]'>2 tháng trước</span>
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

export default Notification;