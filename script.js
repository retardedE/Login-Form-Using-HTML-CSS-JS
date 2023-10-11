const passwordField=document.querySelectorAll('.inputField')
const showPassword=document.querySelector('#show')
let isClicked=true
showPassword.addEventListener('click', ()=>{
    if(passwordField[1].value&&isClicked){
        passwordField[1].setAttribute("type","text")
        showPassword.setAttribute('class','bx bx-hide')
        isClicked=false
    }
    else if(passwordField[1].value&&isClicked==false){
        passwordField[1].setAttribute("type","password")
        showPassword.setAttribute('class','bx bx-show') 
        isClicked=true
    }
})