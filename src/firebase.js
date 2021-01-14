import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "config";

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"></script>
//
// <!-- TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-analytics.js"></script>


    const config = firebaseConfig;

    // Initialize Firebase
    firebase.initializeApp(config);
    firebase.analytics();

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();
