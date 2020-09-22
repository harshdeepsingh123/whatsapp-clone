import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCaMUdN4kXjnIJTEEasYq-XQ41G2CrNgjw",
    authDomain: "whats-app-clone-30ad2.firebaseapp.com",
    databaseURL: "https://whats-app-clone-30ad2.firebaseio.com",
    projectId: "whats-app-clone-30ad2",
    storageBucket: "whats-app-clone-30ad2.appspot.com",
    messagingSenderId: "850106522409",
    appId: "1:850106522409:web:89ebcdb00def07951df538",
    measurementId: "G-PWZCB95DJ8"
  };
  const firebaseapp =firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;