
let typingTimer;
let nome = document.getElementById('nome');
let email = document.getElementById('email');
let enviado = document.getElementById('enviado')




document.getElementById('cep').addEventListener("input",function buscaCep(){
    const cepEd = document.getElementById('cep').value 
    clearTimeout(typingTimer); // Limpa o temporizador anterior

   

    // Inicia um novo temporizador após o término da digitação
    typingTimer = setTimeout(() => {

      // Chamada da função que será executada após o término da digitação
    

      fetch(`https://viacep.com.br/ws/${cepEd}/json/`)
      .then(response => {
       if (!response.ok) {
         throw new Error('Erro ao fazer a requisição: ' + response.status);
        }
      
            response.json().then(data=>{
            console.log(data.localidade);
            document.getElementById('cidade').value=data.localidade
            document.getElementById('estado').value=data.uf
            document.getElementById('msg').textContent=''

      })
      })
      .catch(error => {
        document.getElementById('msg').textContent='Cep invalido!'
      });
    

   }, 800);
        
})
document.getElementById('button-prof').addEventListener('click',()=>{

    if(nome.value == '' || email.value == ''){
        enviado.textContent='Campos Nome e E-mail devem ser preenchidos!'
        enviado.style.color="#ea6e02"

    }else{
      enviado.textContent='Enviado!'
      enviado.style.color="green"
      document.getElementById('cidade').value=''
      document.getElementById('estado').value=''
     document.getElementById('msg').textContent=''
     document.getElementById('nome').value=''
     document.getElementById('sobrenome').value=''
     document.getElementById('profissao').value=''
     document.getElementById('data-nascimento').value=''
     document.getElementById('estado').value=''
     document.getElementById('cep').value=''
     document.getElementById('endereco').value=''
     document.getElementById('email').value=''
    }
})