import { useTranslation } from "react-i18next";
import { useState, useRef } from 'react'

export default function Projects () {
    // const { i18n, t } = useTranslation();
    const jsonPath = `${import.meta.env.VITE_HOST}/projects.json`
    console.log(jsonPath);

    return (
        <>
            <p>Whoa</p>
        </>
    )
}