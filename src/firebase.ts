import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA7KGS-cS2uAMvlpUSEn3_7S2i_YZhk6m4',
  authDomain: 'where-is-waldo-007.firebaseapp.com',
  projectId: 'where-is-waldo-007',
  storageBucket: 'where-is-waldo-007.appspot.com',
  messagingSenderId: '851593259364',
  appId: '1:851593259364:web:b994063820043dedff3271',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
