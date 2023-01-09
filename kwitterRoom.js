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

document.getElementById("User").innerHTML = "Bem-vindo(a) " + userName + "!";



function AddRoom()
{
  var nome = document.getElementById("Room").value;
  firebase.database().ref("/").child(nome).update({

purpose : "adicionar nome da sala"

  });        
localStorage.setItem("nome", nome);

window.locatio = "kwitterPage.htm";



















}
































function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomsNAmes = childKey;
console.log("Nome da Sala - " + roomsNAmes)       
linha =  "<div class='roomName ' id='"+ roomsNAmes +  "' onclick='irparaSala(this.id)'> " + roomsNAmes +"</div><hr>";  
document.getElementById("output").innerHTML += linha;
});
  });

}

getData();

function irparaSala(name){
console.log(name);
localStorage.setItem("roomName", name);
window.location = "kwitterPage.htm";

}