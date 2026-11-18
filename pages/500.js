import Image from "next/image"
import Link from "next/link"
import PageHead from "@/components/layout/PageHead"

const helpfulLinks = [
    { title: "Real Estate Services", href: "/realestate", icon: "fa-building" },
    { title: "Coworking Spaces", href: "/coworking", icon: "fa-briefcase" },
    { title: "Contact Our Team", href: "/contact", icon: "fa-arrow-right" },
    { title: "About MK Groups", href: "/#about", icon: "fa-compass" },
]

export default function Custom500() {
    const retry = () => window.location.reload()

    return (
        <>
            <PageHead
                headTitle="Temporarily Unavailable | MK Groups"
                description="MK Groups is temporarily experiencing a service issue. Please try again shortly."
                noIndex
            />
            <main className="mk-404-page" aria-labelledby="error-title">
                <div className="mk-404-background" aria-hidden="true">
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
                        <span className="mk-404-visual-label">Spaces designed for what&apos;s next</span>
                        <span className="mk-404-visual-line" />
                    </div>

                    <div className="mk-404-main">
                        <p className="mk-404-brand">MK GROUPS</p>
                        <p className="mk-404-code">500</p>
                        <h1 id="error-title">Something Went Wrong</h1>
                        <p className="mk-404-description">
                            We&apos;re experiencing a temporary issue on our end. Our team is
                            working to restore the service as quickly as possible. Please try again in a few moments.
                        </p>

                        <div className="mk-404-actions">
                            <Link href="/" className="mk-404-button">
                                Return Home <i className="fas fa-arrow-right" aria-hidden="true" />
                            </Link>
                            <button
                                type="button"
                                className="mk-404-secondary mk-500-retry"
                                onClick={retry}
                                aria-label="Try again by reloading this page"
                            >
                                Try Again
                            </button>
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

                <p className="mk-404-footer">Building trust through every experience.</p>
            </main>
        </>
    )
}
