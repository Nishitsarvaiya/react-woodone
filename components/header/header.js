import gsap from 'gsap';
import Link from 'next/link';
import { useEffect } from 'react';
import { CustomLink } from '..';

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
				<div className='logo' data-cursor-target data-cursor-stick>
					<h1>
						<Link href='/'>
							<a>W</a>
						</Link>
					</h1>
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
				<div></div>
			</nav>
		</header>
	);
};

export default Header;
