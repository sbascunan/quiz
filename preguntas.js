// Banco de preguntas para Duelo de Preguntas.
// Formato: S("enunciado",["correcta","mala1","mala2","mala3"],"explicación") (la correcta va primera; el motor baraja).
// Los generadores (funciones r=>...) crean variantes numéricas distintas cada vez.

const rng=s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const ri=(r,a,b)=>a+Math.floor(r()*(b-a+1));
const shr=(r,a)=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a};
const S=(q,o,e)=>({q:q,o:o,c:0,e:e||""});
const gcd=(a,b)=>b?gcd(b,a%b):a,phi=n=>{let c=0;for(let k=1;k<=n;k++)if(gcd(k,n)===1)c++;return c};
function mc(r,q,ans,wr,e){const w=[];wr.forEach(x=>{x=String(x);if(x!==String(ans)&&w.indexOf(x)<0)w.push(x)});for(let k=1;w.length<3;k++){const x=String(+ans+k);if(x!==String(ans)&&w.indexOf(x)<0)w.push(x)}const o=shr(r,[String(ans)].concat(w.slice(0,3)));return{q:q,o:o,c:o.indexOf(String(ans)),e:e||""}}

// ===== 1. GEOMETRÍA ALGEBRAICA =====
const GA={
1:[
{q:"La geometría algebraica estudia principalmente las soluciones de…",o:["Ecuaciones diferenciales","Sistemas de ecuaciones polinomiales","Desigualdades lineales","Series de Fourier"],c:1,e:"Estudia conjuntos de ceros de polinomios y su geometría."},
{q:"¿Qué figura describe x² + y² = 1 en el plano real?",o:["Una parábola","Una recta","Una circunferencia","Una hipérbola"],c:2,e:"Es la circunferencia de radio 1 centrada en el origen."},
{q:"¿Cuántas raíces complejas tiene, contando multiplicidad, un polinomio de grado 5?",o:["1","3","10","5"],c:3,e:"Teorema fundamental del álgebra: tantas como el grado."},
{q:"¿Qué polinomio tiene como ceros la recta y = 2x + 1?",o:["y − 2x − 1","y + 2x + 1","2xy + 1","x² − y"],c:0,e:"y = 2x + 1 equivale a y − 2x − 1 = 0."},
{q:"¿Qué es el plano A² sobre ℝ?",o:["Un anillo de polinomios","Una recta con un punto al infinito","El conjunto de pares (x, y) de reales","Un ideal"],c:2,e:"El espacio afín es el conjunto de n-tuplas."},
{q:"El conjunto de ceros de x·y = 0 en el plano es:",o:["Un punto","Los dos ejes coordenados","Una circunferencia","Vacío"],c:1,e:"x·y = 0 si y solo si x = 0 o y = 0."},
S("¿Qué curva describe y = x² en el plano afín real?",["Una parábola","Una hipérbola","Una elipse","Una lemniscata"],"Es el lugar geométrico de una parábola estándar."),
r=>{const d=ri(r,2,9);return mc(r,"¿Cuál es el grado del monomio x^"+d+"·y^"+(d+1)+"?",2*d+1,[d,d+1,d*(d+1),2*d],"El grado de un monomio es la suma de los exponentes de sus variables.")}],
2:[
{q:"Con k algebraicamente cerrado, ¿qué es una variedad afín en kⁿ?",o:["Un anillo cociente de k[x₁,…,xₙ]","El conjunto de ceros comunes de una familia de polinomios","Un ideal radical","Una función racional continua"],c:1,e:"V(S) = {p ∈ kⁿ : f(p)=0 para todo f ∈ S}."},
{q:"¿Qué dimensión tiene V(x² + y² − 1) ⊂ A²(ℂ)?",o:["0","1","2","3"],c:1,e:"Una ecuación no trivial en A² define una curva: dimensión 1."},
{q:"¿Cuál es el anillo de coordenadas de la parábola V(y − x²)?",o:["k[x,y]","k[x]/(x²)","k[y]","k[x]"],c:3,e:"k[x,y]/(y−x²) ≅ k[x] mediante y ↦ x²."},
{q:"¿Qué es un polinomio homogéneo?",o:["Todos sus monomios tienen el mismo grado","Solo tiene una variable","No tiene término constante","Tiene coeficientes enteros"],c:0,e:"Por ejemplo x² + xy + y² es homogéneo de grado 2."},
{q:"En P² = (k³ ∖ {0})/~, ¿qué relación es ~?",o:["Igualdad de coordenadas","Misma primera coordenada","Proporcionalidad: v ~ λv con λ ≠ 0","Misma norma"],c:2,e:"Los puntos de P² son rectas por el origen de k³."},
{q:"¿Cuál es I(V) para V = {(0,0)} ⊂ A²(k)?",o:["(xy)","(x, y)","(x + y)","(x² + y²)"],c:1,e:"Los polinomios que se anulan en el origen son los de término constante nulo: (x, y)."},
S("¿Cuántas cartas afines estándar cubren el espacio proyectivo Pⁿ?",["n + 1","n","2n","n²"],"Se cubre con los abiertos U_i = {x_i ≠ 0} para i = 0, …, n."),
S("El anillo de coordenadas de V(xy − 1) ⊂ A²(k) es isomorfo a:",["k[x, x⁻¹]","k[x]","k[x, y]","k[x]/(x²)"],"Como y = 1/x, el cociente k[x,y]/(xy−1) es el anillo de polinomios de Laurent k[x, x⁻¹].")],
3:[
{q:"Nullstellensatz fuerte: ¿cuánto vale I(V(J))?",o:["J","El primo mínimo sobre J","√J, el radical de J","J²"],c:2,e:"Sobre k algebraicamente cerrado, I(V(J)) = √J."},
{q:"¿Cuál de estos ideales de k[x,y] es primo?",o:["(xy)","(x²)","(x² − y²)","(x² − y)"],c:3,e:"k[x,y]/(x²−y) ≅ k[x] es un dominio; los otros tienen divisores de cero."},
{q:"Una variedad afín V es irreducible si y solo si:",o:["I(V) es primo","I(V) es maximal","V es finita","I(V) es principal"],c:0,e:"Irreducible ⇔ I(V) primo. Maximal ocurre solo para puntos."},
{q:"¿Cuál es la dimensión de Krull de k[x,y,z]?",o:["1","2","4","3"],c:3,e:"Cadena maximal: 0 ⊂ (x) ⊂ (x,y) ⊂ (x,y,z)."},
{q:"¿Qué ideales de k[x₁,…,xₙ] corresponden a puntos de Aⁿ?",o:["Los maximales (x₁−a₁,…,xₙ−aₙ)","Los primos de altura 1","Los principales","Los radicales"],c:0,e:"Nullstellensatz débil: los maximales son los de esa forma."},
{q:"¿Cómo es la curva V(y² − x³) en el origen?",o:["Lisa","Una cúspide (singular)","Un nodo","No pasa por el origen"],c:1,e:"Las parciales (−3x², 2y) se anulan en (0,0): punto singular."},
{q:"En la topología de Zariski de A¹(ℂ), los cerrados propios son:",o:["Los intervalos cerrados","Los conjuntos finitos","Los discretos","Los numerables"],c:1,e:"Un polinomio no nulo en una variable tiene finitas raíces."},
S("¿Cómo es la singularidad de la curva V(y² − x³ − x²) en el origen?",["Un nodo (punto doble ordinario)","Una cúspide","Un punto liso","Un punto aislado"],"Las ramas tangentes son y = ±x, distintas entre sí.")],
4:[
{q:"Por Bézout, curvas planas proyectivas de grados 2 y 3 sin componentes comunes se cortan en (con multiplicidad):",o:["5 puntos","6 puntos","1 punto","Infinitos puntos"],c:1,e:"d·e = 2·3 = 6 sobre un cuerpo algebraicamente cerrado."},
{q:"El espacio tangente de Zariski de V en p es:",o:["Hom(𝔪/𝔪², k), con 𝔪 el ideal maximal de O_{V,p}","El núcleo de una función f : V → k","La clausura de las rectas por p","O_{V,p} ⊗ k"],c:0,e:"T_pV = (𝔪_p/𝔪_p²)*."},
{q:"Una variedad V de dimensión d es lisa en p si y solo si:",o:["dim T_pV = d + 1","O_{V,p} es un cuerpo","dim T_pV = d","V es irreducible"],c:2,e:"Criterio jacobiano: la dimensión tangente coincide con la dimensión de V."},
{q:"El género de una curva plana lisa de grado d en P² es:",o:["d(d−1)/2","(d−1)(d−2)/2","d²","d − 1"],c:1,e:"Fórmula grado–género. Una cúbica lisa tiene género 1."},
{q:"Explotar (blow-up) el plano en el origen reemplaza el punto por:",o:["Una recta proyectiva (divisor excepcional)","Un punto doble","Una circunferencia real","Una cúspide"],c:0,e:"El divisor excepcional es P¹, el espacio de direcciones por el origen."},
{q:"El polinomio de Hilbert de Pⁿ es:",o:["C(t+n, n)","tⁿ","n·t + 1","(n+1)·t"],c:0,e:"Cuenta los monomios de grado t en n+1 variables: C(t+n, n)."},
S("¿Cuántas rectas contiene una superficie cúbica lisa en P³(ℂ)?",["27","9","12","Infinitas"],"Teorema de Cayley–Salmon: toda superficie cúbica lisa sobre ℂ contiene exactamente 27 rectas."),
r=>{const d=ri(r,3,7);return mc(r,"¿Cuál es el género de una curva plana proyectiva lisa de grado "+d+"?",(d-1)*(d-2)/2,[d*(d-1)/2,d-1,d*d,(d-2)*(d-3)/2],"Por la fórmula grado-género: g = (d−1)(d−2)/2.")}],
5:[
{q:"Que dit le théorème de Bézout pour deux courbes de P² de degrés d et e sans composante commune ?",o:["Elles se coupent en d + e points","Elles se coupent en d·e points, comptés avec multiplicité","Elles ne se coupent jamais","Elles se coupent en max(d, e) points"],c:1,e:"Le nombre d’intersections, avec multiplicité, vaut d·e."},
{q:"Que dit le théorème de Riemann–Roch pour un diviseur D sur une courbe projective lisse de genre g ?",o:["ℓ(D) − ℓ(K − D) = deg D + 1 − g","ℓ(D) = deg D + g","ℓ(D) + ℓ(K − D) = g","ℓ(D) = deg D − g − 1"],c:0,e:"C’est la formule ℓ(D) − ℓ(K−D) = deg D + 1 − g."},
{q:"Quel est le lieu singulier de la courbe V(xy) ?",o:["L’axe des x","L’axe des y","L’origine (0,0)","Il n’y en a pas"],c:2,e:"Les dérivées partielles (y, x) s’annulent seulement à l’origine."},
{q:"Qu’est-ce qu’un morphisme fini de variétés affines ?",o:["Un morphisme à fibres vides","Un morphisme bijectif","Un morphisme à fibres infinies","Un morphisme dont l’anneau de coordonnées de la source est un module de type fini sur celui du but"],c:3,e:"Fini = A est un B-module de type fini via f*."},
{q:"Quelle est la dimension de la grassmannienne G(2,4) des droites de P³ ?",o:["2","3","4","6"],c:2,e:"dim G(k,n) = k(n − k) = 2·2 = 4."},
{q:"Pour une courbe elliptique E, l’application P ↦ [P − O] ∈ Pic⁰(E) est :",o:["Un isomorphisme de variétés E ≅ Pic⁰(E)","Constante","Un revêtement de degré 2","Non définie"],c:0,e:"C’est l’identification de E avec sa jacobienne."},
S("Quel est le degré du diviseur canonique K sur une courbe lisse de genre g ?",["2g − 2","g − 1","2g + 2","g"],"Par Riemann–Roch appliqué à D = K, deg(K) = 2g − 2."),
S("Le plongement de Segre P¹ × P¹ → P³ a pour image :",["Une quadrique lisse V(xw − yz)","Un plan projectif","Une cubique gauche","Une hypersurface de degré 4"],"L’image de ([x:y],[u:v]) = [xu:xv:yu:yv] satisfait z₀z₃ − z₁z₂ = 0.")],
6:[
{q:"¿Qué es Spec A para un anillo conmutativo A?",o:["El conjunto de ideales maximales","Los ideales primos, con la topología de Zariski y un haz de anillos","El grupo de unidades de A","Los homomorfismos A → ℂ"],c:1,e:"Spec A es un espacio anillado local cuyos puntos son los primos de A."},
{q:"¿Cuál es el punto genérico de Spec ℤ?",o:["(2)","(p) para p grande","(0), cuya clausura es todo Spec ℤ","No existe"],c:2,e:"El ideal (0) es denso: su clausura es Spec ℤ completo."},
{q:"Un esquema es:",o:["Un espacio anillado localmente isomorfo a Spec de anillos","Una variedad sobre ℂ","Un haz de grupos abelianos","Un anillo local"],c:0,e:"Se pega a partir de esquemas afines Spec A."},
{q:"Por el lema de Yoneda, un esquema X queda determinado por su:",o:["Anillo de funciones globales","Funtor de puntos Hom(−, X)","Dimensión","Grupo fundamental"],c:1,e:"Es el punto de vista funtorial de Grothendieck."},
{q:"La topología étale de un esquema es un ejemplo de:",o:["Una topología métrica","Una topología de Grothendieck sobre una categoría de recubrimientos","Un orden parcial","Una topología más gruesa que la de Zariski"],c:1,e:"No es una topología de espacio topológico; es más fina que la de Zariski."},
{q:"¿Quién probó la hipótesis de Riemann de las conjeturas de Weil usando cohomología ℓ-ádica?",o:["Weil","Serre","Deligne","Faltings"],c:2,e:"Deligne (1974), con la cohomología étale desarrollada por Grothendieck."},
S("Según el criterio de Serre, un esquema noetheriano X es afín si y solo si:",["Hⁱ(X, F) = 0 para todo i > 0 y todo haz cuasi-coherente F","X es conexo y reducido","O_X(X) es un cuerpo","Su grupo de Picard es trivial"],"La anulación de la cohomología superior de haces cuasi-coherentes caracteriza a los esquemas afines."),
S("El criterio valuativo de separación y propiedad para un morfismo f : X → Y se formula mediante:",["Levantamientos únicos de morfismos desde Spec R (anillo de valoración)","Homomorfismos de grupos de homotopía","Sucesiones exactas cortas de haces","Inmersión en un espacio proyectivo"],"Un morfismo es propio (bajo hipótesis de finitud) si existe un único levantamiento desde Spec K a Spec R.")]
};

