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
min-width: 85%;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 70em){
  width:85%;
}

@media (max-width: 64em){
  width: 100%;
  flex-direction: column-reverse;

  align-items:center;
  justify-content:center;

  &>*:first-child{
    width:90%;
  }
}
`

const Box = styled.div`
width: 50%;
height: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.h2`
text-transform: capatalize;
width: 80%;
align-self: flex-start;
margin: 0 auto;
`

const SubText = styled.p`
text-transform: capatalize;
width: 80%;
align-self: flex-start;
margin: 0 auto;
font-weight: 400;
`

const Values = () => {
    return (
        <Section className={`flex md:flex-row flex-colsm:py-16 py-6`}>
            <Container>
                <Box>
                    <Title className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
                        &quot;Here&apos;s To The Crazy Ones&quot;
                    </Title>
                    <SubText className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[450px] mt-5`}>

                        “<b className='text-gradient'>The misfits. The rebels. The troublemakers.</b>  The round pegs in the square holes. The ones who see things differently. They&apos;re not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can&apos;t do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”

                    </SubText>
                    {/* <Button styles="flex-start mt-10 rounded-xl z-[2]" /> */}
                    <div className="absolute z-[0] w-[20%] h-[25%] top-0 pink__gradient" />
                    <div className="absolute z-[1] w-[30%] h-[20%]  bottom-40 white__gradient" />
                    <div className="absolute z-[0] w-[40%] h-[20%] right-20 bottom-20 blue__gradient" />
                </Box>
                <Box> <Carousel /> </Box>
            </Container>
        </Section>
    )
}

export default Values