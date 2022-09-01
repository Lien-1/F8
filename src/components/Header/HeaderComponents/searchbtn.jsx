import React from "react";
import { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';

const SearchButton = () => {
    return (
        <>
            <button className='flex items-center justify-center border-none'>
                <SearchOutlined className='text-lg hover:text-[#212121]' style={{color : '#797979'}} />
            </button>
        </>
    )
}

export default SearchButton;