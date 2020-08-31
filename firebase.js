import firebase from "firebase";

// const firebaseAPp = firebase.initializeApp({
//     apiKey: "AIzaSyCpPmFFhVCNURHGvaSALh1pHE1bImsBRDQ",
//     authDomain: "clone-c3f0f.firebaseapp.com",
//     databaseURL: "https://clone-c3f0f.firebaseio.com",
//     projectId: "clone-c3f0f",
//     storageBucket: "clone-c3f0f.appspot.com",
//     messagingSenderId: "472853274552",
//     appId: "1:472853274552:web:5db28835a83bf2a9fe794d"
// });

const firebaseConfig = firebase.initializeApp( {
    apiKey: "AIzaSyAROW5_8uBxVhTZB7Y3ke-3zVfcx9oyTnE",
    authDomain: "turnixs.firebaseapp.com",
    databaseURL: "https://turnixs.firebaseio.com",
    projectId: "turnixs",
    storageBucket: "turnixs.appspot.com",
    messagingSenderId: "529736742530",
    appId: "1:529736742530:web:2a1742fac430a4f136e69b",
    measurementId: "G-7Z490EGH68"
  });

const auth = firebase.auth();

export { auth };