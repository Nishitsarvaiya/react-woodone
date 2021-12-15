import Link from 'next/link';
import { useContext } from 'react';
import { Hamburger } from '..';
import { MenuContext } from '../menu/menuManager';

const Header = ({ page }) => {
    const { active } = useContext(MenuContext);

    return (
        <header>
            <nav>
                <div className='logo'>
                    <Link href='/'>
                        <a>
                            <h1>W</h1>
                        </a>
                    </Link>
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
