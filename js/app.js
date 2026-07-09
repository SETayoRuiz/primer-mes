/* ==========================================================
   CONFIGURACIÓN
========================================================== */

const PASSWORD = "amor"; // <- Cambia esto por la contraseña que quieran

// IMPORTANTE:
// Cambia esta fecha por la fecha oficial en la que comenzaron.
const START_DATE = new Date("2026-06-12T00:00:00");

/* ==========================================================
   ELEMENTOS
========================================================== */

const welcome = document.getElementById("welcome");
const login = document.getElementById("login");
const app = document.getElementById("app");

const startButton = document.getElementById("startButton");
const loginButton = document.getElementById("loginButton");

const passwordInput = document.getElementById("password");
const loginError = document.getElementById("loginError");

const voucherContainer = document.getElementById("voucherContainer");
const template = document.getElementById("voucherTemplate");

/* ==========================================================
   VALES
========================================================== */

const vouchers = [

{
number:"#001",
icon:"💋",
title:"30 minutos de besitos",
description:"Canjeable cuando tú quieras. Prometo dedicarte toda mi atención durante treinta minutos completos."
},

{
number:"#002",
icon:"🧺",
title:"Cita Picnic",
description:"Incluye comida rica, música, muchas fotos y toda mi atención."
},

{
number:"#003",
icon:"🎨",
title:"Cita Dibujándonos",
description:"No importa si el dibujo queda bonito. Lo importante será reírnos juntos."
},

{
number:"#004",
icon:"💆",
title:"Masaje",
description:"Un masaje relajante acompañado de muchísimos besitos."
},

{
number:"#005",
icon:"🤗",
title:"10 minutos de abracitos",
description:"Sin celulares. Sin distracciones. Solo tú y yo."
},

{
number:"#006",
icon:"🌹",
title:"Cita Romántica",
description:"Yo organizaré absolutamente todo. Tú solo disfruta."
},

{
number:"#007",
icon:"🎉",
title:"Cita de Conmemoración",
description:"Para celebrar este primer mes... y todos los que vienen."
}

];

/* ==========================================================
   BIENVENIDA
========================================================== */

startButton.onclick = ()=>{

welcome.classList.remove("active");
login.classList.add("active");

}

/* ==========================================================
   LOGIN
========================================================== */

loginButton.onclick = ()=>{

if(passwordInput.value===PASSWORD){

login.classList.remove("active");

app.style.display="block";

startCounter();

createVouchers();

}else{

loginError.textContent="Contraseña incorrecta ❤️";

}

}

/* ==========================================================
   CONTADOR
========================================================== */

function startCounter(){

updateCounter();

setInterval(updateCounter,1000);

}

function updateCounter(){

const now=new Date();

const diff=now-START_DATE;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor(diff/(1000*60*60)%24);

const minutes=Math.floor(diff/(1000*60)%60);

const seconds=Math.floor(diff/1000%60);

document.getElementById("days").textContent=days;

document.getElementById("hours").textContent=hours;

document.getElementById("minutes").textContent=minutes;

document.getElementById("seconds").textContent=seconds;

}

/* ==========================================================
   CREAR VALES
========================================================== */

function createVouchers(){

voucherContainer.innerHTML="";

vouchers.forEach((voucher,index)=>{

const clone=template.content.cloneNode(true);

const card=clone.querySelector(".voucher");

clone.querySelector(".voucher-number").textContent=voucher.number;

clone.querySelector(".voucher-icon").textContent=voucher.icon;

clone.querySelector(".voucher-title").textContent=voucher.title;

clone.querySelector(".voucher-description").textContent=voucher.description;

clone.querySelector(".openVoucher").addEventListener("click",()=>{

card.classList.toggle("open");

});

voucherContainer.appendChild(clone);

});

}

/* ==========================================================
   ENTER PARA ENTRAR
========================================================== */

passwordInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

loginButton.click();

}

});