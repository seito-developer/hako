import styles from './button.module.css'

export default function Button({ children }) {
	return <button className={styles.primary} type="button">{children}</button>
}

