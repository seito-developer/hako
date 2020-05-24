import firebase from "firebase/app";
import "firebase/storage";

export default function Data({children, mod}) {
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
 
