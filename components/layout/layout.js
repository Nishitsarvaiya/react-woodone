import { Menu } from '..';

const Layout = ({ children, ...restProps }) => {
    return (
        <div className='layout'>
            {children}
            {/* Footer */}
            <Menu />
        </div>
    );
};

export default Layout;
