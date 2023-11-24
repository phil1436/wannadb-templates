import { Link } from 'react-router-dom';
import './Navbar.scss';
import { useEffect, useState } from 'react';
import React from 'react';

function Navbar() {
    const getUserName = () => {
        const name = localStorage.getItem('wannadbuser');
        if (name) {
            return name;
        }
        return '';
    };
    const getTheme = () => {
        const theme = localStorage.getItem('wanndbtheme');
        if (theme) {
            document.documentElement.setAttribute('data-theme', 'light');

            return theme;
        }

        // get browser theme
        const userPrefersDark =
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (userPrefersDark) {
            return 'dark';
        }
        return 'light';
    };

    const setColorTheme = () => {
        localStorage.setItem('wanndbtheme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    };

    const [username, setUsername] = useState(getUserName());
    const [theme, setTheme] = useState(getTheme());

    useEffect(() => {
        const name = localStorage.getItem('wannadbuser');
        if (name) {
            setUsername(name);
        }
    }, []);

    useEffect(() => {
        getTheme();
        setColorTheme();
    }, [theme]);

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
            setColorTheme();
            return;
        }
        setTheme('dark');
        setColorTheme();
    };

    return (
        <div className="Navbar">
            <div className="logo" onClick={() => (window.location.href = '/')}>
                wanna<span className="db">db</span>
            </div>
            <div className="links">
                <div className="toggle-switch">
                    <label className="switch-label">
                        {React.createElement('input', {
                            type: 'checkbox',
                            defaultChecked: theme == 'light',
                            onChange: toggleTheme,
                            className: 'checkbox',
                        })}
                        <span className="slider"></span>
                    </label>
                </div>
                <Link to="/">Home</Link>
                <a
                    href="https://www.youtube.com/watch?v=A7AjtPGt2rM"
                    target="_blank"
                >
                    About
                </a>
                {username !== '' ? (
                    <Link to={'/profile'}>
                        <div className="profilePicture">
                            {username.slice(0, 1).toUpperCase()}
                        </div>
                    </Link>
                ) : (
                    <Link to={'/login'}>Login</Link>
                )}
            </div>
        </div>
    );
}

export default Navbar;