// ===== 2. TEORÍA DE GRAFOS =====
const gr0=[
S("Un árbol es un grafo…",["Conexo y sin ciclos","Completo","Con todos los grados pares","Bipartito y regular"],"Árbol = conexo y acíclico."),
S("¿Qué es el grado de un vértice?",["El número de aristas incidentes en él","El número de vértices del grafo","La longitud del camino más largo","El número de ciclos que lo contienen"]),
S("Un grafo simple no tiene…",["Bucles ni aristas múltiples","Ciclos de longitud impar","Vértices de grado 1","Componentes conexas"],"Simple significa sin lazos (bucles) y a lo sumo una arista entre cada par de vértices."),
r=>{const n=ri(r,4,9);return mc(r,"¿Cuántas aristas tiene el grafo completo K_"+n+"?",n*(n-1)/2,[n*n,n*(n+1)/2,n-1,n*(n-1),n],"K_n tiene n(n−1)/2 aristas.")},
r=>{const m=ri(r,5,20);return mc(r,"Un grafo tiene "+m+" aristas. ¿Cuánto suman los grados de todos sus vértices?",2*m,[m,m+1,m*m,2*m+2,m-1],"Lema del apretón de manos: Σ grados = 2·|E|.")},
r=>{const n=ri(r,5,30);return mc(r,"¿Cuántas aristas tiene un árbol con "+n+" vértices?",n-1,[n,n+1,n-2,2*n,n*(n-1)/2],"Todo árbol con n vértices tiene n−1 aristas.")},
r=>{const k=ri(r,2,5),n=ri(r,3,6)*2;return mc(r,"¿Cuántas aristas tiene un grafo "+k+"-regular con "+n+" vértices?",(n*k)/2,[n*k,n+k,n*k-1,(n-1)*k],"Por el lema del apretón de manos: |E| = n·k / 2.")}];
const gr1=[
S("Un grafo conexo tiene un circuito euleriano si y solo si…",["Todos sus vértices tienen grado par","Tiene un ciclo hamiltoniano","Es bipartito","Es un árbol"],"Teorema de Euler."),
S("¿Cuál es el número cromático de un grafo bipartito con al menos una arista?",["2","1","3","4"],"Dos colores bastan (uno por parte) y uno solo no alcanza."),
S("El número de vértices de grado impar en cualquier grafo es…",["Siempre par","Siempre impar","Igual al número de aristas","Cualquiera"],"Σ grados = 2|E| es par."),
S("Un grafo es bipartito si y solo si no contiene…",["Ciclos de longitud impar","Ciclos de longitud par","Vértices de grado impar","Árboles generadores"],"Teorema de König sobre caracterización de grafos bipartitos."),
r=>{const n=ri(r,3,15);return mc(r,"¿Cuál es el número cromático del ciclo C_"+n+"?",n%2?3:2,[1,2,3,4,5],"Los ciclos pares son bipartitos; los impares necesitan 3 colores.")},
r=>{const m=ri(r,2,8),n=ri(r,2,8);return mc(r,"¿Cuántas aristas tiene el grafo bipartito completo K_{"+m+","+n+"}?",m*n,[m+n,m*n+m,m*n-1,(m+n)*(m+n-1)/2],"Cada vértice de una parte se une con todos los de la otra: m·n.")},
r=>{const d=ri(r,3,6);return mc(r,"¿Cuántos vértices tiene el grafo hipercubo Q_"+d+"?",Math.pow(2,d),[d*d,2*d,d*Math.pow(2,d-1),Math.pow(2,d-1)],"Q_d tiene 2^d vértices y d·2^(d−1) aristas.")}];
const gr2=[
S("Fórmula de Euler para grafos planares conexos: |V| − |E| + |F| =",["2","1","0","|V|"]),
S("¿Cuál de estos grafos no es planar?",["K₅","K₄","C₆","Un árbol"],"K₅ y K₃,₃ son los grafos mínimos no planares (Kuratowski)."),
S("¿Cuánto vale el número de Ramsey R(3,3)?",["6","5","9","18"],"Entre 6 personas hay 3 que se conocen entre sí o 3 que no; con 5 no."),
S("El teorema de los cuatro colores afirma que todo mapa planar se colorea con…",["4 colores","3 colores","5 colores","6 colores"],"Appel y Haken, 1976."),
S("Teorema de Hall: un grafo bipartito (X, Y) tiene un emparejamiento que satura X si y solo si para todo S ⊆ X…",["|N(S)| ≥ |S|","|N(S)| = |Y|","|S| es par","El grafo es regular"],"Condición de matrimonio de Hall."),
S("¿Cuál es el radio y diámetro del grafo de Petersen?",["Radio 2 y diámetro 2","Radio 2 y diámetro 3","Radio 3 y diámetro 3","Radio 1 y diámetro 2"],"Es un grafo 3-regular de 10 vértices y cintura 5 con diámetro 2."),
r=>{const n=ri(r,5,20);return mc(r,"¿Cuántas aristas puede tener, como máximo, un grafo planar simple con "+n+" vértices?",3*n-6,[3*n-3,3*n,2*n-4,n*(n-1)/2,3*n-5],"Consecuencia de la fórmula de Euler: |E| ≤ 3n − 6.")},
r=>{const n=ri(r,3,7);return mc(r,"Según la fórmula de Cayley, ¿cuántos árboles etiquetados distintos hay sobre "+n+" vértices?",Math.pow(n,n-2),[Math.pow(n,n-1),Math.pow(n-1,n-2),n*(n-1),Math.pow(n,n)],"Cayley: nⁿ⁻².")}];

