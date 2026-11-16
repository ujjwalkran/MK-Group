import Link from "next/link"

export default function About() {
    const highlights = [
        {
            icon: "fa-building",
            title: "Commercial Real Estate",
            description: "Strategic property solutions and premium locations designed for business success.",
        },
        {
            icon: "fa-users",
            title: "Coworking Spaces",
            description: "Flexible, fully equipped workspaces built for collaboration and growth.",
        },
        {
            icon: "fa-chart-line",
            title: "Investment Advisory",
            description: "Expert guidance to help clients make confident property decisions.",
        },
        {
            icon: "fa-handshake",
            title: "End-to-End Support",
            description: "Comprehensive assistance across leasing, buying, management, and consulting.",
        },
    ]

    return (
        <section id="about" className="about-area about-modern-area section-pt-135 section-pb-140">
            <div className="container">
                <div className="about-modern-layout">
                    <div className="about-modern-visual wow fadeInUp">
                        <figure className="about-modern-image">
                            <img
                                src="/assets/img/banner/coworking_space.png"
                                alt="A bright, contemporary coworking space with a team collaborating"
                            />
                        </figure>
                    </div>

                    <div className="about-modern-content">
                        <div className="wow fadeInUp">
                            <span className="about-modern-eyebrow">Who we are</span>
                            <h2 className="about-modern-title">Building Spaces. Creating Opportunities.</h2>
                            <p className="about-modern-description">
                                At MK Groups, we combine premium real estate expertise with modern coworking solutions to create environments where businesses thrive. From commercial properties and office spaces to fully managed coworking environments, we help entrepreneurs, startups, and organizations discover spaces that support growth, productivity, and long-term success.
                            </p>
                        </div>

                        <div className="about-modern-grid">
                            {highlights.map((highlight, index) => (
                                <article
                                    className="about-modern-card wow fadeInUp"
                                    data-wow-delay={`${index * 0.1}s`}
                                    key={highlight.title}
                                >
                                    <span className="about-modern-icon" aria-hidden="true">
                                        <i className={`fas ${highlight.icon}`} />
                                    </span>
                                    <h3>{highlight.title}</h3>
                                    <p>{highlight.description}</p>
                                </article>
                            ))}
                        </div>

                        <Link className="about-modern-link" href="/overview">
                            More about MK Groups <i className="fas fa-arrow-right" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
