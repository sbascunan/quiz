// GA - Nivel 1
reg('ga', 1, [
{q:"La geometría algebraica estudia principalmente las soluciones de…",o:["Ecuaciones diferenciales","Sistemas de ecuaciones polinomiales","Desigualdades lineales","Series de Fourier"],c:1,e:"Estudia conjuntos de ceros de polinomios y su geometría."},
{q:"¿Qué figura describe x² + y² = 1 en el plano real?",o:["Una parábola","Una recta","Una circunferencia","Una hipérbola"],c:2,e:"Es la circunferencia de radio 1 centrada en el origen."},
{q:"¿Cuántas raíces complejas tiene, contando multiplicidad, un polinomio de grado 5?",o:["1","3","10","5"],c:3,e:"Teorema fundamental del álgebra: tantas como el grado."},
{q:"¿Qué polinomio tiene como ceros la recta y = 2x + 1?",o:["y − 2x − 1","y + 2x + 1","2xy + 1","x² − y"],c:0,e:"y = 2x + 1 equivale a y − 2x − 1 = 0."},
{q:"¿Qué es el plano A² sobre ℝ?",o:["Un anillo de polinomios","Una recta con un punto al infinito","El conjunto de pares (x, y) de reales","Un ideal"],c:2,e:"El espacio afín es el conjunto de n-tuplas."},
{q:"El conjunto de ceros de x·y = 0 en el plano es:",o:["Un punto","Los dos ejes coordenados","Una circunferencia","Vacío"],c:1,e:"x·y = 0 si y solo si x = 0 o y = 0."},
S("¿Qué curva describe y = x² en el plano afín real?",["Una parábola","Una hipérbola","Una elipse","Una lemniscata"],"Es el lugar geométrico de una parábola estándar."),
r=>{const d=ri(r,2,9);return mc(r,"¿Cuál es el grado del monomio x^"+d+"·y^"+(d+1)+"?",2*d+1,[d,d+1,d*(d+1),2*d],"El grado de un monomio es la suma de los exponentes de sus variables.")}
]);
