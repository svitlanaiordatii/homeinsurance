import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.PROD?process.env.FIREBASE_APIKEY:import.meta.env.VITE_FIREBASE_DEV_APIKEY,
  authDomain: "home-insurance-pricer.firebaseapp.com",
  projectId: "home-insurance-pricer",
  storageBucket: "home-insurance-pricer.appspot.com",
  messagingSenderId: "1098365681142",
  appId: "1:1098365681142:web:1e032667cbdae1aac35bd7",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
