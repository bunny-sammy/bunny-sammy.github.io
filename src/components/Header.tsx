import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react';
import useWindowDimensions from "../hooks/useWindowDimensions";
import useScrollSnap from "../hooks/useScrollSnap";

import '../styles/components/Header.scss';
import Landing from "./Landing";
import Navbar from "./Navbar";
import ScrollIcon from '../assets/icons/landing_scroll.svg?react';

export default function Header () {
    // const { i18n, t } = useTranslation();

    const finalHeight = 60;
    const [scrollY, setScrollY] = useState(0);
    const [modifier, setModifier] = useState(0);
    const {width, height} = useWindowDimensions();

    useEffect(() => {
        const onScroll = () => {
            setScrollY(Math.max(0, Math.min(window.scrollY, height)))
            setModifier(scrollY / height);
        };

        const endScroll = () => {
            if (modifier > 0.5) {
                scrollTo(0, height);
            } else {
                scrollTo(0, 0);
            }
        }

        window.addEventListener('load', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('scrollend', endScroll, { passive: true });
        return () => {
            window.removeEventListener('load', onScroll);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('scrollend', endScroll);
        };
    }, [scrollY]);

    const scrollToMain = () => {
        useScrollSnap(false);
        const main = document.querySelector('main');
        
        if (main) main.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        setTimeout(() => {
            useScrollSnap(true)
            window.dispatchEvent(new Event('scrollend'));
        }, 500);
    }

    const dynamicStyles = {
        height: `${Math.max(finalHeight, height * (1-modifier))}px`,
        opacityReverse: 1-modifier,
        opacity: modifier,
        userOpacity: modifier > 0.75 ? modifier : 0,
        userTransform: `translate(${width * (0.5 * (1-modifier)) - 65*(1-modifier)}px, ${10 * (1-modifier)}px)`,
        picTransform: `scale(${Math.max(0.2, 1-modifier)}, ${Math.max(0.2, 1-modifier)})`,
        nameTransform: `scale(${Math.max(0.6, 1-modifier)}, ${Math.max(0.6, 1-modifier)}) translate(-${modifier > 0.01 ? (width * (0.5 * modifier) + 90*modifier) : 0}px, 0)`,
        nameFilter: `brightness(${1-modifier}) invert(${modifier})`,
        pointerEvents: modifier >= 0.9 ? 'none' : 'auto',
        visibility: modifier >= 0.9 ? 'hidden' : 'visible',
    }

    return (
        <>
            <header style={{height: dynamicStyles.height, opacity: dynamicStyles.opacity}}>
                <h2 style={{transform: dynamicStyles.userTransform, opacity: dynamicStyles.userOpacity, filter: dynamicStyles.nameFilter}}>
                    bunnysammy_
                </h2>
            </header>

            <Navbar height={finalHeight}/>

            <Landing style={dynamicStyles} modifier={modifier} scrollFunction={scrollToMain}/>

            <button onClick={scrollToMain} style={{ opacity: dynamicStyles.opacityReverse, pointerEvents: dynamicStyles.pointerEvents }} className="scroll-icon">
                <ScrollIcon/>
            </button>
        </>
    )
}