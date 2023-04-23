
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBig0gcPD0R6E0XtS2d4DLWvwTWXLBf5T8",
      authDomain: "kwitter-3302a.firebaseapp.com",
      databaseURL: "https://console.firebase.google.com/project/kwitter-3302a/database/kwitter-3302a-default-rtdb/data/~2F",
      projectId: "kwitter-3302a",
      storageBucket: "kwitter-3302a.appspot.com",
      messagingSenderId: "197075306042",
      appId: "1:197075306042:web:bf4699ea898972c4d75703"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    document.getElementById("username").innerHTML =
    "Welcome " + username + "!"; 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name - " + Room_names);
       row = "<div class='room name' id= "+Room_names+" onclick='redirecttoRoomName(this.id)'#>"+ Room_names +"</div><hr>";  
       document.getElementById("output").innerHTML += row;

      });});}
getData();
