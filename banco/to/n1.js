// TO - Nivel 1
reg('to', 1, [
S("Una topología contiene ∅ y X, es cerrada por uniones arbitrarias y por…",["Intersecciones finitas","Intersecciones arbitrarias","Complementos","Productos"]),
S("¿Cuál de estos subconjuntos de ℝ es compacto?",["[0, 1]","(0, 1)","ℝ","[0, ∞)"],"Heine–Borel: cerrado y acotado."),
S("¿Cuándo es abierto un subconjunto de ℝ con la topología usual?",["Si contiene un intervalo abierto alrededor de cada uno de sus puntos","Si es un intervalo cerrado","Si es finito","Si no tiene frontera"]),
S("El interior de un conjunto A es…",["El mayor abierto contenido en A","El menor cerrado que contiene a A","La intersección de A con su frontera","El complemento de la clausura de A"]),
r=>{const n=ri(r,2,8);return mc(r,"¿Cuántos abiertos tiene la topología discreta sobre un conjunto de "+n+" elementos?",Math.pow(2,n),[n*n,n,2*n,n*n+1,Math.pow(2,n)-1],"Todo subconjunto es abierto: 2ⁿ.")}
]);
