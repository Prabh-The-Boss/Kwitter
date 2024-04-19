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

p_user = localStorage.getItem("user_name");
p_room = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+p_room).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Strat code         
         console.log(firebase_message_id)
         console.log(message_data);
         names = message_data['name'];
         msg = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4>"+ names +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + msg + "</h4>";
         like_button = "<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
         row = name_with_tag + message_with_tag +like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
//End code          
      } });  }); }
getData();

function send()
{
      msg_1 = document.getElementById("incoming_msg").value ;
      firebase.database().ref(p_room).push({
            name: p_user, 
            message: msg_1, 
            like: 0 
      });
      document.getElementById("incoming_msg").value = ""; 
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

function updateLike(message_id)
{
      console.log("clicked on the Like button - "+ message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value ;
      update_like = Number(likes) + 1;
      console.log(update_like);

      firebase.database().ref(p_room).child(message_id).update({
            like : update_like
      });
} 