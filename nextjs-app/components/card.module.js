import stylesCard from './card.module.scss'
// import cn from 'classnames'

export default function Card() {
	return (
		<article className={stylesCard.card}>
			<div className={stylesCard.card__header}>
				<img src="https://dummyimage.com/100x100/eeeeee/333333"/>
				<h1>Project Name</h1>
			</div>
			<p className={stylesCard.card__desc}>
				Description field here text description field here text description field here
			</p>

		</article>
		)
}
 
