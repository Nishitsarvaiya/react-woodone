import gsap from 'gsap';
import Image from 'next/image';
import { useEffect } from 'react';
import HomeImage from '../assets/images/desk-2.jpg';
import { CustomLink, Header } from '../components';

const Home = () => {
    useEffect(() => {
        gsap.fromTo(
            '.title-line__inner',
            1.5,
            { y: '200%', scaleX: 1.5 },
            { y: '0', delay: 1, scaleX: 1, transformOrigin: 'left', ease: 'power3.out', stagger: 0.1 }
        );

        gsap.fromTo(
            ['.title-line__inner', '.hero-footer a'],
            1.5,
            { y: '200%' },
            { y: '0', delay: 1, ease: 'power3.out', stagger: 0.1 }
        );

        gsap.fromTo('.hero-image .image', 1.5, { width: 0 }, { width: '100%', delay: 1, ease: 'power3.out' });
        gsap.fromTo('.hero-image .image img', 1.5, { scale: 1.5 }, { scale: 1, delay: 1, ease: 'power3.out' });
    }, []);

    return (
        <main>
            <div className='home-container'>
                <div className='hero'>
                    <Header page='home' />
                    <h1 className='hero-title'>
                        <div className='title-line'>
                            <div className='title-line__inner'>
                                Woodone <span></span>
                            </div>
                        </div>
                        <div className='title-line'>
                            <div className='title-line__inner'>Stylish</div>
                        </div>
                        <div className='title-line'>
                            <div className='title-line__inner'>
                                Oak Desks <span>2021</span>
                            </div>
                        </div>
                    </h1>
                    <div className='hero-footer'>
                        <div className='socials'>
                            <CustomLink>Facebook</CustomLink>
                            <CustomLink>Instagram</CustomLink>
                        </div>
                        <div>
                            <a href='#' className='link'>
                                <span>hello@woodone.co</span>
                            </a>
                        </div>
                    </div>
                    <div className='hero-image'>
                        <div className='image' data-cursor-target>
                            <Image src={HomeImage} alt='' layout='fill' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
