import styled from 'styled-components'
import styles from '../../styles/style'
import DrawSVG from '../Utilities/DrawSVG'
import { internshipFair, bizConclave, unwind, pitchverse, startupExpo } from '../../assets'
import Image from 'next/image'

const Section = styled.section`
min-height:100vh;
min-width: 100vw;
position: relative;
`

const Title = styled.h1`
text-transform: uppercase;
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid #ebe134;
width: fit-content;
@media(max-width:768px){
    width:80%;
}
`

const Container = styled.div`
width: 70%;
height: 270vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;

@media(max-width:1024px){
    width:80%;
}
@media(max-width:768px){
    width:90%;
}
`

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Items = styled.ul`
list-style: none;
width: 100%;
height:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media(max-width:768px){
    width:90%;
}

&>*:nth-of-type(1){
    margin-top:12rem;
}

&>*:nth-of-type(2n+1){
    flex-direction: row;
    @media(max-width:768px){
        justify-content:center;
    }
    div{
        border-radius: 50px 0 50px 0;
        text-align:left;
        margin:0.5rem 0;
        img{
            border:none;
        }
        @media(max-width:768px){
            border-radius: 0 50px 0 50px ;
            p{
                border-radius: 0 40px 0 40px ;
            }
        }
    }
    p{
        border-radius: 40px 0 40px 0;
    }
}

&>*:nth-of-type(2n){
    flex-direction:row-reverse;
    text-align:left;
    margin:0.5rem 0;
    @media(max-width:768px){
        justify-content:center;
    }
    div{
        border-radius: 0 50px 0 50px ;
        text-align:left;
        margin:1rem 0;
        img{
            border:none;
        }
    }
    p{
        border-radius: 0 40px 0 40px ;
    }
}
`

const Item = styled.li`
width:100%;
height: 70%;
display:flex;
justify-content:space-between;
@media(max-width:768px){
    justify-content: end !important;
}
`

const ItemContainer = styled.div`
width:45%;
height:fit-content;
padding: 1rem;
border: 3px solid white;
@media(max-width:768px){
    width:90%;
}
`
const ImageContainer = styled.div`
width:45%;
height:fit-content;
padding: 1rem;
dislay:flex;
justify-content:center;
align-items:center;
`

const Box = styled.p`
height:fit-content;
background: transparent;
padding:1rem;
border: 1px solid yellow;
@media(max-width:768px){
    padding:0.5rem;
}
@media(min-width:10px and max-width:440px){
    padding:0.5rem;
    font-size: 2px;
}
`

const SubTitle = styled.span`
display: block;
padding-left:0.5rem
@media(max-width:768px){
    padding-left:0.1rem;
}
`

const Text = styled.span`
display:block;
text-transform: capitalize;
`

const Events = ({ title, subtext, picture }: any) => {
    return (
        <Item>
            <ItemContainer className='z-[1] flex justify-center items-center md:my-0 my-10 relative'>
                <Box className='cursor-pointer'>
                    <SubTitle className={`border-b-2 font-medium font-poppins xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>
                        {title}
                    </SubTitle>
                    <Text className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]`}>
                        {subtext}
                    </Text>
                    {/* <Button /> */}
                </Box>
                <div className="absolute z-[0] w-[20%] h-[25%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[40%] h-[40%] rounded-full bottom-50 white__gradient" />
            </ItemContainer>
            <ImageContainer className='lg:block hidden'>
                <Image src={picture} alt="" className='' width={500} height={300} />
            </ImageContainer>
        </Item>
    )
}

const Timeline = () => {
    return (
        <Section id="timeline">
            <Title className="ss:text-[72px] text-[52px] font-poppins font-semibold text-gradient">
                Events
            </Title>
            <Container>
                <SvgContainer>
                    {/* <DrawSVG /> */}
                </SvgContainer>
                <Items className="text-white">
                    <Events
                        title="PitchVerse"
                        subtext={`"if you cant explain it simply, you don't know it wel enough." It is time for your critical-thinking and problem-solving skills by puzzling out numerous obstacles to crown yourself as the star of the Pitch Verse.`}
                        picture={pitchverse}
                    />
                    <Events
                        title="BizConclave"
                        subtext={`An incredible line-up of speakers, spanning from venture capitalists to entrepreneurs`}
                        picture={bizConclave}
                    />
                    <Events
                        title="Unwind"
                        subtext={`An informal eve filled casual conversions, a fascinating and entertaining evening jam-packed with fun and frolics and an opportunity to attend sessions from the pioneers of the content creation industry.`}
                        picture={unwind}
                    />
                    <Events
                        title="Internship Fair"
                        subtext={`A plethora of opportunities to gain corporate exposure and develop your skills`}
                        picture={internshipFair}
                    />
                    <Events
                        title="StartupExpo"
                        subtext={`Startup Expo will provide you with a platform to showcase your product, get it tested by Students & Professionals and Incorporate valuable feedback from them.`}
                        picture={startupExpo}
                    />
                </Items>
            </Container>
        </Section>
    );
}

export default Timeline