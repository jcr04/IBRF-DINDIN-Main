document.getElementById('enviarEmail').addEventListener('click', function() {
    // Dados do email
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
  
    // Verificar se os campos estão preenchidos
    if (nome === '' || email === '' || mensagem === '') {
      alert('Por favor, preencha todos os campos.');
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
        alert('Email enviado com sucesso!');
      },
      error: function(error) {
        alert('Erro ao enviar o email. Por favor, tente novamente mais tarde.');
      }
    });
  });