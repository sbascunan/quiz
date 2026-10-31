// VC - Nivel 1
reg('vc', 1, [
S("¿Cuánto vale i² en el cuerpo de los números complejos ℂ?",["−1","1","i","0"],"Por definición de la unidad imaginaria, i² = −1."),
S("Según la fórmula de Euler, e^{iθ} es igual a:",["cos θ + i sen θ","cos θ − i sen θ","sen θ + i cos θ","e^θ(cos θ + sen θ)"]),
S("Si z = x + iy, el producto z·z̄ (z por su conjugado) es igual a:",["x² + y²","x² − y²","2x","2iy"],"|z|² = z·z̄ = x² + y²."),
S("¿Cuáles son los valores principales de las raíces cúbicas de la unidad en ℂ?",["1, e^{2πi/3}, e^{4πi/3}","1, −1, i","1, i, −i","e^{πi/3}, e^{2πi/3}, −1"]),
r=>{const a=ri(r,1,6),b=ri(r,1,6);return mc(r,"¿Cuánto vale |z|² para el número complejo z = "+a+" + "+b+"i?",a*a+b*b,[a+b,Math.abs(a*a-b*b),2*a*b,(a+b)*(a+b)],"|a + bi|² = a² + b².")},
r=>{const n=ri(r,0,20)*4+ri(r,0,3),ans=["1","i","−1","−i"][n%4];return mc(r,"¿Cuánto vale i^"+n+"?",ans,["1","i","−1","−i"],"Las potencias de i son periódicas de período 4: i⁰=1, i¹=i, i²=−1, i³=−i.")}
]);
