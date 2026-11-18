import { useState } from "react"
import Link from "next/link"
import Layout from "@/components/layout/Layout"

const officeAddress = "Ward No. 39, HBCS Layout, Chandra Layout, Bengaluru, Karnataka 560072"
const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Ward%20No.%2039%2C%20HBCS%20Layout%2C%20Chandra%20Layout%2C%20Bengaluru%2C%20Karnataka%20560072"
const officeMapUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.272116917254!2d77.51733017507635!3d12.954431487359649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU3JzE2LjAiTiA3N8KwMzEnMTEuNyJF!5e0!3m2!1sen!2sin!4v1794836915427!5m2!1sen!2sin"

export default function Contact() {
    const [submissionMessage, setSubmissionMessage] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmissionMessage("This form is not connected yet. Please call or email our team to send your inquiry.")
    }

    return (
        <Layout headerStyle={6} heroHeader lightHeroHeader>
            <section className="mk-contact-hero">
                <div className="container">
                    <nav className="mk-contact-breadcrumb" aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <span aria-hidden="true">/</span>
                        <span aria-current="page">Contact</span>
                    </nav>

                    <div className="mk-contact-hero-grid">
                        <div className="mk-contact-intro wow fadeInUp">
                            <span className="mk-contact-eyebrow">
                                <span aria-hidden="true" />
                                Contact MK Group
                            </span>
                            <h1>Let’s find the right space for your next move.</h1>
                            <p className="mk-contact-lead">
                                Tell us what you’re looking for. Our Bengaluru team brings real estate and coworking
                                expertise together to help you take the next step with confidence.
                            </p>

                            <div className="mk-contact-details">
                                <a className="mk-contact-detail" href="tel:+918147903884">
                                    <span className="mk-contact-detail-icon" aria-hidden="true">
                                        <i className="fas fa-phone-alt" />
                                    </span>
                                    <span>
                                        <small>Call our team</small>
                                        <strong>+91 81479 03884</strong>
                                    </span>
                                </a>
                                <a className="mk-contact-detail" href="mailto:contact@mkgroup.com">
                                    <span className="mk-contact-detail-icon" aria-hidden="true">
                                        <i className="fas fa-envelope" />
                                    </span>
                                    <span>
                                        <small>Email us</small>
                                        <strong>contact@mkgroup.com</strong>
                                    </span>
                                </a>
                                <div className="mk-contact-detail">
                                    <span className="mk-contact-detail-icon" aria-hidden="true">
                                        <i className="fas fa-map-marker-alt" />
                                    </span>
                                    <span>
                                        <small>Visit our office</small>
                                        <strong>{officeAddress}</strong>
                                    </span>
                                </div>
                            </div>

                            <div className="mk-contact-hours">
                                <span className="mk-contact-hours-icon" aria-hidden="true">
                                    <i className="far fa-clock" />
                                </span>
                                <span>
                                    <small>Business hours</small>
                                    <strong>Monday–Saturday, 9:30 AM–6:00 PM IST</strong>
                                </span>
                            </div>

                            <div className="mk-contact-trust">
                                <span><i className="fas fa-check" aria-hidden="true" /> Free consultation</span>
                                <span><i className="fas fa-check" aria-hidden="true" /> Fast response</span>
                                <span><i className="fas fa-check" aria-hidden="true" /> Expert team</span>
                            </div>
                        </div>

                        <div className="mk-contact-form-card wow fadeInUp" data-wow-delay=".15s">
                            <div className="mk-contact-form-heading">
                                <span>Start a conversation</span>
                                <h2>How can we help?</h2>
                                <p>Share a few details and our team will be in touch.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="mk-contact-form">
                                <div className="mk-contact-form-grid">
                                    <div className="mk-contact-field">
                                        <label htmlFor="contact-name">Full Name</label>
                                        <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
                                    </div>
                                    <div className="mk-contact-field">
                                        <label htmlFor="contact-phone">Phone Number</label>
                                        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" required />
                                    </div>
                                    <div className="mk-contact-field">
                                        <label htmlFor="contact-email">Email Address</label>
                                        <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
                                    </div>
                                    <div className="mk-contact-field">
                                        <label htmlFor="contact-subject">Subject</label>
                                        <input id="contact-subject" name="subject" type="text" placeholder="What can we help with?" required />
                                    </div>
                                    <div className="mk-contact-field mk-contact-field-wide">
                                        <label htmlFor="contact-message">Message</label>
                                        <textarea id="contact-message" name="message" rows="4" placeholder="Tell us a little about what you need..." required />
                                    </div>
                                    <button className="mk-contact-submit mk-contact-field-wide" type="submit">
                                        Send inquiry <i className="fas fa-arrow-right" aria-hidden="true" />
                                    </button>
                                </div>
                                {submissionMessage && (
                                    <p className="mk-contact-form-message" role="status" aria-live="polite">
                                        {submissionMessage}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mk-location-section" id="location">
                <div className="container">
                    <div className="mk-location-heading">
                        <span className="mk-contact-eyebrow">Find us in Bengaluru</span>
                        <h2>Visit Our Office</h2>
                        <p>We’d be happy to meet, learn about your plans, and explore the right space together.</p>
                    </div>

                    <div className="mk-location-grid">
                        <div className="mk-location-card wow fadeInUp">
                            <span className="mk-location-kicker">MK Group · Bengaluru</span>
                            <h3>Our office</h3>
                            <div className="mk-location-detail">
                                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                                <address>{officeAddress}</address>
                            </div>
                            <a className="mk-location-detail" href="tel:+918147903884">
                                <i className="fas fa-phone-alt" aria-hidden="true" />
                                <span>+91 81479 03884</span>
                            </a>
                            <a className="mk-location-detail" href="mailto:contact@mkgroup.com">
                                <i className="fas fa-envelope" aria-hidden="true" />
                                <span>contact@mkgroup.com</span>
                            </a>
                            <div className="mk-location-hours">
                                <i className="far fa-clock" aria-hidden="true" />
                                <span><strong>Working hours</strong>Monday–Saturday, 9:30 AM–6:00 PM IST</span>
                            </div>
                            <div className="mk-location-actions">
                                <a className="mk-location-button" href={directionsUrl} target="_blank" rel="noopener noreferrer">
                                    Quick directions <i className="fas fa-external-link-alt" aria-hidden="true" />
                                </a>
                                <a className="mk-location-button mk-location-button-secondary" href="tel:+918147903884">
                                    Call us
                                </a>
                            </div>
                        </div>

                        <div className="mk-contact-map-card wow fadeInUp" data-wow-delay=".15s">
                            <iframe
                                src={officeMapUrl}
                                title="Map showing the MK Group office in Bengaluru"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
