// MC - Nivel 1
reg('mc', 1, [
S("Según la segunda ley de Newton, si la masa m es constante, la fuerza neta F sobre una partícula es:",["F = m·a","F = m·v","F = ½m·v²","F = m/a"]),
S("El teorema del trabajo y la energía establece que el trabajo neto realizado sobre una partícula es igual a:",["El cambio en su energía cinética (ΔK)","El cambio en su momento lineal","Su energía potencial inicial","La fuerza multiplicada por el tiempo"]),
S("En ausencia de fuerzas externas netas sobre un sistema, la magnitud que se conserva es:",["El momento lineal total","La aceleración de cada partícula","La velocidad escalar media","El coeficiente de roce"]),
S("La frecuencia angular ω de un oscilador armónico simple de masa m y constante de resorte k es:",["√(k/m)","k/m","√(m/k)","2π√(m/k)"]),
r=>{const m=ri(r,2,8),v=ri(r,2,10);return mc(r,"¿Cuál es la energía cinética (en J) de una partícula de masa "+m+" kg que se mueve a "+v+" m/s?",0.5*m*v*v,[m*v,m*v*v,0.5*m*v,2*m*v*v],"K = ½ m v².")},
r=>{const m=ri(r,2,10),a=ri(r,2,9);return mc(r,"¿Qué fuerza neta (en N) produce una aceleración de "+a+" m/s² en una masa de "+m+" kg?",m*a,[m+a,m*a*a,0.5*m*a,a/m],"Segunda ley de Newton: F = m·a.")}
]);
