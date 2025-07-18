import TypeFilterMenu from './components/TypeFilter/TypeFilterMenu'

import styles from './Docs.module.css'

const Docs = () => {
    return (
        <>
            <div className={styles.TypeFilterMenu}>
                <TypeFilterMenu />
            </div>

            <div>
                <h1>Docs</h1>
            </div>
        </>
    )
}

export default Docs