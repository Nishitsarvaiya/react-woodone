import Image from 'next/image';
import { Header, OrderBtn } from '../components';
import Feature1 from '../assets/images/desk-2.jpg';
import Feature2 from '../assets/images/desk-5.jpg';
import Feature3 from '../assets/images/desk-3.jpg';
import { useEffect } from 'react';
import gsap from 'gsap';

const Features = () => {
    useEffect(() => {
        gsap.fromTo('.feature-image .image', 1.5, { width: 0 }, { delay: 1, width: '100%', ease: 'power3.out' });
        gsap.fromTo('.feature-image .image img', 1.5, { scale: 1.2 }, { delay: 1, scale: 1, ease: 'power3.out' });

        gsap.fromTo(
            ['.content-number p', '.content-title h1', '.content-text p'],
            1.5,
            { y: '200%' },
            { delay: 1, y: '0', ease: 'power3.out', stagger: 0.07 }
        );
        gsap.fromTo(
            '.order-btn',
            1.5,
            { scaleX: 0 },
            { scaleX: 1, transformOrigin: 'left', delay: 1, ease: 'power3.out' }
        );
    });
    return (
        <main>
            <Header />
            <section className='features-section' data-scroll-section data-scroll>
                <div className='features'>
                    <div className='feature'>
                        <div
                            className='feature-image'
                            data-scroll
                            data-scroll-direction='horizontal'
                            data-scroll-speed='2'>
                            <div className='image'>
                                <Image src={Feature1} alt='' layout='fill' />
                            </div>
                        </div>
                        <div className='feature-content'>
                            <div className='content' data-scroll data-scroll-speed='2'>
                                <div className='content-number'>
                                    <p>
                                        <span>01</span> / 03
                                    </p>
                                </div>
                                <div className='content-title'>
                                    <h1>Oak Wood</h1>
                                </div>
                                <div className='content-text'>
                                    <p>
                                        Minimalist and stylish high quality desks <br />
                                        made of real oak wood to make your <br />
                                        workspace modern and elegant.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='feature'>
                        <div className='feature-content'>
                            <div className='content' data-scroll data-scroll-speed='2'>
                                <div className='content-number'>
                                    <p>
                                        <span>02</span> / 03
                                    </p>
                                </div>
                                <div className='content-title'>
                                    <h1>Height Adjustment</h1>
                                </div>
                                <div className='content-text'>
                                    <p>
                                        Minimalist and stylish high quality desks <br />
                                        made of real oak wood to make your <br />
                                        workspace modern and elegant.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className='feature-image'
                            data-scroll
                            data-scroll-direction='horizontal'
                            data-scroll-speed='-2'>
                            <div className='image'>
                                <Image src={Feature2} alt='' layout='fill' />
                            </div>
                        </div>
                    </div>
                    <div className='feature'>
                        <div
                            className='feature-image'
                            data-scroll
                            data-scroll-direction='horizontal'
                            data-scroll-speed='2'>
                            <div className='image'>
                                <Image src={Feature3} alt='' layout='fill' />
                            </div>
                        </div>
                        <div className='feature-content'>
                            <div className='content' data-scroll data-scroll-speed='2' data-scroll-call='elementInView'>
                                <div className='content-number'>
                                    <p>
                                        <span>03</span> / 03
                                    </p>
                                </div>
                                <div className='content-title'>
                                    <h1>Several Sizes</h1>
                                </div>
                                <div className='content-text'>
                                    <p>
                                        Minimalist and stylish high quality desks <br />
                                        made of real oak wood to make your <br />
                                        workspace modern and elegant.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OrderBtn />
        </main>
    );
};

export default Features;
