import { useState } from 'react';
import { close, flatLogo, menu } from '../../assets';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
    {
        id: "",
        title: "Home",
        url: "HomeEDC",
    },
    {
        id: "team",
        title: "Team",
        url: "Team",
    },
    {
        id: "events",
        title: "Events",
        url: "Events",
    },
    {
        id: "gallery",
        title: "Gallery",
        url: "GalleryPage"
    },
    {
        id: "sponsor",
        title: "Sponsor",
        url: "SponsorPage"
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <Link href="/">
                <Image
                    src={flatLogo}
                    alt="edc"
                    className='w-[90px]'
                />
            </Link>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white hover:text-secondary`}
                    >
                        <Link
                            href={`/${nav.id}`}
                        >
                            {nav.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <Image
                    src={toggle ? close : menu}
                    alt="menu"
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white hover:text-secondary`}
                            >
                                <Link
                                    href={`/${nav.id}`}  >
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar