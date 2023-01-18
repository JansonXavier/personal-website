import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBO3S6OSvIQirTCJsppTrF7yNDfvvkpbVo",
  authDomain: "personal-website-55db5.firebaseapp.com",
  projectId: "personal-website-55db5",
  storageBucket: "personal-website-55db5.appspot.com",
  messagingSenderId: "15052680769",
  appId: "1:15052680769:web:77c36eab880de3145520c0",
  measurementId: "G-F9ZFYQG98P",
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
