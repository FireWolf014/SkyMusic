<?php
class cadastro {
    private $nome;
    private $email;
    private $password;

   public function getInfo(){
    
        return $this->nome;
    }

    function informaCao(nome, email, password){
        $this->name = $_GET["nomeid"];
        $this->email = $_GET["loginid"];
        $this->password = $_GET["senhaid"];

        return $this->informaCao;
}

?>



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Cadastro</title>
    <link rel="icon" href="../imagens/logoMiniatura.jpeg">
    <link rel="stylesheet" href="../css/cadastro.css">
    <script src="../JS/login.js"></script>
    <link rel="shortcut icon" type="imagem/x-icon" href="../img/skymusic.png" />

</head>

<body>
    <form name="login">
        <div>

            <h1 id="login">Cadastro</h1>
            <input type="text" id="nomeid" placeholder="Digite seu nome" required name="text">
            <br> <br>
            <input type="email" id="loginid" placeholder="Digite seu email" required name="email">
            <br> <br>
            <input type="password" id="senhaid" placeholder="Digite sua senha" required name="senha">
            <br><br>
            <input type="submit" class="enviar" onclick="Enviar();" value="Concluido">
            <br><br>

        </div>
    </form>


</body>

</html>