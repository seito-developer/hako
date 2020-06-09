import stylesHero from './hero.module.scss'
import stylesLayout from './layout.module.scss'
import cn from 'classnames'
import Button from '../components/button.module.js'

export default function Hero() {
	return (
		<div className={stylesHero.hero}>
			<div className={stylesLayout.container}>
				<div className={stylesHero.hero__logo}></div>
				<div className={stylesHero.hero__headline}>HubBoard</div>
				<h1 className={stylesHero.hero__desc}>
					Help Your project.<br/>
					It's easy to access to any materials here.
				</h1>
				<div className={stylesHero.hero__button}>
					<Button color="google" size="large">
						{/* <FontAwesomeIcon icon={faGoogle} className={classNames(styles.icon, styles.large, styles.google)} /> */}
						Login with Google
					</Button>
				</div>
			</div>
		</div>
		)
}
 
