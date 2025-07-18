import TypeFilterMenu from './components/TypeFilter/TypeFilterMenu'
import Logo from '../../components/logo/Logo'

import styles from './Docs.module.css'

const Docs = () => {
    return (
        <>
            <div className={styles.TypeFilterMenu}>
                <TypeFilterMenu />
            </div>

            <div className={styles.logo}>
                <Logo subtitle='Docs'/>
            </div>
        </>
    )
}

export default Docs