document.getElementById("register").addEventListener('submit',(e)=>{
    username=document.getElementById("username").value;
    password=document.getElementById("password").value;
    localStorage.setItem(username,password);
})