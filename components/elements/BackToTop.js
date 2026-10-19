import { useEffect, useState } from "react"

export default function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setHasScrolled(window.scrollY > 100)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <>
            {hasScrolled && (
                <a className="scroll__top scroll-to-target open" href="#top" aria-label="Back to top" style={{ position: 'fixed', zIndex: 2147483647 }}>
                    <i className="fas fa-angle-up" aria-hidden="true"></i>
                </a>
            )}
        </>
    )
}
