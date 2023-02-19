import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const menuToggle = () => {
        setToggle((toggle) => !toggle)
    }
    const navItems = [
        {
            id: 1,
            title: 'About'
        },
        {
            id: 2,
            title: 'Events',
        },
        {
            id: 3,
            title: 'Sponsors',
        },
        {
            id: 4,
            title: 'Register',
        },
    ]
    return (
        <nav className={`${styles.navbar}`}>
            <div className={`${styles.hamburger}`}>
                <Image
                    src={`${!toggle? '/hamburger_menu.svg' : '/close.svg'}`}
                    alt="hamburger_menu"
                    className={styles.hamburgerIcon}
                    onClick={menuToggle}
                    width="60"
                    height="30"
                />
                <div className={`${toggle ? styles.navMenu : styles.navHidden}`}>
                    <ul className={`${styles.navList}`}>
                        {navItems.map((nav, index) => (
                            <li 
                                key={nav.id}
                                className={styles.navListItem}
                            >
                                <Link
                                    href={`#${nav.title}`}
                                    onClick={menuToggle}
                                >
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`${styles.logo}`}>
                E-SUMMIT
            </div>
        </nav>
    )
}

export default Navbar