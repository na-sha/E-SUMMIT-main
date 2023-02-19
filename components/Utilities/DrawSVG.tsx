import React, { useRef, useLayoutEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Vector = ({ progress = 0, ...props }: any) => {

    return (
        <svg
            viewBox="0 0 52 1950"
            fill={props.fill || "none"}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                strokeWidth={`6px`}
                className={`svg-path`}
                d="M26 0v314c-14 0-25 12-25 25s10 25 25 25 25-11 25-25-23-21-25 0v315.5c-12.5 0-25 9.5-25 24.5s11 24 25 24 24.5-10.5 24.5-24c-1.27-14.633-24.5-19-24.5 0v315.5c-12.5 0-25 9-25 24.5s11.346 25.15 25 24.5c10.516-.5 24.485-8.32 24.5-24.5.015-16.18-22.004-18.36-24.5 0v319c-13 0-25 10.5-25 25s12.5 25 25 25 24.942-6.81 25-25c.058-18.19-25-17-25 0v315.5c-13.5 0-25 9-25 24.5s13 24.5 25 24.5 24.5-8.5 24.5-24.5-24.5-16-24.5 0v346"
                stroke="#ebe134"
            />
        </svg>
    );
};

const VectorContainer = styled.div`
position:absolute;
top:0.5rem;
left:50%;
transform:translate(-50%);
width:100%;
height:100%;
overflow:hidden;

svg{
    width:100%;
    height:100%
}

@media(max-width:768px){
    left:1rem;
}
`

const Bounce = keyframes`
from { transform: translateX(-50%) scale(0.5); }
to { transform: translateX(-50%) scale(1); }
`

const Ball = styled.div`
position:absolute;
top:0.5rem;
left:50%;
transform: translateX(-50%);
width: 1.5rem;
height: 1.5rem;
border-radius: 50%;
background-color: #ebe134;
animation: ${Bounce} 1s linear infinte alternate;
@media(max-width:768px){
    left:1rem;
}

`


const DrawSVG = () => {

    const ref: any = useRef(null);
    const ballRef: any = useRef(null);
    gsap.registerPlugin(ScrollTrigger)

    useLayoutEffect(() => {
        let element: any = ref.current;
        let svg: any = document.getElementsByClassName('svg-path')[0];
        const length: number = svg.getTotalLength();

        // console.log(length);
        svg.style.strokeDasharray = length;

        svg.style.strokeDashoffset = length;

        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top center',
                end: 'bottom bottom',
                onUpdate: (self: any) => {
                    const draw = length * self.progress;

                    // svg.style.strokeDasharray = length -draw;
                    svg.style.strokeDashoffset = length - draw;
                },
                onToggle: self => {
                    if (self.isActive) {
                        // console.log('scrolling is active');
                        ballRef.current.style.display = 'none';
                    } else {
                        // console.log('scrolling is not active');
                        ballRef.current.style.display = 'inline-block';
                    }
                }
            }
        })

        return () => {

        };
    }, [])

    return (
        <>
            {/* <Ball ref={ballRef}/> */}
            <VectorContainer ref={ref}>
                <Vector />
            </VectorContainer>
        </>
    )
}

export default DrawSVG