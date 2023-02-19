import styles from "../../styles/style"

import { facebook, instagram, linkedin, twitter, send, shield, star } from "../../assets";
import { flatLogo } from "../../assets"
import Image from "next/image"
import Link from "next/link";

const footerLinks = [
    {
        title: "Useful Links",
        links: [
            {
                name: 'Events',
                link: 'events'
            }
        ],
    },
    {
        title: "Community",
        links: [
            {
                name: 'Gallery',
                link: 'gallery',
            },
        ],
    },
    {
        title: "Partner",
        links: [
            {
                name: "Become a Partner",
                link: "sponsor",
            },
        ],
    },
    {
        title: "Help",
        links: [
            {
                name: "Contact Us",
                link: "contact",
            },
        ],
    },
];

const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/edc_tiet/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/edctiet",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/school/entrepreneurship-development-cell-thapar-university/",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://twitter.com/edctiet",
    },
];

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className="flex-[1] flex flex-col justify-start mr-10">
                    <Image
                        src={flatLogo}
                        alt="edc-footer-logo"
                        className="w-[100px] object-contain"
                    />
                    <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
                        Ideate, Ascend, Lead
                    </p>
                </div>

                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((footerlink: any) => (
                        <div
                            key={footerlink.title}
                            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
                        >
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                {footerlink.title}
                            </h4>
                            <ul className="list-none mt-4">
                                {footerlink.links.map((link: any, index: any) => (
                                    <li
                                        key={link.name}
                                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                                            }`}
                                        onClick={scrollToTop}
                                    >
                                        <Link href={`/${link.link}`}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                    Copyright Ⓒ 2022 EDC. All Rights Reserved.
                    <br />
                    <span className="uppercase">crafted with 🤍</span>{" "}
                    <b
                        onClick={scrollToTop}
                        className="text-gradient signature"
                    >
                        Team EDC
                    </b>
                    {/* </a> */}
                </p>
                <div className="flex flex-row md:mt-0 mt-6">
                    {socialMedia.map((social: any, index: any) => (
                        <Image
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                                }`}
                            onClick={() => window.open(social.link)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Footer