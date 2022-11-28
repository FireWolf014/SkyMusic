var usuarios = [
    {"email": "afsilva3021@uni9.edu.br", "senha": "123"},
    {"email": "leo10machadosiqueira@uni9.edu.br", "senha": "123"}
];
  
  function Login() {
    var usuario = document.getElementsByName('email')[0].value.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.email == usuario && us.senha == senha) {
            window.location = "musica.html";
            return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
  }

  console.log(alert);