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

  function adduser()
  {
    user1 = document.getElementById("user_name").value ;
    console.log("user1" + user1);
    firebase.database().ref("/").child(user1).update({
        purpose : "adding user"
    });

    //window.location = "practice2.html"
  }