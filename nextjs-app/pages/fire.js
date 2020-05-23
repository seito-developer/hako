import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

// import { db }  from '../lib/db';
// import React from 'react'

import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByb1UkJCo_ORHNeyfZXPvv_Vz_P0-4ZAU",
  authDomain: "hako-735fa.firebaseapp.com",
  databaseURL: "https://hako-735fa.firebaseio.com",
  projectId: "hako-735fa",
  storageBucket: "hako-735fa.appspot.com",
  messagingSenderId: "229604952104",
  appId: "1:229604952104:web:1b0aad7bb12a8a2c6acd1d",
  measurementId: "G-MM74S5W53D"
}
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })
let projects = db.collection('projects').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data())
  })
})

// export default class projects extends React.Component {
//   static async getInitialProps() {
//     // db.jsのfirebaseのDB接続ファンクション
//     // DBのprojectsコレクション内を全て取得した結果 = result
//     let result = await new Promise((resolve, reject) => {
//       db.collection('projects')
//       .get()
//       .then(snapshot => {
//         let data = []
//         snapshot.forEach((doc) => {
//           data.push(
//             Object.assign({
//               id: doc.id
//             }, doc.data())
//           )
//         })
//         resolve(data)
//       }).catch(error => {
//         reject([])
//       })
//     })
//     return {projects: result}
//   }

//   handleDelete = (id) => {
//     console.log(id)
//   }

//   render() {
//     const projects = this.props.projects
//     return (
//         <React.Fragment>
//                 {projects.map(post =>
//                     <div className="post" key={post.id}>
//                         <h2>
//                             {post.title}
//                         </h2>
//                         <p>
//                             {post.body}
//                         </p>
//                         <button onClick={this.handleDelete.bind(this, post.id)}>削除</button>
//                     </div>
//                     )}
//             <style jsx>{`
//             .post {
//                 width: 40%;
//                 border: 1px solid black;
//                 background-color: gray;
//                 margin-bottom: 10px;
//             }
//             `}</style>
//         </React.Fragment>
//     );
//   }
// }

export default function Fire({ projects }) {
  return (
    <Layout fire>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        { projects }
      </section>
    </Layout>
  )
}
