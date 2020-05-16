import styles from './button.module.scss'
import cn from 'classnames'

export default function Button({children, mod}) {
	return (
		<button className={
				cn(styles.button, {
					[styles.primary]: mod === 'primary',
					[styles.info]: mod === 'info'
				})
			} type="button">
			{children}
		</button>)
}
 
