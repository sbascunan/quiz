// AA - Nivel 6
reg('aa', 6, [
S("Teorema fundamental de la teoría de Galois: los cuerpos intermedios de L/K (Galois) corresponden a…",["Los subgrupos de Gal(L/K), invirtiendo inclusiones","Solo los subgrupos normales","Los elementos de L","Los ideales de K"]),
S("¿Cuál es el orden de Gal(ℚ(√2, √3)/ℚ)?",["4","2","6","8"],"La extensión tiene grado 4 y su grupo es ℤ/2 × ℤ/2."),
S("¿Cuál es el grupo de Galois de x³ − 2 sobre ℚ?",["S₃","ℤ/3","ℤ/6","A₃"],"El cuerpo de descomposición ℚ(∛2, ω) tiene grado 6."),
S("x⁵ − x − 1 no es resoluble por radicales sobre ℚ porque su grupo de Galois es…",["S₅, que no es soluble","ℤ/5","A₄","ℤ/2"]),
S("Abel–Ruffini: la ecuación polinómica general de grado ≥ 5…",["No es resoluble por radicales","Siempre tiene solución racional","Tiene grupo de Galois abeliano","Es resoluble por radicales"]),
S("¿Cuál es el grupo de Galois de la extensión finita 𝔽_{p^n} / 𝔽_p?",["Cíclico de orden n, generado por el automorfismo de Frobenius x ↦ x^p","El grupo simétrico S_n","El grupo diedral D_n","Trivial"]),
r=>{const n=[5,7,8,9,10,12,15,16,20][ri(r,0,8)];return mc(r,"¿Cuál es el grado de ℚ(ζ_n) sobre ℚ para n = "+n+"?",phi(n),[n,n-1,n/2,phi(n)+1,phi(n)*2],"El grado es φ(n) y Gal ≅ (ℤ/n)ˣ.")}
]);
