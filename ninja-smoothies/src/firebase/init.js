import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBMv9XkxOtyK8eWkGXbvNkTtjPVNGvbKbs",
  authDomain: "udemy-ninja-smoothies-a7515.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-a7515.firebaseio.com",
  projectId: "udemy-ninja-smoothies-a7515",
  storageBucket: "udemy-ninja-smoothies-a7515.appspot.com",
  messagingSenderId: "687953932554",
  appId: "1:687953932554:web:58443877a2942a0d"
};
const firebaseApp = firebase.initializeApp(config);
//firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()
