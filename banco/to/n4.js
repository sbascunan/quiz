// TO - Nivel 4
reg('to', 4, [
S("¿Cuánto vale π₁(S¹)?",["ℤ","0","ℤ/2","ℤ × ℤ"],"Cuenta las vueltas alrededor del círculo."),
S("¿Cuánto vale π₁ del toro T²?",["ℤ × ℤ","ℤ","0","ℤ/2"]),
S("¿Cuánto vale π₁(S²)?",["0","ℤ","ℤ/2","No está definido"]),
S("Un espacio simplemente conexo es conexo por caminos y tiene…",["π₁ trivial","H₁ no nulo","Característica de Euler 1","π₁ abeliano"]),
S("¿Cuál es el grupo fundamental de la figura ocho (S¹ ∨ S¹)?",["El grupo libre en dos generadores F₂","ℤ × ℤ","ℤ","ℤ/2 * ℤ/2"],"Por Seifert–van Kampen, la unión puntual de círculos tiene grupo fundamental libre."),
r=>{const g=ri(r,0,8);return mc(r,"¿Cuál es la característica de Euler de la superficie orientable de género "+g+"?",2-2*g,[2*g-2,2+2*g,g,1-2*g,g+2],"χ = 2 − 2g.")}
]);
