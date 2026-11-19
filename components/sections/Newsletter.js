import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const initialValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
}

const fieldLabels = {
    name: "Full Name",
    phone: "Phone Number",
    email: "Email Address",
    message: "Message",
}

function validate(values) {
    const errors = {}
    if (!values.name.trim()) errors.name = "Please enter your name."
    if (!values.phone.trim()) errors.phone = "Please enter your phone number."
    else if (values.phone.replace(/\D/g, "").length < 7) errors.phone = "Enter a valid phone number."
    if (!values.email.trim()) errors.email = "Please enter your email address."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
        errors.email = "Enter a valid email address."
    }
    if (!values.message.trim()) errors.message = "Please enter a message."
    return errors
}

function SuccessIcon() {
    return (
        <svg className="inquiry-success-icon" viewBox="0 0 72 72" role="img" aria-label="Success">
            <circle className="inquiry-success-circle" cx="36" cy="36" r="32" />
            <path className="inquiry-success-check" d="m22 37 9 9 20-21" />
        </svg>
    )
}

export default function Newsletter() {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState("idle")
    const [requestError, setRequestError] = useState("")
    const [toastVisible, setToastVisible] = useState(false)
    const [toastHiding, setToastHiding] = useState(false)
    const formRef = useRef(null)
    const successRef = useRef(null)
    const resetFocusRef = useRef(false)

    useEffect(() => {
        if (status === "success") {
            successRef.current?.focus({ preventScroll: true })
            setToastVisible(true)
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
        setRequestError("")
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (status === "submitting") return
        const nextErrors = validate(values)
        setErrors(nextErrors)
        setRequestError("")

        if (Object.keys(nextErrors).length > 0) {
            const firstInvalidField = Object.keys(fieldLabels).find((field) => nextErrors[field])
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
                    message: values.message.trim(),
                }),
            })
            const result = await response.json()
            if (!response.ok) {
                throw new Error(result.error || "Inquiry submission failed.")
            }
            setStatus("success")
        } catch (error) {
            console.error("Quick inquiry submission failed:", error)
            setStatus("idle")
            setRequestError("We couldn't submit your inquiry at the moment. Please try again.")
        }
    }

    const handleReset = () => {
        resetFocusRef.current = true
        setValues(initialValues)
        setErrors({})
        setRequestError("")
        setToastVisible(false)
        setToastHiding(false)
        setStatus("idle")
    }

    return (
        <section className="newsletter-area newsletter-inquiry">
            <div className="container">
                <div className="inquiry-layout">
                    <div className="inquiry-copy">
                        <span className="inquiry-badge">
                            <span className="inquiry-badge-dot" aria-hidden="true" />
                            Quick Inquiry
                        </span>
                        <h2>Let’s find the right space for your next chapter.</h2>
                        <p>
                            Whether you’re looking for a premium property or a flexible place to work, our team is
                            here to help you make the right move.
                        </p>

                        <div className="inquiry-trust-list" role="list" aria-label="Why contact MK Groups">
                            <div className="inquiry-trust-item" role="listitem">
                                <span aria-hidden="true"><i className="fas fa-check" /></span>
                                Free Consultation
                            </div>
                            <div className="inquiry-trust-item" role="listitem">
                                <span aria-hidden="true"><i className="fas fa-check" /></span>
                                Fast Response
                            </div>
                            <div className="inquiry-trust-item" role="listitem">
                                <span aria-hidden="true"><i className="fas fa-check" /></span>
                                Expert Team
                            </div>
                        </div>
                    </div>

                    <div className={`inquiry-card${status === "success" ? " inquiry-card-success" : ""}`}>
                        {status === "success" ? (
                            <div className="inquiry-success-state" ref={successRef} tabIndex={-1} aria-live="polite">
                                <SuccessIcon />
                                <p className="inquiry-success-eyebrow">Thank you</p>
                                <h3>Inquiry Submitted Successfully</h3>
                                <p className="inquiry-success-description">
                                    Thank you for contacting MK Groups. Our team has received your inquiry and will
                                    get in touch with you shortly to discuss your requirements.
                                </p>
                                <div className="inquiry-response-time">
                                    <span>Expected Response Time</span>
                                    <strong>Within 24 Hours</strong>
                                </div>
                                <div className="inquiry-success-actions">
                                    <Link href="/" className="inquiry-submit inquiry-success-home">Back to Home</Link>
                                    <button type="button" className="inquiry-again" onClick={handleReset}>
                                        Submit Another Inquiry
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="inquiry-card-heading">
                                    <h3>Tell us what you need</h3>
                                    <p>Share a few details and we’ll take it from there.</p>
                                </div>

                                <form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className="inquiry-form"
                                    noValidate
                                    aria-busy={status === "submitting"}
                                >
                                    <div className="inquiry-form-grid">
                                        {["name", "phone", "email"].map((field) => {
                                            const inputType = field === "name" ? "text" : field === "phone" ? "tel" : "email"
                                            const autoComplete = field === "name" ? "name" : field === "phone" ? "tel" : "email"
                                            return (
                                                <label
                                                    className={`inquiry-field${field === "email" ? " inquiry-field-wide" : ""}${errors[field] ? " inquiry-field-invalid" : ""}`}
                                                    key={field}
                                                >
                                                    <i
                                                        className={`fas ${field === "name" ? "fa-user" : field === "phone" ? "fa-phone" : "fa-envelope"}`}
                                                        aria-hidden="true"
                                                    />
                                                    <input
                                                        id={`inquiry-${field}`}
                                                        type={inputType}
                                                        name={field}
                                                        autoComplete={autoComplete}
                                                        maxLength={field === "name" ? 100 : field === "phone" ? 30 : 254}
                                                        placeholder=" "
                                                        value={values[field]}
                                                        onChange={handleFieldChange}
                                                        aria-labelledby={`inquiry-${field}-label`}
                                                        aria-invalid={Boolean(errors[field])}
                                                        aria-describedby={errors[field] ? `inquiry-${field}-error` : undefined}
                                                        disabled={status === "submitting"}
                                                    />
                                                    <span className="inquiry-field-label" id={`inquiry-${field}-label`}>
                                                        {fieldLabels[field]}
                                                    </span>
                                                    {errors[field] && (
                                                        <span className="inquiry-field-error" id={`inquiry-${field}-error`}>
                                                            {errors[field]}
                                                        </span>
                                                    )}
                                                </label>
                                            )
                                        })}

                                        <label className={`inquiry-field inquiry-field-wide inquiry-field-message${errors.message ? " inquiry-field-invalid" : ""}`}>
                                            <i className="fas fa-comment-alt" aria-hidden="true" />
                                            <textarea
                                                id="inquiry-message"
                                                name="message"
                                                rows="4"
                                                maxLength={5000}
                                                placeholder=" "
                                                value={values.message}
                                                onChange={handleFieldChange}
                                                aria-labelledby="inquiry-message-label"
                                                aria-invalid={Boolean(errors.message)}
                                                aria-describedby={errors.message ? "inquiry-message-error" : undefined}
                                                disabled={status === "submitting"}
                                            />
                                            <span className="inquiry-field-label" id="inquiry-message-label">
                                                {fieldLabels.message}
                                            </span>
                                            {errors.message && (
                                                <span className="inquiry-field-error" id="inquiry-message-error">
                                                    {errors.message}
                                                </span>
                                            )}
                                        </label>

                                        {requestError && (
                                            <p className="inquiry-request-error inquiry-field-wide" role="alert">
                                                {requestError}
                                            </p>
                                        )}

                                        <button
                                            className="inquiry-submit inquiry-field-wide"
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
                                                    Send Inquiry <i className="fas fa-arrow-right" aria-hidden="true" />
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
            {toastVisible && (
                <div
                    className={`inquiry-success-toast${toastHiding ? " is-hiding" : ""}`}
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    <span aria-hidden="true">✓</span>
                    Inquiry submitted successfully
                </div>
            )}
        </section>
    )
}
