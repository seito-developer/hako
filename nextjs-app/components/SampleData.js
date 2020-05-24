import React, { Component } from 'react'
import firebase from "firebase";
import "firebase/storage";
import styles from './SampleData.module.scss'
// import { loadFirebase }  from '../lib/db';

class SampleData extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data: []
    }
    this.getFireData()
  }
  
  getFireData(){
    //   let firebase = loadFirebase()
      let db = firebase.database()
      let ref = db.ref('/seito')
      let self = this
      ref.orderByKey()
      .limitToFirst(10)
      .on('value', (snapshot) => {
          self.setState({
              data: snapshot.val()
          })
      })
  }

  getTableData(){
      let result = []
      if(this.state.data == null || this.state.data.length == 0){
          return [
            <tr key="0"><th>NO DATA</th></tr>
          ]
      }
      for(let i in this.state.data){
          result.push(<tr key={i}>
              <td>{this.state.data[i].id}</td>
              <td>{this.state.data[i].name}</td>
              <td>{this.state.data[i].sources}</td>
              <td>{this.state.data[i].thumb}</td>
          </tr>)
      }
      return result
  }

  render(){
      if(this.state.data.length == 0){
          this.getFireData()
      }
      return (
        <table className={ styles.sampledata }>
            <tbody>
                { this.getTableData() }
            </tbody>
        </table>
      )
  }
}

export default SampleData

// import styles from './button.module.scss'
// import cn from 'classnames'

// export default function Button({children, mod}) {
// 	return (
// 		<button className={
// 				cn(styles.button, {
// 					[styles.primary]: mod === 'primary',
// 					[styles.info]: mod === 'info'
// 				})
// 			} type="button">
// 			{children}
// 		</button>)
// }
 
