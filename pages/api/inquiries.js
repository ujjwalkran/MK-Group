const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "10kb",
        },
    },
}

function escapeHtml(value) {
    return value.replace(/[&<>"']/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
    })[character])
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST")
        return res.status(405).json({ error: "Method not allowed." })
    }

    const body = req.body && typeof req.body === "object" && !Array.isArray(req.body)
        ? req.body
        : {}
    const name = typeof body.name === "string" ? body.name.trim() : ""
    const phone = typeof body.phone === "string" ? body.phone.trim() : ""
    const email = typeof body.email === "string" ? body.email.trim() : ""
    const subject = typeof body.subject === "string" ? body.subject.trim() : ""
    const message = typeof body.message === "string" ? body.message.trim() : ""

    const errors = {}
    if (!name || name.length > 100) errors.name = "Enter a name up to 100 characters."
    if (!phone || phone.length > 30 || phone.replace(/\D/g, "").length < 7) {
        errors.phone = "Enter a valid phone number."
    }
    if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
        errors.email = "Enter a valid email address."
    }
    if ("subject" in body && (!subject || subject.length > 120 || /[\r\n]/.test(subject))) {
        errors.subject = "Enter a subject up to 120 characters."
    }
    if (!message || message.length > 5000) errors.message = "Enter a message up to 5000 characters."
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ error: "Please check the inquiry details.", fields: errors })
    }

    const apiKey = process.env.RESEND_API_KEY
    const recipient = process.env.INQUIRY_TO_EMAIL
    const sender = process.env.INQUIRY_FROM_EMAIL
    if (!apiKey || !recipient || !sender) {
        console.error("Inquiry email service is not configured. Set RESEND_API_KEY, INQUIRY_TO_EMAIL, and INQUIRY_FROM_EMAIL.")
        return res.status(503).json({ error: "Inquiry service is temporarily unavailable." })
    }

    const safeName = escapeHtml(name)
    const safePhone = escapeHtml(phone)
    const safeEmail = escapeHtml(email)
    const safeSubject = escapeHtml(subject)
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>")

    try {
        const providerResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: sender,
                to: [recipient],
                reply_to: email,
                subject: "New MK Groups website inquiry",
                text: `New MK Groups website inquiry\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}${subject ? `\nSubject: ${subject}` : ""}\n\nMessage:\n${message}`,
                html: `<h2>New MK Groups website inquiry</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Phone:</strong> ${safePhone}</p><p><strong>Email:</strong> ${safeEmail}</p>${subject ? `<p><strong>Subject:</strong> ${safeSubject}</p>` : ""}<p><strong>Message:</strong><br>${safeMessage}</p>`,
            }),
        })

        if (!providerResponse.ok) {
            console.error("Resend rejected an inquiry email:", providerResponse.status)
            return res.status(502).json({ error: "Inquiry delivery failed. Please try again." })
        }

        return res.status(200).json({ ok: true })
    } catch (error) {
        console.error("Unable to reach the inquiry email service:", error)
        return res.status(502).json({ error: "Inquiry delivery failed. Please try again." })
    }
}
