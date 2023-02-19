import styles from '../../styles/Events.module.css'
import TimelineESummit from './TimelineESummit'

const Events = () => {
    return (
        <div id='Events' className={`${styles.container}`}>
            <div className={`${styles.heading}`}>Events</div>
            <TimelineESummit />
        </div>
    )
}

export default Events