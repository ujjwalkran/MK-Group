import Head from 'next/head'
import { useRouter } from 'next/router'
import { BUSINESS_SCHEMA, DEFAULT_SEO_DESCRIPTION, DEFAULT_SEO_TITLE, SITE_URL } from '@/lib/seo'

const PageHead = ({
    headTitle,
    description,
    canonicalPath,
    ogTitle,
    ogDescription,
    ogImage = "/assets/img/banner/commercial-real-estate-services-bengaluru.jpg",
    ogImageAlt = "MK Groups real estate and commercial property services in Bengaluru",
    preloadImage,
    noIndex = false,
}) => {
    const router = useRouter()
    const path = canonicalPath || router.asPath.split(/[?#]/)[0] || "/"
    const routeLabel = path === "/" ? "" : path
        .split("/")
        .filter(Boolean)
        .map((segment) => segment.replace(/[-_]/g, " ").replace(/[\[\]]/g, ""))
        .join(" ")
    const canonicalUrl = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
    const title = headTitle || (path === "/" ? DEFAULT_SEO_TITLE : `${routeLabel} | MK Groups`)
    const descriptionText = description || (
        path === "/"
            ? DEFAULT_SEO_DESCRIPTION
            : `Explore ${routeLabel.toLowerCase()} from MK Groups in Bengaluru, Karnataka, including real estate, construction, interior design, commercial property, and coworking services.`
    )
    const socialTitle = ogTitle || title
    const socialDescription = ogDescription || descriptionText
    const socialImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`
    const shouldNoIndex = noIndex || path === "/404" || /^\/index-[2-8]$/.test(path)
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description: descriptionText,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
        inLanguage: "en-IN",
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={descriptionText} />
                <meta name="robots" content={shouldNoIndex ? "noindex, nofollow" : "index, follow"} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="MK Groups" />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:title" content={socialTitle} />
                <meta property="og:description" content={socialDescription} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={socialImage} />
                <meta property="og:image:alt" content={ogImageAlt} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={socialTitle} />
                <meta name="twitter:description" content={socialDescription} />
                <meta name="twitter:image" content={socialImage} />
                {preloadImage && <link rel="preload" as="image" href={preloadImage} fetchPriority="high" />}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_SCHEMA) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
                />
            </Head>
        </>
    )
}

export default PageHead