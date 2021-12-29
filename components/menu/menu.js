import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import { useContext, useEffect, useRef } from 'react';
import { MenuContext } from './menu.manager.js';
import MenuImage from '../../assets/images/desk-10.jpg';
import { useRouter } from 'next/router';

const Menu = () => {
    const router = useRouter();
    const { menuState, setMenuState } = useContext(MenuContext);
    let container = useRef(null);
    let slide1 = useRef(null);
    let slide2 = useRef(null);
    let slide3 = useRef(null);

    const onLinkHoverEnter = (e) => {
        let bg = e.target.parentNode.querySelector('.nav-item__bg');
        let text = e.target.parentNode.querySelector('.nav-item__inner h1');

        gsap.to(bg, 0.5, {
            width: '100%',
            ease: 'power3.out',
        });

        gsap.to(text, 0.2, {
            color: '#ffffff',
            ease: 'power3.out',
        });
    };

    const onLinkHoverLeave = (e) => {
        let bg = e.target.parentNode.querySelector('.nav-item__bg');
        let text = e.target.parentNode.querySelector('.nav-item__inner h1');

        gsap.to(bg, 0.5, {
            width: '0',
            ease: 'power3.out',
        });

        gsap.to(text, 0.2, {
            color: '#171615',
            ease: 'power3.out',
        });
    };

    useEffect(() => {
        let links = document.querySelectorAll('.nav-item__inner');

        links.forEach((link) => link.addEventListener('mouseenter', onLinkHoverEnter));
        links.forEach((link) => link.addEventListener('mouseleave', onLinkHoverLeave));

        return () => {
            links.forEach((link) => link.removeEventListener('mouseenter', onLinkHoverEnter));
            links.forEach((link) => link.removeEventListener('mouseleave', onLinkHoverLeave));
        };
    }, []);

    useEffect(() => {
        if (menuState.active) {
            setMenuState({ active: !menuState.active });
        }
    }, [router.asPath]);

    useEffect(() => {
        const lines = document.querySelectorAll('.line');
        const links = document.querySelectorAll('.nav-item__inner h1');

        if (menuState.active === true || (menuState.active === true && menuState.initial === null)) {
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
                    skewX: 30,
                    y: '200%',
                    x: '20%',
                },
                {
                    duration: 1.5,
                    delay: 0.5,
                    skewX: 0,
                    y: '0',
                    x: '0',
                    ease: 'power3.out',
                    stagger: 0.07,
                }
            );

            gsap.fromTo(
                ['.menu-footer .socials a', '.menu-footer .link'],
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

            gsap.fromTo(
                '.menu-image .image',
                {
                    width: 0,
                },
                {
                    duration: 1.5,
                    delay: 0.8,
                    width: '100%',
                    x: '0',
                    ease: 'power3.out',
                }
            );
        } else if (menuState.active === false) {
            gsap.fromTo(
                [...lines],
                {
                    scaleX: '1',
                },
                {
                    duration: 1.5,
                    transformOrigin: 'right',
                    scaleX: '0',
                    ease: 'power3.out',
                    stagger: 0.07,
                }
            );

            gsap.fromTo(
                [...links],
                {
                    skewX: 0,
                    y: '0',
                    x: '0',
                },
                {
                    duration: 1.5,
                    skewX: -30,
                    y: '-200%',
                    x: '20%',
                    ease: 'power3.out',
                    stagger: 0.07,
                }
            );

            gsap.fromTo(
                ['.menu-footer .socials a', '.menu-footer .link'],
                {
                    y: '0',
                    opacity: 1,
                },
                {
                    duration: 1.5,
                    delay: 0.2,
                    y: '-200%',
                    opacity: 0,
                    ease: 'power3.out',
                    stagger: 0.05,
                }
            );

            gsap.fromTo(
                '.menu-image .image img',
                {
                    scale: 1,
                },
                {
                    duration: 1.5,
                    scale: 1.2,
                    ease: 'power3.out',
                }
            );

            gsap.fromTo(
                '.menu-image .image',
                {
                    x: '0',
                },
                {
                    duration: 1,
                    delay: 0.2,
                    x: '200%',
                    ease: 'power3.inOut',
                }
            );

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
    }, [menuState.active, menuState.initial]);

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
                <div className='menu-navigation'>
                    <nav className='nav'>
                        <div className='line'>
                            <span></span>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-item__bg'></div>
                            <Link href='/' as={process.env.BACKEND_URL + '/'}>
                                <a className='nav-item__inner'>
                                    <h1>Home</h1>
                                </a>
                            </Link>
                        </div>
                        <div className='line'>
                            <span></span>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-item__bg'></div>
                            <Link href='/about' as={process.env.BACKEND_URL + '/about'}>
                                <a className='nav-item__inner'>
                                    <h1>About</h1>
                                </a>
                            </Link>
                        </div>
                        <div className='line'>
                            <span></span>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-item__bg'></div>
                            <Link href='/features' as={process.env.BACKEND_URL + '/features'}>
                                <a className='nav-item__inner'>
                                    <h1>Features</h1>
                                </a>
                            </Link>
                        </div>
                        <div className='line'>
                            <span></span>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-item__bg'></div>
                            <Link href='/specifications' as={process.env.BACKEND_URL + '/specifications'}>
                                <a className='nav-item__inner'>
                                    <h1>Specifications</h1>
                                </a>
                            </Link>
                        </div>
                        <div className='line'>
                            <span></span>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-item__bg'></div>
                            <Link href='/order' as={process.env.BACKEND_URL + '/order'}>
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
