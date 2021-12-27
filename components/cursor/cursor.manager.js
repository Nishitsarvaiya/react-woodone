import { createContext, useState } from 'react';

export const CursorContext = createContext({
    size: 'sm',
    setSize: () => {},
});

const CursorManager = ({ children }) => {
    const [size, setSize] = useState('sm');

    return <CursorContext.Provider value={{ size, setSize }}>{children}</CursorContext.Provider>;
};

export default CursorManager;
