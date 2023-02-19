import styles from "../../styles/style"

import { logo, flatLogo } from '../../assets'
import Image from "next/image"
import Link from "next/link"
import CTA from "../Reusables/CTA_main"

const Hero = () => {
  const redirectToRegister = {

  }
  return (
    <section id='home' className={`flex md:flex-row flex-col sm:py-16 py-6`}>
      <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image
            src={flatLogo}
            alt="logo-flat"
            width={`42`}
            className="h-[32px]"
          />
          <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2`}>
            <span className="text-white">
              EDC:
            </span>{' '}
            Develop the spirit of {" "}
            <span className="text-white">
              Entrepreneurship
            </span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            You Ideate,<br className="" /> {" "}
            <span className="text-gradient">We Foster</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <Link href="https://linktr.ee/edctiet" target='_blank'>
              <CTA />
            </Link>
          </div>
        </div>
        <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[450px] mt-5`}>
          The Entrepreneurship Development cell, Thapar Institute of Engineering and Technology, Patiala has been established with an aim to foster and nurture talented young minds with a vision. With India witnessing the rise of start up culture, we encourage and guide everyone who is bitten by the spirit of entrepreneurship.
        </p>
      </div>
      <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}>
        <Image src={logo} alt="logo" className="w-[75%] relative z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden flex justify-center items-center`}>
        <Link href="https://linktr.ee/edctiet">
          <CTA />
        </Link>
      </div>
    </section>
  )
}

export default Hero