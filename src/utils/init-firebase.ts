
// Import the functions you need from the SDKs you need
import firebase from  'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/compat/app'

// Your web app's Firebase configuration
const app =firebase.initializeApp({
  apiKey: "AIzaSyBGG6V-8Oxu3dXseOfkyYsK6DTCxWh2IG4",
  authDomain: "queuing-system-a0487.firebaseapp.com",
  projectId: "queuing-system-a0487",
  storageBucket: "queuing-system-a0487.appspot.com",
  messagingSenderId: "331137707486",
  appId: "1:331137707486:web:48252c6937c05b7a6ac14f"
})


// Initialize Firebase


export const auth = app.auth();