// ===== 3. ANÁLISIS REAL =====
const ar0=[
S("¿Cuál es el supremo del conjunto (0, 1)?",["1","0","1/2","No existe"],"Aunque 1 no pertenezca al conjunto, es su mínima cota superior."),
S("La serie geométrica Σ rⁿ (n ≥ 0) converge si y solo si…",["|r| < 1","r > 0","r ≠ 1","|r| ≤ 1"],"Para |r| < 1 suma 1/(1−r)."),
S("¿Cuál es la derivada de xⁿ?",["n·xⁿ⁻¹","xⁿ⁻¹","n·xⁿ","(n−1)·xⁿ"]),
S("Una sucesión monótona creciente y acotada superiormente en ℝ…",["Siempre converge a su supremo","Diverge a infinito","Oscila","Solo converge si es estrictamente creciente"],"Axioma del supremo en ℝ."),
r=>{const m=ri(r,2,6),c=ri(r,1,5),b=ri(r,1,9),d=ri(r,1,9);return mc(r,"Calcula lím (n→∞) de ("+(m*c)+"n + "+b+")/("+c+"n + "+d+").",m,[m*c,c,m+1,m+2,m-1],"Se divide por n: el límite es el cociente de los coeficientes líderes.")},
r=>{const q=ri(r,2,5);return mc(r,"¿Cuánto suma la serie geométrica Σ (1/"+q+")^n desde n = 0 hasta infinito?",q+"/"+(q-1),[1+"/"+(q-1),(q-1)+"/"+q,q,"1/"+q],"Suma = 1 / (1 − 1/q) = q/(q−1).")}];
const ar1=[
S("Toda sucesión acotada en ℝ tiene una subsucesión convergente. Es el teorema de…",["Bolzano–Weierstrass","Heine–Borel","Rolle","Cauchy–Schwarz"]),
S("fₙ(x) = xⁿ en [0,1] converge puntualmente pero no uniformemente. ¿Por qué?",["El límite no es continuo","El límite no existe","Cada fₙ es discontinua","[0,1] no es compacto"],"El límite vale 0 en [0,1) y 1 en x = 1; un límite uniforme de continuas es continuo."),
S("El teorema del valor medio dice que existe c con…",["f′(c) = (f(b) − f(a))/(b − a)","f(c) = 0","f′(c) = 0 siempre","f(c) = (f(a) + f(b))/2"]),
S("Una función continua en [a, b]…",["Alcanza su máximo y su mínimo","Es siempre derivable","Es siempre monótona","Es acotada solo si es derivable"],"Teorema de Weierstrass (compacidad)."),
S("Toda función continua en un intervalo cerrado y acotado [a, b] es…",["Uniformemente continua","Derivable en (a, b)","Analítica","Lipschitziana"],"Teorema de Heine–Cantor."),
r=>{const p=[0.5,1,1.5,2,3,1.1,0.9][ri(r,0,6)],ok=p>1;return mc(r,"¿Qué ocurre con la serie Σ 1/n^p (n ≥ 1) para p = "+p+"?",ok?"Converge":"Diverge",["Diverge","Converge","Oscila sin límite","Converge condicionalmente"],"La p-serie converge si y solo si p > 1.")}];
const ar2=[
S("Criterio de Lebesgue: f acotada es Riemann-integrable en [a,b] si y solo si sus discontinuidades…",["Forman un conjunto de medida cero","Son finitas","Son numerables y densas","Forman un cerrado"]),
S("El conjunto de Cantor es…",["No numerable y de medida cero","Numerable","Denso en [0,1]","De medida 1"],"Tiene la cardinalidad del continuo pero medida 0."),
S("Teorema de Baire: un espacio métrico completo no vacío no es unión numerable de…",["Cerrados de interior vacío","Abiertos densos","Compactos","Conexos"]),
S("Arzelà–Ascoli: un subconjunto de C([a,b]) es relativamente compacto si y solo si es…",["Acotado y equicontinuo","Cerrado y convexo","Monótono","Uniformemente derivable"]),
S("Teorema de Dini: fₙ continuas que convergen monótonamente y puntualmente a f continua en un compacto…",["Convergen uniformemente","Convergen solo en medida","Tienen límite derivable","No permiten concluir nada"]),
S("El teorema de convergencia dominada de Lebesgue requiere que |fₙ| ≤ g con…",["g integrable (g ∈ L¹)","g continua y acotada","g constante","fₙ monótona creciente"],"Permite intercambiar límite e integral cuando la sucesión está dominada por una función integrable."),
S("Teorema de diferenciación de Lebesgue: toda función monótona f : [a,b] → ℝ es…",["Derivable en casi todas partes","Derivable en todos los puntos","Continuamente derivable","Constante a trozos"],"El conjunto donde una función monótona no es derivable tiene medida de Lebesgue nula.")];

// ===== 4. TOPOLOGÍA =====
const to0=[
S("Una topología contiene ∅ y X, es cerrada por uniones arbitrarias y por…",["Intersecciones finitas","Intersecciones arbitrarias","Complementos","Productos"]),
S("¿Cuál de estos subconjuntos de ℝ es compacto?",["[0, 1]","(0, 1)","ℝ","[0, ∞)"],"Heine–Borel: cerrado y acotado."),
S("¿Cuándo es abierto un subconjunto de ℝ con la topología usual?",["Si contiene un intervalo abierto alrededor de cada uno de sus puntos","Si es un intervalo cerrado","Si es finito","Si no tiene frontera"]),
S("El interior de un conjunto A es…",["El mayor abierto contenido en A","El menor cerrado que contiene a A","La intersección de A con su frontera","El complemento de la clausura de A"]),
r=>{const n=ri(r,2,8);return mc(r,"¿Cuántos abiertos tiene la topología discreta sobre un conjunto de "+n+" elementos?",Math.pow(2,n),[n*n,n,2*n,n*n+1,Math.pow(2,n)-1],"Todo subconjunto es abierto: 2ⁿ.")}];
const to1=[
S("f : X → Y es continua si y solo si…",["La preimagen de todo abierto es abierta","La imagen de todo abierto es abierta","Es biyectiva","Preserva distancias"]),
S("X es Hausdorff si…",["Puntos distintos tienen vecindades disjuntas","Todo abierto es cerrado","X es compacto","X es finito"]),
S("La imagen continua de un espacio conexo es…",["Conexa","Discreta","Abierta","Finita"]),
S("Teorema de Tychonoff: un producto arbitrario de espacios compactos es…",["Compacto","Conexo","Hausdorff","Metrizable"],"Equivale al axioma de elección."),
S("¿Cuál de estos espacios es conexo?",["ℝ","ℚ","ℤ","(0,1) ∪ (2,3)"]),
S("Todo subespacio cerrado de un espacio compacto es…",["Compacto","Conexo","Abierto","Denso"])];
const to2=[
S("Lema de Urysohn: en un espacio normal, dos cerrados disjuntos A y B se separan con…",["Una función continua f : X → [0,1] con f=0 en A y f=1 en B","Un homeomorfismo","Una base numerable","Una métrica"]),
S("La topología de Zariski de A¹(ℂ) no es…",["Hausdorff","T₁","Compacta","Noetheriana"],"Dos abiertos no vacíos siempre se cortan."),
S("La compactificación por un punto de ℝⁿ es homeomorfa a…",["Sⁿ","Tⁿ","ℝPⁿ","Dⁿ"]),
S("Todo espacio compacto Hausdorff es…",["Normal","Discreto","Numerable","Metrizable"]),
S("Teorema de metrización de Urysohn: todo espacio regular con base numerable (2° numerable) es…",["Metrizable","Compacto","Conexo por caminos","Localmente euclídeo"])];
const to3=[
S("¿Cuánto vale π₁(S¹)?",["ℤ","0","ℤ/2","ℤ × ℤ"],"Cuenta las vueltas alrededor del círculo."),
S("¿Cuánto vale π₁ del toro T²?",["ℤ × ℤ","ℤ","0","ℤ/2"]),
S("¿Cuánto vale π₁(S²)?",["0","ℤ","ℤ/2","No está definido"]),
S("Un espacio simplemente conexo es conexo por caminos y tiene…",["π₁ trivial","H₁ no nulo","Característica de Euler 1","π₁ abeliano"]),
S("¿Cuál es el grupo fundamental de la figura ocho (S¹ ∨ S¹)?",["El grupo libre en dos generadores F₂","ℤ × ℤ","ℤ","ℤ/2 * ℤ/2"],"Por Seifert–van Kampen, la unión puntual de círculos tiene grupo fundamental libre."),
r=>{const g=ri(r,0,8);return mc(r,"¿Cuál es la característica de Euler de la superficie orientable de género "+g+"?",2-2*g,[2*g-2,2+2*g,g,1-2*g,g+2],"χ = 2 − 2g.")}];
const to4=[
S("¿Cuál es H_n(Sⁿ; ℤ) para n ≥ 1?",["ℤ","0","ℤ/2","ℤⁿ"]),
S("¿Cuánto vale π₁(ℝP²)?",["ℤ/2","ℤ","0","ℤ × ℤ"]),
S("Seifert–van Kampen calcula π₁ de una unión de abiertos con intersección conexa por caminos mediante…",["Un producto amalgamado","Un producto directo","Un cociente por conmutadores","Una suma directa de homologías"]),
S("Teorema del punto fijo de Brouwer: toda función continua D² → D² tiene…",["Un punto fijo","Un 2-ciclo","Ningún punto fijo","Un punto fijo solo si es biyectiva"]),
S("La sucesión de Mayer–Vietoris relaciona la homología de X = A ∪ B con la de…",["A, B y A ∩ B","A y B solamente","X y su borde","π₁(X)"]),
S("Teorema de Hurewicz en grado 1: H₁(X) es…",["La abelianización de π₁(X)","π₁(X)","El centro de π₁(X)","Siempre trivial"]),
S("Dualidad de Poincaré: para una variedad cerrada y orientada M de dimensión n, H^k(M; ℤ) es isomorfo a…",["H_{n−k}(M; ℤ)","H_k(M; ℤ)","H^{n−k}(M; ℤ)","π_k(M)"])];

