import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAUfEqfy21bT5_d_jPXzCiK2cETQhAH96M",
    authDomain: "morazan.firebaseapp.com",
    databaseURL: "https://morazan.firebaseio.com",
    projectId: "morazan",
    storageBucket: "morazan.appspot.com",
    messagingSenderId: "1035752743768"
  };
  
  const fire = firebase.initializeApp(config);
  export default fire;