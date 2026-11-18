export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://mk-group-phi.vercel.app").replace(/\/+$/, "")

export const DEFAULT_SEO_TITLE = "MK Groups | Real Estate & Coworking in Bengaluru"
export const DEFAULT_SEO_DESCRIPTION =
    "MK Groups offers real estate, construction, interior design, commercial property, and coworking services in Bengaluru, Karnataka."

export const BUSINESS_SCHEMA = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "MK Groups",
            url: SITE_URL,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/assets/img/logo/logo.png`,
            },
            telephone: "+91-81479-03884",
            email: "contact@mkgroup.com",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Ward No. 39, HBCS Layout, Chandra Layout",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560072",
                addressCountry: "IN",
            },
        },
        {
            "@type": ["LocalBusiness", "RealEstateAgent", "ProfessionalService", "CoworkingSpace"],
            "@id": `${SITE_URL}/#business`,
            name: "MK Groups",
            url: SITE_URL,
            telephone: "+91-81479-03884",
            email: "contact@mkgroup.com",
            parentOrganization: { "@id": `${SITE_URL}/#organization` },
            address: {
                "@type": "PostalAddress",
                streetAddress: "Ward No. 39, HBCS Layout, Chandra Layout",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560072",
                addressCountry: "IN",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: 12.954431487359649,
                longitude: 77.51733017507635,
            },
            areaServed: [
                { "@type": "City", name: "Bengaluru" },
                { "@type": "AdministrativeArea", name: "Karnataka" },
            ],
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ],
                opens: "09:30",
                closes: "18:00",
            },
        },
        {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: "MK Groups",
            publisher: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "en-IN",
        },
    ],
}
