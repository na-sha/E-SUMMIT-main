import styles from '../../styles/Sponsors.module.css'
import InfiniteSlider from '../Reusables/InfiniteSlider'

const Sponsors = () => {
    return (
        <div id='Sponsors' className={`${styles.container}`}>
            <div className={`${styles.heading}`}>Sponsors</div>
            <InfiniteSlider />
        </div>
    )
}

export default Sponsors