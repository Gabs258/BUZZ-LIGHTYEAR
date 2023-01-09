//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyAhsR1iyc6dOFQt2tCP9i6D6o2GBzwdLWo",
    authDomain: "o-mainhaaaaaa-95406.firebaseapp.com",
    databaseURL: "https://o-mainhaaaaaa-95406-default-rtdb.firebaseio.com",
    projectId: "o-mainhaaaaaa-95406",
    storageBucket: "o-mainhaaaaaa-95406.appspot.com",
    messagingSenderId: "912625555023",
    appId: "1:912625555023:web:1898e2eee7180a7cd37c3a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  userName = localStorage.getItem("userName");
  roomsName = localStorage.getItem("nome");

  //LINKS FIREBASE
function enviar(){
msg = document.getElementById("msg").value;
firebase.database().ref(roomsName).push({
nome : userName,
message : msg,   

}) 



}

function getData() { firebase.database().ref("/"+roomsName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebaseMessageId = childKey;
    messageData = childData;
//Início do código
nome = messageData["nome"]
message = messageData["message"]

namePreparar = "<h4> "+ name + " </h4>"

messagePreparar = "<h4 class='message_h4'>" + message + " </h4>"; 
linha = namePreparar + messagePreparar;

document.getElementById("output").innerHTML += linha
//Fim do código
 } });  }); }
getData();