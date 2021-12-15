import { Menu } from '..';
import { MenuManager } from '..';

const Layout = ({ children, ...restProps }) => {
    return (
        <MenuManager>
            <div className='layout'>
                {children}
                {/* Footer */}
                <Menu />
            </div>
        </MenuManager>
    );
};

export default Layout;
