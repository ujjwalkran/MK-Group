import Link from "next/link"
import Image from "next/image"
import Layout from "@/components/layout/Layout"

const highlights = [
    "Flexible workspaces",
    "Quiet study areas",
    "Modern amenities",
    "Professional environment",
]

const features = [
    {
        icon: "fa-chair",
        title: "Flexible Workspaces",
        description: "Choose from hot desks, dedicated desks, and private workstations.",
    },
    {
        icon: "fa-book-open",
        title: "Quiet Study Zones",
        description: "Distraction-free spaces for reading, studying, and focused work.",
    },
    {
        icon: "fa-comments",
        title: "Collaboration Spaces",
        description: "Modern meeting and discussion areas designed for teams and networking.",
    },
    {
        icon: "fa-wifi",
        title: "Modern Amenities",
        description: "High-speed internet, comfortable seating, power access, and business essentials.",
    },
]

const audiences = [
    {
        number: "01",
        icon: "fa-lightbulb",
        title: "Entrepreneurs & Startups",
        description: "Build and grow your business in a professional environment.",
    },
    {
        number: "02",
        icon: "fa-laptop-house",
        title: "Remote Professionals",
        description: "Work productively with all the amenities you need.",
    },
    {
        number: "03",
        icon: "fa-book-reader",
        title: "Students & Researchers",
        description: "A peaceful atmosphere designed for deep focus and learning.",
    },
    {
        number: "04",
        icon: "fa-users",
        title: "Creative Teams",
        description: "Collaborate, innovate, and bring ideas to life.",
    },
]

const spaces = [
    {
        image: "/assets/img/banner/premium-coworking-space-bengaluru.png",
        alt: "Coworking collaboration lounge in Bengaluru with a shared table and city views",
        title: "Collaboration Lounge",
        type: "Connect & create",
        className: "mk-space-card-large",
    },
    {
        image: "/assets/img/banner/premium-coworking-space-bengaluru.png",
        alt: "Team collaborating in a shared workspace in Bengaluru",
        title: "Hot Desk Zone",
        type: "Find your flow",
        className: "",
    },
    {
        image: "/assets/img/banner/mk-groups-interior-design-bengaluru.png",
        alt: "Quiet study space in Bengaluru with a communal table and natural light",
        title: "Quiet Study Area",
        type: "Focus & learn",
        className: "",
    },
    {
        image: "/assets/img/banner/mk-groups-interior-design-bengaluru.png",
        alt: "Professional meeting workspace in Bengaluru with warm natural materials",
        title: "Meeting Space",
        type: "Bring people together",
        className: "mk-space-card-wide",
    },
]

const benefits = [
    { icon: "fa-wifi", label: "High-speed internet" },
    { icon: "fa-briefcase", label: "Professional environment" },
    { icon: "fa-network-wired", label: "Networking opportunities" },
    { icon: "fa-users", label: "Meeting areas" },
    { icon: "fa-calendar-alt", label: "Flexible plans" },
    { icon: "fa-seedling", label: "Community access" },
]

