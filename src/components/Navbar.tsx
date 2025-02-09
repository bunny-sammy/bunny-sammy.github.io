import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

import '../styles/components/Navbar.scss';
import MenuIcon from '../assets/icons/navbar_menu.svg?react';
import CloseIcon from '../assets/icons/navbar_close.svg?react';
import ShareIcon from '../assets/icons/navbar_share.svg?react';
import LangIcon from '../assets/icons/navbar_lang.svg?react';
import useScrollIntoView from "../hooks/useScrollIntoView";

interface NavbarProps {
    height: number;
}

export default function Navbar ({height}: NavbarProps) {
    const { i18n, t } = useTranslation();

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

        const main = document.querySelector('main');
        window.addEventListener('scroll', forceCloseOnScroll);
        main?.addEventListener('scroll', forceCloseOnScroll);
        return () => {
            window.removeEventListener('scroll', forceCloseOnScroll);
            main?.removeEventListener('scroll', forceCloseOnScroll);
        };
    }, [menuOpen])

    const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {    
        setAnimate('animate');
        setMenuOpen(!menuOpen);
    }

    const blurMenu = (event: React.FocusEvent<HTMLUListElement>) => {
        // setMenuOpen(false);
    }

    const toggleLanguage = () => {
        if (i18n.language == "en") {
            i18n.changeLanguage("pt-BR");
        } else {
            i18n.changeLanguage("en");
        }
    }

    const handleShare = () => {
        const shareData = {
            title: "David Coelho | Portfolio",
            text: "Desenvolvedor Web Frontend",
            url: "https://bunny-sammy.github.io",
        };
        if (navigator.canShare(shareData)) {
            navigator.share(shareData);
        } else {
            navigator.clipboard.writeText(shareData.url);
        }
    }

    const links = [
        {
            label: 'Início',
            query: '',
        },
        {
            label: 'Sobre Mim',
            query: '[data-section="about"]',
        },
        {
            label: 'Projetos',
            query: '[data-section="projects"]',
        },
        {
            label: 'Contato',
            query: '[data-section="contact"]',
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
                    <li key={i} onClick={()=>(useScrollIntoView(link.query))}>{link.label}</li>
                ) )}
                <li className="icons">
                    <button onClick={handleShare}>
                        <ShareIcon/>
                    </button>
                    <button onClick={toggleLanguage}>
                        <LangIcon/>
                    </button>
                </li>
            </ul>
        </nav>
    )
}