import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function Header1({ handleMobileMenu, scroll }) {
    return (
        <>
            <header>
                <div id="sticky-header" className={`menu-area transparent-header ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="row align-items-center">
                                            <div className="col-xl-2">
                                                <div className="logo header-logo">
                                                    <a href="/">
                                                        <img src="/assets/img/logo/logo.png" alt="Logo" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-xl-8">
                                                <div className="logo mobile-logo d-none">
                                                    <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                                    <Link href="/" className="d-none sticky-logo"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                                </div>
                                                <div className="navbar-wrap main-menu d-none d-lg-flex">
                                                    <ul className="navigation">
                                                        <li className="active menu-item-has-children"><Link href="/#">Home</Link></li>
                                                        <li className="menu-item-has-children"><Link href="/#">About</Link>
                                                            <ul className="sub-menu">
                                                                <li><Link href="/overview">Overview</Link></li>
                                                                <li><Link href="/mission">Mission</Link></li>
                                                                <li><Link href="/team">Our Team</Link></li>
                                                                <li><Link href="/team-details">Team Profile</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item-has-children"><Link href="/#">Projects</Link>
                                                            <ul className="sub-menu">
                                                                <li><Link href="/project">Projects Two Col</Link></li>
                                                                <li><Link href="/project-two">Projects Three Col</Link></li>
                                                                <li><Link href="/project-three">Projects Four Col</Link></li>
                                                                <li><Link href="/project/1">Projects Single</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="navigation right">
                                                        <li className="menu-item-has-children"><Link href="/#">Pages</Link>
                                                            <ul className="sub-menu">
                                                                <li><Link href="/realestate">Services</Link></li>
                                                                <li><Link href="/testimonial">Testimonials</Link></li>
                                                                <li><Link href="/faq">Faq</Link></li>
                                                                <li><Link href="/404">404 Error</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link href="/contact">contacts</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-2">
                                                <div className="header-contact text-end">
                                                    <Link href="/tel:0123456789">+7 495 127 5451</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo02.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="menu-outer">
                                            <MobileMenu />
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix list-wrap">
                                                <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop" onClick={handleMobileMenu} />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
