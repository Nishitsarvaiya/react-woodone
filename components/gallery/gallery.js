import Image from 'next/image';
import { useEffect } from 'react';
import { useScrollBoost } from 'react-scrollbooster';
import Image1 from '../../assets/images/desk-10.jpg';
import Image2 from '../../assets/images/desk-9.jpg';
import Image3 from '../../assets/images/desk-4.jpg';
import Image4 from '../../assets/images/desk-6.jpg';
import Image5 from '../../assets/images/desk-8.jpg';

const Gallery = () => {
    const [viewport, scrollbooster] = useScrollBoost({
        direction: 'horizontal',
        friction: 0.08,
        bounceForce: 0.08,
        scrollMode: 'transform',
    });

    useEffect(() => {
        let images = document.querySelectorAll('.image');

        images.forEach((image) => image.removeEventListener('click', null));
        images.forEach((image) => image.removeEventListener('mousedown', null));
        images.forEach((image) => image.removeEventListener('mouseup', null));
    });

    return (
        <div className='gallery-container' data-scroll-section ref={viewport}>
            {/* <div className='gallery-nav' data-scroll data-scroll-speed='-1'>
                <div className='nav-btns'>
                    <div className='prev'>
                        <button onClick={goToPrev}>
                            <span>Prev</span>
                        </button>
                    </div>
                    <div className='nav-indicator'></div>
                    <div className='next'>
                        <button onClick={goToNext}>
                            <span>Next</span>
                        </button>
                    </div>
                </div>
            </div> */}
            <div className='gallery'>
                <div className='images'>
                    <div className='image' data-cursor-target>
                        <Image src={Image3} layout='fill' alt='' />
                    </div>
                    <div className='image' data-cursor-target>
                        <Image src={Image4} layout='fill' alt='' />
                    </div>
                    <div className='image' data-cursor-target>
                        <Image src={Image5} layout='fill' alt='' />
                    </div>
                    <div className='image' data-cursor-target>
                        <Image src={Image2} layout='fill' alt='' />
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
