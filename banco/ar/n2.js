// AR - Nivel 2
reg('ar', 2, [
S("Toda sucesión acotada en ℝ tiene una subsucesión convergente. Es el teorema de…",["Bolzano–Weierstrass","Heine–Borel","Rolle","Cauchy–Schwarz"]),
S("fₙ(x) = xⁿ en [0,1] converge puntualmente pero no uniformemente. ¿Por qué?",["El límite no es continuo","El límite no existe","Cada fₙ es discontinua","[0,1] no es compacto"],"El límite vale 0 en [0,1) y 1 en x = 1; un límite uniforme de continuas es continuo."),
S("El teorema del valor medio dice que existe c con…",["f′(c) = (f(b) − f(a))/(b − a)","f(c) = 0","f′(c) = 0 siempre","f(c) = (f(a) + f(b))/2"]),
S("Una función continua en [a, b]…",["Alcanza su máximo y su mínimo","Es siempre derivable","Es siempre monótona","Es acotada solo si es derivable"],"Teorema de Weierstrass (compacidad)."),
S("Toda función continua en un intervalo cerrado y acotado [a, b] es…",["Uniformemente continua","Derivable en (a, b)","Analítica","Lipschitziana"],"Teorema de Heine–Cantor."),
r=>{const p=[0.5,1,1.5,2,3,1.1,0.9][ri(r,0,6)],ok=p>1;return mc(r,"¿Qué ocurre con la serie Σ 1/n^p (n ≥ 1) para p = "+p+"?",ok?"Converge":"Diverge",["Diverge","Converge","Oscila sin límite","Converge condicionalmente"],"La p-serie converge si y solo si p > 1.")}
]);
