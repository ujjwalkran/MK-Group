import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Layout from "@/components/layout/Layout"

const officeAddress = "Ward No. 39, HBCS Layout, Chandra Layout, Bengaluru, Karnataka 560072"
const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Ward%20No.%2039%2C%20HBCS%20Layout%2C%20Chandra%20Layout%2C%20Bengaluru%2C%20Karnataka%20560072"
const officeMapUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.272116917254!2d77.51733017507635!3d12.954431487359649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU3JzE2LjAiTiA3N8KwMzEnMTEuNyJF!5e0!3m2!1sen!2sin!4v1794836915427!5m2!1sen!2sin"

const initialContactValues = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
}

const contactFieldOrder = ["name", "phone", "email", "subject", "message"]

function validateContact(values) {
    const errors = {}
    if (!values.name.trim()) errors.name = "Please enter your name."
    if (!values.phone.trim()) errors.phone = "Please enter your phone number."
    else if (values.phone.replace(/\D/g, "").length < 7) errors.phone = "Enter a valid phone number."
    if (!values.email.trim()) errors.email = "Please enter your email address."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
        errors.email = "Enter a valid email address."
    }
    if (!values.subject.trim()) errors.subject = "Please enter a subject."
    if (!values.message.trim()) errors.message = "Please enter a message."
    return errors
}

function ContactSuccessIcon() {
    return (
        <svg className="inquiry-success-icon" viewBox="0 0 72 72" role="img" aria-label="Success">
            <circle className="inquiry-success-circle" cx="36" cy="36" r="32" />
            <path className="inquiry-success-check" d="m22 37 9 9 20-21" />
        </svg>
    )
}

