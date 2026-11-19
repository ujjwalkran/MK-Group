# MK Group

## Homepage inquiry email

The Quick Inquiry form submits to `/api/inquiries`, which sends email through Resend.
Copy `.env.example` to `.env.local`, then configure:

- `RESEND_API_KEY`: Resend API key (keep this server-side; never add a `NEXT_PUBLIC_` prefix).
- `INQUIRY_TO_EMAIL`: destination inbox for new inquiries.
- `INQUIRY_FROM_EMAIL`: sender address on a domain verified with Resend.

Set the same values as deployment environment variables before enabling the live form.
Without them, the endpoint responds with a service-unavailable error and the form offers a retry instead of showing a false success.
