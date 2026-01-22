import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import "../styles/components/Modal.scss";
import Close from "../assets/svg/close.svg?react";

interface ModalProps {
    id: string;
    title?: string;
    isOpen: boolean;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode; 
}

export default function Modal({ id, title=undefined, isOpen, setIsOpen, children }: ModalProps) {
    const closeModal = () => {
        if (setIsOpen)
            setIsOpen(false);
    }

    const handleModalClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    }

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    
    return createPortal(
        <div className={`modal-background`} onClick={closeModal}>
            <section id={id} className={`modal ${isOpen ? 'open' : ''}`} onClick={handleModalClick}>
                <div className="modal-header">
                    <button className="hover-effect" onClick={closeModal}>
                        <Close />
                    </button>
                    {title &&
                        <h2>{title}</h2>
                    }
                </div>
                <div className="modal-content">                    
                    {children}
                </div>
            </section>
        </div>
    , document.body);
}