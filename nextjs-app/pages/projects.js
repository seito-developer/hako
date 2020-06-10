import React, { Component } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import stylesLayout from '../components/layout.module.scss'
import Card from '../components/card.module.js'
import CardList from '../components/cardList.module.js'

export default class Projects extends Component {

	constructor(props){
    super(props)
		this.status = 'isClose'
  }
  
	clickHandler(status){
    const statusClass = 'isClose'

		if(status === statusClass){
      this.status = false
    } else {
      this.status = statusClass
    }
    console.log(this.status)
  }
  
  render(){
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className={stylesLayout.container}>
          <CardList>
            <Card onClick={() => this.clickHandler(this.status)} state={this.status} />
          </CardList>
        </div>
      </Layout>
    )
  }
}