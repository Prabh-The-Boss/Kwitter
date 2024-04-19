
var firebaseConfig = {
      apiKey: "AIzaSyBTzW72MJ6IQhESyyCacI0wWVvZhEQulIc",
      authDomain: "kwitter-app-bro.firebaseapp.com",
      databaseURL: "https://kwitter-app-bro-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-bro",
      storageBucket: "kwitter-app-bro.appspot.com",
      messagingSenderId: "757231575095",
      appId: "1:757231575095:web:6c3215293123bcb22edfb2"
    };
  
    firebase.initializeApp(firebaseConfig);
  
use_nam = localStorage.getItem("user_name");
document.getElementById("us_na").innerHTML = "Welcome " +  use_nam + "!" ;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //start code
      console.log("Room Names - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData()

function redirect(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function addRoom()
{
      r_n=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(r_n).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", r_n);
      window.location="kwitter_page.html"
}