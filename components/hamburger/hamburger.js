import { useContext, useRef } from 'react';
import { MenuContext } from '../menu/menuManager';

const Hamburger = ({ page }) => {
    const { menuState, setMenuState } = useContext(MenuContext);
    let hamburger = useRef(null);

    const toggleMenuHandler = () => {
        let ham = hamburger;
        ham.disabled = true;
        ham.style.pointerEvents = 'none';

        if (menuState.initial === false) {
            setMenuState({
                initial: null,
                active: true,
            });
        } else if (menuState.active) {
            setMenuState({
                active: !menuState.active,
            });
        } else if (!menuState.active) {
            setMenuState({
                active: !menuState.active,
            });
        }
        setTimeout(() => {
            ham.disabled = false;
            ham.style.pointerEvents = 'all';
        }, 1800);
    };

    return (
        <div className='hamburger-container'>
            <button
                className={menuState.active ? 'hamburger active' : 'hamburger'}
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
