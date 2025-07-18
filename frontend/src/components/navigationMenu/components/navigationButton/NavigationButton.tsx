import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavigationButton.module.css'

interface NavigationButtonProps {
  to: string
  icon: React.ReactNode
  label: string
  className?: string
  labelClassName?: string
  iconClassName?: string
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ to, icon, label, className, labelClassName, iconClassName }) => {
  return (
    <>
        <Link to={to} className={`${styles.button} ${className ?? ''}`}>
            <span className={`${styles.icon} ${iconClassName ?? ''}`}>{icon}</span>
            <span className={`${styles.label} ${labelClassName ?? ''}`}>{label}</span>
        </Link>
    </>
  )
}

export default NavigationButton
