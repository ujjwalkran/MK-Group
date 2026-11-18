import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Slider() {
    return (
        <>
            <section className="slider-area">
                <Swiper {...swiperOptions} className="slider-active">
                    <SwiperSlide className="single-slider slider-bg" style={{ backgroundImage: `url("/assets/img/banner/home_interior.png")` }}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="banner-content text-center mk-development-banner-content">
                                        <span className="mk-hero-eyebrow" data-animation="fadeInUp" data-delay=".1s">
                                            BUILDERS &amp; DEVELOPERS
                                        </span>
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".2s">Building Dreams <br/> Creating Landmarks</h2>
                                        <p data-animation="fadeInUp" data-delay=".4s">Turning dreams into remarkable spaces through visionary design, exceptional craftsmanship, and an enduring commitment to quality, trust, and excellence. We shape timeless landmarks that inspire lifestyles and generations to come.</p>
                                        <Link href="/realestate" className="btn" data-animation="fadeInUp" data-delay=".6s">
                                            <div className="btn_m">
                                                <div className="btn_c">
                                                    <div className="btn_t1">Explore More</div>
                                                    <div className="btn_t2">Explore More</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-slider slider-bg" style={{ backgroundImage: `url("assets/img/banner/co_working-space.png")` }}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="banner-content text-center mk-coworking-banner-content">
                                        <span className="mk-coworking-hero-eyebrow" data-animation="fadeInUp" data-delay=".1s">
                                            COWORKING SPACES
                                        </span>
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".2s">Premium Coworking Spaces</h2>
                                        <p data-animation="fadeInUp" data-delay=".4s">Premium workspaces crafted to elevate your business presence while inspiring growth, creativity, and success.</p>
                                        <Link href="/coworking" className="btn" data-animation="fadeInUp" data-delay=".6s">
                                            <div className="btn_m">
                                                <div className="btn_c">
                                                    <div className="btn_t1">Explore Spaces</div>
                                                    <div className="btn_t2">Explore Spaces</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <div className="banner-scroll-down">
                <Link href="#about" className="section-link">
                    <span />
                    <span />
                    <span />
                </Link>
            </div>

        </>
    )
}
