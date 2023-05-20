document.getElementById("btn-curso1").addEventListener("click",function Modal(){
    var img = document.getElementById("img-curso")
    var h2 = document.getElementById("title-curso")
    var p = document.getElementById("p-curso")
    var btnCurso = document.getElementById("link")
    
    
  img.src="./img/ilustra-poupando.png"
  img.style.border='1px solid #419488'
  h2.textContent='Investimento para iniciantes'
  btnCurso.addEventListener("click",()=>{
    btnCurso.href='./curso.html'
    btnCurso.target="_blank"
    window.location.href='./curso.html'+"?id="+1
    
  })
  
  
    
  });
  document.getElementById("btn-curso2").addEventListener("click",function Modal2(){
    var img = document.getElementById("img-curso")
    var h2 = document.getElementById("title-curso")
    var p = document.getElementById("p-curso")
    var btnCurso = document.getElementById("link")
   
    
    h2.textContent='Poupando e Rendendo'
       img.src="./img/ilustra-investimento.png"
       btnCurso.addEventListener("click",()=>{
        btnCurso.href='./curso.html'
        btnCurso.target="_blank"
        window.location.href='./curso.html'+"?id="+2
      })
    
  });
  document.getElementById("btn-curso3").addEventListener("click",function Modal3(){
    var img = document.getElementById("img-curso")
    var h2 = document.getElementById("title-curso")
    var p = document.getElementById("p-curso")
    var btnCurso = document.getElementById("link")


    h2.textContent='Independência Financeira'
    img.src="./img/ilustra-independencia.png"
    img.style.width="38%"

    btnCurso.addEventListener("click",()=>{
      btnCurso.href='./curso.html'
      btnCurso.target="_blank"
      window.location.href='./curso.html'+"?id="+3
    })
       
    
  });
  
  
