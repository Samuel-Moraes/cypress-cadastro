function valida_cadastro_professor(){
    var email_configurado = "professor@teste.com";
    var senha_configurada = "erro";

    var nome = document.getElementById("id_nome_professor").value;
    var email = document.getElementById("id_email_professor").value;
    var senha = document.getElementById("id_senha_professor").value;

    var msg_email_cadastrado = "O email " + email + " já está cadastrado!";
    var msg_cadastro_sucesso = "O professor " + nome + " Foi cadastrado com sucesso!"
    var msg_senha_invalida = "A senha escolhida é invalida!"

    if(email == email_configurado){
        alert(msg_email_cadastrado)
    } 
    else if(senha == senha_configurada){
        alert(msg_senha_invalida)
    }

    else{
        alert(msg_cadastro_sucesso)
    }
}

function valida_cadastro_aluno(){
   var email_configurado = "aluno@teste.com";
   var senha_configurada = "erro";

   var nome = document.getElementById("id_nome_aluno").value;
   var email = document.getElementById("id_email_aluno").value;
   var senha = document.getElementById("id_senha_aluno").value;

   var msg_email_cadastrado = "O email " + email + " já está cadastrado!";
   var msg_cadastro_sucesso = "O aluno " + nome + " Foi cadastrado com sucesso!"
   var msg_senha_invalida = "A senha escolhida é invalida!"

   if(email == email_configurado){
       alert(msg_email_cadastrado)
   } 
   else if(senha == senha_configurada){
       alert(msg_senha_invalida)
   }
   else{
       alert(msg_cadastro_sucesso)
   }
}

function valida_login(){
    var email_aluno = "aluno@teste.com";
    var email_professor = "professor@teste.com";
    var senha_configurada = "1";
 
    var email = document.getElementById("id_email_login").value;
    var senha = document.getElementById("id_senha_login").value;
 
    var msg_email_nao_cadastrado = "O email " + email + " Não está cadastrado!";
    var msg_senha_incorreta = "A senha está incorreta!"
    var msg_sucesso = "Login realizado com sucesso, seja bem vindo! " + email;
 
    if(email != email_aluno && email != email_professor){
        alert(msg_email_nao_cadastrado)
    } 
    else if(senha != senha_configurada){
        alert(msg_senha_incorreta)
    }
    else{
        alert(msg_sucesso)
    }
 }