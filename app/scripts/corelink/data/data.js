import Firebase from 'firebase'

const FIREBASECONFIG = {
    apiKey: "AIzaSyAlncCoKsR3_6P4RQ9LsiYqtET3BiDwI90",
    authDomain: "corelink-7777c.firebaseio.com/",
    databaseURL: "https://corelink-7777c.firebaseio.com/",
    storageBucket: "project-4556145440973351064.appspot.com",
};
const ref = Firebase.initializeApp(FIREBASECONFIG);

const data = () => {
  
}


// const data = {
//   {
//     "categories":
//       {
//         "Project Management" : [
//           {
//             "name": "Trello",
//             "url": "www.trello.com",
//             "desc": "Project Organization"
//           }
//         ],
//         "Communication" : [
//           {
//             "name": "Email",
//             "url": "www.gmail.com",
//             "desc": "Communication"
//           },
//           {
//             "name": "Slack",
//             "url": "www.slack.com",
//             "desc": "Instant Messaging"
//           }
//         ]
//       }
//   }
// }

export default data;
