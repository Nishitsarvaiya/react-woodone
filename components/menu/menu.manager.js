import { createContext, useState } from 'react';

export const MenuContext = createContext({
    menuState: { initial: false, active: null },
    setMenuState: () => {},
});

const MenuManager = (props) => {
    const [menuState, setMenuState] = useState({ initial: false, active: null });

    return <MenuContext.Provider value={{ menuState, setMenuState }}>{props.children}</MenuContext.Provider>;
};

export default MenuManager;
