const usuarios = [
    {"login": "afsilva3021", "senha": "123456"},
    {"login": "leo10machadosiqueira", "senha": "123456"}
  ];
  
  function Login() {
    var usuario = document.getElementsByName('username')[0].value.toLowerCase();
    var password = document.getElementsByName('password')[0].value;
  
    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login == usuario && us.senha == password) {
             window.location ="index.html";
            return true;
        }
    }
    alert("Email ou Senha incorreto.");
    return false;
  }