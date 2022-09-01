import React from "react";

const CourseItem = () => {
    return (
        <>
            <div className='relative basis-1/4 px-4' >
                <div className=''>
                    <div className='w-full rounded-2xl overflow-hidden cursor-pointer'>
                        <img src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" />
                    </div>
                    <h3 className='mt-2'>
                        <a href="#" className='no-underline text-base font-medium hover:text-[#000]'>Kiến Thức Nhập Môn IT</a>
                    </h3>
                </div>
                <div className='px-3 py-1 bg-white rounded-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-85%]'>
                    <a href="#" className='no-underline text-xs font-semibold hover:text-[#000]'>Xem khóa học</a>
                </div>
            </div>
        </>
    )
}

export default CourseItem;