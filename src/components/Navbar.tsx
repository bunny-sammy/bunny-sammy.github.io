import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

import '../styles/components/Navbar.scss';
import MenuIcon from '../assets/icons/navbar_menu.svg?react';
import CloseIcon from '../assets/icons/navbar_close.svg?react';

interface NavbarProps {
    height: number;
}

export default function Navbar ({height}: NavbarProps) {
    // const { i18n, t } = useTranslation();

    const [ menuOpen, setMenuOpen ] = useState<boolean>(false);
    const [ animate, setAnimate ] = useState<string>('');
    const menuRef = useRef<HTMLUListElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const forceCloseOnScroll = () => {
            setMenuOpen(false);
        }

        if (menuOpen) {
            menuRef.current?.focus();
        }

        window.addEventListener('scroll', forceCloseOnScroll);
        return () => window.removeEventListener('scroll', forceCloseOnScroll);
    }, [menuOpen])

    const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {    
        setAnimate('animate');
        setMenuOpen(!menuOpen);
    }

    const blurMenu = (event: React.FocusEvent<HTMLUListElement>) => {
        setMenuOpen(false);
    }

    const links = [
        {
            label: 'Sobre Mim',
            id: '#about',
        },
        {
            label: 'Projetos',
            id: '#projects',
        },
        {
            label: 'Contato',
            id: '#contact',
        },
    ]

    return (
        <nav style={{'--height': `${height}px`} as React.CSSProperties}>
            <button ref={buttonRef} tabIndex={1} className={menuOpen ? `icon open ${animate}` : `icon ${animate}`} onClick={toggleMenu}>
                <MenuIcon/>
                <CloseIcon/>
            </button>
            <ul ref={menuRef} tabIndex={0} className={menuOpen ? "open" : ""} onBlur={blurMenu}>
                {links.map( (link, i) => (
                    <li key={i}>{link.label}</li>
                ) )}
            </ul>
        </nav>
    )
}