import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBw5_p_OyGTgqLANMPSCtZjmMkQbr87OgI",
  authDomain: "front7loginauth.firebaseapp.com",
  projectId: "front7loginauth",
  storageBucket: "front7loginauth.appspot.com",
  messagingSenderId: "1019303934628",
  appId: "1:1019303934628:web:e39866ceb9fb79e90d0431"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();

export {
    app,
    google
}