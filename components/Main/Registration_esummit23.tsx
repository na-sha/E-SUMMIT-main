import styles from '../../styles/Sponsors.module.css'
import RegistrationForm_esummit23 from '../Reusables/RegistrationForm_esummit23'

const Register = () => {
    return (
        <div id='Register' className={`xl:max-w-[1280px] w-full min-h-[80vh]`}>
            <div className={`${styles.heading}`}>Register</div>
            <div className='flex justify-center items-center'>
                <RegistrationForm_esummit23 />
            </div>
        </div>
    )
}

export default Register