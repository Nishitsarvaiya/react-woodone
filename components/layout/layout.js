import { Header } from '..';

const Layout = ({ children, ...restProps }) => {
	return (
		<div className='layout'>
			<Header />
			{children}
			{/* Footer */}
		</div>
	);
};

export default Layout;
