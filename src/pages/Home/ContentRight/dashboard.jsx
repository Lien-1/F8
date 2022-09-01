import React from "react";
import Slider from "../../../components/Slider/slider";
import Course from "../../../components/Courses/courses";

const DashBoard = () => {
    return (
        <>
            <div className='w-full'>
                <Slider />
                <div className='px-6 pb-8 mt-12'>
                    <Course />
                </div>
            </div>
        </>
    )
}

export default DashBoard;