import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to</h1>
      <p className={styles.text}>Skripters</p>
    </div>
  )
}

export default Home