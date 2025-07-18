import { Outlet } from 'react-router-dom'
import NavigationMenu from './components/navigationMenu/NavigationMenu'
import ActionBar from './components/actionBar/ActionBar'

import styles from './AppLayout.module.css'

const AppLayout = () => {
  return (
    <div className={styles.container}>

      <div className={styles.navigationMenu}>
        <NavigationMenu />
      </div>

      <div className={styles.actionBar}>
        <ActionBar />
      </div>
      
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
