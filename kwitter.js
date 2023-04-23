function addUser(){
    username=document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location="kwitter_room.html";
    
}

function addRoom (){
    room_name=document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({
         purpose: "adding room name"})
         localStorage.setItem("room_name",room_name);
         window.location = "kwitter_page.html";
}

function redirecttoRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    widow.location="kwitter.html";
}