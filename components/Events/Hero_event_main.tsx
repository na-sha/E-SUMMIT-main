import Button from "../Reusables/Button_main"
import { logo, flatLogo } from '../../assets'
import Image from "next/image"

// import SubHeading from './SubHeading'
// import './EventsHeader.css'

const HeroEvent = () => {
    return (
        <section id='events' className={`flex md:flex-row flex-col sm:py-16 py-6`}>
            <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <Image
                        src={flatLogo}
                        alt="logo-flat"
                        className="w-[42px] "
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
                        Our Initiatives,<br className="" /> {" "}
                        <span className="text-gradient">Your Journey</span>
                    </h1>
                </div>
                <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[450px] mt-5`}>

                    Here&apos;s the glimpse of our exclusionary events.
                    You will open a world of valuable insights,tips,and advice from industry experts for yourself.
                    Like every year, there will be some engaging startup events coming your way.

                </p>
                <a href="#timeline"><Button cta='Explore Events' styles='mt-4' /></a>
            </div>
            <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}>
                <Image src={logo} alt="logo" className="w-[75%] relative z-[5]" />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>

            {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
        </section>
    )
}

export default HeroEvent