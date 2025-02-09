import useScrollSnap from "../hooks/useScrollSnap";

export default function useCrollIntoView (query:string) {
    useScrollSnap(false);
    const element = document.querySelector(query);
    
    if (element) element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
    setTimeout(() => {
        useScrollSnap(true)
        window.dispatchEvent(new Event('scrollend'));
    }, 500);
}