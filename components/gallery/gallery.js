import Image from 'next/image';
import { useState } from 'react';
import Image1 from '../../assets/images/desk-0.jpg';

const Gallery = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(3);

    const goToPrev = () => {};
    const goToNext = () => {};

    return (
        <div className='gallery-container' data-scroll-section>
            <div className='gallery-nav' data-scroll data-scroll-speed='-1'>
                <div className='nav-btns'>
                    <div className='prev'>
                        <button onClick={goToPrev}>
                            <span>Prev</span>
                        </button>
                    </div>
                    <div className='nav-indicator'>
                        <div className='dot'></div>
                    </div>
                    <div className='next'>
                        <button onClick={goToNext}>
                            <span>Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='gallery'>
                <div className='images'>
                    <div className='image' data-cursor-target>
                        <Image src={Image1} layout='fill' alt='' />
                    </div>
                    <div className='image' data-cursor-target>
                        <Image src={Image1} layout='fill' alt='' />
                    </div>
                    <div className='image' data-cursor-target>
                        <Image src={Image1} layout='fill' alt='' />
                    </div>
                    <div className='image' data-cursor-target>
                        <Image src={Image1} layout='fill' alt='' />
                    </div>
                    <div className='image' data-cursor-target>
                        <Image src={Image1} layout='fill' alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
