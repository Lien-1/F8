import React from "react";
import { useState } from "react";
import { Link } from "umi";
import { Col, Row } from 'antd';
import logo from '@/assets/logo.png'
import SearchElement from "./HeaderComponents/search";
import MyCourses from "./HeaderComponents/mycourses";
import Notification from "./HeaderComponents/notification";
import UserInfo from "./HeaderComponents/userinfo";

const Header = () => {
    return (
        <>
            <Row justify={"center"} className='w-full h-16 shadow-[0_0_0_1px_rgba(0,0,0,0.05)] px-7'>
                <Col span={8} className='flex-row items-center' style={{ display: 'flex' }}>
                    <Link to="/" className='w-8 h-8 rounded-md overflow-hidden'>
                        <img className='w-full h-full object-cover' src={logo} alt="logo" />
                    </Link>
                    <h4 className='ml-3 font-bold text-sm mb-0'>Học Lập Trình Để Đi Làm</h4>
                </Col>
                <Col span={8} className='flex-row items-center' style={{ display: 'flex' }}>
                    <SearchElement />
                </Col>
                <Col span={8} className='flex-row items-center justify-end' style={{ display: 'flex' }}>
                    <MyCourses />
                    <Notification />
                    <UserInfo />
                </Col>
            </Row>
            {/* <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/docs">Docs</Link>
                </li>
                <li>
                    <a href="https://github.com/umijs/umi">Github</a>
                </li>
            </ul> */}
        </>
    )
}

export default Header;