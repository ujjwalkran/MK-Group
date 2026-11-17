import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Menu({ isShow }) {
    const router = useRouter()

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }


    return (
        <>

            <ul className="navigation">
                <li className="menu-item-has-children">
                    <Link href="/">Home</Link>


                </li>
                <li className="menu-item-has-children">
                    <Link href="/#about">About</Link>

                </li>
                {/* <li className="menu-item-has-children">
                    <Link href="#">blog</Link>
                    <ul className="sub-menu" >
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-sidebar">Blog Grid Sidebar</Link></li>
                        <li><Link href="/blog-list">Blog Standard</Link></li>
                        <li><Link href="/blog/1">Blog Single</Link></li>
                    </ul>

                </li> */}
                <li className="menu-item-has-children">
                    <Link href="#">Pages</Link>
                    <ul className="sub-menu" >
                        <li><Link href="/realestate">Real Estate</Link></li>
                        <li><Link href="/coworking">Coworking Spaces</Link></li>
                    </ul>

                </li>
                <li><Link href="/contact">contacts</Link></li>
            </ul>

        </>
    )
}
