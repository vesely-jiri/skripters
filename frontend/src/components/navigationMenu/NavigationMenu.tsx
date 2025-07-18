import React from 'react'
import styles from './NavigationMenu.module.css'
import NavigationButton from './components/navigationButton/NavigationButton'
import { FaBook, FaComments, FaUser } from 'react-icons/fa'

const navItems = [
    { to: '/docs', icon: <FaBook />, label: 'Docs', 
        className: styles.docsButton, 
        labelClassName: styles.docsLabel, 
        iconClassName: styles.docsIcon },
    { to: '/forum', icon: <FaComments />, label: 'Forum', 
        className: styles.forumButton, 
        labelClassName: styles.forumLabel, 
        iconClassName: styles.forumIcon },
    { to: '/profile', icon: <FaUser />, label: 'Profile', 
        className: styles.profileButton, 
        labelClassName: styles.profileLabel, 
        iconClassName: styles.profileIcon },
]

const NavigationMenu: React.FC = () => {
  return (
    <nav className={styles.menu}>
      {navItems.map((item) => (
        <NavigationButton
          key={item.to}
          to={item.to}
          icon={item.icon}
          label={item.label}
          className={item.className}
          iconClassName={item.iconClassName}
        />
      ))}
    </nav>
  )
}

export default NavigationMenu