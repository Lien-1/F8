import React from "react";
import { useState, useRef } from "react";
import { Link } from "umi";
import { PlusOutlined, HomeFilled, } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faRoad } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Tabs } from 'antd';
import SiderBarItem from "./siderbaritem";

const { TabPane } = Tabs;

const SideBar = () => {
    const [sidebarItems, setSideBarItems] = useState(
        [
            {
                id: '1',
                name: 'Home',
                icon: faHome,
                active: true,
                path: './'
            },
            {
                id: '2',
                name: 'Lộ trình',
                icon: faRoad,
                active: false,
                path: './'
            },
            {
                id: '3',
                name: 'Học',
                icon: faLightbulb,
                active: false,
                path: './'
            },
            {
                id: '4',
                name: 'Blog',
                icon: faNewspaper,
                active: false,
                path: './'
            },
        ]
    )
    const [active, setActive] = useState('1')
    const test = useRef(null)

    return (
        <>
            {/* <Tabs tabPosition={'left'} defaultActiveKey={'1'}>
                <TabPane
                    style={{justifyContent: 'center'}}
                    tab={
                        <div className='w-11 h-11 bg-[#1473e6] flex items-center justify-center mx-auto rounded-full mt-2 mb-1'>
                            <FontAwesomeIcon icon={faPlus} className='text-base text-white' />
                        </div>
                    }
                ></TabPane>
                {
                    sidebarItems.map((item, index) => {
                        return (
                            <TabPane
                                className='m-0'
                                style={{ margin: '0' }}
                                tab={
                                    <SiderBarItem key={index} type={Object} props={item} />
                                }
                                key={item.id}
                            >
                            </TabPane>
                        )
                    })
                }
            </Tabs> */}
            <div className='w-24 px-2 py-3'>
                <div className='w-11 h-11 bg-[#1473e6] flex items-center justify-center mx-auto rounded-full mb-1'>
                    <FontAwesomeIcon icon={faPlus} className='text-base text-white' />
                </div>
                <div className='flex flex-col items-center my-3 '>
                    {
                        sidebarItems.map((item, index) => {
                            return (
                                // <Link to={item.path} key={index}
                                //     ref={test}
                                //     className='flex flex-col items-center justify-center w-16 h-16 rounded-lg mt-1 text-[#404040] no-underline hover:bg-[#1a1a1a] hover:text-[#404040]'
                                //     style={item.active === true ? { backgroundColor: '#e8ebed', color: '#1a1a1a' } : { backgroundColor: '#fff' }}
                                // >
                                //     <FontAwesomeIcon icon={item.icon} className='text-base' />
                                //     <span className='text-[11px] font-sans font-medium mt-1'>{item.name}</span>
                                // </Link>
                                <SiderBarItem key={index} props={{item,sidebarItems,active, setActive}} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SideBar;