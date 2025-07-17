import styles from './Welcome.module.css'

const Welcome = () => {
    return (
        <>
            <div className={styles.text}>
                <p>Welcome!</p>
                <p>Choose your weapon</p>
                <p>{"<---------------------"}</p>
            </div>
        </>
    )
}

export default Welcome