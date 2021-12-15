import Image from 'next/image';
import HomeImage from '../assets/images/desk-0.jpg';
import { Header } from '../components';

const Home = () => {
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
                    <div className='hero-image'>
                        <div className='image'>
                            <Image src={HomeImage} alt='' layout='fill' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