// ===== 5. ÁLGEBRA ABSTRACTA =====
const aa0=[
S("Un grupo es un conjunto con una operación…",["Asociativa, con neutro e inversos","Conmutativa y con neutro","Distributiva sobre la suma","Idempotente"]),
S("¿Es (ℤ, +) un grupo?",["Sí, abeliano","No, faltan inversos","No, falta el neutro","Sí, pero no abeliano"]),
S("En cualquier grupo G, el inverso del producto (a·b)⁻¹ es igual a…",["b⁻¹·a⁻¹","a⁻¹·b⁻¹","a·b⁻¹","b·a"]),
r=>{const n=ri(r,3,6);let f=1;for(let k=2;k<=n;k++)f*=k;return mc(r,"¿Cuántos elementos tiene el grupo simétrico S_"+n+"?",f,[n*n,n*(n-1),2*n,f/n,f+1,Math.pow(2,n)],"|Sₙ| = n!.")},
r=>{const n=ri(r,2,9),m=ri(r,2,9);return mc(r,"¿Cuántos elementos tiene ℤ_"+n+" × ℤ_"+m+"?",n*m,[n+m,n*m+n,n*m-1,n*n+1,m*m+2],"El orden de un producto es el producto de los órdenes.")}];
const aa1=[
S("Teorema de Lagrange: si H ≤ G con G finito, entonces…",["|H| divide a |G|","|G| divide a |H|","H es normal","G es abeliano"]),
S("¿Para qué n es ℤ_n un cuerpo?",["Cuando n es primo","Cuando n es par","Siempre","Cuando n es potencia de 2"]),
S("Todo grupo de orden primo p es…",["Cíclico e isomorfo a ℤ_p","No abeliano","Producto directo de dos subgrupos propios","Sin generadores"]),
r=>{const n=ri(r,6,24),k=ri(r,2,n-1),g=gcd(k,n);return mc(r,"¿Cuál es el orden del elemento "+k+" en (ℤ_"+n+", +)?",n/g,[n,k,g,n-k,n/g+1,n*k],"El orden de k en ℤₙ es n/mcd(k, n).")},
r=>{const n=ri(r,5,24);return mc(r,"¿Cuántos generadores tiene el grupo cíclico ℤ_"+n+"?",phi(n),[n,n-1,phi(n)+1,phi(n)+2,Math.floor(n/2)],"Los generadores son los k con mcd(k, n) = 1: φ(n).")}];
const aa2=[
S("Un subgrupo N ◁ G es normal si…",["gNg⁻¹ = N para todo g ∈ G","Tiene índice 2","Es abeliano","Es cíclico"]),
S("Primer teorema de isomorfismo: G/ker φ ≅ …",["im φ","G","ker φ","Aut(G)"]),
S("Teorema de Cauchy: si un primo p divide a |G|, entonces G tiene…",["Un elemento de orden p","Un subgrupo normal de orden p","Un subgrupo de índice p","Centro no trivial"]),
S("Si H ≤ G tiene índice [G : H] = 2, entonces H es…",["Siempre normal en G","Siempre abeliano","El centro de G","Cíclico"]),
r=>{const m=ri(r,2,12),n=ri(r,2,12),ok=gcd(m,n)===1;return mc(r,"¿Es cíclico el grupo ℤ_"+m+" × ℤ_"+n+"?",ok?"Sí":"No",["Sí","No","Solo si m = n","Solo si ambos son primos"],"Es cíclico si y solo si mcd(m, n) = 1 (teorema chino del resto).")}];
const aa3=[
S("Tercer teorema de Sylow: el número nₚ de p-subgrupos de Sylow cumple…",["nₚ ≡ 1 (mod p) y nₚ divide al índice","nₚ = p","nₚ divide a p","nₚ ≡ 0 (mod p)"]),
S("Para n ≥ 5, el grupo alternante Aₙ es…",["Simple","Soluble","Abeliano","Cíclico"]),
S("Todo dominio de ideales principales es…",["Un dominio de factorización única","Un cuerpo","Un anillo local","Finito"]),
S("¿Cuál de estos anillos es un dominio de ideales principales?",["ℚ[x]","ℤ[x]","ℚ[x,y]","ℤ[x,y]"],"k[x] es euclídeo; los otros no son DIP."),
S("En un anillo conmutativo con identidad R, un ideal I es maximal si y solo si…",["R/I es un cuerpo","R/I es un dominio de integridad","I es principal","I = (0)"])];
const aa4=[
S("Criterio de Eisenstein: f es irreducible en ℚ[x] si existe un primo p que…",["Divide a a₀,…,aₙ₋₁, no a aₙ, y p² no divide a a₀","Divide a todos los coeficientes","Divide solo a aₙ","Divide a aₙ y a a₀"]),
S("Teorema de la base de Hilbert: si R es noetheriano, entonces…",["R[x] es noetheriano","R es un DIP","R es un cuerpo","R[x] es un DIP"]),
S("Teorema de Feit–Thompson: todo grupo finito de orden impar es…",["Soluble","Simple","Abeliano","Cíclico"]),
S("Lema de Gauss: si f ∈ ℤ[x] es primitivo e irreducible en ℤ[x], entonces…",["Es irreducible en ℚ[x]","Es reducible en ℚ[x]","Tiene grado 1","Tiene una raíz entera"]),
S("El producto tensorial ⊗ sobre un anillo R es, en general…",["Exacto por la derecha, no por la izquierda","Exacto","Exacto por la izquierda, no por la derecha","Inexacto por ambos lados"]),
S("Teorema de estructura para módulos finitamente generados sobre un DIP: todo módulo M se descompone como…",["R^r ⊕ R/(d₁) ⊕ … ⊕ R/(d_k) con d₁ | d₂ | … | d_k","Una suma directa de cuerpos","Un módulo libre siempre","Un producto de ideales primos"])];
const aa5=[
S("Teorema fundamental de la teoría de Galois: los cuerpos intermedios de L/K (Galois) corresponden a…",["Los subgrupos de Gal(L/K), invirtiendo inclusiones","Solo los subgrupos normales","Los elementos de L","Los ideales de K"]),
S("¿Cuál es el orden de Gal(ℚ(√2, √3)/ℚ)?",["4","2","6","8"],"La extensión tiene grado 4 y su grupo es ℤ/2 × ℤ/2."),
S("¿Cuál es el grupo de Galois de x³ − 2 sobre ℚ?",["S₃","ℤ/3","ℤ/6","A₃"],"El cuerpo de descomposición ℚ(∛2, ω) tiene grado 6."),
S("x⁵ − x − 1 no es resoluble por radicales sobre ℚ porque su grupo de Galois es…",["S₅, que no es soluble","ℤ/5","A₄","ℤ/2"]),
S("Abel–Ruffini: la ecuación polinómica general de grado ≥ 5…",["No es resoluble por radicales","Siempre tiene solución racional","Tiene grupo de Galois abeliano","Es resoluble por radicales"]),
S("¿Cuál es el grupo de Galois de la extensión finita 𝔽_{p^n} / 𝔽_p?",["Cíclico de orden n, generado por el automorfismo de Frobenius x ↦ x^p","El grupo simétrico S_n","El grupo diedral D_n","Trivial"]),
r=>{const n=[5,7,8,9,10,12,15,16,20][ri(r,0,8)];return mc(r,"¿Cuál es el grado de ℚ(ζ_n) sobre ℚ para n = "+n+"?",phi(n),[n,n-1,n/2,phi(n)+1,phi(n)*2],"El grado es φ(n) y Gal ≅ (ℤ/n)ˣ.")}];

// ===== 6. VARIABLE COMPLEJA =====
const vc0=[
S("¿Cuánto vale i² en el cuerpo de los números complejos ℂ?",["−1","1","i","0"],"Por definición de la unidad imaginaria, i² = −1."),
S("Según la fórmula de Euler, e^{iθ} es igual a:",["cos θ + i sen θ","cos θ − i sen θ","sen θ + i cos θ","e^θ(cos θ + sen θ)"]),
S("Si z = x + iy, el producto z·z̄ (z por su conjugado) es igual a:",["x² + y²","x² − y²","2x","2iy"],"|z|² = z·z̄ = x² + y²."),
S("¿Cuáles son los valores principales de las raíces cúbicas de la unidad en ℂ?",["1, e^{2πi/3}, e^{4πi/3}","1, −1, i","1, i, −i","e^{πi/3}, e^{2πi/3}, −1"]),
r=>{const a=ri(r,1,6),b=ri(r,1,6);return mc(r,"¿Cuánto vale |z|² para el número complejo z = "+a+" + "+b+"i?",a*a+b*b,[a+b,Math.abs(a*a-b*b),2*a*b,(a+b)*(a+b)],"|a + bi|² = a² + b².")},
r=>{const n=ri(r,0,20)*4+ri(r,0,3),ans=["1","i","−1","−i"][n%4];return mc(r,"¿Cuánto vale i^"+n+"?",ans,["1","i","−1","−i"],"Las potencias de i son periódicas de período 4: i⁰=1, i¹=i, i²=−1, i³=−i.")}];
const vc1=[
S("Para f(z) = u(x,y) + iv(x,y), las ecuaciones de Cauchy–Riemann son:",["u_x = v_y  y  u_y = −v_x","u_x = −v_y  y  u_y = v_x","u_x = u_y  y  v_x = v_y","u_{xx} + v_{yy} = 0"]),
S("Teorema de Cauchy–Goursat: si f es holomorfa en un dominio simplemente conexo D, para toda curva cerrada simple γ en D:",["∮_γ f(z) dz = 0","∮_γ f(z) dz = 2πi","∮_γ f(z) dz = f(0)","La integral depende del radio de γ"]),
S("¿Cuánto vale la integral ∮_{|z|=1} (1/z) dz recorrida en sentido antihorario?",["2πi","0","πi","1"],"Con z = e^{iθ}, dz = ie^{iθ}dθ, la integral da ∫₀^{2π} i dθ = 2πi."),
S("La parte real e imaginaria de cualquier función holomorfa satisfacen la ecuación de Laplace, por lo que son funciones:",["Armónicas","Constantes","Polinomiales","Periódicas"]),
S("Fórmula integral de Cauchy: si f es holomorfa dentro y sobre un contorno cerrado simple γ que rodea a z₀:",["f(z₀) = (1/2πi) ∮_γ f(z)/(z − z₀) dz","f(z₀) = ∮_γ f(z)(z − z₀) dz","f(z₀) = (1/2π) ∮_γ f′(z) dz","f(z₀) = 0"]),
r=>{const R=ri(r,2,8);return mc(r,"¿Cuál es el radio de convergencia de la serie Σ (z/"+R+")^n?",R,[1,"1/"+R,R*R,0],"Por el criterio de la raíz, converge para |z/R| < 1, es decir |z| < "+R+".")}];
const vc2=[
S("Teorema de Liouville: toda función entera (holomorfa en todo ℂ) y acotada es necesariamente:",["Constante","Un polinomio de grado 1","Periódica","Idénticamente nula"]),
S("En z = 0, la función f(z) = e^{1/z} tiene una singularidad:",["Esencial","Evitable","Polo simple","Polo de orden 2"],"Su serie de Laurent tiene infinitos términos con potencias negativas de z."),
S("El gran teorema de Picard afirma que en toda vecindad perforada de una singularidad esencial, f(z) toma:",["Todos los valores complejos infinitas veces, salvo a lo sumo uno","Solo valores reales","Un número finito de valores","Valores acotados"]),
S("El principio del argumento relaciona (1/2πi) ∮_γ (f′(z)/f(z)) dz con:",["N − P (número de ceros menos número de polos dentro de γ, con multiplicidad)","N + P","La suma de los residuos de f","El grado de γ"]),
S("Por el lema de Schwarz, si f : D → D es holomorfa con f(0) = 0 en el disco unidad D, entonces:",["|f(z)| ≤ |z| para todo z ∈ D y |f′(0)| ≤ 1","|f(z)| ≥ |z|","f es constante","f(z) = z²"]),
r=>{const a=ri(r,1,5),k=ri(r,2,6);return mc(r,"¿Cuál es el residuo de f(z) = "+k+"/(z − "+a+") en z = "+a+"?",k,[a,0,k*a,2*k],"Para un polo simple en z = a, Res(f, a) = lím_{z→a} (z−a)f(z) = "+k+".")}];

