import stylesCard from './card.module.scss'
import Item from '../components/item.module.js'
// import cn from 'classnames'

export default function Card() {
	return (
		<article className={stylesCard.card}>
			<div className={stylesCard.card__header}>
				<div className={stylesCard.card__heading}>
					<img src="https://dummyimage.com/100x100/eeeeee/333333"/>
					<h1>Project Name</h1>
				</div>
				<button className={stylesCard.card__edit} type="button">...</button>
			</div>
			<p className={stylesCard.card__desc}>
				Description field here text description field here text description field here
			</p>
			<ul className={stylesCard.card__list}>
				<li>
					<Item />
				</li>
				<li>
					<Item />
				</li>
				<li>
					<Item />
				</li>
			</ul>
		</article>
		)
}
 
