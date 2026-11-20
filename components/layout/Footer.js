import Link from "next/link"
import Image from "next/image"

const services = [
    { title: "Real Estate & Construction", href: "/realestate" },
    { title: "Interior Design", href: "/realestate#services" },
    { title: "Coworking Spaces", href: "/coworking" },
    { title: "Contact our team", href: "/contact" },
]

export default function Footer() {
    return (
        <footer className="mk-footer-shell">
            <div className="footer-area mk-footer">
                <div className="container">
                    <div className="mk-footer-grid">
                        <div className="mk-footer-brand">
                            <Link href="/" className="mk-footer-logo" aria-label="MK Groups home — Right Choice. Right Investment.">
                                <Image
                                    src="/assets/img/logo/logo.png"
                                    alt="MK Groups"
                                    width={1615}
                                    height={2254}
                                    sizes="(max-width: 575px) 118px, 138px"
                                />
                                <span className="mk-header-tagline">Right Choice. Right Investment.</span>
                            </Link>
                            <p>
                                Premium real estate and flexible workspaces, thoughtfully brought together to help
                                businesses grow.
                            </p>
                            <nav className="mk-footer-social" aria-label="Social media">
                                <a href="#" aria-label="MK Group on Facebook"><i className="fab fa-facebook-f" /></a>
                                <a href="#" aria-label="MK Group on Instagram"><i className="fab fa-instagram" /></a>
                                <a href="#" aria-label="MK Group on LinkedIn"><i className="fab fa-linkedin-in" /></a>
                            </nav>
                        </div>

                        <nav className="mk-footer-column" aria-label="Quick links">
                            <h2>Quick links</h2>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/#about">About us</Link></li>
                                <li><Link href="/realestate">Real Estate</Link></li>
                                <li><Link href="/coworking">Coworking</Link></li>
                                <li><Link href="/project">Projects</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </nav>

                        <nav className="mk-footer-column" aria-label="Services">
                            <h2>Services</h2>
                            <ul>
                                {services.map((service) => (
                                    <li key={service.href}><Link href={service.href}>{service.title}</Link></li>
                                ))}
                            </ul>
                        </nav>

                        <div className="mk-footer-column mk-footer-contact">
                            <h2>Contact</h2>
                            <a href="tel:+918147903884">
                                <i className="fas fa-phone-alt" aria-hidden="true" />
                                +91 81479 03884
                            </a>
                            <a href="mailto:contact@mkgroup.com">
                                <i className="fas fa-envelope" aria-hidden="true" />
                                contact@mkgroup.com
                            </a>
                            <address>
                                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                                Ward No. 39, HBCS Layout, Chandra Layout, Bengaluru, Karnataka 560072
                            </address>
                        </div>
                    </div>

                    <div className="mk-footer-bottom">
                        <p>© {new Date().getFullYear()} MK Groups. All rights reserved.</p>
                        <div className="mk-footer-legal">
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
