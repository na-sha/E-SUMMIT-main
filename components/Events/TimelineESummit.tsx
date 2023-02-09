import styles from '../../styles/Events.module.css'

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css"

let timelineElements = [
    {
        id: 1,
        title: "Biz-Conclave",
        location: "Main audi",
        desciption: "An Incredible Line-Up Of Speakers, Spanning From Venture Capitalists To Entrepreneurs",
        buttonText: "know more",
        date: "February, 24"
    },
    {
        id: 2,
        title: "Intership Fair",
        location: "SBOP lawn",
        desciption: "A Plethora Of Opportunities To Gain Corporate Exposure And Develop Your Skills",
        buttonText: "know more",
        date: "February, 25"
    },
    {
        id: 3,
        title: "Unwind",
        location: "OAT",
        desciption: "An Informal Eve Filled Casual Conversions, A Fascinating And Entertaining Evening Jam-Packed With Fun And Frolics And An Opportunity To Attend Sessions From The Pioneers Of The Content Creation Industry.",
        buttonText: "know more",
        date: "February, 26"
    }
]

const TimelineESummit = () => {
    return (
        <div>
            <VerticalTimeline>
                {
                    timelineElements.map(element => {
                        return (
                            <VerticalTimelineElement
                                key={element.id}
                                date={element.date}
                                dateClassName="date"
                            >
                                <h3 
                                className={`${styles.verticaltimelineelementtitle}`}>
                                    {element.title}
                                </h3>
                                <h5 className={`${styles.verticaltimelineelementsubtitle}`}>
                                    {element.location}
                                </h5>
                                <p className={`${styles.description}`}>
                                    {element.desciption}
                                </p>
                                <br />
                                <a href="#"
                                className={`${styles.button}`}
                                >
                                    {element.buttonText}
                                </a>
                                <br />
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    )
}

export default TimelineESummit