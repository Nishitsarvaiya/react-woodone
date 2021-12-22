import { Menu } from '..';
import { MenuManager } from '..';
import useLocoScroll from '../../hooks/useLocoScroll';

const Layout = ({ children, ...restProps }) => {
    useLocoScroll();

    return (
        <MenuManager>
            <div className='layout' data-scroll-container>
                {children}
                {/* Footer */}
                <Menu />
            </div>
        </MenuManager>
    );
};

export default Layout;
