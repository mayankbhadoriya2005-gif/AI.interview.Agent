
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-agent-a7dfe.firebaseapp.com",
  projectId: "interview-agent-a7dfe",
  storageBucket: "interview-agent-a7dfe.firebasestorage.app",
  messagingSenderId: "315245382884",
  appId: "1:315245382884:web:532fdf36d9a6bd6ba3b0f1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}