export default function Contact() {
    const [values, setValues] = useState(initialContactValues)
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState("idle")
    const [toastVisible, setToastVisible] = useState(false)
    const [toastHiding, setToastHiding] = useState(false)
    const formRef = useRef(null)
    const successRef = useRef(null)
    const errorRef = useRef(null)
    const resetFocusRef = useRef(false)

    useEffect(() => {
        if (status === "success") {
            successRef.current?.focus({ preventScroll: true })
            setToastVisible(true)
        } else if (status === "error") {
            errorRef.current?.focus({ preventScroll: true })
        } else if (status === "idle" && resetFocusRef.current) {
            resetFocusRef.current = false
            formRef.current?.querySelector('[name="name"]')?.focus({ preventScroll: true })
        }
    }, [status])

    useEffect(() => {
        if (!toastVisible) return undefined
        const hideTimer = window.setTimeout(() => setToastHiding(true), 3000)
        const removeTimer = window.setTimeout(() => {
            setToastVisible(false)
            setToastHiding(false)
        }, 3400)
        return () => {
            window.clearTimeout(hideTimer)
            window.clearTimeout(removeTimer)
        }
    }, [toastVisible])

    const handleFieldChange = (event) => {
        const { name, value } = event.target
        setValues((current) => ({ ...current, [name]: value }))
        setErrors((current) => {
            if (!current[name]) return current
            const next = { ...current }
            delete next[name]
            return next
        })
        if (status === "error") setStatus("idle")
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (status === "submitting") return
        const nextErrors = validateContact(values)
        setErrors(nextErrors)
        if (Object.keys(nextErrors).length > 0) {
            const firstInvalidField = contactFieldOrder.find((field) => nextErrors[field])
            formRef.current?.querySelector(`[name="${firstInvalidField}"]`)?.focus()
            return
        }

        setStatus("submitting")
        try {
            const response = await fetch("/api/inquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: values.name.trim(),
                    phone: values.phone.trim(),
                    email: values.email.trim(),
                    subject: values.subject.trim(),
                    message: values.message.trim(),
                }),
            })
            const result = await response.json()
            if (!response.ok) {
                throw new Error(result.error || "Message submission failed.")
            }
            setStatus("success")
        } catch (error) {
            console.error("Contact form submission failed:", error)
            setStatus("error")
        }
    }

    const handleReset = () => {
        resetFocusRef.current = true
        setValues(initialContactValues)
        setErrors({})
        setToastVisible(false)
        setToastHiding(false)
        setStatus("idle")
    }

    return (
        <Layout
            headerStyle={6}
            headTitle="Contact MK Groups | Bengaluru Real Estate & Coworking"
            seoDescription="Contact MK Groups in Bengaluru for real estate, construction, interior design, commercial property, and coworking enquiries. Call +91 81479 03884."
            canonicalPath="/contact"
            ogTitle="Contact MK Groups in Bengaluru"
            ogDescription="Speak with MK Groups about real estate, construction, interiors, commercial property, and coworking spaces in Bengaluru."
            ogImage="/assets/img/banner/commercial-real-estate-services-bengaluru.jpg"
            ogImageAlt="MK Groups commercial property and real estate services in Bengaluru"
            heroHeader
            lightHeroHeader
        >
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
                                Contact MK Groups
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

                        <div
                            className={`mk-contact-form-card animated fadeInUp${status === "success" ? " inquiry-card-success" : ""}`}
                        >
                            {status === "success" ? (
                                <div
                                    className="mk-contact-form-success inquiry-success-state"
                                    ref={successRef}
                                    tabIndex={-1}
                                    role="status"
                                    aria-live="polite"
                                >
                                    <ContactSuccessIcon />
                                    <p className="inquiry-success-eyebrow">Thank you</p>
                                    <h2>Message Sent Successfully</h2>
                                    <p className="inquiry-success-description">
                                        Thank you for reaching out to MK Groups. Our team has received your message
                                        and will get in touch with you shortly to discuss your requirements.
                                    </p>
                                    <div className="inquiry-response-time">
                                        <span>Expected Response Time</span>
                                        <strong>Within 24 Hours</strong>
                                    </div>
                                    <div className="inquiry-success-actions">
                                        <Link href="/" className="mk-contact-success-home">Return Home</Link>
                                        <button type="button" className="inquiry-again" onClick={handleReset}>
                                            Send Another Message
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="mk-contact-form-heading">
                                        <span>Start a conversation</span>
                                        <h2>How can we help?</h2>
                                        <p>Share a few details and our team will be in touch.</p>
                                    </div>

                                    <form
                                        ref={formRef}
                                        id="mk-contact-form"
                                        onSubmit={handleSubmit}
                                        className="mk-contact-form"
                                        noValidate
                                        aria-busy={status === "submitting"}
                                    >
                                        {status === "error" && (
                                            <div className="mk-contact-submit-error" role="alert" aria-live="assertive">
                                                <div>
                                                    <h3 ref={errorRef} tabIndex={-1}>Unable to Send Message</h3>
                                                    <p>
                                                        We couldn&apos;t submit your message at the moment. Please try again
                                                        in a few moments.
                                                    </p>
                                                </div>
                                                <button className="mk-contact-retry" type="submit">
                                                    Retry
                                                </button>
                                            </div>
                                        )}

                                        <div className="mk-contact-form-grid">
                                            {[
                                                { name: "name", label: "Full Name", type: "text", autoComplete: "name", placeholder: "Your name", maxLength: 100 },
                                                { name: "phone", label: "Phone Number", type: "tel", autoComplete: "tel", placeholder: "+91", maxLength: 30 },
                                                { name: "email", label: "Email Address", type: "email", autoComplete: "email", placeholder: "you@company.com", maxLength: 254 },
                                                { name: "subject", label: "Subject", type: "text", autoComplete: "off", placeholder: "What can we help with?", maxLength: 120 },
                                            ].map((field) => (
                                                <div className={`mk-contact-field${errors[field.name] ? " mk-contact-field-invalid" : ""}`} key={field.name}>
                                                    <label htmlFor={`contact-${field.name}`}>{field.label}</label>
                                                    <input
                                                        id={`contact-${field.name}`}
                                                        name={field.name}
                                                        type={field.type}
                                                        autoComplete={field.autoComplete}
                                                        placeholder={field.placeholder}
                                                        maxLength={field.maxLength}
                                                        value={values[field.name]}
                                                        onChange={handleFieldChange}
                                                        aria-invalid={Boolean(errors[field.name])}
                                                        aria-describedby={errors[field.name] ? `contact-${field.name}-error` : undefined}
                                                        disabled={status === "submitting"}
                                                    />
                                                    {errors[field.name] && (
                                                        <span className="mk-contact-field-error" id={`contact-${field.name}-error`}>
                                                            {errors[field.name]}
                                                        </span>
                                                    )}
                                                </div>
                                            ))}

                                            <div className={`mk-contact-field mk-contact-field-wide${errors.message ? " mk-contact-field-invalid" : ""}`}>
                                                <label htmlFor="contact-message">Message</label>
                                                <textarea
                                                    id="contact-message"
                                                    name="message"
                                                    rows="4"
                                                    maxLength={5000}
                                                    placeholder="Tell us a little about what you need..."
                                                    value={values.message}
                                                    onChange={handleFieldChange}
                                                    aria-invalid={Boolean(errors.message)}
                                                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                                                    disabled={status === "submitting"}
                                                />
                                                {errors.message && (
                                                    <span className="mk-contact-field-error" id="contact-message-error">
                                                        {errors.message}
                                                    </span>
                                                )}
                                            </div>

                                            <button
                                                className="mk-contact-submit mk-contact-field-wide"
                                                type="submit"
                                                disabled={status === "submitting"}
                                                aria-live="polite"
                                            >
                                                {status === "submitting" ? (
                                                    <>
                                                        <span className="inquiry-spinner" aria-hidden="true" />
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message <i className="fas fa-arrow-right" aria-hidden="true" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {toastVisible && (
                <div
                    className={`inquiry-success-toast${toastHiding ? " is-hiding" : ""}`}
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    <span aria-hidden="true">✓</span>
                    Message sent successfully
                </div>
            )}

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
