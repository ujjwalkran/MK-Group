import Link from "next/link"
import { useRouter } from "next/router"

const serviceLinks = [
    {
        icon: "fa-city",
        title: "Real Estate",
        href: "/realestate",
    },
    {
        icon: "fa-users",
        title: "Coworking Spaces",
        href: "/coworking",
    },
]

export default function LuxuryMenu() {
    const router = useRouter()
    const currentPath = router.asPath.split(/[?#]/)[0]

    const isCurrentPage = (href) => {
        if (href === "/") return currentPath === "/" && !router.asPath.includes("#")
        if (href === "/#about") return router.asPath.startsWith("/#about")
        return currentPath === href || currentPath.startsWith(`${href}/`)
    }

    return (
        <ul className="navigation mk-primary-nav">
            <li className={isCurrentPage("/") ? "active" : ""}>
                <Link href="/" aria-current={isCurrentPage("/") ? "page" : undefined}>Home</Link>
            </li>
            <li className={isCurrentPage("/#about") ? "active" : ""}>
                <Link href="/#about" aria-current={isCurrentPage("/#about") ? "page" : undefined}>About</Link>
            </li>
            <li className={`mk-services-menu${currentPath === "/realestate" || currentPath === "/coworking" ? " active" : ""}`}>
                <Link href="/realestate" aria-haspopup="true">
                    Services <i className="fas fa-chevron-down" aria-hidden="true" />
                </Link>
                <div className="mk-services-mega-menu">
                    {serviceLinks.map((service) => (
                        <Link className="mk-services-mega-item" href={service.href} key={service.title}>
                            <span className="mk-services-mega-icon" aria-hidden="true">
                                <i className={`fas ${service.icon}`} />
                            </span>
                            <strong>{service.title}</strong>
                            <i className="fas fa-arrow-right mk-services-mega-arrow" aria-hidden="true" />
                        </Link>
                    ))}
                </div>
            </li>
            <li className={isCurrentPage("/contact") ? "active" : ""}>
                <Link href="/contact" aria-current={isCurrentPage("/contact") ? "page" : undefined}>Contact</Link>
            </li>
        </ul>
    )
}