// ===== 7. MECÁNICA CLÁSICA =====
const mc0=[
S("Según la segunda ley de Newton, si la masa m es constante, la fuerza neta F sobre una partícula es:",["F = m·a","F = m·v","F = ½m·v²","F = m/a"]),
S("El teorema del trabajo y la energía establece que el trabajo neto realizado sobre una partícula es igual a:",["El cambio en su energía cinética (ΔK)","El cambio en su momento lineal","Su energía potencial inicial","La fuerza multiplicada por el tiempo"]),
S("En ausencia de fuerzas externas netas sobre un sistema, la magnitud que se conserva es:",["El momento lineal total","La aceleración de cada partícula","La velocidad escalar media","El coeficiente de roce"]),
S("La frecuencia angular ω de un oscilador armónico simple de masa m y constante de resorte k es:",["√(k/m)","k/m","√(m/k)","2π√(m/k)"]),
r=>{const m=ri(r,2,8),v=ri(r,2,10);return mc(r,"¿Cuál es la energía cinética (en J) de una partícula de masa "+m+" kg que se mueve a "+v+" m/s?",0.5*m*v*v,[m*v,m*v*v,0.5*m*v,2*m*v*v],"K = ½ m v².")},
r=>{const m=ri(r,2,10),a=ri(r,2,9);return mc(r,"¿Qué fuerza neta (en N) produce una aceleración de "+a+" m/s² en una masa de "+m+" kg?",m*a,[m+a,m*a*a,0.5*m*a,a/m],"Segunda ley de Newton: F = m·a.")}];
const mc1=[
S("El lagrangiano L de un sistema mecánico conservativo se define como:",["L = T − V (energía cinética menos potencial)","L = T + V","L = p·q̇ − H","L = F·r"]),
S("Las ecuaciones de Euler–Lagrange para una coordenada generalizada q_i sin fuerzas no conservativas son:",["d/dt(∂L/∂q̇_i) − ∂L/∂q_i = 0","∂L/∂q̇_i + ∂L/∂q_i = 0","d/dt(∂L/∂q_i) = ∂L/∂q̇_i","∂²L/∂t² = 0"]),
S("Si el lagrangiano L no depende explícitamente de una coordenada generalizada q_k (coordenada cíclica), entonces:",["Su momento conjugado p_k = ∂L/∂q̇_k se conserva","La coordenada q_k permanece constante","La energía potencial es nula","La aceleración q̈_k es cero"]),
S("La segunda ley de Kepler (la línea que une el planeta con el Sol barre áreas iguales en tiempos iguales) es consecuencia directa de la conservación de:",["El momento angular L","La energía mecánica E","El vector de Runge–Lenz","El momento lineal p"]),
S("En un sistema de referencia que rota con velocidad angular Ω respecto a uno inercial, la aceleración de Coriolis es:",["−2 Ω × v","−Ω × (Ω × r)","Ω × v","−m Ω² r"]),
r=>{const T=ri(r,2,8);return mc(r,"Por la tercera ley de Kepler (T² ∝ a³), si el semieje mayor de una órbita se multiplica por "+T*T+", su período orbital se multiplica por:",T*T*T,[T*T,T,2*T*T,T*T*T*T],"Si a' = k²·a, entonces T' = (k²)^{3/2} T = k³ T.")}];
const mc2=[
S("Las ecuaciones canónicas de Hamilton son:",["q̇_i = ∂H/∂p_i ,  ṗ_i = −∂H/∂q_i","q̇_i = −∂H/∂p_i ,  ṗ_i = ∂H/∂q_i","q̇_i = ∂H/∂q_i ,  ṗ_i = ∂H/∂p_i","q̈_i = −∂H/∂q_i"]),
S("El teorema de Noether establece que a cada simetría continua diferenciable de la acción le corresponde:",["Una cantidad conservada (integral primera)","Un punto de equilibrio estable","Una transformación de contacto discreta","Una fuerza disipativa"]),
S("En el formalismo hamiltoniano, el corchete de Poisson fundamental {q_i, p_j} vale:",["δ_{ij} (delta de Kronecker)","0","−δ_{ij}","iℏ δ_{ij}"]),
S("El teorema de Liouville en mecánica clásica afirma que el flujo hamiltoniano preserva:",["El volumen en el espacio de fases","La distancia entre trayectorias cualesquiera","El módulo de la velocidad","La forma del lagrangiano"]),
S("En el problema de Kepler (V = −k/r), la simetría oculta SO(4) de las órbitas cerradas está asociada a la conservación de:",["El vector de Laplace–Runge–Lenz","El tensor de inercia","La helicidad","El virial instantáneo"]),
S("La ecuación de Hamilton–Jacobi para la función principal de Hamilton S(q, P, t) es:",["H(q, ∂S/∂q, t) + ∂S/∂t = 0","H(q, ∂S/∂t) − ∂S/∂q = 0","∂²S/∂t² = H","{S, H} = 1"])];

// ===== 8. MECÁNICA CUÁNTICA =====
const mq0=[
S("Según la relación de Planck–Einstein, la energía de un fotón de frecuencia ν es:",["E = h·ν","E = h/ν","E = ½ h·ν²","E = m·c·ν"]),
S("La longitud de onda de De Broglie λ asociada a una partícula con momento lineal p es:",["λ = h / p","λ = h·p","λ = p / h","λ = ℏ·p²"]),
S("El principio de incertidumbre de Heisenberg para la posición x y el momento p_x establece que:",["Δx · Δp_x ≥ ℏ / 2","Δx · Δp_x = 0","Δx / Δp_x ≥ h","Δx + Δp_x ≤ ℏ"]),
S("Según la interpretación probabilística de Born, la densidad de probabilidad de encontrar una partícula en x es:",["|ψ(x, t)|²","ψ(x, t)","Re(ψ(x, t))","|∇ψ(x, t)|"]),
S("Los niveles de energía de una partícula de masa m en un pozo infinito unidimensional de ancho L son:",["E_n = n² π² ℏ² / (2mL²)","E_n = n ℏ ω","E_n = −13.6 eV / n²","E_n = n π ℏ / (mL)"]),
r=>{const n=ri(r,2,6);return mc(r,"En un pozo de potencial infinito 1D, ¿cuál es el cociente E_"+n+" / E_1 entre el nivel n = "+n+" y el estado fundamental?",n*n,[n,2*n,n*n-1,n+1],"Como E_n ∝ n², se cumple E_n / E_1 = n².")}];
const mq1=[
S("¿Cuánto vale el conmutador canónico [x̂, p̂_x] en mecánica cuántica?",["iℏ","0","−iℏ","ℏ/2"]),
S("Los niveles de energía del oscilador armónico cuántico unidimensional son:",["E_n = ℏω(n + 1/2) con n = 0, 1, 2, …","E_n = nℏω con n = 1, 2, …","E_n = ℏω(n² + 1)","E_n = ½ ℏω n²"]),
S("Los autovalores del operador cuadrado del momento angular L̂² son:",["ℏ² l(l + 1) con l = 0, 1, 2, …","ℏ l","ℏ² l²","ℏ(l + 1/2)"]),
S("Las matrices de Pauli σ_x, σ_y, σ_z satisfacen la relación de conmutación [σ_x, σ_y] =",["2i σ_z","i σ_z","0","−σ_z"]),
S("En el oscilador armónico cuántico, el operador de creación â† actuando sobre el estado |n⟩ produce:",["√(n + 1) |n + 1⟩","√n |n − 1⟩","(n + 1) |n + 1⟩","n |n⟩"]),
r=>{const l=ri(r,0,6);return mc(r,"Para un número cuántico orbital l = "+l+", ¿cuántos valores posibles tiene el número cuántico magnético m_l?",2*l+1,[l,l+1,2*l,l*l],"m_l toma valores desde −l hasta +l en pasos enteros: 2l + 1 valores.")}];
const mq2=[
S("El teorema de Ehrenfest demuestra que los valores esperados de posición y momento satisfacen:",["d⟨x⟩/dt = ⟨p⟩/m  y  d⟨p⟩/dt = −⟨∂V/∂x⟩","d⟨x⟩/dt = 0","⟨p⟩² = 2m⟨V⟩","[H, x] = 0"]),
S("En teoría de perturbaciones independiente del tiempo (no degenerada), la corrección de primer orden a la energía E_n^(1) es:",["⟨n⁽⁰⁾| H′ |n⁽⁰⁾⟩","Σ_{m≠n} |⟨m⁽⁰⁾|H′|n⁽⁰⁾⟩|² / (E_n⁽⁰⁾ − E_m⁽⁰⁾)","⟨n⁽⁰⁾| H′² |n⁽⁰⁾⟩","0 siempre"]),
S("El principio variacional establece que para cualquier estado de prueba normalizado |ψ⟩, el valor esperado ⟨ψ|H|ψ⟩ es:",["Mayor o igual que la energía del estado fundamental E₀","Menor o igual que E₀","Exactamente igual a E₀","Igual al promedio de todos los autovalores"]),
S("En la representación de Heisenberg, la evolución temporal de un operador Â (sin dependencia explícita de t) está dada por:",["dÂ_H/dt = (i/ℏ) [Ĥ, Â_H]","dÂ_H/dt = −(i/ℏ) [Ĥ, Â_H]","Â_H(t) = Â(0)","dÂ_H/dt = 0"]),
S("Para un estado cuántico descrito por una matriz densidad ρ̂, la condición de que el estado sea puro es:",["Tr(ρ̂²) = 1  (o ρ̂² = ρ̂)","Tr(ρ̂²) < 1","Tr(ρ̂) = 0","det(ρ̂) = 1"]),
S("La fase geométrica adquirida por un estado cuántico tras una evolución adiabática cíclica en el espacio de parámetros se denomina:",["Fase de Berry","Fase de Born–Oppenheimer","Fase de Wigner","Fase de Kramers"])];

