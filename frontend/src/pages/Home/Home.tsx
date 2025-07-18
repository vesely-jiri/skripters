import styles from './Home.module.css'
import Logo from '../../components/logo/Logo.tsx'
import Welcome from './components/Welcome.tsx'

const Home = () => {
  return (
    <>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.welcome}>
        <Welcome />
      </div>

      {/* 
        TODO: 
          If user is logged in:
            - Show updates of his uploaded resources
            - Show updates of his posts in forum
            - Show updates of his most searched addons first

          If user is not logged in:
            - Remind user to log in

          - Show latest news
          - Show latest updated resources with their update summary
          - Show latest posts and questions in forum
          - Show latest unanswered questions in live chat

      */}
    </>
  )
}

export default Home