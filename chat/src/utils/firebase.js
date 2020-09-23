import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyD3Up7z5g-ZNrIzgm3gw1bbgXla7yx7FiA',
  authDomain: 'chat-9e7e0.firebaseapp.com',
  databaseURL: 'https://chat-9e7e0.firebaseio.com',
  projectId: 'chat-9e7e0',
  storageBucket: 'chat-9e7e0.appspot.com',
  messagingSenderId: '557185216543',
  appId: '1:557185216543:web:baeb4f566ad797007f252a',
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
