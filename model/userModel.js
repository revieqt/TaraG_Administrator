import { db } from "../firebase/config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";

export async function getAllUsers() {
  const usersCol = collection(db, "users");
  const snapshot = await getDocs(usersCol);
  const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return users;
}
