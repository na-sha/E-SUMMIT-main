import styled from 'styled-components'
import styles from '../../styles/style'
import Image from 'next/image'
import {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,

    image31,
    image50,
    image64,
} from '../../assets/gallery'

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

const Gallery = () => {
    return (
        <section id="gallery" className={`flex flex-col sm:px-16 px-6`}>
            <h1 className={`text-center uppercasefont-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>
                <span className="text-gradient">EDC</span> Gallery
            </h1>
            <Row>
                <Column>

                    <Image src={image16} alt="" />
                    <Image src={image64} alt="" />
                    <Image src={image15} alt="" />

                    <Image src={image14} alt="" />
                    <Image src={image6} alt="" />
                </Column>
                <Column>
                    <Image src={image17} alt="" />
                    <Image src={image8} alt="" />
                    <Image src={image9} alt="" />
                    <Image src={image10} alt="" />
                </Column>
                <Column>
                    <Image src={image50} alt="" />
                    <Image src={image11} alt="" />
                    <Image src={image5} alt="" />
                    <Image src={image22} alt="" />
                </Column>
                <Column>
                    <Image src={image19} alt="" />
                    <Image src={image21} alt="" />
                    <Image src={image25} alt="" />
                    <Image src={image31} alt="" />
                    <Image src={image24} alt="" />
                </Column>
                <Column>
                </Column>
            </Row>
        </section>
    );
}

export default Gallery