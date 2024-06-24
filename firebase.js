import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDmglMu0dAWUXoI2JmpNrQbuugYJICBGRQ',
  authDomain: 'ai-demo-4c349.firebaseapp.com',
  projectId: 'ai-demo-4c349',
  storageBucket: 'ai-demo-4c349.appspot.com',
  messagingSenderId: '82835183610',
  appId: '1:82835183610:web:85177c7adf50e7e7637643',
  measurementId: 'G-CG9H0SQ6YB'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db }
