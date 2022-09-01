import React from "react";
import { useState, useEffect } from "react";
import slide1 from '../../assets/SlideImg/slide1.png'
import slide2 from '../../assets/SlideImg/slide2.png'
import slide3 from '../../assets/SlideImg/slide3.png'
import slide4 from '../../assets/SlideImg/slide4.png'
import slide5 from '../../assets/SlideImg/slide5.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


const Slider = () => {
    const [slideItems, setSlideItems] = useState([
        {
            id: 1,
            heading: 'Pre-Order HTML CSS Pro',
            description: 'Chính thức chấp nhận ĐẶT HÀNG TRƯỚC từ ngày 08/08 - 18/08.',
            btn_des: 'Tìm hiểu thêm',
            img: slide1,
            color_from: '#6828fa',
            color_to: '#ffbaa4',
            hover_color: '#6828fa',
        },
        {
            id: 2,
            heading: 'Học ReactJS Miễn Phí!',
            description: 'Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.',
            btn_des: 'Đăng ký ngay',
            img: slide2,
            color_from: '#2877fa',
            color_to: '#6717cd',
            hover_color: '#2877fa',
        },
        {
            id: 3,
            heading: 'Thành Quả của Học Viên',
            description: 'Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.',
            btn_des: 'Xem thành quả',
            img: slide3,
            color_from: '#7612ff',
            color_to: '#05b2ff',
            hover_color: '#7612ff',
        },
        {
            id: 4,
            heading: 'F8 trên Youtube',
            description: 'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
            btn_des: 'Truy cập kênh',
            img: slide4,
            color_from: '#fe215e',
            color_to: '#ff9402',
            hover_color: '#fe215e',
        },
        {
            id: 5,
            heading: 'F8 trên Facebook',
            description: 'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
            btn_des: 'Truy cập nhóm',
            img: slide5,
            color_from: '#007efe',
            color_to: '#06c3fe',
            hover_color: '#007efe',
        },
    ])

    const [active, setActive] = useState(1)
    useEffect(() => {
        setInterval(() => {
            setActive(pre => pre < 5 ? pre + 1 : 1)
        }, 10000)
    }, [])

    const handleDown = () => {
        if (active > 1) {
            setActive(active - 1)
        }
        else
            setActive(5)
    }

    const handleUp = () => {
        if (active < 5) {
            setActive(active + 1)
        }
        else
            setActive(1)
    }


    return (
        <>
            <div className='relative'>
                {
                    slideItems.map((item, index) => {
                        if (item.id === active)
                            return (
                                <div className='flex flex-row justify-between items-center h-[270px] rounded-2xl overflow-hidden mx-6 mt-5'
                                    style={{ backgroundImage: `linear-gradient(to right, ${item.color_from} , ${item.color_to})` }}
                                    key={index}
                                >
                                    <div className='px-8 pb-6'>
                                        <h2 className='mb-2'>
                                            <a className='text-white text-3xl font-bold hover:text-white' href="#">{item.heading}</a>
                                        </h2>
                                        <p className='text-white text-base max-w-[600px] mb-6'>{item.description}</p>
                                        <div cla>
                                            <a href="#" className='rounded-2xl border-2 border-white px-3 py-1 text-white text-sm font-semibold hover:bg-white hover:text-[#fe215e]'>
                                                {item.btn_des}
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <img className='w-full h-full object-cover' src={item.img} alt="" />
                                    </div>
                                </div>
                            )
                    })
                }
                <div className='w-8 h-8 flex items-center justify-center bg-white rounded-full text-xs text-[#4b4b4b] cursor-pointer absolute top-[50%] translate-x-[25%] translate-y-[-50%] shadow-[0_3px_6px_rgba(0,0,0,0.16)]'
                    onClick={handleDown}
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className='w-8 h-8 flex items-center justify-center bg-white rounded-full text-xs text-[#4b4b4b] cursor-pointer absolute top-[50%] right-0 translate-x-[-25%] translate-y-[-50%] shadow-[0_3px_6px_rgba(0,0,0,0.16)]'
                    onClick={handleUp}
                >
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>
        </>
    )
}

export default Slider;