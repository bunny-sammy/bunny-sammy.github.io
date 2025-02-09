import useScrollSnap from "../hooks/useScrollSnap";

export default function useCrollIntoView (query:string) {
    useScrollSnap(false);
    if (query) {
        const element = document.querySelector(query);
    
        if (element) element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    } else {
        window.scrollTo(0,0);
    }
    setTimeout(() => {
        useScrollSnap(true)
        window.dispatchEvent(new Event('scrollend'));
    }, 500);
}