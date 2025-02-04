import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react';

import '../styles/components/Header.scss';
import Landing from "./Landing";

export default function Header () {
    // const { i18n, t } = useTranslation();

    const [scrollY, setScrollY] = useState(0);
    const [modifier, setModifier] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setScrollY(Math.max(0, Math.min(window.scrollY, window.innerHeight)))
            setModifier(scrollY / window.innerHeight);
            console.log(modifier,scrollY);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollY]);

    const headerStyles = {
        height: `${Math.max(60, window.innerHeight * (1-modifier))}px`,
        opacity: modifier,
    }

    const landingStyles = {
        opacity: 1-modifier,
        transform: `scale(${Math.max(0.4, 1-modifier)}, ${Math.max(0.4, 1-modifier)})`,
    }

    return (
        <>
            <header style={headerStyles}>
                <h2>
                    bunnysammy_
                </h2>
            </header>

            <Landing style={landingStyles} modifier={modifier}/>
        </>
    )
}