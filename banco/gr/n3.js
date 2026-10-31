// GR - Nivel 3
reg('gr', 3, [
S("Fórmula de Euler para grafos planares conexos: |V| − |E| + |F| =",["2","1","0","|V|"]),
S("¿Cuál de estos grafos no es planar?",["K₅","K₄","C₆","Un árbol"],"K₅ y K₃,₃ son los grafos mínimos no planares (Kuratowski)."),
S("¿Cuánto vale el número de Ramsey R(3,3)?",["6","5","9","18"],"Entre 6 personas hay 3 que se conocen entre sí o 3 que no; con 5 no."),
S("El teorema de los cuatro colores afirma que todo mapa planar se colorea con…",["4 colores","3 colores","5 colores","6 colores"],"Appel y Haken, 1976."),
S("Teorema de Hall: un grafo bipartito (X, Y) tiene un emparejamiento que satura X si y solo si para todo S ⊆ X…",["|N(S)| ≥ |S|","|N(S)| = |Y|","|S| es par","El grafo es regular"],"Condición de matrimonio de Hall."),
S("¿Cuál es el radio y diámetro del grafo de Petersen?",["Radio 2 y diámetro 2","Radio 2 y diámetro 3","Radio 3 y diámetro 3","Radio 1 y diámetro 2"],"Es un grafo 3-regular de 10 vértices y cintura 5 con diámetro 2."),
r=>{const n=ri(r,5,20);return mc(r,"¿Cuántas aristas puede tener, como máximo, un grafo planar simple con "+n+" vértices?",3*n-6,[3*n-3,3*n,2*n-4,n*(n-1)/2,3*n-5],"Consecuencia de la fórmula de Euler: |E| ≤ 3n − 6.")},
r=>{const n=ri(r,3,7);return mc(r,"Según la fórmula de Cayley, ¿cuántos árboles etiquetados distintos hay sobre "+n+" vértices?",Math.pow(n,n-2),[Math.pow(n,n-1),Math.pow(n-1,n-2),n*(n-1),Math.pow(n,n)],"Cayley: nⁿ⁻².")}
]);
