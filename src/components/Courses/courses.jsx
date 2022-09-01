import React from "react";
import CourseItem from "./courseitem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Course = () => {
    return (
        <>
            <div className=''>
                <div className='flex flex-row items-center justify-between mx-4 my-4'>
                    <h2 className='text-black font-bold text-2xl'>Lộ trình học Front-end</h2>
                    <a href="#" className='no-underline text-[#f05123] hover:underline hover:text-[#f05123]'>
                        Xem chi tiết
                        <FontAwesomeIcon icon={faAngleRight} className='ml-2 text-xs' />
                    </a>
                </div>
                <div className='flex flex-row flex-wrap'>
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                </div>
            </div>
        </>
    )
}

export default Course;