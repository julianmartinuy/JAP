function validation ()
{
    var form =document.getElementById("form");
    var email =document.getElementById("email").value;
    var pass =document.getElementById("pass").value;
    var text= document.getElementById("text");
    var textpass= document.getElementById("textpass");
    var pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var patternpass=/^[^ ]/;
    if (email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML="El correo electrónico ingresado es valido";
        text.style.color="#008000";
        


        
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML="El correo electrónico ingresado NO es valido";
        text.style.color="#FF0000";
        
    }
    if (email.match(pattern) && pass.match(patternpass)){
        
        setTimeout(function () {
        window.location.href = "index.html";
          }, 1500);
    }
    if (email== "" )
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML="Ingresa Correo Electrónico";
        text.style.color="#FF0000";
    }
    if (pass== "" )
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        textpass.innerHTML="Ingresa Contraseña";
        textpass.style.color="#FF0000";
    }
    
    


}


