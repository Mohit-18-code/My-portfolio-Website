const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconclose = document.querySelector('.icon-close');

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");


eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "eye-outline.svg";
    }else{
        password.type = "password";
        eyeicon.src = "eye-off-outline.svg";
    }
}

let tete = document.getElementById("tete");
let tata = document.getElementById("tata");


tete.onclick = function(){
    if(tata.type == "password"){
        tata.type = "text";
        tete.src = "eye-outline.svg";
    }else{
        tata.type = "password";
        tete.src = "eye-off-outline.svg";
    }
}


registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});


btnpopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});