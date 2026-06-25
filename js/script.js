function verificarLogin(){
let login = document.getElementById("login").value;
let senha = document.getElementById("senha").value;

if (login==="arthur" && senha=== "123"){
    alert("seja bem vindo");
    window.location.href="games.html";
} 
else {
    alert("senha incorreta");
}

login = document.getElementById("login").value='arthur';
senha = document.getElementById("senha").value='123';

}
