import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

interface LogoProps {
  subtitle?: String
}

const Logo = ({ subtitle }: LogoProps) => {
  return (
    <div className={styles.logo}>
      <Link to="/" className={styles.link}>
        <div className={styles.text}>
          <span className={styles.full}>Skripters</span>
          <span className={styles.short}>Sk</span>
        </div>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </Link>
    </div>
  )
}

export default Logo
