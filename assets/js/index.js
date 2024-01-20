// password show hide
let key = document.getElementById("passEye");
let passIn = document.getElementById("mPass");
key.addEventListener("click",()=>{
    key.classList.toggle("show"); 
    if(key.classList.contains("show")){
        key.src = "assets/images/password-show.svg";
        passIn.type = "text";
    }else{
        key.src = "assets/images/password-hide.svg";
        passIn.type = "password";
    }
    passIn.focus()
});