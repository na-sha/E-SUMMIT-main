import styles from '../../styles/Utilities.module.css'

const Button = ({ style, ...props }: any) => {
    return (
        <button type='button' className={`${styles.buttonMain} ${style}`}>
            <p>
                {props.cta}
            </p>
        </button>
    )
}

export default Button