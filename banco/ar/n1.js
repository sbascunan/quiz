// AR - Nivel 1
reg('ar', 1, [
S("¿Cuál es el supremo del conjunto (0, 1)?",["1","0","1/2","No existe"],"Aunque 1 no pertenezca al conjunto, es su mínima cota superior."),
S("La serie geométrica Σ rⁿ (n ≥ 0) converge si y solo si…",["|r| < 1","r > 0","r ≠ 1","|r| ≤ 1"],"Para |r| < 1 suma 1/(1−r)."),
S("¿Cuál es la derivada de xⁿ?",["n·xⁿ⁻¹","xⁿ⁻¹","n·xⁿ","(n−1)·xⁿ"]),
S("Una sucesión monótona creciente y acotada superiormente en ℝ…",["Siempre converge a su supremo","Diverge a infinito","Oscila","Solo converge si es estrictamente creciente"],"Axioma del supremo en ℝ."),
r=>{const m=ri(r,2,6),c=ri(r,1,5),b=ri(r,1,9),d=ri(r,1,9);return mc(r,"Calcula lím (n→∞) de ("+(m*c)+"n + "+b+")/("+c+"n + "+d+").",m,[m*c,c,m+1,m+2,m-1],"Se divide por n: el límite es el cociente de los coeficientes líderes.")},
r=>{const q=ri(r,2,5);return mc(r,"¿Cuánto suma la serie geométrica Σ (1/"+q+")^n desde n = 0 hasta infinito?",q+"/"+(q-1),[1+"/"+(q-1),(q-1)+"/"+q,q,"1/"+q],"Suma = 1 / (1 − 1/q) = q/(q−1).")}
]);
