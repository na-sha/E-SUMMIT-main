import Image from 'next/image'
import styled from 'styled-components'
import styles from '../../styles/style'
// import './Contact.css'
import {
    image65,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,

} from '../../assets/gallery'
// import SponsorUs from './SponsorUs' 
// import Deliverables from './Deliverables'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
`

const Column = styled.div`
flex: 25%;
max-width: 25%;
padding: 0.5rem 1rem;
Image {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
}

@media screen and (max-width: 800px){
  flex: 33.33%;
  max-width: 33.33%;
}
@media screen and (max-width: 600px){
  flex: 50%;
  max-width: 50%;
}
`

const Sponsor = () => {
    return (
        <section id="sponsorship" className={`flex flex-col sm:py-16 py-6 sm:px-16 px-6`}>

            {/* <h1 className={`text-center uppercase ${styles.heading2}`}>
        <span className="text-gradient">Sponsorship</span> Proposal
      </h1> */}

            {/* <Deliverables /> */}

            {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <SponsorUs />
        </div>
      </div> */}

            <h1 className={`text-center uppercase font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>
                <span className="text-gradient">Previous</span> Sponsors
            </h1>
            <Row className={`sm:px-16 px-6 flex justify-center items-start`}>
                <Column>
                    <Image src={image65} alt="" />
                    <Image src={img5} alt="" />
                    <Image src={img9} alt="" />
                    <Image src={img12} alt="" />
                </Column>
                <Column>
                    <Image src={img4} alt="" />
                    <Image src={img6} alt="" />
                </Column>
                <Column>
                    <Image src={img3} alt="" />
                    <Image src={img7} alt="" />
                    <Image src={img8} alt="" />
                    <Image src={img11} alt="" />
                </Column>
                <Column>
                    <Image src={img13} alt="" />
                    <Image src={img2} alt="" />
                </Column>
                <Column>
                </Column>
            </Row>
        </section>
    );
}

export default Sponsor