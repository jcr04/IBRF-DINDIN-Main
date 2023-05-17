document.getElementById('enviarEmail').addEventListener('click', function() {

  
    // Dados do email
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    var msg = document.getElementById('msg-contato')
  
    // Verificar se os campos estão preenchidos
    if (nome === '' || email === '' || mensagem === '') {
      
      msg.textContent='Por favor, preencha todos os campos.'
      msg.style.color="#ea6e02"
  
      return;
    }
  
    // Construir o objeto de dados para enviar ao servidor
    var data = {
      nome: nome,
      email: email,
      mensagem: mensagem
    };
  
    // Enviar o email usando uma requisição AJAX (usando biblioteca jQuery)
    $.ajax({
      type: 'POST',
      url: 'URL_DO_SERVIDOR',
      data: data,
      success: function(response) {
        msg.textContent='Email enviado com sucesso!'
        msg.style.color='green'
        
      },
      error: function(error) {    
      msg.textContent='Erro ao enviar o email. Por favor, tente novamente mais tarde.'
      msg.style.color="#ea6e02"
      }
    });
  });