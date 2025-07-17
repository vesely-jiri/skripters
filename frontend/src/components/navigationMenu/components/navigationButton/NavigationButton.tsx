import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavigationButton.module.css'

interface NavigationButtonProps {
  to: string
  icon: React.ReactNode
  label: string
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ to, icon, label }) => {
  return (
    <Link to={to} className={styles.button}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </Link>
  )
}

export default NavigationButton
