// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD1_5T0zPA6z1_2gQS-47Er2ciIifAyU-I",
      authDomain: "kwitter-a6ea7.firebaseapp.com",
      databaseURL: "https://kwitter-a6ea7-default-rtdb.firebaseio.com",
      projectId: "kwitter-a6ea7",
      storageBucket: "kwitter-a6ea7.appspot.com",
      messagingSenderId: "344150142195",
      appId: "1:344150142195:web:f186c9701a02b8e21b5b86"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
      user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

      function send(){
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });
            document.getElementById("msg").value = "";
      }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }
