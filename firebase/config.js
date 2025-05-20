import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCn20TvjC98ePXmOEQiJySSq2QN2p0QuRg",
  authDomain: "taralets-3adb8.firebaseapp.com",
  projectId: "taralets-3adb8",
  storageBucket: "taralets-3adb8.appspot.com",
  messagingSenderId: "353174524186",
  appId: "1:353174524186:web:45cf6ee4f8878bc0df9ca3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };