import { useRevealOnScreen } from "../hooks/useRevealOnScreen"


const RevealOnScroll = ({children}) => {
    const [ref, isVisible] = useRevealOnScreen({
        root: null,
        rootMargin: "0px",
        threshold:0.1
    });
    
        const classes = `transition-opacity duration-2000 
            ${isVisible ? "opacity-100 " : "opacity-0"
            }`;

        return (
            <div ref={ref} className={classes}>
                {children}
            </div>
        );



}

export {RevealOnScroll}