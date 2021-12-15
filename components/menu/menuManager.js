import { createContext, useState } from 'react';

export const MenuContext = createContext({
    active: false,
    setActive: () => {},
});

const MenuManager = (props) => {
    const [active, setActive] = useState(false);

    return <MenuContext.Provider value={{ active, setActive }}>{props.children}</MenuContext.Provider>;
};

export default MenuManager;
