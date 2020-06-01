import styles from './item.module.scss'

export default function Item() {
	return (
		<article className={styles.item}>
			<a href="#">
				<div className={styles.item__box}>
					<div className={styles.item__remark}></div>
					<div className={styles.item__contents}>
						<img src="https://dummyimage.com/30x30/eeeeee/333333"/>
						<div className={styles.item__header}>
							<h1>Docs text name here</h1>
							<p>Description field here text description field here description field here …</p>
						</div>
					</div>
				</div>
				<div className={styles.item__button}>
					<button className={styles.item__edit} type="button">...</button>
				</div>
			</a>
		</article>)
}
 
