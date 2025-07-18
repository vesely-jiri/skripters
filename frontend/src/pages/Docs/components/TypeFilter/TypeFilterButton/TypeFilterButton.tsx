import styles from './TypeFilterButton.module.css'

type Props = {
  color: string
  label: string
  onClick?: () => void
  active?: boolean
}

export default function TypeFilterButton({ label, color, onClick, active }: Props) {
  return (
    <div
      className={`${styles.button} ${active ? styles.active : ''}`}
      onClick={onClick}
      style={{
        borderBottomColor: color,
        backgroundColor: active ? color + '50' : 'transparent'
}}
    >
      <span className={styles.label}>{label}</span>
    </div>
  )
}
