/* ==========================================================
   CONFIGURACIÓN
========================================================== */

const PASSWORD = "EliYSeb2026#"; // <- Cambia esto por la contraseña que quieran

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
const secretLetter = document.getElementById("secretLetter");
const closeLetter = document.getElementById("closeLetter");
/* ==========================================================
   VALES
========================================================== */

const vouchers = [

{
number:"#001",
icon:"💋",
title:"30 minutos de besotes",
description:"Una sesión de besotes ricotes para el desestrés amor incluye pausas para evitar irritación jaja"
},

{
number:"#002",
icon:"🧺",
title:"Cita Picnic",
description:"Tiene snacks, paisajes hermosos de la Carolina y podemos incluir sandwiches caseros 😲"
},

{
number:"#003",
icon:"🎨",
title:"Cita Dibujándonos",
description:"Aunque no soy muy bueno dibujando hare lo que pueda amorcito hermoso jajaj, te amo"
},

{
number:"#004",
icon:"💆",
title:"Masaje",
description:"Un masaje relajante acompañado de besotes y si quieres final feliz jaja."
},

{
number:"#005",
icon:"🤗",
title:"10 minutos de abracitos",
description:"10 minutitos de abracitos ricos para liberar oxitocina y bajar los niveles del córtisol"
},

{
number:"#006",
icon:"🌹",
title:"Cita Romántica",
description:"Podemos tener una cita romanticona estilo francés sisi 🥖"
},

{
number:"#007",
icon:"🎉",
title:"Cita de Conmemoración",
description:"Podemos tener una cita recordando lo que hemos vivido antes durante y lo que quisieramos después jaja"
},

{
number:"#008",
icon:"👨‍🍳👩‍🍳",
title:"Cita cocinando algo",
description:"Válido para una cita cocinando algo totalmente nuevo, ya sea postre o plato fuerte sisi que bendición"
},

{
    number:"#009",
    icon:"💌",
    title:"Vale Secreto",
    description:"Súper vale secreto que nadie sabe que contiene"
}


];

const LETTER = `

<p>
Querida Eli,
</p>

<p>
Muchas gracias por todos los momentos lindos que hemos vivido. Recuerdo con muchísimo cariño todos esos momentos que compartimos antes de oficializar nuestra relación: los nervios que sentía al momento de confesarme y todas esas conversaciones que teníamos mientras cenábamos durante horas y horas.
</p>

<p>
También recuerdo con una sonrisa las series y los animes que compartimos, como La Oficina Mexicana. Me encanta la forma en la que vives cada serie y cada película que vemos juntos, aunque a veces te quedes dormidita a la mitad de lo que estamos viendo jajaja. Creo que esos pequeños momentos son los que hacen que todo sea aún más especial.
</p>

<p>
Quiero agradecerte también por aquellos momentos que no fueron tan dulces. Aunque en su momento no se sintieron bien, nos ayudaron a conocernos mejor, entendernos más y fortalecer lo que estamos construyendo juntos. Hoy los valoro porque también forman parte de nuestra historia.
</p>

<p>
Quisiera vivir muchísimos más momentos contigo. Deseo que este primer mes que celebramos sea solo el primero de muchísimos más. Gracias por permitirme compartir un pedacito de tu vida conmigo.
</p>

<p>
Todavía nos queda pendiente hacer un brindis con un tecito matcha por todos los momentos que hemos vivido y por todos los que aún nos esperan. Estoy seguro de que apenas estamos comenzando a escribir una historia muy bonita juntos.
</p>

<p>
Te amo muchísimo, mi cocadita hermosa, mi sirenita de Galápagos. ❤️
</p>


`;

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

    if(voucher.number === "#009"){

        openSecretLetter();

    }

    else{

        card.classList.toggle("open");

    }

});



clone.querySelector(".closeVoucher").addEventListener("click",()=>{

    card.classList.remove("open");

});

voucherContainer.appendChild(clone);

});

}

/* ==========================================================
   SECUENCIA DE LA CARTA SECRETA
========================================================== */

function openSecretLetter(){

    secretLetter.classList.add("show");

    const envelope = document.getElementById("envelope");

    // 1) El sobre se abre y la carta se desliza un poco
    setTimeout(()=>{

        envelope.classList.add("open");

    },400);

    // 2) La carta crece hasta llenar la pantalla y el sobre desaparece
    setTimeout(()=>{

        envelope.classList.add("expanded");

    },400+1300);

    // 3) El texto empieza a aparecer poco a poco
    setTimeout(()=>{

        revealLetterText();

    },400+1300+1100);

}

function revealLetterText(){

    const paragraphs = document.querySelectorAll("#letterText p");

    paragraphs.forEach((p,i)=>{

        setTimeout(()=>{

            p.classList.add("revealed");

        }, i*700);

    });

    const totalTime = paragraphs.length*700;

    // 4) La firma aparece al final
    setTimeout(()=>{

        document.querySelector(".signature").classList.add("revealed");

    }, totalTime+400);

    setTimeout(()=>{

        document.getElementById("closeLetter").classList.add("revealed");

    }, totalTime+1400);

}

function resetSecretLetter(){

    const envelope = document.getElementById("envelope");

    envelope.classList.remove("open","expanded");

    document.querySelectorAll("#letterText p").forEach(p=>{

        p.classList.remove("revealed");

    });

    document.querySelector(".signature").classList.remove("revealed");

    document.getElementById("closeLetter").classList.remove("revealed");

}

/* ==========================================================
   ENTER PARA ENTRAR
========================================================== */

passwordInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

loginButton.click();

}

});

window.addEventListener("DOMContentLoaded", () => {

    document.getElementById("letterText").innerHTML = LETTER;

});


closeLetter.addEventListener("click",()=>{

    secretLetter.classList.remove("show");

    setTimeout(()=>{

        resetSecretLetter();

    },400);

});

