// GR - Nivel 1
reg('gr', 1, [
S("Un árbol es un grafo…",["Conexo y sin ciclos","Completo","Con todos los grados pares","Bipartito y regular"],"Árbol = conexo y acíclico."),
S("¿Qué es el grado de un vértice?",["El número de aristas incidentes en él","El número de vértices del grafo","La longitud del camino más largo","El número de ciclos que lo contienen"]),
S("Un grafo simple no tiene…",["Bucles ni aristas múltiples","Ciclos de longitud impar","Vértices de grado 1","Componentes conexas"],"Simple significa sin lazos (bucles) y a lo sumo una arista entre cada par de vértices."),
r=>{const n=ri(r,4,9);return mc(r,"¿Cuántas aristas tiene el grafo completo K_"+n+"?",n*(n-1)/2,[n*n,n*(n+1)/2,n-1,n*(n-1),n],"K_n tiene n(n−1)/2 aristas.")},
r=>{const m=ri(r,5,20);return mc(r,"Un grafo tiene "+m+" aristas. ¿Cuánto suman los grados de todos sus vértices?",2*m,[m,m+1,m*m,2*m+2,m-1],"Lema del apretón de manos: Σ grados = 2·|E|.")},
r=>{const n=ri(r,5,30);return mc(r,"¿Cuántas aristas tiene un árbol con "+n+" vértices?",n-1,[n,n+1,n-2,2*n,n*(n-1)/2],"Todo árbol con n vértices tiene n−1 aristas.")},
r=>{const k=ri(r,2,5),n=ri(r,3,6)*2;return mc(r,"¿Cuántas aristas tiene un grafo "+k+"-regular con "+n+" vértices?",(n*k)/2,[n*k,n+k,n*k-1,(n-1)*k],"Por el lema del apretón de manos: |E| = n·k / 2.")}
]);
