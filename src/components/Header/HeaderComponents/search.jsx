import React from "react";
import { useState } from "react";
import { Input } from "antd";
import SearchButton from "./searchbtn";

const { Search } = Input;

const SearchElement = () => {
    const onSearch = (value) => console.log(value);
    return (
        <>
            <Search
                className='px-3 border-[2px] border-[#e8e8e8] rounded-3xl'
                placeholder='Tìm kiếm khóa học, bài viết, video, ...'
                bordered={false}
                allowClear={true}
                onSearch={onSearch}
            />
        </>
    )
}

export default SearchElement;