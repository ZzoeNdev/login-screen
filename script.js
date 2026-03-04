const divNoLogin = document.getElementById("semloginContainer")
const buttonLogin = document.getElementById("loginButton")
const h1 = document.getElementById("h1")

buttonLogin.addEventListener("click", function(){
    if (divNoLogin.classList.contains("open")){
        divNoLogin.classList.remove("open")
        divNoLogin.classList.add("close")
        h1.classList.add("fadeIn")
        h1.style.textAlign = "end"
        setTimeout(function(){h1.classList.remove("fadeIn")}, 1000)
        h1.innerText = "Ainda não tem cadastro?"
        buttonLogin.innerText = "Cadastre-se agora!"
    }
    else{
        divNoLogin.classList.remove("close")
        divNoLogin.classList.add("open")
        h1.classList.add("fadeIn")
        h1.style.textAlign = "start"
        setTimeout(function(){h1.classList.remove("fadeIn")}, 1000)
        h1.innerText = "Já possui cadastro?"
        buttonLogin.innerText = "Entrar em sua conta!"
    }
});