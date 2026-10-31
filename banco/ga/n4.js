// GA - Nivel 4
reg('ga', 4, [
{q:"Por Bézout, curvas planas proyectivas de grados 2 y 3 sin componentes comunes se cortan en (con multiplicidad):",o:["5 puntos","6 puntos","1 punto","Infinitos puntos"],c:1,e:"d·e = 2·3 = 6 sobre un cuerpo algebraicamente cerrado."},
{q:"El espacio tangente de Zariski de V en p es:",o:["Hom(𝔪/𝔪², k), con 𝔪 el ideal maximal de O_{V,p}","El núcleo de una función f : V → k","La clausura de las rectas por p","O_{V,p} ⊗ k"],c:0,e:"T_pV = (𝔪_p/𝔪_p²)*."},
{q:"Una variedad V de dimensión d es lisa en p si y solo si:",o:["dim T_pV = d + 1","O_{V,p} es un cuerpo","dim T_pV = d","V es irreducible"],c:2,e:"Criterio jacobiano: la dimensión tangente coincide con la dimensión de V."},
{q:"El género de una curva plana lisa de grado d en P² es:",o:["d(d−1)/2","(d−1)(d−2)/2","d²","d − 1"],c:1,e:"Fórmula grado–género. Una cúbica lisa tiene género 1."},
{q:"Explotar (blow-up) el plano en el origen reemplaza el punto por:",o:["Una recta proyectiva (divisor excepcional)","Un punto doble","Una circunferencia real","Una cúspide"],c:0,e:"El divisor excepcional es P¹, el espacio de direcciones por el origen."},
{q:"El polinomio de Hilbert de Pⁿ es:",o:["C(t+n, n)","tⁿ","n·t + 1","(n+1)·t"],c:0,e:"Cuenta los monomios de grado t en n+1 variables: C(t+n, n)."},
S("¿Cuántas rectas contiene una superficie cúbica lisa en P³(ℂ)?",["27","9","12","Infinitas"],"Teorema de Cayley–Salmon: toda superficie cúbica lisa sobre ℂ contiene exactamente 27 rectas."),
r=>{const d=ri(r,3,7);return mc(r,"¿Cuál es el género de una curva plana proyectiva lisa de grado "+d+"?",(d-1)*(d-2)/2,[d*(d-1)/2,d-1,d*d,(d-2)*(d-3)/2],"Por la fórmula grado-género: g = (d−1)(d−2)/2.")}
]);
