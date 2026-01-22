import { useTranslation } from "react-i18next";
import { LINKS } from "../scripts/utils";

import '../styles/components/ContactList.scss';
import Email from "../assets/svg/mail.svg?react";
import Github from "../assets/svg/github.svg?react";
import Linkedin from "../assets/svg/linkedin.svg?react";
import Instagram from "../assets/svg/instagram.svg?react";

export default function ContactList() {
    // const { i18n, t } = useTranslation();

    return (
        <ul className="contact-list">
            <a target="_blank" className="hover-effect accent" href={LINKS['email']}>
                <Email />
                dsamuel.coelho@hotmail.com
            </a>
            <a target="_blank" className="hover-effect accent" href={LINKS['linkedin']}>
                <Linkedin />
                in/dsam.coelho
            </a>
            <a target="_blank" className="hover-effect accent" href={LINKS['github']}>
                <Github />
                bunny-sammy
            </a>
            <a target="_blank" className="hover-effect accent" href={LINKS['instagram']}>
                <Instagram />
                bunnysammy_
            </a>
        </ul>
    )
}