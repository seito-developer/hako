import styles from './input.module.scss'
import cn from 'classnames'

export default function INput({mod, type}) {
	return (
		<input className={
				cn(styles.input, {
					[styles.primary]: mod === 'primary',
					[styles.warning]: mod === 'warning'
				})
			} type={type}/>
		)
}
 
