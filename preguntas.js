// Motor de generación y cargador modular de preguntas.
const rng=s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const ri=(r,a,b)=>a+Math.floor(r()*(b-a+1));
const shr=(r,a)=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a};
const S=(q,o,e)=>({q:q,o:o,c:0,e:e||""});
const gcd=(a,b)=>b?gcd(b,a%b):a,phi=n=>{let c=0;for(let k=1;k<=n;k++)if(gcd(k,n)===1)c++;return c};
function mc(r,q,ans,wr,e){
  const w=[];wr.forEach(x=>{x=String(x);if(x!==String(ans)&&w.indexOf(x)<0)w.push(x)});
  for(let k=1;w.length<3;k++){const x=String(+ans+k);if(x!==String(ans)&&w.indexOf(x)<0)w.push(x)}
  const o=shr(r,[String(ans)].concat(w.slice(0,3)));
  return{q:q,o:o,c:o.indexOf(String(ans)),e:e||""};
}

const AREAS=[
  {id:"ga",n:"Geometría algebraica",L:["Súper fácil","Fácil","Normal","Difícil","Français (difficile)","Grothendieck"],T:[15,20,25,35,40,45]},
  {id:"gr",n:"Teoría de grafos",L:["Fácil","Normal","Difícil"],T:[15,25,35]},
  {id:"ar",n:"Análisis real",L:["Fácil","Normal","Difícil"],T:[20,30,40]},
  {id:"to",n:"Topología",L:["Fácil","Normal","Difícil","Topología algebraica I","Topología algebraica II"],T:[20,25,35,35,40]},
  {id:"aa",n:"Álgebra abstracta",L:["Súper fácil","Fácil","Normal","Difícil","Muy difícil","Évariste Galois"],T:[15,20,25,35,40,45]},
  {id:"vc",n:"Variable compleja",L:["Fácil","Normal","Difícil"],T:[20,30,40]},
  {id:"mc",n:"Mecánica clásica",L:["Fácil","Normal","Difícil"],T:[20,30,40]},
  {id:"mq",n:"Mecánica cuántica",L:["Fácil","Normal","Difícil"],T:[20,30,40]},
  {id:"me",n:"Mecánica estadística",L:["Fácil","Normal","Difícil"],T:[20,30,40]},
  {id:"hc",n:"Historia de Chile",L:["Fácil","Normal","Difícil"],T:[15,25,30]},
  {id:"ha",n:"Historia de América",L:["Fácil","Normal","Difícil"],T:[15,25,30]},
  {id:"hg",n:"Historia global",L:["Fácil","Normal","Difícil"],T:[15,25,30]},
  {id:"pvz",n:"Plantas vs. Zombies",L:["Fácil","Normal","Difícil"],T:[15,20,25]},
  {id:"cars",n:"Saga de Cars",L:["Fácil","Normal","Difícil"],T:[15,20,25]}
];

const BANK={};
AREAS.forEach(a=>{BANK[a.id]=a.L.map(()=>[])});

// Función usada por cada archivo banco/<id>/n<nivel>.js (nivel empieza en 1)
function reg(id,nivel,preguntas){
  if(BANK[id]&&BANK[id][nivel-1])BANK[id][nivel-1].push(...preguntas);
}

// Carga dinámica de cada archivo de nivel
AREAS.forEach(a=>{
  for(let i=1;i<=a.L.length;i++){
    const s=document.createElement("script");
    s.src=`banco/${a.id}/n${i}.js`;
    document.head.appendChild(s);
  }
});