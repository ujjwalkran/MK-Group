import Layout from "@/components/layout/Layout"
import About from "@/components/sections/About"
import Blog from "@/components/sections/Blog"
import Brand from "@/components/sections/Brand"
import Features from "@/components/sections/Features"
import Newsletter from "@/components/sections/Newsletter"
import Project from "@/components/sections/Project"
import Slider from "@/components/sections/Slider"
import Testimonial from "@/components/sections/Testimonial"
import Video from "@/components/sections/Video"
export default function Home1() {

    return (
        <>
            <Layout
                headerStyle={6}
                heroHeader
                headTitle="MK Groups | Real Estate, Construction & Coworking in Bengaluru"
                seoDescription="Discover real estate, construction, interior design, commercial property, and premium coworking spaces in Bengaluru with MK Groups."
                canonicalPath="/"
                ogTitle="MK Groups | Spaces for Living, Working & Growing"
                ogDescription="Explore Bengaluru real estate, construction and interior design services, alongside premium coworking and study spaces."
                ogImage="/assets/img/banner/mk-groups-interior-design-bengaluru.png"
                ogImageAlt="Contemporary commercial and coworking spaces by MK Groups in Bengaluru"
                preloadImage="/assets/img/banner/mk-groups-interior-design-bengaluru.png"
            >
                <Slider />
                <About />
                <Newsletter />
            </Layout>
        </>
    )
}