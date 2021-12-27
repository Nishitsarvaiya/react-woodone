import { Cursor, Menu, MenuManager, CursorManager } from '..';
import useLocoScroll from '../../hooks/useLocoScroll';

const Layout = ({ children, ...restProps }) => {
    useLocoScroll();

    return (
        <CursorManager>
            <MenuManager>
                <div className='layout' data-scroll-container>
                    {children}
                    {/* Footer */}
                    <Menu />
                    <Cursor />
                </div>
            </MenuManager>
        </CursorManager>
    );
};

export default Layout;
