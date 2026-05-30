import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDEbk7nLEv415dH7cOfo0-NYWkq-rJtrSI",
  authDomain: "sri-venkateawara-car-travels.firebaseapp.com",
  projectId: "sri-venkateawara-car-travels",
  storageBucket: "sri-venkateawara-car-travels.firebasestorage.app",
  messagingSenderId: "1012539664290",
  appId: "1:1012539664290:web:365338f5841772368534fb",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export default app

