import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import SampleData from '../components/SampleData'
import firebase from "firebase";
const config = {
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
  firebase.initializeApp(config)
}
// const userId = firebase.auth().currentUser.uid;
let db = firebase.database()
let ref = db.ref('seito')
// ref.orderByKey()
//     .limitToFirst(10)
//     .on('value', (snapshot) => {
//       console.log(snapshot)
//       self.setState({
//           data: snapshot.val()
//       })
//     })
console.log(ref)

// import { loadFirebase }  from '../lib/db';



export default function Fire() {
  return (
    <Layout fire>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section>
        <SampleData />
      </section>
    </Layout>
  )
}

  
// //   (snapshot) => {
// //   let data = snapshot.docs.forEach(doc => {
// //     // console.log(doc.data().sources[0])
// //     // return doc.data().sources
// //     doc.data().sources[0]
// //   })
// //   return data
// // })

// // doc.data().sources[0]

// // export default class projects extends React.Component {
// //   static async getInitialProps() {
// //     // db.jsのfirebaseのDB接続ファンクション
// //     // DBのprojectsコレクション内を全て取得した結果 = result
// //     let result = await new Promise((resolve, reject) => {
// //       db.collection('projects')
// //       .get()
// //       .then(snapshot => {
// //         let data = []
// //         snapshot.forEach((doc) => {
// //           data.push(
// //             Object.assign({
// //               id: doc.id
// //             }, doc.data())
// //           )
// //         })
// //         resolve(data)
// //       }).catch(error => {
// //         reject([])
// //       })
// //     })
// //     return {projects: result}
// //   }

// //   handleDelete = (id) => {
// //     console.log(id)
// //   }

// //   render() {
// //     const projects = this.props.projects
// //     return (
// //         <React.Fragment>
// //                 {projects.map(post =>
// //                     <div className="post" key={post.id}>
// //                         <h2>
// //                             {post.title}
// //                         </h2>
// //                         <p>
// //                             {post.body}
// //                         </p>
// //                         <button onClick={this.handleDelete.bind(this, post.id)}>削除</button>
// //                     </div>
// //                     )}
// //             <style jsx>{`
// //             .post {
// //                 width: 40%;
// //                 border: 1px solid black;
// //                 background-color: gray;
// //                 margin-bottom: 10px;
// //             }
// //             `}</style>
// //         </React.Fragment>
// //     );
// //   }
// // }
// export async function getProjects() {
//   let firebase = await loadFirebase()
//   let db = firebase.firestore()
//   const settings = { timestampsInSnapshots: true }
//   db.settings(settings)

//   const docRef = db.collection('projects').doc()
//   const data = docRef.get().then((doc) => {
//     console.log(doc.data())
//   }).catch(function(error) {
//     console.log("Error getting cached document:", error);
//   })

//   return {
//     props: {
//       data
//     }
//   }
// }
// // export async function getProjects() {
// //   // const projects = getSortedPostsData()
// //   let firebase = await loadFirebase() 
// //   let db = firebase.firestore()
// //   const settings = { timestampsInSnapshots: true }
// //   db.settings(settings)
  
// //   let projects = await new Promise(resolve,reject) => {
// //   // let projects = await new Promise((resolve,reject) => {
// //     db.collection('projects')
// //       .limit(10)
// //       .get()
// //       .then(snapshot => {
// //         let data = []
// //         snapshot.forEach((doc) => {
// //           data.push(doc.data().sources)
// //           // doc.data()
// //         })
// //         console.log('hi')
// //         resolve(data)
// //       })
// //       .catch(error => {
// //         console.log('no')
// //         reject([])
// //       })
// //   })
  

// //   return {
// //     props: {
// //       projects
// //     }
// //   }

//   // return {
//   //   props: {
//   //     allPostsData
//   //   }
//   // }
// //   console.log(projects)
// // }


// export default function Fire({ data }) {
//   return (
//     <Layout fire>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section>
//         { data }
//       </section>
//     </Layout>
//   )
// }
