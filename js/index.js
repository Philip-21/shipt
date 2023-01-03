document.querySelector(".buzz").addEventListener("click",function(){

  document.querySelector("#name").style.display="none"
  document.querySelector("#top").style.display="block"
})
document.querySelector(".indi").addEventListener("click",function(){

  document.querySelector("#name").style.display="block"
  document.querySelector("#top").style.display="none"
})

document.querySelector(".indi").addEventListener("click",function(){
  document.querySelector(".form-whole .type2").style.backgroundColor="black"
  document.querySelector(".form-whole .type1").style.background="none"
  document.querySelector(".form-whole .type1").style.color="black"
  document.querySelector(".form-whole .type2").style.color="white"
})
document.querySelector(".buzz").addEventListener("click",function(){
  document.querySelector(".form-whole .type1").style.backgroundColor="black"
  document.querySelector(".form-whole .type2").style.background="none"
  document.querySelector(".form-whole .type2").style.color="black"
  document.querySelector(".form-whole .type1").style.color="white"
})

document.querySelector("#mine").addEventListener("click",function(){
  document.querySelector("#calendar").style.backgroundColor="black"
})