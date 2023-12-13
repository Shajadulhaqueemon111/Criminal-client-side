// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId
// };
const firebaseConfig = {
  apiKey: "AIzaSyCDjhNjS8NIaCaOgA9TTeTqStau4KjdLf0",
  authDomain: "case-file-auth.firebaseapp.com",
  projectId: "case-file-auth",
  storageBucket: "case-file-auth.appspot.com",
  messagingSenderId: "28001637923",
  appId: "1:28001637923:web:95c57557630262fd678396"
};
 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;