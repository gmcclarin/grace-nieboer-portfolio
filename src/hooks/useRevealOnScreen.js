import { useRef, useState, useEffect } from "react"

const useRevealOnScreen = (options) => {
 const ref = useRef(null)
 const [isVisible, setIsVisible] = useState(false);

 const callbackFunction = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
}


    useEffect(() => {
        const scrollObserver = new IntersectionObserver(callbackFunction, options);
        if(ref.current) {
            scrollObserver.observe(ref.current)
        }

        return () => {
            if(ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                scrollObserver.unobserve(ref.current)
            }
        }
    }, [options])



    return [ref, isVisible]

}

export {useRevealOnScreen}