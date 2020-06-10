import React, { Component } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import stylesLayout from '../components/layout.module.scss'
import Card from '../components/card.module.js'
import CardList from '../components/cardList.module.js'

export default class Projects extends Component {

	constructor(props){
    super(props)
		this.state = {
      close: 'isClose'
    }
  }
  
	clickHandler(state){
    if(state === 'isClose'){
      this.setState(state => ({
        close: false
      }))
    } else {
      this.setState(state => ({
        close: 'isClose'
      }))
    }
  }
  
  render(){
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className={stylesLayout.container}>
          <CardList>
            <Card onClick={() => this.clickHandler(this.state.close) } state={this.state.close} />
          </CardList>
        </div>
      </Layout>
    )
  }
}