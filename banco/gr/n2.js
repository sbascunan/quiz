// GR - Nivel 2
reg('gr', 2, [
S("Un grafo conexo tiene un circuito euleriano si y solo si…",["Todos sus vértices tienen grado par","Tiene un ciclo hamiltoniano","Es bipartito","Es un árbol"],"Teorema de Euler."),
S("¿Cuál es el número cromático de un grafo bipartito con al menos una arista?",["2","1","3","4"],"Dos colores bastan (uno por parte) y uno solo no alcanza."),
S("El número de vértices de grado impar en cualquier grafo es…",["Siempre par","Siempre impar","Igual al número de aristas","Cualquiera"],"Σ grados = 2|E| es par."),
S("Un grafo es bipartito si y solo si no contiene…",["Ciclos de longitud impar","Ciclos de longitud par","Vértices de grado impar","Árboles generadores"],"Teorema de König sobre caracterización de grafos bipartitos."),
r=>{const n=ri(r,3,15);return mc(r,"¿Cuál es el número cromático del ciclo C_"+n+"?",n%2?3:2,[1,2,3,4,5],"Los ciclos pares son bipartitos; los impares necesitan 3 colores.")},
r=>{const m=ri(r,2,8),n=ri(r,2,8);return mc(r,"¿Cuántas aristas tiene el grafo bipartito completo K_{"+m+","+n+"}?",m*n,[m+n,m*n+m,m*n-1,(m+n)*(m+n-1)/2],"Cada vértice de una parte se une con todos los de la otra: m·n.")},
r=>{const d=ri(r,3,6);return mc(r,"¿Cuántos vértices tiene el grafo hipercubo Q_"+d+"?",Math.pow(2,d),[d*d,2*d,d*Math.pow(2,d-1),Math.pow(2,d-1)],"Q_d tiene 2^d vértices y d·2^(d−1) aristas.")}
]);