// ===== 9. MECÁNICA ESTADÍSTICA =====
const me0=[
S("La fórmula de Boltzmann que relaciona la entropía S con el número de microestados accesibles Ω es:",["S = k_B ln Ω","S = k_B Ω","S = Ω ln k_B","S = −k_B / Ω"]),
S("En un gas ideal clásico de N partículas a temperatura T, la ecuación de estado es:",["P·V = N·k_B·T","P·V = N·T²","P / V = N·k_B·T","P·V² = N·k_B·T"]),
S("Según el teorema de equipartición de la energía, cada grado de libertad cuadrático en el hamiltoniano clásico aporta una energía media de:",["½ k_B T","k_B T","3/2 k_B T","2 k_B T"]),
S("La primera ley de la termodinámica expresa la conservación de la energía interna dU como:",["dU = δQ − δW (o δQ + δW según convención de trabajo)","dU = T dS","dU = P dV","dU = 0 para todo proceso"]),
r=>{const f=ri(r,3,7);return mc(r,"Por equipartición clásica, ¿cuál es la energía interna por partícula (en unidades de ½ k_B T) de un gas ideal con "+f+" grados de libertad cuadráticos?",f,[2*f,f-1,f+2,1],"Cada grado de libertad cuadrático aporta ½ k_B T, totalizando "+f+" veces ½ k_B T.")}];
const me1=[
S("En la colectividad canónica (N, V, T fijos), la probabilidad de encontrar el sistema en un microestado de energía E_r es proporcional al factor de Boltzmann:",["e^{−β E_r} con β = 1/(k_B T)","e^{+β E_r}","1 / E_r","E_r · e^{−β E_r}"]),
S("La energía libre de Helmholtz F se relaciona con la función de partición canónica Z mediante:",["F = −k_B T ln Z","F = k_B T ln Z","F = −∂(ln Z)/∂β","F = k_B T Z"]),
S("En la colectividad canónica, la energía media ⟨E⟩ se obtiene a partir de la función de partición Z como:",["⟨E⟩ = −∂(ln Z) / ∂β","⟨E⟩ = ∂Z / ∂T","⟨E⟩ = −k_B T ln Z","⟨E⟩ = ∂²(ln Z) / ∂β²"]),
S("Las partículas con espín semientero (fermiones) obedecen el principio de exclusión de Pauli y siguen la estadística de:",["Fermi–Dirac","Bose–Einstein","Maxwell–Boltzmann","Planck"]),
S("El número medio de ocupación de un estado de energía ε en la estadística de Bose–Einstein es:",["1 / (e^{β(ε − μ)} − 1)","1 / (e^{β(ε − μ)} + 1)","e^{−β(ε − μ)}","1 / (e^{βε} + μ)"])];
const me2=[
S("En la colectividad canónica, la varianza de la energía ⟨(ΔE)²⟩ = ⟨E²⟩ − ⟨E⟩² se relaciona con la capacidad calorífica C_V mediante:",["⟨(ΔE)²⟩ = k_B T² C_V","⟨(ΔE)²⟩ = k_B T C_V","⟨(ΔE)²⟩ = C_V / (k_B T)","⟨(ΔE)²⟩ = 0"]),
S("El modelo de Ising unidimensional con interacciones de corto alcance a primeros vecinos y sin campo externo presenta transición de fase ferromagnética:",["A ninguna temperatura finita (solo en T = 0)","A k_B T_c = 2J","A k_B T_c = 4J","Para cualquier T > 0"],"En 1D las fluctuaciones térmicas destruyen el orden de largo alcance para todo T > 0."),
S("¿Quién resolvió exactamente en 1944 el modelo de Ising bidimensional sin campo magnético, demostrando la existencia de una transición de fase?",["Lars Onsager","Ernst Ising","Lev Landau","Kenneth Wilson"]),
S("En un gas de Fermi ideal tridimensional a T = 0, la energía media por partícula en función de la energía de Fermi E_F es:",["(3/5) E_F","(1/2) E_F","(3/2) E_F","E_F"]),
S("La paradoja de Gibbs en la entropía de mezcla de dos gases ideales idénticos se resuelve en la función de partición clásica dividiendo por:",["N! (factor de indistinguibilidad cuántica)","2^N","V^N","h³"]),
S("A bajas temperaturas (T → 0), según el modelo de Debye de un sólido cristalino 3D, el calor específico de los fonones varía proporcionalmente a:",["T³","T","e^{−Θ/T}","Constante (3 N k_B)"])];

// ===== 10. HISTORIA DE CHILE =====
const hc0=[
S("¿En qué fecha se constituyó la Primera Junta Nacional de Gobierno en Chile?",["18 de septiembre de 1810","12 de febrero de 1818","5 de abril de 1818","21 de mayo de 1879"]),
S("¿Qué batalla selló definitivamente la Independencia de Chile en el valle central el 5 de abril de 1818?",["Batalla de Maipú","Desastre de Rancagua","Batalla de Chacabuco","Batalla de Lircay"]),
S("¿Quién lideró la expedición que fundó Santiago del Nuevo Extremo el 12 de febrero de 1541?",["Pedro de Valdivia","Diego de Almagro","García Hurtado de Mendoza","Inés de Suárez"]),
S("¿Quién estuvo al mando de la corbeta Esmeralda durante el Combate Naval de Iquique el 21 de mayo de 1879?",["Arturo Prat Chacón","Miguel Grau Seminario","Carlos Condell","Manuel Baquedano"]),
S("¿Qué poeta chileno recibió el Premio Nobel de Literatura en 1945, siendo la primera persona latinoamericana en obtenerlo?",["Gabriela Mistral","Pablo Neruda","Vicente Huidobro","Nicanor Parra"]),
S("¿Cómo se denomina al pueblo originario canoero que habitó los canales australes al sur del Golfo de Penas hasta el Cabo de Hornos?",["Yaganes (o Kawésqar en la zona occidental)","Atacameños (Likan Antai)","Diaguitas","Picunches"])];
const hc1=[
S("¿Bajo la influencia política de qué ministro se redactó e instauró el orden de la Constitución de 1833?",["Diego Portales","Manuel Montt","José Manuel Balmaceda","Bernardo O'Higgins"]),
S("¿Qué conflicto enfrentó en 1891 al presidente José Manuel Balmaceda contra el Congreso Nacional?",["La Guerra Civil de 1891","La Revolución Constituyente de 1859","La Guerra contra la Confederación Perú-Boliviana","El Ruido de Sables"]),
S("¿Durante qué período histórico de Chile se redactó la Declaración de Independencia y gobernó Bernardo O'Higgins como Director Supremo?",["Patria Nueva (1817–1823)","Patria Vieja (1810–1814)","Reconquista (1814–1817)","República Conservadora"]),
S("¿Qué institución estatal fue creada en 1939 durante el gobierno de Pedro Aguirre Cerda para impulsar la industrialización del país?",["CORFO (Corporación de Fomento de la Producción)","CODELCO","Banco Central de Chile","ENAP"]),
S("¿En qué año se aprobó el derecho a voto de las mujeres en las elecciones presidenciales y parlamentarias en Chile?",["1949","1934","1925","1970"],"En 1934 obtuvieron el voto municipal y en 1949 el sufragio pleno bajo el gobierno de Gabriel González Videla."),
S("¿Qué presidente promulgó la Constitución de 1925, que puso fin al régimen parlamentario y separó la Iglesia del Estado?",["Arturo Alessandri Palma","Carlos Ibáñez del Campo","Emiliano Figueroa","Juan Esteban Montero"])];
const hc2=[
S("¿Qué parlamento celebrado en 1641 entre españoles y mapuches reconoció por primera vez la frontera en el río Biobío?",["Parlamento de Quilín","Parlamento de Negrete","Parlamento de Tapihue","Parlamento de Lonquilmo"]),
S("¿Mediante qué tratado internacional firmado en 1904 se establecieron los límites definitivos entre Chile y Bolivia?",["Tratado de Paz y Amistad de 1904","Tratado de Ancón (1883)","Tratado de Lima (1929)","Pacto de Tregua de 1884"]),
S("¿En qué año Chile tomó posesión efectiva del Estrecho de Magallanes mediante la expedición de la goleta Ancud bajo el gobierno de Manuel Bulnes?",["1843","1881","1818","1861"]),
S("¿Qué tratado firmado en 1929 bajo el gobierno de Carlos Ibáñez del Campo resolvió la soberanía de Tacna y Arica?",["Tratado de Lima","Tratado de Ancón","Tratado de Taltal","Acta de Mendoza"]),
S("¿Qué economista y misión extranjera asesoró a Chile en 1925 para la creación del Banco Central y el establecimiento del patrón oro?",["La Misión Kemmerer (Edwin Walter Kemmerer)","La Misión Klein-Saks","La CEPAL","El Plan Brady"]),
S("¿Cuál fue el ciclo de tres presidentes pertenecientes al Partido Radical que gobernaron Chile entre 1938 y 1952?",["Pedro Aguirre Cerda, Juan Antonio Ríos y Gabriel González Videla","Arturo Alessandri, Pedro Aguirre Cerda y Carlos Ibáñez","Jorge Alessandri, Eduardo Frei Montalva y Salvador Allende","Manuel Bulnes, Manuel Montt y José Joaquín Pérez"])];

