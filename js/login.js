var usuarios = [
    {"login": "afsilva3021@uni9.edu.br", "senha": "123456"},
    {"login": "leo10machadosiqueira@uni9.edu.br", "senha": "123456"},
  ];
  
  function Login() {
    var usuario = document.getElementsByName('username')[0].value.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;
  
    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
              window.location = "./index.html";
              return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
  }