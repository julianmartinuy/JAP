function login(){
    let mail=document.getElementById('username').value;
    let pass=document.getElementById('clave').value;
    if(mail==="" || password===""){
        document.getElementById('username').classList.add('error');
        document.getElementById('clave').classList.add('error');
        alert ("Debe ingresar mail y contraseña");
    }
    else
    {
        localStorage.setItem('correo',mail);
        location.href='index.html';
    }
}
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('entrada').addEventListener('click',()=>{
    login();    

    })
})