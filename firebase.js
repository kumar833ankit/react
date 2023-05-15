import firebase from "firebase";




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyBOtoOZJM9RRc_808_VP9IhRAWBAfaSq2I",
   authDomain: "penn-ecb60.firebaseapp.com",
   projectId: "penn-ecb60",
   storageBucket: "penn-ecb60.appspot.com",
   messagingSenderId: "16548836882",
   appId: "1:16548836882:web:c9e8ba543b6027b3d7cacb",
   measurementId: "G-PNQTVLSZ8G"
  };

   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth = firebase.auth();
   const provider = new firebase.auth.GoogleAuthProvider();



   export{ auth , provider};
   export default db;
