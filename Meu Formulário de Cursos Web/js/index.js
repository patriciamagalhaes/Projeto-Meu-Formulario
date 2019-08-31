function validar() {
	var nome = nome.value;
	var email = email.value;
    var mensagem = mensagem.value;
    var msg = msg.value;

    var nome = document.getElementById('nome'); 
    //Seleciona o campo com a ID "nome"
    nome.setCustomValidity('Preencha este campo corretamente.'); 
    //uso setCustomValidity para trocar a mensagem de erro dele. 
    
    var email = document.getElementById('email'); 
    //Seleciona o campo com a ID "email"
    email.setCustomValidity('Preencha este campo corretamente.'); 
    //uso setCustomValidity para trocar a mensagem de erro dele. 

    var mensagem = document.getElementById('mensagem');
    //Seleciona o campo com a ID "mensagem" 
    mensagem.setCustomValidity('Preencha este campo corretamente.'); 

    var msg = document.getElementById('msg'); 
        msg.setCustomValidity('Preencha este campo corretamente.'); 
    

    caixa_erro = document.getElementById('msg_erro');
	caixa_erro.innerHTML = 'Formulário Preenchido Corretamente!';
} 
   
