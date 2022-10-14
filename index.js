const email = document.getElementById("email");
const senha = document.getElementById("senha");
const input = document.getElementById("emailError");
const input2 = document.getElementById("senhaError")

function login(){
    if(email.value === ''){
        alert("Preencha seu Endereço de email!");
        input.style.border = "1px solid red";
        input2.style.border = "1px solid red"
    }else if(senha.value === ''){
        alert("Preencha sua senha!");
        input.style.border = "none"
        input2.style.border = "1px solid red";
        senha.value = "";
    }else if(email.value === "admin" && senha.value === "admin"){
        window.open("https://novo-projeto-dg1g.vercel.app/")
    }else if(email.value.length < 19){
        alert("Email Invalido!");
        input.style.border = "1px solid red";
        senha.value = "";
    }else if(senha.value.length < 8){
        alert("Senha Invalida!");
        input.style.border = "none"
        input2.style.border = "1px solid red";
        email.value = "";
        senha.value = "";
    }else if(email.value.length > 19 && senha.value.length > 8){
        alert("Email não cadastrado!");
        input.style.border = "none"
        input2.style.border = "none"
        email.value = "";
        senha.value = "";
    }

}