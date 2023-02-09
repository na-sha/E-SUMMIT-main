import styles from '../../styles/Header.module.css'
import Button from '../Reusables/ButtonMain'

const Header = () => {
    return (
        <main className={`${styles.container}`}>
            <div>
                <h1 className={`${styles.main}`}>E-SUMMIT &apos;23</h1>
                <p className={styles.content}>
                    E-Summit &apos;23 aims to provide a platform for discussion on innovative ideas that have the potential to transform current challenges into opportunities for positive change. The goal of the event is to inspire and offer rays of hope to attendees.
                </p>
                <Button cta="Register"/>
                <p><span className='label'>Biz Conclave &emsp;· &emsp;Unwind&emsp; ·&emsp;Internship Fair</span></p>
            </div>
            <div>
                {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odit, facere, quibusdam veniam at harum corrupti quidem ea animi ullam natus rem perferendis. Corrupti beatae labore iure incidunt vitae. Fugit?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe obcaecati explicabo voluptas iusto molestiae odit sint, temporibus, corporis laudantium, possimus nisi laboriosam! Ab deserunt rerum modi quibusdam veritatis ipsa eligendi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus maiores, nemo maxime repudiandae iusto rem molestiae itaque perferendis quae, esse, tenetur fugiat voluptas? Voluptas itaque aliquid architecto maiores molestiae molestias?
                </p> */}
            </div>
        </main>
    )
}

export default Header