import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import { useContext, useEffect, useRef } from 'react';
import { MenuContext } from './menuManager';
import MenuImage from '../../assets/images/desk-10.jpg';

const Menu = () => {
    const { active } = useContext(MenuContext);
    let container = useRef(null);
    let slide1 = useRef(null);
    let slide2 = useRef(null);
    let slide3 = useRef(null);

    useEffect(() => {
        const fadeIn = (el, duration, delay, fromY, toY) => {
            gsap.fromTo(
                el,
                {
                    y: fromY,
                    opacity: 0,
                },
                {
                    duration: duration,
                    delay: delay,
                    y: toY,
                    opacity: 1,
                    ease: 'power3.out',
                }
            );
        };

        const staggerIn = (els, duration, delay, direction, fromY, toY, stagger) => {
            if (direction === 'x') {
                gsap.fromTo(
                    [...els],
                    {
                        x: fromY,
                    },
                    {
                        duration: duration,
                        delay: delay,
                        x: toY,
                        ease: 'power3.inOut',
                        stagger: stagger,
                    }
                );
            } else {
                gsap.fromTo(
                    [...els],
                    {
                        y: fromY,
                    },
                    {
                        duration: duration,
                        delay: delay,
                        y: toY,
                        ease: 'power3.inOut',
                        stagger: stagger,
                    }
                );
            }
        };

        const lines = document.querySelectorAll('.line');
        const links = document.querySelectorAll('.nav-item__inner h1');

        if (active) {
            gsap.to(container, 0, { css: { zIndex: 100, visibility: 'visible' } });

            gsap.fromTo(
                [slide1, slide2, slide3],
                {
                    x: '-100%',
                },
                {
                    duration: 1.5,
                    x: '0',
                    ease: 'power3.inOut',
                    stagger: 0.05,
                }
            );

            gsap.fromTo(
                [...lines],
                {
                    scaleX: '0',
                },
                {
                    duration: 1.5,
                    delay: 0.5,
                    transformOrigin: 'left',
                    scaleX: '1',
                    ease: 'power3.out',
                    stagger: 0.07,
                }
            );

            gsap.fromTo(
                [...links],
                {
                    // scale: '0.8',
                    y: '200%',
                },
                {
                    duration: 1.5,
                    delay: 0.5,
                    transformOrigin: 'left bottom',
                    // scale: '1',
                    y: '0',
                    ease: 'power3.out',
                    stagger: 0.07,
                }
            );

            gsap.fromTo(
                ['.socials a', '.link'],
                {
                    y: '200%',
                    opacity: 0,
                },
                {
                    duration: 1.5,
                    delay: 0.6,
                    y: '0',
                    opacity: 1,
                    ease: 'power3.out',
                    stagger: 0.05,
                }
            );

            gsap.fromTo(
                '.menu-image .image',
                {
                    width: 0,
                },
                {
                    duration: 1.5,
                    delay: 0.8,
                    width: '100%',
                    ease: 'power3.out',
                }
            );

            gsap.fromTo(
                '.menu-image .image img',
                {
                    scale: 1.2,
                },
                {
                    duration: 1.5,
                    delay: 0.8,
                    scale: 1,
                    ease: 'power3.out',
                }
            );
        } else {
            gsap.fromTo(
                [slide1, slide2, slide3],
                {
                    duration: 0,
                    x: '0',
                },
                {
                    duration: 1.5,
                    x: '100%',
                    ease: 'power3.inOut',
                    stagger: 0.05,
                }
            );

            gsap.to(container, 0, {
                delay: 1.65,
                css: {
                    zIndex: -1,
                    visibility: 'hidden',
                },
            });
        }
    }, [active]);

    return (
        <div className='menu-container' ref={(el) => (container = el)}>
            <div className='slides'>
                <div className='slide'>
                    <div className='slide-inner' ref={(el) => (slide1 = el)}></div>
                </div>
                <div className='slide'>
                    <div className='slide-inner' ref={(el) => (slide2 = el)}></div>
                </div>
                <div className='slide'>
                    <div className='slide-inner' ref={(el) => (slide3 = el)}></div>
                </div>
            </div>
            <div className='menu'>
                {/* <div className='menu-logo'>
                    <Link href=''>
                        <a>
                            <h1>W</h1>
                        </a>
                    </Link>
                </div> */}
                <div className='menu-navigation'>
                    <nav className='nav'>
                        <div className='line'>
                            <span></span>
                        </div>
                        <div className='nav-item'>
                            <Link href='/'>
                                <a className='nav-item__inner'>
                                    <h1>Home</h1>
                                </a>
                            </Link>
                        </div>
                        <div className='line'>
                            <span></span>
                        </div>
                        <div className='nav-item'>
                            <Link href='/about'>
                                <a className='nav-item__inner'>
                                    <h1>About</h1>
                                </a>
                            </Link>
                        </div>
                        <div className='line'>
                            <span></span>
                        </div>
                        <div className='nav-item'>
                            <Link href='/features'>
                                <a className='nav-item__inner'>
                                    <h1>Features</h1>
                                </a>
                            </Link>
                        </div>
                        <div className='line'>
                            <span></span>
                        </div>
                        <div className='nav-item'>
                            <Link href='/specifications'>
                                <a className='nav-item__inner'>
                                    <h1>Specifications</h1>
                                </a>
                            </Link>
                        </div>
                        <div className='line'>
                            <span></span>
                        </div>
                        <div className='nav-item'>
                            <Link href='/order'>
                                <a className='nav-item__inner'>
                                    <h1>Order</h1>
                                </a>
                            </Link>
                        </div>
                        <div className='line'>
                            <span></span>
                        </div>
                    </nav>
                </div>
                <div className='menu-footer'>
                    <div className='socials'>
                        <a href='#'>
                            <span>Facebook</span>
                        </a>
                        <a href='#'>
                            <span>Instagram</span>
                        </a>
                    </div>
                    <div>
                        <a href='#' className='link'>
                            <span>hello@woodone.co</span>
                        </a>
                    </div>
                </div>
                <div className='menu-image'>
                    <div className='image'>
                        <Image src={MenuImage} alt='' layout='fill' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
