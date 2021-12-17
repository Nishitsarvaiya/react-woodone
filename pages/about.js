import { Header } from '../components';
import PlusIcon from '../assets/images/icon-plus.svg';
import Image from 'next/image';
import { useEffect } from 'react';
import gsap from 'gsap';

const About = () => {
    useEffect(() => {
        gsap.fromTo(
            ['.about-header h1', '.about-header h4', '.footer-message h3', '.footer-message p'],
            1.5,
            { y: '200%' },
            { y: '0', delay: 1, ease: 'power3.out', stagger: 0.3 }
        );

        gsap.fromTo('.footer-order .order-btn', 1.5, { scale: 0 }, { scale: 1, delay: 1.75, ease: 'power3.out' });
    }, []);
    return (
        <main className='about-page'>
            <Header />
            <section className='about-section'>
                <div className='about-header'>
                    <div className='clipper'>
                        <h1>Desk 4 you</h1>
                    </div>
                    <div className='clipper'>
                        <h4>
                            Minimalist and stylish high quality desks made of real oak <br /> wood to make your
                            workspace modern and elegant.
                        </h4>
                    </div>
                </div>
                <div className='about-footer'>
                    <div className='footer'>
                        <div className='footer-message'>
                            <div className='clipper'>
                                <h3>For The Creative.</h3>
                            </div>
                            <div className='clipper'>
                                <p>Woodone Team</p>
                            </div>
                        </div>
                        <div className='footer-order'>
                            <button className='order-btn'>
                                <Image src={PlusIcon} alt='' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
