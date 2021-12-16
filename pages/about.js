import { Header } from '../components';
import PlusIcon from '../assets/images/icon-plus.svg';
import Image from 'next/image';

const About = () => {
    return (
        <main className='about-page'>
            <Header />
            <section className='about-section'>
                <div className='about-header'>
                    <h1>Desk 4 you</h1>
                    <h4>
                        Minimalist and stylish high quality desks made of real oak <br /> wood to make your workspace
                        modern and elegant.
                    </h4>
                </div>
                <div className='about-footer'>
                    <div className='footer'>
                        <div className='footer-message'>
                            <h3>For The Creative.</h3>
                            <p>Woodone Team</p>
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
