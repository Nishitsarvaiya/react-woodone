import { useContext, useRef } from 'react';
import { MenuContext } from '../menu/menuManager';

const Hamburger = ({ page }) => {
    const { active, setActive } = useContext(MenuContext);
    let hamburger = useRef(null);

    const toggleMenuHandler = () => {
        let ham = hamburger;
        setActive(!active);
        ham.disabled = true;
        ham.style.pointerEvents = 'none';
        setTimeout(() => {
            ham.disabled = false;
            ham.style.pointerEvents = 'all';
        }, 1800);
    };

    return (
        <div className='hamburger-container'>
            <button
                className={active ? 'hamburger active' : 'hamburger'}
                onClick={toggleMenuHandler}
                ref={(el) => (hamburger = el)}>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </div>
    );
};

export default Hamburger;
