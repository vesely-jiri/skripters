import React from 'react'
import styles from './NavigationMenu.module.css'
import NavigationButton from './components/navigationButton/NavigationButton'
import { FaBook } from 'react-icons/fa'

const NavigationMenu: React.FC = () => {
  return (
    <nav className={styles.menu}>
      <NavigationButton to="/docs" icon={<FaBook />} label="Docs" />
      {/* další tlačítka */}
      {/* <NavigationButton to="/forum" icon={<FaComments />} label="Forum" /> */}
      {/* <NavigationButton to="/profile" icon={<FaUser />} label="Profile" /> */}
    </nav>
  )
}

export default NavigationMenu