// ===== 11. HISTORIA DE AMÉRICA =====
const ha0=[
S("¿Cuál fue la capital del Imperio Azteca (Mexica), fundada sobre un islote en el lago de Texcoco?",["Tenochtitlan","Cusco","Tikal","Teotihuacán"]),
S("¿Qué civilización andina construyó la ciudadela de Machu Picchu y articuló su territorio mediante el Qhapaq Ñan (Camino del Inca)?",["Imperio Inca (Tahuantinsuyo)","Cultura Moche","Imperio Chimú","Cultura Tiwanaku"]),
S("¿En qué año se proclamó la Declaración de Independencia de las Trece Colonias de los Estados Unidos?",["1776","1789","1810","1804"]),
S("¿Cuál fue el primer país de América Latina y el Caribe en independizarse (en 1804) tras una revolución de esclavos?",["Haití","México","Venezuela","Argentina"]),
S("¿Qué dos libertadores se reunieron en la Entrevista de Guayaquil en julio de 1822?",["José de San Martín y Simón Bolívar","Simón Bolívar y Antonio José de Sucre","José de San Martín y Bernardo O'Higgins","Miguel Hidalgo y José María Morelos"]),
S("¿En qué año comenzó la Revolución Mexicana contra el gobierno de Porfirio Díaz?",["1910","1898","1917","1929"])];
const ha1=[
S("¿Qué tratado de 1494 dividió las tierras recién descubiertas fuera de Europa entre las coronas de Castilla y Portugal?",["Tratado de Tordesillas","Tratado de Alcáçovas","Tratado de Madrid","Tratado de Utrecht"]),
S("¿Cuáles fueron los dos primeros virreinatos creados por la Corona española en América durante el siglo XVI?",["Virreinato de Nueva España y Virreinato del Perú","Virreinato del Río de la Plata y Virreinato de Nueva Granada","Virreinato del Perú y Capitanía General de Venezuela","Virreinato de Nueva España y Virreinato del Brasil"]),
S("¿Qué principio resumido en la frase «América para los americanos» fue enunciado en 1823 por un presidente estadounidense contra la intervención europea?",["Doctrina Monroe","Destino Manifiesto","Política del Buen Vecino","Corolario Roosevelt"]),
S("¿Qué países conformaron la alianza que combatió contra el Paraguay entre 1864 y 1870 en la Guerra de la Triple Alianza?",["Brasil, Argentina y Uruguay","Brasil, Bolivia y Argentina","Argentina, Chile y Uruguay","Perú, Bolivia y Brasil"]),
S("¿En qué batalla del 9 de diciembre de 1824 el ejército unido libertador al mando de Sucre selló el fin del dominio virreinal español en Sudamérica?",["Batalla de Ayacucho","Batalla de Boyacá","Batalla de Carabobo","Batalla de Pichincha"]),
S("¿Qué presidente estadounidense emitió la Proclamación de Emancipación durante la Guerra de Secesión (1861–1865)?",["Abraham Lincoln","Thomas Jefferson","Ulysses S. Grant","Andrew Jackson"])];
const ha2=[
S("¿Quién lideró en 1780 la mayor rebelión indígena anticolonial del siglo XVIII en el Virreinato del Perú?",["Túpac Amaru II (José Gabriel Condorcanqui)","Túpac Katari","Lautaro","Juan Santos Atahualpa"]),
S("¿Qué conflicto bélico enfrentó a Bolivia y Paraguay entre 1932 y 1935 por el control del Chaco Boreal?",["Guerra del Chaco","Guerra del Acre","Guerra del Cenepa","Guerra de los Mil Días"]),
S("¿En qué ciudad convocó Simón Bolívar el Congreso Anfictiónico de 1826 con el objetivo de confederar a las repúblicas hispanoamericanas?",["Panamá","Angostura","Cúcuta","Lima"]),
S("¿Qué presidente mexicano decretó la expropiación petrolera en 1938 e impulsó el reparto agrario masivo?",["Lázaro Cárdenas","Plutarco Elías Calles","Álvaro Obregón","Venustiano Carranza"]),
S("¿Cómo se denominó el período político brasileño iniciado por Getúlio Vargas entre 1937 y 1945 de carácter centralista y corporativista?",["Estado Novo","República Velha","Cruzada Democrática","Milagro Brasileño"]),
S("¿Qué reformas implementadas en el siglo XVIII por la nueva dinastía reinante en España reorganizaron la administración y el comercio colonial en América?",["Reformas Borbónicas","Leyes Nuevas de Indias","Reformas de Cádiz","Ordenanzas de Alfaro"])];

// ===== 12. HISTORIA GLOBAL =====
const hg0=[
S("¿En qué región histórica entre los ríos Tigris y Éufrates surgieron las primeras ciudades-estado y la escritura cuneiforme?",["Mesopotamia","Valle del Indo","Antiguo Egipto","Anatolia"]),
S("¿Qué acontecimiento de 1453 suele utilizarse en la historiografía tradicional para marcar el fin de la Edad Media?",["La caída de Constantinopla ante el Imperio Otomano","El fin de la Guerra de los Cien Años","La coronación de Carlomagno","La Peste Negra"]),
S("¿En qué año estalló la Revolución Francesa con la toma de la Bastilla?",["1789","1776","1815","1848"]),
S("¿Qué hecho desencadenó de forma inmediata el inicio de la Primera Guerra Mundial en el verano de 1914?",["El asesinato del archiduque Francisco Fernando en Sarajevo","La invasión alemana de Polonia","El hundimiento del Lusitania","La Revolución de Octubre"]),
S("¿En qué año cayó el Muro de Berlín, simbolizando el fin de la división de Europa durante la Guerra Fría?",["1989","1991","1979","1961"]),
S("¿En qué país comenzó la Primera Revolución Industrial a mediados del siglo XVIII gracias a la máquina de vapor y la industria textil?",["Gran Bretaña","Francia","Alemania","Estados Unidos"])];
const hg1=[
S("¿Qué tratado de 1648 puso fin a la Guerra de los Treinta Años y consolidó el sistema europeo de Estados soberanos?",["Paz de Westfalia","Paz de Augsburgo","Tratado de Utrecht","Congreso de Viena"]),
S("¿Quién publicó las 95 tesis en Wittenberg en 1517, dando inicio a la Reforma protestante?",["Martín Lutero","Juan Calvino","Erasmo de Róterdam","Enrique VIII"]),
S("¿En qué batalla de 1815 fue derrotado definitivamente Napoleón Bonaparte por las fuerzas de la Séptima Coalición?",["Batalla de Waterloo","Batalla de Leipzig","Batalla de Austerlitz","Batalla de Trafalgar"]),
S("¿Quién lideró a los bolcheviques durante la Revolución de Octubre de 1917 en Rusia?",["Vladímir Lenin","Nicolás II","Aleksandr Kérenski","Iósif Stalin"]),
S("¿Cómo se llamó el plan de ayuda económica estadounidense de 1948 para la reconstrucción de Europa Occidental tras la Segunda Guerra Mundial?",["Plan Marshall","Doctrina Truman","Acuerdos de Yalta","Plan Schuman"]),
S("¿Qué líder encabezó el movimiento de independencia de la India mediante la resistencia pacífica y la no violencia (Satyagraha)?",["Mahatma Gandhi","Jawaharlal Nehru","Subhas Chandra Bose","Muhammad Ali Jinnah"])];
const hg2=[
S("¿Cómo se denominó el proceso iniciado en 1868 en Japón que abolió el shogunato Tokugawa e impulsó una rápida modernización e industrialización?",["Restauración Meiji","Período Edo","Era Taishō","Rebelión Satsuma"]),
S("¿Qué conferencia internacional celebrada entre 1884 y 1885 reguló el reparto colonial y la ocupación europea del continente africano?",["Conferencia de Berlín","Conferencia de Algeciras","Congreso de Berlín de 1878","Conferencia de París"]),
S("¿En qué conferencia de 1944 se crearon el Fondo Monetario Internacional (FMI) y el Banco Mundial?",["Acuerdos de Bretton Woods","Conferencia de Potsdam","Conferencia de San Francisco","Conferencia de Dumbarton Oaks"]),
S("¿Qué tratado del año 843 dividió el Imperio carolingio entre los tres nietos de Carlomagno?",["Tratado de Verdún","Tratado de Mersen","Tratado de Tordesillas","Concordato de Worms"]),
S("¿Qué conferencia celebrada en Indonesia en 1955 reunió a 29 países asiáticos y africanos recién descolonizados, sentando las bases del Movimiento de Países No Alineados?",["Conferencia de Bandung","Conferencia de Belgrado","Conferencia de El Cairo","Conferencia de Yalta"]),
S("¿En qué año se produjo el Gran Cisma de Oriente y Occidente que separó formalmente a la Iglesia católica romana de la Iglesia ortodoxa?",["1054","325","1453","1517"])];

