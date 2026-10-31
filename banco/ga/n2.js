// GA - Nivel 2
reg('ga', 2, [
{q:"Con k algebraicamente cerrado, ¿qué es una variedad afín en kⁿ?",o:["Un anillo cociente de k[x₁,…,xₙ]","El conjunto de ceros comunes de una familia de polinomios","Un ideal radical","Una función racional continua"],c:1,e:"V(S) = {p ∈ kⁿ : f(p)=0 para todo f ∈ S}."},
{q:"¿Qué dimensión tiene V(x² + y² − 1) ⊂ A²(ℂ)?",o:["0","1","2","3"],c:1,e:"Una ecuación no trivial en A² define una curva: dimensión 1."},
{q:"¿Cuál es el anillo de coordenadas de la parábola V(y − x²)?",o:["k[x,y]","k[x]/(x²)","k[y]","k[x]"],c:3,e:"k[x,y]/(y−x²) ≅ k[x] mediante y ↦ x²."},
{q:"¿Qué es un polinomio homogéneo?",o:["Todos sus monomios tienen el mismo grado","Solo tiene una variable","No tiene término constante","Tiene coeficientes enteros"],c:0,e:"Por ejemplo x² + xy + y² es homogéneo de grado 2."},
{q:"En P² = (k³ ∖ {0})/~, ¿qué relación es ~?",o:["Igualdad de coordenadas","Misma primera coordenada","Proporcionalidad: v ~ λv con λ ≠ 0","Misma norma"],c:2,e:"Los puntos de P² son rectas por el origen de k³."},
{q:"¿Cuál es I(V) para V = {(0,0)} ⊂ A²(k)?",o:["(xy)","(x, y)","(x + y)","(x² + y²)"],c:1,e:"Los polinomios que se anulan en el origen son los de término constante nulo: (x, y)."},
S("¿Cuántas cartas afines estándar cubren el espacio proyectivo Pⁿ?",["n + 1","n","2n","n²"],"Se cubre con los abiertos U_i = {x_i ≠ 0} para i = 0, …, n."),
S("El anillo de coordenadas de V(xy − 1) ⊂ A²(k) es isomorfo a:",["k[x, x⁻¹]","k[x]","k[x, y]","k[x]/(x²)"],"Como y = 1/x, el cociente k[x,y]/(xy−1) es el anillo de polinomios de Laurent k[x, x⁻¹].")
]);
