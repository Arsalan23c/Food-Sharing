

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import { getAuth ,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firestore-auth.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.4/storage-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyC_jHAFHXVvCigEP8BfZh9FA7_V7fOw1Yo",
    authDomain: "food-sharing-9e405.firebaseapp.com",
    projectId: "food-sharing-9e405",
    storageBucket: "food-sharing-9e405.appspot.com",
    messagingSenderId: "1007308329605",
    appId: "1:1007308329605:web:451115181e495b6c27cfec",
    measurementId: "G-90KMVQ93JF",
 };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getStorage(app);


export {
    auth , storage, db , onAuthStateChanged
};
