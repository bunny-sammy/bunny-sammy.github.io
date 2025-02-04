import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react';
import useWindowDimensions from "../hooks/useWindowDimensions";

import '../styles/components/Header.scss';
import Landing from "./Landing";

export default function Header () {
    // const { i18n, t } = useTranslation();

    const [scrollY, setScrollY] = useState(0);
    const [modifier, setModifier] = useState(0);
    const {width, height} = useWindowDimensions();

    useEffect(() => {
        const onScroll = () => {
            setScrollY(Math.max(0, Math.min(window.scrollY, height)))
            setModifier(scrollY / height);
            // console.log(modifier,scrollY);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollY]);

    const dynamicStyles = {
        height: `${Math.max(60, height * (1-modifier))}px`,
        opacityReverse: 1-modifier,
        opacity: modifier,
        userOpacity: Math.max(0.5, Math.min(modifier, 1)),
        userTransform: `translate(${width * (0.5 * (1-modifier)) - 65*(1-modifier)}px, ${10 * (1-modifier)}px)`,
        picTransform: `scale(${Math.max(0.2, 1-modifier)}, ${Math.max(0.2, 1-modifier)})`,
        nameTransform: `scale(${Math.max(0.6, 1-modifier)}, ${Math.max(0.6, 1-modifier)}) translate(-${modifier > 0.1 ? (width * (0.5 * modifier) + 90*modifier) : 0}px, 0)`,
        nameFilter: `brightness(${1-modifier}) invert(${modifier})`,
    }

    return (
        <>
            <style>{`
                html, body {
                    scroll-snap-type: ${modifier > 0.95 ? 'none' : 'y mandatory'};
                }
            `}</style>

            <header style={{height: dynamicStyles.height, opacity: dynamicStyles.opacity}}>
                <h2 style={{transform: dynamicStyles.userTransform, opacity: dynamicStyles.userOpacity, filter: dynamicStyles.nameFilter}}>
                    bunnysammy_
                </h2>
            </header>

            <Landing style={dynamicStyles} modifier={modifier}/>
        </>
    )
}