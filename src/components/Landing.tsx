import { useTranslation } from "react-i18next";
import { useState } from 'react'

import '../styles/Landing.scss';
import profilePic from '../assets/images/profile.png';
import LinkedIcon from '../assets/icons/landing_linkedin.svg?react';
import ItchIcon from '../assets/icons/landing_itch.svg?react';
import GitIcon from '../assets/icons/landing_github.svg?react';
import IgIcon from '../assets/icons/landing_instagram.svg?react';

export default function Landing() {
    const { i18n, t } = useTranslation();

    const socials = [
        'https://www.linkedin.com/in/dsamuelcoelho/',
        'https://github.com/bunny-sammy',
        'https://bunnysammy.itch.io/',
        'https://www.instagram.com/bunnysammy_',
    ]

    return (
        <div className="landing">
            <img src={profilePic}/>
            <div className="title">
                <h1>David Coelho</h1>
                <h2>{t('occupation')}</h2>
            </div>
            <div className="socials">
                <a href={socials[0]}>
                    <LinkedIcon/>
                </a>
                <a href={socials[1]}>
                    <GitIcon/>
                </a>
                <a href={socials[2]}>
                    <ItchIcon/>
                </a>
                <a href={socials[3]}>
                    <IgIcon/>
                </a>
            </div>
        </div >
    )

}