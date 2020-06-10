import stylesCard from './card.module.scss'
import Item from '../components/item.module.js'
import cn from 'classnames'

export default function Card({projects, onClick, state}) {

	const cards = projects.map((project) =>
		<article onClick={onClick} className={cn(stylesCard.card, {
			[stylesCard.isClose]: state === 'isClose'
		})}>
			<div className={stylesCard.card__cover}></div>
			<div className={stylesCard.card__header}>
				<div className={stylesCard.card__heading}>
					<img src={project.avator}/>
					<h1>{project.name}</h1>
				</div>
				<button className={stylesCard.card__edit} type="button">...</button>
			</div>
			<p className={stylesCard.card__desc}>
				{project.desc}
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
	return cards
}
 
