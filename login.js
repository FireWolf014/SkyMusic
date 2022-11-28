var usuarios = [
    {"login": "afsilva3021", "senha": "123456"},
    {"login": "leo10machadosiqueira", "senha": "123456"}
  ];
  
  function Login() {
    var usuario = document.getElementsByName('username')[0].value.toLowerCase();
    var password = document.getElementsByName('senha')[0].value;
  
    for (var u in usuarios) {
        var us = usuarios[u];
        if(us.login == usuario && us.senha == password) {
          window.location = "../html/musica.html";
            
          return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    return true;
  }

  console.log(Login);