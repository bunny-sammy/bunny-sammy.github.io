import { useTranslation } from "react-i18next";

import '../styles/components/ContactList.scss';
import Email from "../assets/svg/mail.svg?react";
import Github from "../assets/svg/github.svg?react";
import Linkedin from "../assets/svg/linkedin.svg?react";
import Instagram from "../assets/svg/instagram.svg?react";

export default function ContactList() {
    // const { i18n, t } = useTranslation();

    return (
        <ul className="contact-list">
            <a>
                <Email />
                dsamuel.coelho@hotmail.com
            </a>
            <a>
                <Linkedin />
                in/dsam.coelho
            </a>
            <a>
                <Github />
                bunny-sammy
            </a>
            <a>
                <Instagram />
                bunnysammy_
            </a>
        </ul>
    )
}