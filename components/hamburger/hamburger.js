import { useRouter } from 'next/router';
import { useContext, useRef } from 'react';
import { CursorContext } from '../cursor/cursor.manager';
import { MenuContext } from '../menu/menu.manager';

const Hamburger = () => {
	const { menuState, setMenuState } = useContext(MenuContext);
	let hamburger = useRef(null);
	const router = useRouter();
	const { setSize } = useContext(CursorContext);

	const toggleMenuHandler = () => {
		let ham = hamburger;
		ham.disabled = true;
		ham.style.pointerEvents = 'none';

		if (menuState.initial === false) {
			setMenuState({
				initial: null,
				active: true,
			});
			setSize('sm');
		} else if (menuState.active) {
			setMenuState({
				active: !menuState.active,
			});
			setSize('sm');
		} else if (!menuState.active) {
			setMenuState({
				active: !menuState.active,
			});
			setSize('sm');
		}
		setTimeout(() => {
			ham.disabled = false;
			ham.style.pointerEvents = 'all';
		}, 1800);
	};

	return (
		<div
			className={
				router.asPath === '/' && !menuState.active ? 'hamburger-container center' : 'hamburger-container'
			}>
			<button
				className={menuState.active ? 'hamburger open' : 'hamburger close'}
				onClick={toggleMenuHandler}
				ref={(el) => (hamburger = el)}
				data-cursor-target
				data-cursor-stick>
				<span className='hamburger-buns'>
					<span></span>
					<span></span>
				</span>
			</button>
		</div>
	);
};

export default Hamburger;
