import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef, memo } from 'react';
import useWindowDimensions from "../hooks/useWindowDimensions";
import useScrollIntoView from "../hooks/useScrollIntoView";

import '../styles/components/Header.scss';
import Landing from "./Landing";
import Navbar from "./Navbar";
import ScrollIcon from '../assets/icons/landing_scroll.svg?react';

export default memo(function Header () {
    // const { i18n, t } = useTranslation();

    const finalHeight = 60; // Final height of the header. Passed down to all components related to it

    const prevScrollY = useRef<number>(0);
    const [scrollY, setScrollY] = useState<number>(0);
    const [modifier, setModifier] = useState<number>(0);
    const {width, height} = useWindowDimensions();

    useEffect(() => {
        const onScroll = () => {
            setScrollY(window.scrollY);
            const modifierValue = Math.max(0, Math.min(window.scrollY, height)) / height;
            setModifier(scrollY >= height ? 1 : modifierValue);
        };

        const endScroll = () => {   
            if (scrollY < prevScrollY.current) {
                // Going up
                if (modifier < 0.8) {
                    scrollTo(0, 0);
                } else {
                    if (scrollY < height) scrollTo(0, height);
                }
            } else {
                // Going down
                if (modifier < 0.2) {
                    scrollTo(0, 0);
                } else {
                    if (scrollY < height) scrollTo(0, height);
                }
            }

            prevScrollY.current = scrollY;
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

    const dynamicStyles = {
        "--modifier": modifier,
        "--modifier-px": `${modifier}px`,
        "--width": `${width}px`,
        "--height": `${height}px`,
        "--final-height": `${finalHeight}px`,

        "--user-opacity": modifier > 0.75 ? modifier : 0,
        "--user-transform": `translate(${width * (0.5 * (1-modifier)) - 65*(1-modifier)}px, ${10 * (1-modifier)}px)`,
        "--pic-transform": `scale(${Math.max(0.2, 1-modifier)}, ${Math.max(0.2, 1-modifier)})`,
        "--name-transform": `scale(${Math.max(0.6, 1-modifier)}, ${Math.max(0.6, 1-modifier)}) translate(-${modifier > 0.01 ? (width * (0.5 * modifier) + 90*modifier) : 0}px, 0)`,
        "--scroll-display": modifier > 0.9 ? 'none' : 'block',
        "--pointer-events": modifier >= 0.9 ? 'none' : 'auto',
    } as React.CSSProperties;

    return (
        <section className="landing-container" style={dynamicStyles}>
            <header>
                <h2>bunnysammy_</h2>
            </header>

            <Navbar height={finalHeight}/>
            <Landing/>

            <button className="scroll-icon" onClick={()=>(useScrollIntoView('main'))}>
                <ScrollIcon/>
            </button>
        </section>
    )
})