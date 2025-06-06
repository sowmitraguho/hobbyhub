import React, { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ( {children}) => {
     const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
     useEffect(()=> {
         localStorage.setItem('theme', theme);
         const localTheme = localStorage.getItem('theme');
         document.querySelector('html').setAttribute("data-theme", localTheme);
     }, [theme])
    return (
       <ThemeContext value={{theme, setTheme}}>
        {children}
       </ThemeContext>
    );
};

export default ThemeProvider;