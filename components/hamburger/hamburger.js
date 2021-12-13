import { useState } from 'react';

const Hamburger = () => {
	const [active, setActive] = useState(false);

	const toggleMenuHandler = () => setActive(!active);

	return (
		<div className='hamburger-container'>
			<div className={active ? 'hamburger active' : 'hamburger'} onClick={toggleMenuHandler}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Hamburger;
