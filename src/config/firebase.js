
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyDwia5EM6MhlgYuRWiN8OOqjhAPfh2I5to",
  authDomain: "project-66380.firebaseapp.com",
  projectId: "project-66380",
  storageBucket: "project-66380.appspot.com",
  messagingSenderId: "355331929506",
  appId: "1:355331929506:web:6403cb4f49636c68cbeefb",
  measurementId: "G-TDGE7XELKV"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);