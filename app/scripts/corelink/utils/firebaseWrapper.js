import Firebase from 'firebase'

const FIREBASECONFIG = {
  apiKey: "AIzaSyCu0WuOVZwpXQjY6PrlJxLurDak1Sf5Mns",
  authDomain: "corelink-98be2.firebaseapp.com",
  databaseURL: "https://corelink-98be2.firebaseio.com",
  storageBucket: "corelink-98be2.appspot.com",
};

const ref = Firebase.initializeApp(FIREBASECONFIG);

const firebaseTools = {
  getInitialData: () => {
    return Firebase.database().ref('/').on('value', (snapshot) => {
       return snapshot.val();
    });
  }
}

export default firebaseTools;
