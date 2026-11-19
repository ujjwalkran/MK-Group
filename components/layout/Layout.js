import { useCallback, useEffect, useState } from 'react'
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Footer from './Footer'
import Header1 from './Header1'
import Header2 from './Header2'
import Header3 from './Header3'
import Header4 from './Header4'
import Header5 from './Header5'
import Header6 from './Header6'
import Header7 from './Header7'
import Header8 from './Header8'
import PageHead from './PageHead'

export default function Layout({
    headerStyle,
    headTitle,
    breadcrumbTitle,
    children,
    noFooter,
    heroHeader = false,
    lightHeroHeader = false,
    seoDescription,
    canonicalPath,
    ogTitle,
    ogDescription,
    ogImage,
    ogImageAlt,
    preloadImage,
    noIndex = false,
}) {

    useEffect(() => {
        const WOW = require('wowjs')
        WOW.WOW.prototype.resetAnimation = function (event) {
            if (event.type.toLowerCase().indexOf('animationend') >= 0) {
                // SVG animation events bubble; reset the element WOW attached its listener to.
                const target = event.currentTarget || event.target || event.srcElement
                target?.classList?.remove(this.config.animateClass)
            }
        }
        window.wow = new WOW.WOW({ live: false })
        window.wow.init()
    }, [])

    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = useCallback(() => setMobileMenu((open) => !open), [])
    const closeMobileMenu = useCallback(() => setMobileMenu(false), [])

    useEffect(() => {
        document.body.classList.toggle("mobile-menu-visible", isMobileMenu)
        return () => document.body.classList.remove("mobile-menu-visible")
    }, [isMobileMenu])

    // Scroll Header
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        const updateScroll = () => {
            const scrollCheck = window.scrollY > 100
            setScroll(scrollCheck)
        }

        updateScroll()
        window.addEventListener("scroll", updateScroll, { passive: true })
        return () => window.removeEventListener("scroll", updateScroll)
    }, [])
    return (
        <>
            <PageHead
                headTitle={headTitle}
                description={seoDescription}
                canonicalPath={canonicalPath}
                ogTitle={ogTitle}
                ogDescription={ogDescription}
                ogImage={ogImage}
                ogImageAlt={ogImageAlt}
                preloadImage={preloadImage}
                noIndex={noIndex}
            />
            {!headerStyle && <Header1 handleMobileMenu={handleMobileMenu} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 2 ? <Header2 scroll={scroll} /> : null}
            {headerStyle == 3 ? <Header3 scroll={scroll} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 4 ? <Header4 /> : null}
            {headerStyle == 5 ? <Header5 scroll={scroll} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 6 ? (
                <Header6
                    closeMobileMenu={closeMobileMenu}
                    handleMobileMenu={handleMobileMenu}
                    isMobileMenu={isMobileMenu}
                    hasHeroBanner={heroHeader}
                    hasLightHeroBanner={lightHeroHeader}
                    scroll={scroll}
                />
            ) : null}
            {headerStyle == 7 ? <Header7 scroll={scroll} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 8 ? <Header8 /> : null}

            <main>
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                {children}
            </main>
            {noFooter ? null : < Footer />}

            <BackToTop />
        </>
    )
}
