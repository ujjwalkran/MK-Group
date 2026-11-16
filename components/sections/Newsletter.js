export default function Newsletter() {
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

                    <div className="inquiry-card">
                        <div className="inquiry-card-heading">
                            <h3>Tell us what you need</h3>
                            <p>Share a few details and we’ll take it from there.</p>
                        </div>

                        <form action="#" className="inquiry-form">
                            <div className="inquiry-form-grid">
                                <label className="inquiry-field">
                                    <i className="fas fa-user" aria-hidden="true" />
                                    <input
                                        type="text"
                                        name="name"
                                        autoComplete="name"
                                        placeholder=" "
                                        required
                                    />
                                    <span className="inquiry-field-label">Full Name</span>
                                </label>

                                <label className="inquiry-field">
                                    <i className="fas fa-phone" aria-hidden="true" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        autoComplete="tel"
                                        placeholder=" "
                                        required
                                    />
                                    <span className="inquiry-field-label">Phone Number</span>
                                </label>

                                <label className="inquiry-field inquiry-field-wide">
                                    <i className="fas fa-envelope" aria-hidden="true" />
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        placeholder=" "
                                        required
                                    />
                                    <span className="inquiry-field-label">Email Address</span>
                                </label>

                                <label className="inquiry-field inquiry-field-wide inquiry-field-message">
                                    <i className="fas fa-comment-alt" aria-hidden="true" />
                                    <textarea name="message" rows="4" placeholder=" " required />
                                    <span className="inquiry-field-label">Message</span>
                                </label>

                                <button className="inquiry-submit inquiry-field-wide" type="submit">
                                    Send Inquiry <i className="fas fa-arrow-right" aria-hidden="true" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
