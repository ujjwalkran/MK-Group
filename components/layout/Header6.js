import Link from "next/link"
import { useEffect, useRef } from "react"
import LuxuryMenu from "./LuxuryMenu"
import LuxuryMobileMenu from "./LuxuryMobileMenu"

export default function Header6({ handleMobileMenu, closeMobileMenu, isMobileMenu = false, scroll }) {
    const menuToggleRef = useRef(null)
    const mobilePanelRef = useRef(null)
    const wasOpenRef = useRef(false)
    const closeMenu = closeMobileMenu || handleMobileMenu

    useEffect(() => {
        if (!isMobileMenu) {
            if (wasOpenRef.current) menuToggleRef.current?.focus()
            wasOpenRef.current = false
            return undefined
        }

        wasOpenRef.current = true
        const focusableItems = mobilePanelRef.current?.querySelectorAll('a[href], button:not([disabled])')
        const focusFrame = window.requestAnimationFrame(() => focusableItems?.[0]?.focus())

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeMenu()
                return
            }

            if (event.key !== "Tab" || !focusableItems?.length) return

            const firstItem = focusableItems[0]
            const lastItem = focusableItems[focusableItems.length - 1]
            if (event.shiftKey && document.activeElement === firstItem) {
                event.preventDefault()
                lastItem.focus()
            } else if (!event.shiftKey && document.activeElement === lastItem) {
                event.preventDefault()
                firstItem.focus()
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => {
            window.cancelAnimationFrame(focusFrame)
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [closeMenu, isMobileMenu])

    return (
        <header className="header-style-five mk-luxury-header">
            <div className={`menu-area transparent-header${scroll ? " sticky-menu" : ""}`}>
                <div className="container custom-container">
                    <div className="menu-wrap">
                        <nav className="menu-nav mk-header-nav" aria-label="Main navigation">
                            <div className="logo">
                                <Link href="/" aria-label="MK Groups home">
                                    <img src="/assets/img/logo/logo.png" alt="MK Groups" />
                                </Link>
                            </div>
                            <div className="navbar-wrap main-menu mk-desktop-nav">
                                <LuxuryMenu />
                            </div>
                            <div className="header-action mk-header-action">
                                <a className="mk-header-phone" href="tel:+918147903884">
                                    <i className="fas fa-phone-alt" aria-hidden="true" />
                                    <span>+91 81479 03884</span>
                                </a>
                                <Link className="mk-header-cta" href="/contact">
                                    Book a Consultation
                                    <i className="fas fa-arrow-right" aria-hidden="true" />
                                </Link>
                            </div>
                            <button
                                aria-controls="mk-mobile-menu"
                                aria-expanded={isMobileMenu}
                                aria-label={isMobileMenu ? "Close navigation menu" : "Open navigation menu"}
                                className={`mobile-nav-toggler mk-mobile-toggle${isMobileMenu ? " is-open" : ""}`}
                                onClick={handleMobileMenu}
                                ref={menuToggleRef}
                                type="button"
                            >
                                <span />
                                <span />
                                <span />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>

            <div
                aria-hidden={!isMobileMenu}
                aria-label="Mobile navigation"
                aria-modal="true"
                className="mobile-menu mk-mobile-menu"
                id="mk-mobile-menu"
                inert={!isMobileMenu}
                ref={mobilePanelRef}
                role="dialog"
            >
                <nav aria-label="Mobile menu" className="menu-box mk-mobile-panel">
                    <div className="mk-mobile-menu-header">
                        <Link href="/" aria-label="MK Groups home" onClick={closeMenu}>
                            <img src="/assets/img/logo/logo.png" alt="MK Groups" />
                        </Link>
                        <button
                            aria-label="Close navigation menu"
                            className="mk-mobile-close"
                            onClick={closeMenu}
                            type="button"
                        >
                            <i className="fas fa-times" aria-hidden="true" />
                        </button>
                    </div>

                    <LuxuryMobileMenu onNavigate={closeMenu} />

                    <div className="mk-mobile-bottom">
                        <a className="mk-mobile-phone" href="tel:+918147903884" onClick={closeMenu}>
                            <span className="mk-mobile-phone-icon" aria-hidden="true">
                                <i className="fas fa-phone-alt" />
                            </span>
                            <span>
                                <small>Call our team</small>
                                <strong>+91 81479 03884</strong>
                            </span>
                        </a>
                        <div className="mk-mobile-socials" aria-label="Social media">
                            <a aria-label="Facebook" href="#" onClick={closeMenu}><i className="fab fa-facebook-f" /></a>
                            <a aria-label="Instagram" href="#" onClick={closeMenu}><i className="fab fa-instagram" /></a>
                            <a aria-label="LinkedIn" href="#" onClick={closeMenu}><i className="fab fa-linkedin-in" /></a>
                        </div>
                        <Link className="mk-header-cta mk-mobile-cta" href="/contact" onClick={closeMenu}>
                            Book a Consultation
                            <i className="fas fa-arrow-right" aria-hidden="true" />
                        </Link>
                    </div>
                </nav>
            </div>

            <button
                aria-hidden={!isMobileMenu}
                aria-label="Close navigation menu"
                className="menu-backdrop mk-menu-backdrop"
                onClick={closeMenu}
                tabIndex={isMobileMenu ? 0 : -1}
                type="button"
            />
        </header>
    )
}
