import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/contact" },
]

export default function LuxuryMobileMenu({ onNavigate }) {
    const router = useRouter()
    const [servicesOpen, setServicesOpen] = useState(false)
    const currentPath = router.asPath.split(/[?#]/)[0]

    const isCurrentPage = (href) => {
        if (href === "/") return currentPath === "/" && !router.asPath.includes("#")
        if (href === "/#about") return router.asPath.startsWith("/#about")
        return currentPath === href || currentPath.startsWith(`${href}/`)
    }

    const handleNavigate = () => {
        setServicesOpen(false)
        onNavigate()
    }

    return (
        <nav aria-label="Mobile navigation">
            <ul className="mk-mobile-navigation">
                {navigationLinks.slice(0, 2).map(({ label, href }, index) => {
                    const active = isCurrentPage(href)
                    return (
                        <li
                            className={`mk-mobile-navigation-item${active ? " active" : ""}`}
                            data-menu-index={index}
                            key={href}
                        >
                            <Link href={href} onClick={handleNavigate} aria-current={active ? "page" : undefined}>
                                {label}
                                <i className="fas fa-arrow-right" aria-hidden="true" />
                            </Link>
                        </li>
                    )
                })}
                <li className={`mk-mobile-navigation-item mk-mobile-services-item${currentPath === "/realestate" || currentPath === "/coworking" ? " active" : ""}`}>
                    <button
                        aria-controls="mk-mobile-services"
                        aria-expanded={servicesOpen}
                        className="mk-mobile-services-toggle"
                        onClick={() => setServicesOpen((open) => !open)}
                        type="button"
                    >
                        Services
                        <i className={`fas fa-chevron-${servicesOpen ? "up" : "down"}`} aria-hidden="true" />
                    </button>
                    {servicesOpen && (
                        <ul className="mk-mobile-services-submenu" id="mk-mobile-services">
                            <li className={isCurrentPage("/realestate") ? "active" : ""}>
                                <Link
                                    href="/realestate"
                                    onClick={handleNavigate}
                                    aria-current={isCurrentPage("/realestate") ? "page" : undefined}
                                >
                                    <i className="fas fa-city" aria-hidden="true" />
                                    Real Estate
                                </Link>
                            </li>
                            <li className={isCurrentPage("/coworking") ? "active" : ""}>
                                <Link
                                    href="/coworking"
                                    onClick={handleNavigate}
                                    aria-current={isCurrentPage("/coworking") ? "page" : undefined}
                                >
                                    <i className="fas fa-users" aria-hidden="true" />
                                    Coworking Spaces
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className={`mk-mobile-navigation-item${isCurrentPage("/contact") ? " active" : ""}`} data-menu-index={3}>
                    <Link href="/contact" onClick={handleNavigate} aria-current={isCurrentPage("/contact") ? "page" : undefined}>
                        Contact
                        <i className="fas fa-arrow-right" aria-hidden="true" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
