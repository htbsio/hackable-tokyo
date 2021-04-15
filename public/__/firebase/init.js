if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyAjeApcaA5S5Ui9KhhXU1WtnEmWj_tVcJE",
  "authDomain": "hackable-tokyo.firebaseapp.com",
  "databaseURL": "",
  "messagingSenderId": "293354390477",
  "projectId": "hackable-tokyo",
  "storageBucket": "hackable-tokyo.appspot.com"
});