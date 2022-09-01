import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "umi";
import { BellFilled } from "@ant-design/icons";
import logo from '@/assets/logo.png'

const UserInfo = () => {
    const [showUserInfo, setShowUserInfo] = useState(false)
    const handleClick = () => {
        setShowUserInfo(true)
        const handleShowUserInfo = () => {
            setShowUserInfo(false)
        }
        window.addEventListener('mousedown', handleShowUserInfo)

        return () => {
            window.removeEventListener('mousedown', handleShowUserInfo)
        }
    }
    return (
        <>
            <button className='relative p-2 flex items-center'
                onClick={handleClick}
            >
                <img className='w-7 h-7 rounded-full' src={logo} alt="" />
                {
                    showUserInfo &&
                    (<div className='absolute top-10 right-0 flex flex-col bg-white shadow-[0_0_20px_0px_rgba(0,0,0,0.1)] rounded-lg z-50 overflow-hidden'>
                        <ul className='flex flex-col mb-0 min-w-[230px] text-start text-[#666]'>
                            <div className='px-6 py-2'>
                                <div className='grid grid-cols-[1fr_9fr] items-center justify-betweens rounded-lg bg-white hover:bg-gray-100'>
                                    <Link to={'./'} className='flex items-center w-12 h-12 rounded-full my-2'>
                                        <img className='w-full min-h-fit object-cover rounded-full' src={logo} alt="avt" />
                                    </Link>
                                    <div className='text-start ml-3'>
                                        <h6 className='font-sans font-semibold text-base text-[#212121]'>
                                            Lien Truong
                                        </h6>
                                        <span className='font-sans font-normal text-xs text-gray-500'>@lientruong</span>
                                    </div>
                                </div>
                                <li className='py-3 border-t-[1px]'>
                                    <Link className='text-[#666] no-underline hover:text-[#212121]' to={'./'}>Trang cá nhân</Link>
                                </li>
                                <li className='py-3 border-t-[1px]'>
                                    <Link className='text-[#666] no-underline hover:text-[#212121]' to={'./'}>Viết blog</Link>
                                </li>
                                <li className='py-3 '>
                                    <Link className='text-[#666] no-underline hover:text-[#212121]' to={'./'}>Bài viết của tôi</Link>
                                </li>
                                <li className='py-3 border-t-[1px]'>
                                    <Link className='text-[#666] no-underline hover:text-[#212121]' to={'./'}>Bài viết đã lưu</Link>
                                </li>
                                <li className='py-3 border-t-[1px]'>
                                    <Link className='text-[#666] no-underline hover:text-[#212121]' to={'./'}>Cài đặt</Link>
                                </li>
                                <li className='py-3 border-b-[1px]'>
                                    <Link className='text-[#666] no-underline hover:text-[#212121]' to={'./'}>Đăng xuất</Link>
                                </li>
                            </div>
                        </ul>
                    </div>)
                }
            </button>
        </>
    )
}

export default UserInfo;