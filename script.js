const nav=document.querySelector(".nav"), menu=document.getElementById("menu");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
