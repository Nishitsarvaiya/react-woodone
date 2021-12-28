import gsap from 'gsap';
import { useEffect } from 'react';
import { CustomLink, Hamburger } from '..';

const Header = ({ page }) => {
    useEffect(() => {
        gsap.fromTo(
            ['.logo h1', '.link', '.socials a', '.hamburger'],
            1,
            { y: '100%', opacity: 0 },
            { y: '0', opacity: 1, stagger: 0.1 }
        );
    }, []);

    return (
        <header data-scroll-section>
            <nav>
                <div className='logo'>
                    <h1>W</h1>
                </div>
                {page !== 'home' ? (
                    <>
                        <div>
                            <a href='#' className='link' data-cursor-target data-cursor-stick>
                                <span>hello@woodone.co</span>
                            </a>
                        </div>
                        <div className='socials'>
                            <CustomLink>Facebook</CustomLink>
                            <CustomLink>Instagram</CustomLink>
                        </div>
                    </>
                ) : (
                    ''
                )}
                <Hamburger />
            </nav>
        </header>
    );
};

export default Header;
