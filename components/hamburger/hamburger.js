import { useContext, useRef } from 'react';
import { MenuContext } from '../menu/menu.manager';
import { CursorContext } from '../cursor/cursor.manager';

const Hamburger = ({ page }) => {
    const { setSize } = useContext(CursorContext);
    const { menuState, setMenuState } = useContext(MenuContext);
    let hamburger = useRef(null);

    const mouseEntered = () => setSize('lg');
    const mouseLeft = () => setSize('sm');

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
                ref={(el) => (hamburger = el)}
                data-cursor-target>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </div>
    );
};

export default Hamburger;
