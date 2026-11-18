import Image from "next/image"
import Link from "next/link"
import PageHead from "@/components/layout/PageHead"

const helpfulLinks = [
    { title: "Real Estate Services", href: "/realestate", icon: "fa-building" },
    { title: "Coworking Spaces", href: "/coworking", icon: "fa-briefcase" },
    { title: "About MK Groups", href: "/#about", icon: "fa-compass" },
    { title: "Contact Us", href: "/contact", icon: "fa-arrow-right" },
]

export default function Custom404() {
    return (
        <>
            <PageHead
                headTitle="Page Not Found | MK Groups"
                description="The requested MK Groups page could not be found."
                canonicalPath="/404"
                noIndex
            />
            <main className="mk-404-page" aria-labelledby="error-title">
                <div className="mk-404-background" aria-hidden="true">
                    <Image
                        src="/assets/img/banner/commercial-real-estate-services-bengaluru.jpg"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                    />
                    <span className="mk-404-orb mk-404-orb-one" />
                    <span className="mk-404-orb mk-404-orb-two" />
                </div>

                <div className="mk-404-card">
                    <div className="mk-404-visual" aria-hidden="true">
                        <Image
                            src="/assets/img/banner/commercial-real-estate-services-bengaluru.jpg"
                            alt=""
                            fill
                            priority
                            sizes="(max-width: 760px) 100vw, 40vw"
                        />
                        <div className="mk-404-visual-shade" />
                        <span className="mk-404-visual-label">Spaces for living and working</span>
                        <span className="mk-404-visual-line" />
                    </div>

                    <div className="mk-404-main">
                        <p className="mk-404-brand">MK GROUPS</p>
                        <p className="mk-404-code">404</p>
                        <h1 id="error-title">Page Not Found</h1>
                        <p className="mk-404-description">
                            The page you are looking for may have been moved, renamed, or no longer exists.
                            Let&apos;s help you find your way back.
                        </p>

                        <div className="mk-404-actions">
                            <Link href="/" className="mk-404-button">
                                Return Home <i className="fas fa-arrow-right" aria-hidden="true" />
                            </Link>
                            <Link href="/contact" className="mk-404-secondary">
                                Contact Us
                            </Link>
                        </div>

                        <nav className="mk-404-links" aria-label="Helpful links">
                            {helpfulLinks.map((item) => (
                                <Link className="mk-404-link-card" href={item.href} key={item.title}>
                                    <span>{item.title}</span>
                                    <i className={`fas ${item.icon}`} aria-hidden="true" />
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                <p className="mk-404-footer">
                    Building spaces and creating opportunities across every journey.
                </p>
            </main>
        </>
    )
}
