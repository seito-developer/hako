import stylesCardList from './cardList.module.scss'

export default function CardList({children}) {
	return (
			<div className={stylesCardList.cardList}>
				{ children }
			</div>
		)
}
 
