import React, { useState } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import stylesLayout from '../components/layout.module.scss'
import Card from '../components/card.module.js'
import CardList from '../components/cardList.module.js'

export default function Projects() {
  const [state, toggle] = useState('isClose');

  const switchClass = (elm) => {
		// elm.classLi
	}
	const clickHandler = ({state}) => {
    console.log(state)
		// let $self = e.target;
		// if($self.className.indexOf('isClose') !== -1){
		// 	console.log('hi')
		
		// } else {
		// 	console.log($self.classList)
		// }
  }
  
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={stylesLayout.container}>
        <CardList>
          <Card onClick={ () => toggle({ 
            if(state = 'isClose'){
              state="" 
            } else { 
              state="isClose" 
            }
          }) } state />
          <Card onClick={ () => toggle({ 
            if(state = 'isClose'){
              state="" 
            } else { 
              state="isClose" 
            }
          }) } state />
          <Card onClick={ () => toggle({ 
            if(state = 'isClose'){
              state="" 
            } else { 
              state="isClose" 
            }
          }) } state />
        </CardList>
      </div>
    </Layout>
  )
}
