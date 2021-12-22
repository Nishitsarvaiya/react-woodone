import Link from 'next/link';
import { Hamburger } from '..';

const Header = ({ page }) => {
    return (
        <header data-scroll-section>
            <nav>
                <div className='logo'>
                    <h1>W</h1>
                </div>
                {page !== 'home' ? (
                    <>
                        <div>
                            <a href='#' className='link'>
                                <span>hello@woodone.co</span>
                            </a>
                        </div>
                        <div className='socials'>
                            <a href='#'>
                                <span>Facebook</span>
                            </a>
                            <a href='#'>
                                <span>Instagram</span>
                            </a>
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
