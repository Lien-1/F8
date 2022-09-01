import React from "react";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SiderBarItem = ({ props }) => {
    const { item, sidebarItems, active, setActive } = props;
    const handleActive = (id) => {
        sidebarItems.forEach((element) => {
            if(element.id === id)
                setActive(element.id)
        });
    }
    return (
        <>
            <div
                className='flex flex-col items-center justify-center w-16 h-16 rounded-lg mt-2 text-[#404040] no-underline hover:bg-[#e8ebed] hover:text-[#1a1a1a] cursor-pointer'
                style={item.id === active ? { backgroundColor: '#e8ebed', color: '#1a1a1a' } : {}}
                onClick={() => handleActive(item.id)}
            >
                <FontAwesomeIcon icon={item.icon} className='text-base' />
                <span className='text-[11px] font-sans font-medium mt-1'>{item.name}</span>
            </div>
        </>
    )
}

export default SiderBarItem;