// ===== 13. PLANTAS VS. ZOMBIES =====
const pvz0=[
S("En el primer Plants vs. Zombies, ¿cuántos soles cuesta plantar un Lanzaguisantes (Peashooter) básico?",["100 soles","50 soles","125 soles","150 soles"]),
S("¿Cuántos soles cuesta plantar un Girasol (Sunflower) en Plants vs. Zombies 1?",["50 soles","25 soles","75 soles","100 soles"]),
S("¿Cómo se llama el vecino del jugador que vende objetos desde el maletero de su auto?",["Crazy Dave","Dr. Zomboss","Tío Bob","Vecino Fred"]),
S("¿Qué planta explota al contacto tras armarse unos segundos después de plantarse y cuesta solo 25 soles?",["Patatapum (Potato Mine)","Petacereza (Cherry Bomb)","Jalapeño","Seta desesperada"]),
S("¿Qué escenario sigue inmediatamente después del Nivel de Día (Jardín delantero) en el Modo Aventura?",["Noche","Piscina","Niebla","Tejado"]),
S("¿Qué planta acuática permite colocar plantas terrestres sobre el agua en los niveles de Piscina y Niebla?",["Nenúfar (Lily Pad)","Marseta (Sea-shroom)","Zampalga (Tangle Kelp)","Rabo de gato (Cattail)"])];
const pvz1=[
S("¿Qué planta de mejora (comprada a Crazy Dave) se planta sobre una Repetidora para disparar cuatro guisantes a la vez?",["Guisantralladora (Gatling Pea)","Tripitidora (Threepeater)","Birasol (Twin Sunflower)","Hielaguisantes"]),
S("¿Qué planta desbloqueada en los niveles de Niebla despeja la niebla y empuja fuera de la pantalla a los Zombis con globo?",["Trebolador (Blover)","Planterna","Cactus"," Magnetoseta"]),
S("¿Sobre qué dos plantas adyacentes debe colocarse el Mazorcañón (Cob Cannon) para poder plantarse?",["Dos Lanzamaíces (Kernel-pults) en la misma fila","Dos Melonpultas","Dos Repetidoras","Un Lanzamaíz y una Coltapulta"]),
S("¿Qué zombi excava bajo tierra y aparece al final de la fila comiendo las plantas desde atrás hacia adelante?",["Zombi picado / minero (Digger Zombie)","Zombi saltarín (Pogo Zombie)","Zombi con cajita","Zombi colgado (Bungee Zombie)"]),
S("¿Qué planta convierte los guisantes normales que pasan a través de ella en guisantes de fuego con el doble de daño?",["Plantorcha (Torchwood)","Jalapeño","Calabaza","Seta solar"]),
S("En los niveles de Día, ¿qué grano se debe plantar sobre una Seta dormida para despertarla permanentemente?",["Grano de café (Coffee Bean)","Imitadora","Ajo","Margarita"])];
const pvz2=[
S("¿Cuántos puntos de daño inflige una explosión instantánea (como Petacereza, Jalapeño o Seta petardeo) en Plants vs. Zombies 1?",["1800 puntos (equivalente a 90 guisantes)","1000 puntos","3000 puntos","500 puntos"],"Un Zombistein (Gargantuar) tiene 3000 puntos de vida, por lo que requiere dos explosiones instantáneas (2 × 1800) para ser derrotado."),
S("¿En qué nivel del Modo Aventura aparece por primera vez el escurridizo Zombi Yeti (durante la segunda vuelta del juego)?",["Nivel 4-10 (tormenta nocturna en la niebla)","Nivel 5-10","Nivel 3-10","Nivel 2-10"]),
S("¿Quién compuso la banda sonora original del primer Plants vs. Zombies (incluyendo el tema «Zombies on Your Lawn»)?",["Laura Shigihara","George Fan","Toby Fox","Jeremy Soule"]),
S("¿Cuántos soles cuesta el Rabo de gato (Cattail) al plantarse sobre un Nenúfar en el primer juego?",["225 soles (más los 25 del Nenúfar)","200 soles","250 soles","150 soles"]),
S("¿Cuántos pies de altura requiere alcanzar el Árbol de la Sabiduría para revelar todos sus consejos y códigos estéticos (como 'future', 'mustache' o 'daisies')?",["1000 pies (aunque los principales terminan a los 500 pies)","100 pies","50 pies","5000 pies"]),
S("¿En qué año fue lanzado originalmente Plants vs. Zombies para PC y Mac por PopCap Games?",["2009","2007","2011","2013"])];

// ===== 14. SAGA DE CARS =====
const cars0=[
S("¿Qué número lleva pintado el Rayo McQueen en las carreras de la Copa Pistón?",["95","86","43","51"]),
S("¿Cómo se llama el pueblo de la Ruta 66 donde el Rayo McQueen queda varado y conoce a sus amigos?",["Radiador Springs"," Carburetor County","Thomasville"," Emeryville"]),
S("¿Cuál es el patrocinador original del Rayo McQueen en la primera película de Cars?",["Rust-eze","Dinoco","Hostile Takeover Bank (htB)","Vitoline"]),
S("¿Qué tipo de vehículo y modelo es Sally Carrera en Cars?",["Un Porsche 911 Carrera de 2002","Un Ferrari F430","Un Corvette C6","Un Aston Martin DB9"]),
S("¿Quién es el mejor amigo del Rayo McQueen en Radiador Springs?",["Mate (Tow Mater)","Doc Hudson","Ramón","Luigi"]),
S("¿Cómo se llama el camión que transporta al Rayo McQueen a sus carreras?",["Mack","Frank","Red","Guido"])];
const cars1=[
S("¿Qué número y título llevaba Doc Hudson cuando competía en los años 50 en la Copa Pistón?",["El Fabuloso Hudson Hornet #51","El Rey #43","El Relámpago #95","Hudson #86"]),
S("¿Cómo se llaman el rival tramposo de color verde (#86) y el veterano campeón de Dinoco (#43) en la primera película?",["Chick Hicks (#86) y Strip 'El Rey' Weathers (#43)","Jackson Storm y Cal Weathers","Francesco Bernoulli y Miles Axlerod","Boost y DJ"]),
S("En Cars 2, ¿cómo se llama el coche de Fórmula 1 italiano que compite contra el Rayo McQueen en el Gran Prix Mundial?",["Francesco Bernoulli","Miguel Camino","Raoul ÇaRoule","Max Schnell"]),
S("En Cars 2, ¿quiénes son los dos agentes secretos británicos a los que Mate ayuda por accidente?",["Finn McMissile y Holley Shiftwell","Miles Axlerod y el Profesor Zündapp","Rod 'Torque' Redline y Leland Turbo","Nigel Gearsley y Lewis Hamilton"]),
S("En Cars 3, ¿cómo se llama el corredor de nueva generación de alta tecnología que supera al Rayo McQueen?",["Jackson Storm","Danny Swervez","Cal Weathers","Cam Spinner"]),
S("Al final de Cars 3, ¿qué entrenadora termina ganando las 500 de Florida usando el número 51 de Doc Hudson?",["Cruz Ramírez","Natalie Certain","Louise Nash","Miss Fractura"])];
const cars2=[
S("¿En qué tres años consecutivos ganó Doc Hudson la Copa Pistón antes de su accidente en 1954?",["1951, 1952 y 1953","1950, 1951 y 1952","1952, 1953 y 1954","1949, 1950 y 1951"]),
S("¿Qué legendario actor de cine y piloto de carreras dio voz a Doc Hudson en la versión original en inglés de Cars (2006)?",["Paul Newman","Steve McQueen","Richard Petty","Clint Eastwood"]),
S("¿En qué automóvil real de la NASCAR está basado Strip 'El Rey' Weathers (#43), quien además le dio su voz original?",["1970 Plymouth Superbird de Richard Petty","1969 Dodge Charger Daytona","1951 Hudson Hornet","1977 Chevrolet Monte Carlo"]),
S("En Cars 2, ¿quién resulta ser el verdadero villano detrás del sabotaje del biocombustible Allinol en el Gran Prix Mundial?",["Sir Miles Axlerod","Francesco Bernoulli","Sargento","Jeff Gorvette"]),
S("En Cars 3, ¿cómo se llamaba el antiguo jefe de mecánicos y mentor de Doc Hudson a quien McQueen y Cruz buscan en Thomasville?",["Smokey","River Scott","Junior Moon","Louise 'Barnstormer' Nash"]),
S("¿En qué año se estrenó la primera película de Cars de Pixar, dirigida por John Lasseter?",["2006","2004","2008","2005"])];

// ===== ÁREAS, NIVELES Y TIEMPOS (segundos por pregunta) =====
const AREAS=[
{id:"ga",n:"Geometría algebraica",L:["Súper fácil","Fácil","Normal","Difícil","Français (difficile)","Grothendieck"],T:[15,20,25,35,40,45]},
{id:"gr",n:"Teoría de grafos",L:["Fácil","Normal","Difícil"],T:[15,25,35]},
{id:"ar",n:"Análisis real",L:["Fácil","Normal","Difícil"],T:[20,30,40]},
{id:"to",n:"Topología",L:["Fácil","Normal","Difícil","Topología algebraica I","Topología algebraica II"],T:[20,25,35,35,40]},
{id:"aa",n:"Álgebra abstracta",L:["Súper fácil","Fácil","Normal","Difícil","Muy difícil","Évariste Galois"],T:[15,20,25,35,40,45]},
{id:"vc",n:"Variable compleja",L:["Fácil","Normal","Difícil"],T:[20,30,40]},
{id:"mc",n:"Mecánica clásica",L:["Fácil","Normal","Difícil"],T:[20,30,40]},
{id:"mq",n:"Mecánica cuántica",L:["Fácil","Normal","Difícil"],T:[20,30,40]},
{id:"me",n:"Mecánica estadística",L:["Fácil","Normal","Difícil"],T:[20,30,40]},
{id:"hc",n:"Historia de Chile",L:["Fácil","Normal","Difícil"],T:[15,25,30]},
{id:"ha",n:"Historia de América",L:["Fácil","Normal","Difícil"],T:[15,25,30]},
{id:"hg",n:"Historia global",L:["Fácil","Normal","Difícil"],T:[15,25,30]},
{id:"pvz",n:"Plantas vs. Zombies",L:["Fácil","Normal","Difícil"],T:[15,20,25]},
{id:"cars",n:"Saga de Cars",L:["Fácil","Normal","Difícil"],T:[15,20,25]}];

const BANK={
ga:[GA[1],GA[2],GA[3],GA[4],GA[5],GA[6]],
gr:[gr0,gr1,gr2],
ar:[ar0,ar1,ar2],
to:[to0,to1,to2,to3,to4],
aa:[aa0,aa1,aa2,aa3,aa4,aa5],
vc:[vc0,vc1,vc2],
mc:[mc0,mc1,mc2],
mq:[mq0,mq1,mq2],
me:[me0,me1,me2],
hc:[hc0,hc1,hc2],
ha:[ha0,ha1,ha2],
hg:[hg0,hg1,hg2],
pvz:[pvz0,pvz1,pvz2],
cars:[cars0,cars1,cars2]
};