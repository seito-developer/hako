import styles from './button.module.scss'
import cn from 'classnames'

export default function Button({ children, color, size }) {
	return (
		<button className={cn(styles.button, {
			[styles.primary]: color === 'primary',
			[styles.info]: color === 'info',
			[styles.google]: color === 'google'
		},{
			[styles.large]: size === 'large'
		})} type="button">
			{children}
		</button>)
}
 