export default function Coworking() {
    return (
        <Layout
            headerStyle={6}
            headTitle="Coworking & Study Spaces in Bengaluru | MK Groups"
            seoDescription="Find flexible coworking spaces, shared workspaces, and premium study areas in Bengaluru for professionals, startups, entrepreneurs, and students."
            canonicalPath="/coworking"
            ogTitle="Premium Coworking & Study Spaces in Bengaluru"
            ogDescription="Explore flexible offices, shared workspaces, and quiet study spaces designed for focus and collaboration."
            ogImage="/assets/img/banner/premium-coworking-space-bengaluru.png"
            ogImageAlt="Bright coworking lounge and collaborative workspace in Bengaluru"
            heroHeader
            lightHeroHeader
        >
            <div className="mk-coworking">
                <section className="mk-coworking-hero">
                    <div className="container">
                        <div className="mk-coworking-hero-grid">
                            <div className="mk-coworking-hero-copy wow fadeInUp">
                                <span className="mk-coworking-eyebrow">
                                    <span aria-hidden="true" />
                                    Work. Study. Connect. Grow.
                                </span>
                                <h1>Coworking Spaces in <em>Bengaluru</em></h1>
                                <p>
                                    Find a coworking space in Bengaluru with flexible shared workspace, quiet study
                                    areas, and professional amenities for teams, entrepreneurs, remote professionals,
                                    and students.
                                </p>
                                <div className="mk-coworking-hero-actions">
                                    <a className="mk-coworking-button" href="#membership">
                                        Explore plans <i className="fas fa-arrow-right" aria-hidden="true" />
                                    </a>
                                    <Link className="mk-coworking-button mk-coworking-button-quiet" href="/contact#location">
                                        Schedule a visit
                                    </Link>
                                </div>
                                <ul className="mk-coworking-highlights" aria-label="Workspace highlights">
                                    {highlights.map((highlight) => (
                                        <li key={highlight}>
                                            <i className="fas fa-check" aria-hidden="true" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mk-coworking-hero-visual wow fadeInUp" data-wow-delay=".15s">
                                <Image
                                    src="/assets/img/banner/premium-coworking-space-bengaluru.png"
                                    alt="Premium coworking lounge in Bengaluru with a sunlit shared table and collaborative seating"
                                    width={2752}
                                    height={1536}
                                    sizes="(max-width: 767px) 100vw, 50vw"
                                    priority
                                />
                                <div className="mk-coworking-visual-caption">
                                    <span className="mk-coworking-visual-mark" aria-hidden="true">
                                        <i className="fas fa-location-arrow" />
                                    </span>
                                    <span>
                                        <small>A better place to begin</small>
                                        <strong>Made for your next chapter</strong>
                                    </span>
                                </div>
                                <span className="mk-coworking-visual-index" aria-hidden="true">01 / 04</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mk-coworking-benefits-section" id="why-us">
                    <div className="container">
                        <div className="mk-coworking-section-heading wow fadeInUp">
                            <span className="mk-coworking-eyebrow">Thoughtfully considered</span>
                            <h2>Designed Around How You Work</h2>
                            <p>
                                Whether you’re building a business, preparing for exams, working remotely, or
                                meeting clients, find the flexibility, comfort, and focus to do your best work.
                            </p>
                        </div>

                        <div className="mk-coworking-feature-grid">
                            {features.map((feature, index) => (
                                <article className="mk-coworking-feature-card wow fadeInUp" data-wow-delay={`${index * 0.08}s`} key={feature.title}>
                                    <span className="mk-coworking-icon" aria-hidden="true">
                                        <i className={`fas ${feature.icon}`} />
                                    </span>
                                    <span className="mk-coworking-card-number">0{index + 1}</span>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                    <span className="mk-coworking-card-rule" aria-hidden="true" />
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mk-coworking-audience-section">
                    <div className="container">
                        <div className="mk-coworking-audience-layout">
                            <div className="mk-coworking-audience-intro wow fadeInUp">
                                <span className="mk-coworking-eyebrow">Room to do your thing</span>
                                <h2>Perfect For Every Ambition</h2>
                                <p>
                                    Different goals need different kinds of space. Find an environment that fits
                                    the way you think, work, and grow.
                                </p>
                                <Link className="mk-coworking-text-link" href="/contact">
                                    Find your workspace <i className="fas fa-arrow-right" aria-hidden="true" />
                                </Link>
                            </div>
                            <div className="mk-coworking-audience-grid">
                                {audiences.map((audience, index) => (
                                    <article className="mk-coworking-audience-card wow fadeInUp" data-wow-delay={`${index * 0.08}s`} key={audience.title}>
                                        <span className="mk-coworking-audience-top">
                                            <span className="mk-coworking-icon" aria-hidden="true">
                                                <i className={`fas ${audience.icon}`} />
                                            </span>
                                            <span className="mk-coworking-card-number">{audience.number}</span>
                                        </span>
                                        <h3>{audience.title}</h3>
                                        <p>{audience.description}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mk-coworking-spaces-section" id="spaces">
                    <div className="container">
                        <div className="mk-coworking-section-heading mk-coworking-heading-row wow fadeInUp">
                            <div>
                                <span className="mk-coworking-eyebrow">A space for every moment</span>
                                <h2>Experience the Space</h2>
                            </div>
                            <p>Move from heads-down focus to open conversation, all in a considered setting.</p>
                        </div>
                        <div className="mk-coworking-gallery">
                            {spaces.map((space, index) => (
                                <figure className={`mk-space-card ${space.className} wow fadeInUp`} data-wow-delay={`${index * 0.08}s`} key={space.title}>
                                    <Image
                                        src={space.image}
                                        alt={space.alt}
                                        width={2752}
                                        height={1536}
                                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                                    />
                                    <figcaption>
                                        <span>{space.type}</span>
                                        <h3>{space.title}</h3>
                                    </figcaption>
                                    <span className="mk-space-card-arrow" aria-hidden="true">
                                        <i className="fas fa-external-link-alt" />
                                    </span>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mk-coworking-membership-section" id="membership">
                    <div className="container">
                        <div className="mk-coworking-section-heading wow fadeInUp">
                            <span className="mk-coworking-eyebrow">Thoughtful by nature</span>
                            <h2>Everything You Need Under One Roof</h2>
                            <p>Considered essentials and the little details that make a workday feel effortless.</p>
                        </div>
                        <div className="mk-coworking-membership-grid">
                            {benefits.map((benefit, index) => (
                                <div className="mk-coworking-membership-item wow fadeInUp" data-wow-delay={`${index * 0.06}s`} key={benefit.label}>
                                    <span className="mk-coworking-icon" aria-hidden="true">
                                        <i className={`fas ${benefit.icon}`} />
                                    </span>
                                    <span>{benefit.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mk-coworking-cta-section">
                    <div className="container">
                        <div className="mk-coworking-cta wow fadeInUp">
                            <span className="mk-coworking-eyebrow">Your next chapter starts here</span>
                            <h2>Ready To Elevate Your Workday?</h2>
                            <p>
                                Discover a workspace designed to support your goals, inspire productivity, and
                                create meaningful connections.
                            </p>
                            <div className="mk-coworking-hero-actions">
                                <Link className="mk-coworking-button" href="/contact#location">
                                    Book a tour <i className="fas fa-arrow-right" aria-hidden="true" />
                                </Link>
                                <Link className="mk-coworking-button mk-coworking-button-quiet" href="/contact">
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
