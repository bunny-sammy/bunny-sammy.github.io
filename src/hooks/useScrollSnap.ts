export default function useScrollSnap (state: boolean) {
    document.documentElement.style.scrollSnapType = state ? 'y mandatory' : 'none';
}