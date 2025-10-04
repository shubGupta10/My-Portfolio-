import React, { useEffect, useRef } from 'react'

function RevealOnScroll({
    children,
    threshold = 0.2,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true
}) {
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add("visible")
                    if (triggerOnce) {
                        observer.unobserve(element)
                    }
                } else if (!triggerOnce) {
                    element.classList.remove("visible")
                }
            },
            { threshold, rootMargin }
        )

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [threshold, rootMargin, triggerOnce])

    return (
        <div ref={ref} className='reveal'>
            {children}
        </div>
    )
}

export default RevealOnScroll