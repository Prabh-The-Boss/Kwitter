function addUser() {

    u_n = document.getElementById("user_name").value ;

    localStorage.setItem("user_name", u_n);

    window.location = "kwitter_room.html";
}

