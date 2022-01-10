
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA18L-5Opj81tW5m7tMVDyRdyKAKy3qA48",
      authDomain: "lets-chat-app-1f00c.firebaseapp.com",
      databaseURL: "https://lets-chat-app-1f00c-default-rtdb.firebaseio.com",
      projectId: "lets-chat-app-1f00c",
      storageBucket: "lets-chat-app-1f00c.appspot.com",
      messagingSenderId: "593662457296",
      appId: "1:593662457296:web:96dacb156bf7334e91b5d5"
    };
    const app = initializeApp (firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
