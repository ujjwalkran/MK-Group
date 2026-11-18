import Link from "next/link"
import Layout from "@/components/layout/Layout"

const services = [
    {
        icon: "fa-city",
        title: "Residential & Commercial Property",
        description: "Expert assistance in buying and selling residential and commercial properties through transparent, hassle-free transactions.",
    },
    {
        icon: "fa-file-alt",
        title: "Legal Consultation",
        description: "Professional guidance for documentation, verification, registration, agreements, and property-related requirements.",
    },
    {
        icon: "fa-university",
        title: "Loan Processing Assistance",
        description: "End-to-end support for property financing, documentation, approvals, and coordination with financial institutions.",
    },
    {
        icon: "fa-pencil-ruler",
        title: "Civil & Structural Planning",
        description: "Technical planning and engineering solutions focused on safety, functionality, and long-term value.",
    },
    {
        icon: "fa-certificate",
        title: "Government Approvals",
        description: "Assistance in obtaining the permits and approvals required from local and government authorities.",
    },
    {
        icon: "fa-hard-hat",
        title: "Construction Services",
        description: "Complete construction management, from planning and execution through to project delivery.",
    },
    {
        icon: "fa-couch",
        title: "Interior Design",
        description: "Bespoke interior solutions that bring together aesthetics, comfort, function, and your vision.",
    },
]

const processSteps = [
    "Property Consultation",
    "Legal & Financial Support",
    "Planning & Approvals",
    "Construction Execution",
    "Interior Design & Finishing",
    "Project Handover",
]

const reasons = [
    {
        icon: "fa-layer-group",
        title: "End-to-End Solutions",
        description: "One trusted partner for every stage of your project.",
    },
    {
        icon: "fa-user-tie",
        title: "Experienced Professionals",
        description: "Expert guidance backed by practical industry knowledge.",
    },
    {
        icon: "fa-comments",
        title: "Transparent Process",
        description: "Clear communication and reliable project management.",
    },
    {
        icon: "fa-gem",
        title: "Quality-Focused Execution",
        description: "Attention to detail from the first concept to completion.",
    },
]

const projects = [
    {
        image: "/assets/img/banner/h4_banner_img.jpg",
        alt: "Contemporary residential architecture with carefully detailed facade",
        title: "Residential Projects",
        type: "Places to call home",
        className: "mk-project-card-tall",
    },
    {
        image: "/assets/img/banner/banner_img01_demo.jpg",
        alt: "Modern commercial building with a refined glass and stone exterior",
        title: "Commercial Spaces",
        type: "Built for business",
        className: "",
    },
    {
        image: "/assets/img/banner/home_interior.png",
        alt: "Warm contemporary interior with natural materials and refined finishes",
        title: "Luxury Interiors",
        type: "Made personal",
        className: "",
    },
    {
        image: "/assets/img/banner/banner_right_img01.jpg",
        alt: "Architectural detail inside a professionally designed meeting space",
        title: "Construction Excellence",
        type: "Crafted to last",
        className: "mk-project-card-wide",
    },
]

