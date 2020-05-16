import styles from './button.module.scss'

export default function Button({ children }) {
	return <button className={styles.primary} type="button">{children}</button>
}
 
