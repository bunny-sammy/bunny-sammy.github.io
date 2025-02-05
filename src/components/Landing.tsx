import $ from "jquery";
import { useTranslation } from "react-i18next";
import { useState, useRef } from 'react'
import useScrollSnap from "../hooks/useScrollSnap";

import '../styles/components/Landing.scss';
import profilePic from '../assets/images/profile.png';
import LinkedIcon from '../assets/icons/landing_linkedin.svg?react';
import GitIcon from '../assets/icons/landing_github.svg?react';
import ItchIcon from '../assets/icons/landing_itch.svg?react';
import IgIcon from '../assets/icons/landing_instagram.svg?react';
import ScrollIcon from '../assets/icons/landing_scroll.svg?react';

export default function Landing({ style, modifier }) {
    const { i18n, t } = useTranslation();

    const scrollToAbout = () => {
        useScrollSnap(false);
        const about = document.getElementById('about');

        // window.scrollBy({
        //     top: 1000,
        //     behavior: "smooth",
        // });

        if (about) about.scrollIntoView({
            behavior: 'smooth',
        });
    }

    const socials = [
        {
            label: 'LinkedIn',
            icon: <LinkedIcon/>,
            url: 'https://www.linkedin.com/in/dsamuelcoelho/',
        },
        {
            label: 'Github',
            icon: <GitIcon/>,
            url: 'https://github.com/bunny-sammy',
        },
        {
            label: 'LinkedIn',
            icon: <ItchIcon/>,
            url: 'https://bunnysammy.itch.io/',
        },
        {
            label: 'LinkedIn',
            icon: <IgIcon/>,
            url: 'https://www.instagram.com/bunnysammy_',
        },
    ]

    return (
        <section className="landing">
            <div className="landing-inner" style={{ height: style.height, opacity: style.opacityReverse, pointerEvents: style.pointerEvents }}>
                <img src={profilePic} style={{ transform: style.picTransform }}/>
                <div className="title">
                    <h1 style={{transform: style.nameTransform, filter: style.nameFilter}}>
                        David Coelho
                        </h1>
                    <h2 style={{ transform: style.picTransform }}>
                        {t('occupation')}
                    </h2>
                </div>
                <div style={{ transform: style.picTransform }} className="socials">
                    {socials.map( (social, i) => (
                        <a key={i} href={social.url}>
                            {social.icon}
                        </a>
                    ) )}
                </div>
            </div>
            <a onClick={scrollToAbout} style={{ opacity: style.opacityReverse, pointerEvents: style.pointerEvents }} className="scroll-icon">
                <ScrollIcon/>
            </a>
        </section >
    )

}