export default function Services() {
    return (
        <Layout headerStyle={6} headTitle="Real Estate, Construction & Interiors | MK Group" heroHeader>
            <div className="mk-services-page">
                <section className="mk-services-hero">
                    <img
                        className="mk-services-hero-image"
                        src="/assets/img/banner/banner_img01_demo.jpg"
                        alt="Elegant contemporary commercial architecture with glass and natural stone"
                    />
                    <div className="mk-services-hero-shade" aria-hidden="true" />
                    <div className="container">
                        <div className="mk-services-hero-content wow fadeInUp">
                            <span className="mk-services-eyebrow">
                                Real Estate <i aria-hidden="true" /> Construction <i aria-hidden="true" /> Interiors
                            </span>
                            <h1>From Property to Possession</h1>
                            <h2>We Manage Every Step.</h2>
                            <p>
                                Whether you’re purchasing property, planning construction, or designing your dream
                                space, MK Groups provides end-to-end solutions that simplify the journey. From expert
                                guidance and legal support to construction and interior execution, we help bring your
                                vision to life with confidence and clarity.
                            </p>
                            <div className="mk-services-hero-actions">
                                <Link className="mk-services-button" href="/contact">
                                    Schedule a consultation <i className="fas fa-arrow-right" aria-hidden="true" />
                                </Link>
                                <a className="mk-services-button mk-services-button-light" href="#services">
                                    Explore services
                                </a>
                            </div>
                            <ul className="mk-services-highlights" aria-label="Our core services">
                                <li><i className="fas fa-check" aria-hidden="true" /> Property advisory</li>
                                <li><i className="fas fa-check" aria-hidden="true" /> Legal assistance</li>
                                <li><i className="fas fa-check" aria-hidden="true" /> Construction management</li>
                                <li><i className="fas fa-check" aria-hidden="true" /> Interior design</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mk-services-offerings" id="services">
                    <div className="container">
                        <div className="mk-services-section-heading wow fadeInUp">
                            <span className="mk-services-kicker">Our services</span>
                            <h2>Comprehensive Real Estate Solutions</h2>
                            <p>
                                A complete range of professional services designed to support every stage of your
                                real estate, construction, and interior journey.
                            </p>
                        </div>

                        <div className="mk-services-grid">
                            {services.map((service, index) => (
                                <article className="mk-service-card wow fadeInUp" data-wow-delay={`${(index % 4) * 0.07}s`} key={service.title}>
                                    <div className="mk-service-card-top">
                                        <span className="mk-service-icon" aria-hidden="true">
                                            <i className={`fas ${service.icon}`} />
                                        </span>
                                        <span className="mk-service-number">0{index + 1}</span>
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <span className="mk-service-card-line" aria-hidden="true" />
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mk-services-process">
                    <div className="container">
                        <div className="mk-services-section-heading wow fadeInUp">
                            <span className="mk-services-kicker">A clear path forward</span>
                            <h2>A Seamless Journey</h2>
                            <p>One considered process, with expert guidance at every milestone.</p>
                        </div>
                        <ol className="mk-process-timeline">
                            {processSteps.map((step, index) => (
                                <li className="mk-process-step wow fadeInUp" data-wow-delay={`${index * 0.07}s`} key={step}>
                                    <span className="mk-process-number">{String(index + 1).padStart(2, "0")}</span>
                                    <h3>{step}</h3>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section className="mk-services-why">
                    <div className="container">
                        <div className="mk-services-section-heading wow fadeInUp">
                            <span className="mk-services-kicker">The MK Group difference</span>
                            <h2>Expertise. Transparency. Excellence.</h2>
                        </div>
                        <div className="mk-services-reasons">
                            {reasons.map((reason, index) => (
                                <article className="mk-reason-card wow fadeInUp" data-wow-delay={`${index * 0.08}s`} key={reason.title}>
                                    <span className="mk-service-icon" aria-hidden="true">
                                        <i className={`fas ${reason.icon}`} />
                                    </span>
                                    <h3>{reason.title}</h3>
                                    <p>{reason.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mk-services-showcase" id="projects">
                    <div className="container">
                        <div className="mk-services-showcase-heading wow fadeInUp">
                            <div>
                                <span className="mk-services-kicker">Spaces with purpose</span>
                                <h2>Project Showcase</h2>
                            </div>
                            <p>From the first sketch to the final finish, every detail shapes a space worth living in.</p>
                        </div>
                        <div className="mk-project-gallery">
                            {projects.map((project, index) => (
                                <figure className={`mk-project-card ${project.className} wow fadeInUp`} data-wow-delay={`${index * 0.08}s`} key={project.title}>
                                    <img src={project.image} alt={project.alt} loading="lazy" />
                                    <figcaption>
                                        <span>{project.type}</span>
                                        <h3>{project.title}</h3>
                                    </figcaption>
                                    <span className="mk-project-card-arrow" aria-hidden="true">
                                        <i className="fas fa-arrow-right" />
                                    </span>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mk-services-cta">
                    <div className="container">
                        <div className="mk-services-cta-card wow fadeInUp">
                            <span className="mk-services-kicker">Your vision, thoughtfully delivered</span>
                            <h2>Ready To Build Something Exceptional?</h2>
                            <p>
                                Let our experts guide you through every phase of your property, construction, and
                                interior journey with confidence and peace of mind.
                            </p>
                            <div className="mk-services-hero-actions">
                                <Link className="mk-services-button" href="/contact">
                                    Contact us <i className="fas fa-arrow-right" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
