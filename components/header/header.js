import { Hamburger } from '..';

const header = () => {
	return (
		<header>
			<nav>
				<div className='logo'>
					<h1>W</h1>
				</div>
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
				<Hamburger />
			</nav>
		</header>
	);
};

export default header;
