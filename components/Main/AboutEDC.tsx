import styles from '../../styles/style'
import styled from 'styled-components'
import Carousel from '../Reusables/CarouselSwiper'

const Section = styled.section`
min-height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Container = styled.div`
width: 75%;
min-width: 100%;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 70em){
  width:85%;
}

@media (max-width: 64em){
  width: 100%;
  flex-direction: column;

  align-items:center;
  justify-content:center;

  &>*:last-child{
    width:90%;
  }
}
`

const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){
  min-height: 50vh;
}
`

const Title = styled.h2`
text-transform: capatalize;
width: 80%;
align-self: flex-start;
margin: 0 auto;

@media (max-width: 64em){
  width:100%;
  text-align:center;
}

@media (max-width: 40em){
  width:100%;
  text-align:center;
}

@media (max-width: 30em){
  width:100%;
  text-align:center;
}
`

const SubText = styled.p`
text-transform: capatalize;
width: 80%;
align-self: flex-start;
margin: 0 auto;
font-weight: 400;
`

const About = () => {
    return (
        <>
            <Section className={`flex md:flex-row flex-col sm:py-16 py-6`}>
                <Container>
                    <Box> <Carousel /> </Box>
                    <Box>
                        <Title className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
                            ABOUT EDC
                        </Title>
                        <SubText className={`$font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[450px] mt-5`}>
                            EDC aims at developing the spirit of entrepreneurship among the students of Thapar Institute of Engineering and Technology. It is committed to build a strong platform for budding entrepreneurs as a career, as a path to success, as a journey of wisdom.
                        </SubText>
                        {/* <Button styles="flex-start mt-10 rounded-xl z-[2]" /> */}
                        <div className="absolute z-[0] w-[20%] h-[25%] top-0 pink__gradient" />
                        <div className="absolute z-[1] w-[30%] h-[20%]  bottom-40 white__gradient" />
                        <div className="absolute z-[0] w-[40%] h-[20%] right-20 bottom-20 blue__gradient" />
                    </Box>
                </Container>
            </Section>
        </>
    )
}

export default About