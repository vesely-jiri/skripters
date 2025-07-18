import { useState } from 'react'
import TypeFilterButton from './TypeFilterButton/TypeFilterButton'

import styles from './TypeFilterMenu.module.css'

const typeFilterItems = [
    { label: 'Events', color: '#820080' },
    { label: 'Conditions', color: '#f10000' },
    { label: 'Effects', color: '#0028b7' },
    { label: 'Expressions', color: '#00a108' },
    { label: 'Types', color: '#b77700' },
    { label: 'Functions', color: '#8b8b8b' },
    { label: 'Sections', color: '#00b792' },
    { label: 'Structures', color: '#cc00eb' },
]

export default function TypeFilterMenu() {

    const [activeFilters, setActiveFilters] = useState<string[]>([])

    const toggleFilter = (label: string) => {
        setActiveFilters(prev =>
        prev.includes(label)
            ? prev.filter(item => item !== label)
            : [...prev, label]
        )
    }

    return (
        <div className={styles.menu}>
        {typeFilterItems.map(({ label, color }) => (
            <TypeFilterButton
                key={label}
                label={label}
                color={color}
                active={activeFilters.includes(label)}
                onClick={() => toggleFilter(label)}
            />
        ))}
        </div>
    )
}
