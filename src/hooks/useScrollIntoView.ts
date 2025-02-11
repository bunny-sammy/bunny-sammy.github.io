export default function useCrollIntoView (query:string) {
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
        window.dispatchEvent(new Event('scrollend'));
    }, 500);
}