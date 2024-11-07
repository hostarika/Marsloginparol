const box=document.getElementById("box");
const eye=document.getElementById("eye");
const modmeId=document.getElementById("modme-id");
const parol=document.getElementById("parol");
const btn=document.getElementById("btn");
const err=document.getElementById("err");
const profil =document.getElementById("profil")
const logOut=document.getElementById("log-out")


let user={
    ism:"Amirxon",
    familya:"Ibaydillayev",
    id:"mars",
    parol:"1234",
    coin: 8000,
    xp: 5000
}






eye.addEventListener("click",()=>{
    if(parol.type=="password"){
        parol.type="text";
    }else{
        parol.type="password";
    }
})


parol.addEventListener("input",()=>{
    btn.style.backgroundColor="orange";
    btn.disabled=false;
})


btn.addEventListener("click",()=>{


    if(modmeId.value==user.id && parol.value==user.parol){
        box.style="display:none";
        profil.style="display:block";
        localStorage.setItem("user",JSON.stringify(user));
    }else{
         err.style="display:block";
    }
})





logOut.addEventListener("click",()=>{
    location.reload();
})