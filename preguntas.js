// Banco de preguntas. Edita este archivo para agregar preguntas o niveles.
// Formato de pregunta: S("enunciado",["correcta","mala1","mala2","mala3"],"explicación")  (la correcta va primera; el motor baraja).
// Los generadores (funciones r=>...) crean variantes numéricas distintas cada vez.

// ===== GEOMETRÍA ALGEBRAICA (c = índice de la correcta; el motor baraja igual) =====
const GA={
1:[
{q:"La geometría algebraica estudia principalmente las soluciones de…",o:["Ecuaciones diferenciales","Sistemas de ecuaciones polinomiales","Desigualdades lineales","Series de Fourier"],c:1,e:"Estudia conjuntos de ceros de polinomios y su geometría."},
{q:"¿Qué figura describe x² + y² = 1 en el plano real?",o:["Una parábola","Una recta","Una circunferencia","Una hipérbola"],c:2,e:"Es la circunferencia de radio 1 centrada en el origen."},
{q:"¿Cuántas raíces complejas tiene, contando multiplicidad, un polinomio de grado 5?",o:["1","3","10","5"],c:3,e:"Teorema fundamental del álgebra: tantas como el grado."},
{q:"¿Qué polinomio tiene como ceros la recta y = 2x + 1?",o:["y − 2x − 1","y + 2x + 1","2xy + 1","x² − y"],c:0,e:"y = 2x + 1 equivale a y − 2x − 1 = 0."},
{q:"¿Qué es el plano A² sobre ℝ?",o:["Un anillo de polinomios","Una recta con un punto al infinito","El conjunto de pares (x, y) de reales","Un ideal"],c:2,e:"El espacio afín es simplemente el conjunto de n-tuplas."},
{q:"El conjunto de ceros de x·y = 0 en el plano es:",o:["Un punto","Los dos ejes coordenados","Una circunferencia","Vacío"],c:1,e:"x·y = 0 si y solo si x = 0 o y = 0."}],
2:[
{q:"Con k algebraicamente cerrado, ¿qué es una variedad afín en kⁿ?",o:["Un anillo cociente de k[x₁,…,xₙ]","El conjunto de ceros comunes de una familia de polinomios","Un ideal radical","Una función racional continua"],c:1,e:"V(S) = {p ∈ kⁿ : f(p)=0 para todo f ∈ S}."},
{q:"¿Qué dimensión tiene V(x² + y² − 1) ⊂ A²(ℂ)?",o:["0","1","2","3"],c:1,e:"Una ecuación no trivial en A² define una curva: dimensión 1."},
{q:"¿Cuál es el anillo de coordenadas de la parábola V(y − x²)?",o:["k[x,y]","k[x]/(x²)","k[y]","k[x]"],c:3,e:"k[x,y]/(y−x²) ≅ k[x] mediante y ↦ x²."},
{q:"¿Qué es un polinomio homogéneo?",o:["Todos sus monomios tienen el mismo grado","Solo tiene una variable","No tiene término constante","Tiene coeficientes enteros"],c:0,e:"Por ejemplo x² + xy + y² es homogéneo de grado 2."},
{q:"En P² = (k³ ∖ {0})/~, ¿qué relación es ~?",o:["Igualdad de coordenadas","Misma primera coordenada","Proporcionalidad: v ~ λv con λ ≠ 0","Misma norma"],c:2,e:"Los puntos de P² son rectas por el origen de k³."},
{q:"¿Cuál es I(V) para V = {(0,0)} ⊂ A²(k)?",o:["(xy)","(x, y)","(x + y)","(x² + y²)"],c:1,e:"Los polinomios que se anulan en el origen son los de término constante nulo: (x, y)."}],
3:[
{q:"Nullstellensatz fuerte: ¿cuánto vale I(V(J))?",o:["J","El primo mínimo sobre J","√J, el radical de J","J²"],c:2,e:"Sobre k algebraicamente cerrado, I(V(J)) = √J."},
{q:"¿Cuál de estos ideales de k[x,y] es primo?",o:["(xy)","(x²)","(x² − y²)","(x² − y)"],c:3,e:"k[x,y]/(x²−y) ≅ k[x] es un dominio; los otros tienen divisores de cero."},
{q:"Una variedad afín V es irreducible si y solo si:",o:["I(V) es primo","I(V) es maximal","V es finita","I(V) es principal"],c:0,e:"Irreducible ⇔ I(V) primo. Maximal ocurre solo para puntos."},
{q:"¿Cuál es la dimensión de Krull de k[x,y,z]?",o:["1","2","4","3"],c:3,e:"Cadena maximal: 0 ⊂ (x) ⊂ (x,y) ⊂ (x,y,z)."},
{q:"¿Qué ideales de k[x₁,…,xₙ] corresponden a puntos de Aⁿ?",o:["Los maximales (x₁−a₁,…,xₙ−aₙ)","Los primos de altura 1","Los principales","Los radicales"],c:0,e:"Nullstellensatz débil: los maximales son los de esa forma."},
{q:"¿Cómo es la curva V(y² − x³) en el origen?",o:["Lisa","Una cúspide (singular)","Un nodo","No pasa por el origen"],c:1,e:"Las parciales (−3x², 2y) se anulan en (0,0): punto singular."},
{q:"En la topología de Zariski de A¹(ℂ), los cerrados propios son:",o:["Los intervalos cerrados","Los conjuntos finitos","Los discretos","Los numerables"],c:1,e:"Un polinomio no nulo en una variable tiene finitas raíces."}],
4:[
{q:"Por Bézout, curvas planas proyectivas de grados 2 y 3 sin componentes comunes se cortan en (con multiplicidad):",o:["5 puntos","6 puntos","1 punto","Infinitos puntos"],c:1,e:"d·e = 2·3 = 6 sobre un cuerpo algebraicamente cerrado."},
{q:"El espacio tangente de Zariski de V en p es:",o:["Hom(𝔪/𝔪², k), con 𝔪 el ideal maximal de O_{V,p}","El núcleo de una función f : V → k","La clausura de las rectas por p","O_{V,p} ⊗ k"],c:0,e:"T_pV = (𝔪_p/𝔪_p²)*."},
{q:"Una variedad V de dimensión d es lisa en p si y solo si:",o:["dim T_pV = d + 1","O_{V,p} es un cuerpo","dim T_pV = d","V es irreducible"],c:2,e:"Criterio jacobiano: la dimensión tangente coincide con la dimensión de V."},
{q:"El género de una curva plana lisa de grado d en P² es:",o:["d(d−1)/2","(d−1)(d−2)/2","d²","d − 1"],c:1,e:"Fórmula grado–género. Una cúbica lisa tiene género 1."},
{q:"Explotar (blow-up) el plano en el origen reemplaza el punto por:",o:["Una recta proyectiva (divisor excepcional)","Un punto doble","Una circunferencia real","Una cúspide"],c:0,e:"El divisor excepcional es P¹, el espacio de direcciones por el origen."},
{q:"El polinomio de Hilbert de Pⁿ es:",o:["C(t+n, n)","tⁿ","n·t + 1","(n+1)·t"],c:0,e:"Cuenta los monomios de grado t en n+1 variables: C(t+n, n)."}],
5:[
{q:"Que dit le théorème de Bézout pour deux courbes de P² de degrés d et e sans composante commune ?",o:["Elles se coupent en d + e points","Elles se coupent en d·e points, comptés avec multiplicité","Elles ne se coupent jamais","Elles se coupent en max(d, e) points"],c:1,e:"Le nombre d’intersections, avec multiplicité, vaut d·e."},
{q:"Que dit le théorème de Riemann–Roch pour un diviseur D sur une courbe projective lisse de genre g ?",o:["ℓ(D) − ℓ(K − D) = deg D + 1 − g","ℓ(D) = deg D + g","ℓ(D) + ℓ(K − D) = g","ℓ(D) = deg D − g − 1"],c:0,e:"C’est la formule ℓ(D) − ℓ(K−D) = deg D + 1 − g."},
{q:"Quel est le lieu singulier de la courbe V(xy) ?",o:["L’axe des x","L’axe des y","L’origine (0,0)","Il n’y en a pas"],c:2,e:"Les dérivées partielles (y, x) s’annulent seulement à l’origine."},
{q:"Qu’est-ce qu’un morphisme fini de variétés affines ?",o:["Un morphisme à fibres vides","Un morphisme bijectif","Un morphisme à fibres infinies","Un morphisme dont l’anneau de coordonnées de la source est un module de type fini sur celui du but"],c:3,e:"Fini = A est un B-module de type fini via f*."},
{q:"Quelle est la dimension de la grassmannienne G(2,4) des droites de P³ ?",o:["2","3","4","6"],c:2,e:"dim G(k,n) = k(n − k) = 2·2 = 4."},
{q:"Pour une courbe elliptique E, l’application P ↦ [P − O] ∈ Pic⁰(E) est :",o:["Un isomorphisme de variétés E ≅ Pic⁰(E)","Constante","Un revêtement de degré 2","Non définie"],c:0,e:"C’est l’identification de E avec sa jacobienne."}],
6:[
{q:"¿Qué es Spec A para un anillo conmutativo A?",o:["El conjunto de ideales maximales","Los ideales primos, con la topología de Zariski y un haz de anillos","El grupo de unidades de A","Los homomorfismos A → ℂ"],c:1,e:"Spec A es un espacio anillado local cuyos puntos son los primos de A."},
{q:"¿Cuál es el punto genérico de Spec ℤ?",o:["(2)","(p) para p grande","(0), cuya clausura es todo Spec ℤ","No existe"],c:2,e:"El ideal (0) es denso: su clausura es Spec ℤ completo."},
{q:"Un esquema es:",o:["Un espacio anillado localmente isomorfo a Spec de anillos","Una variedad sobre ℂ","Un haz de grupos abelianos","Un anillo local"],c:0,e:"Se pega a partir de esquemas afines Spec A."},
{q:"Por el lema de Yoneda, un esquema X queda determinado por su:",o:["Anillo de funciones globales","Funtor de puntos Hom(−, X)","Dimensión","Grupo fundamental"],c:1,e:"Es el punto de vista funtorial de Grothendieck."},
{q:"La topología étale de un esquema es un ejemplo de:",o:["Una topología métrica","Una topología de Grothendieck sobre una categoría de recubrimientos","Un orden parcial","Una topología más gruesa que la de Zariski"],c:1,e:"No es una topología de espacio topológico; es más fina que la de Zariski."},
{q:"¿Quién probó la hipótesis de Riemann de las conjeturas de Weil usando cohomología ℓ-ádica?",o:["Weil","Serre","Deligne","Faltings"],c:2,e:"Deligne (1974), con la cohomología étale desarrollada por Grothendieck."}]
};

// ===== AYUDAS PARA GENERAR PREGUNTAS =====
// Cada pregunta puede ser un objeto {q,o,c,e} o una función r=>pregunta (generador con semilla r).
const rng=s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const ri=(r,a,b)=>a+Math.floor(r()*(b-a+1));
const shr=(r,a)=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a};
const S=(q,o,e)=>({q:q,o:o,c:0,e:e||""}); // la respuesta correcta se escribe PRIMERO; el motor baraja las opciones
const gcd=(a,b)=>b?gcd(b,a%b):a,phi=n=>{let c=0;for(let k=1;k<=n;k++)if(gcd(k,n)===1)c++;return c};
function mc(r,q,ans,wr,e){const w=[];wr.forEach(x=>{x=String(x);if(x!==String(ans)&&w.indexOf(x)<0)w.push(x)});for(let k=1;w.length<3;k++){const x=String(+ans+k);if(x!==String(ans)&&w.indexOf(x)<0)w.push(x)}const o=shr(r,[String(ans)].concat(w.slice(0,3)));return{q:q,o:o,c:o.indexOf(String(ans)),e:e||""}}

// ===== TEORÍA DE GRAFOS =====
const gr0=[
S("Un árbol es un grafo…",["Conexo y sin ciclos","Completo","Con todos los grados pares","Bipartito y regular"],"Árbol = conexo y acíclico."),
S("¿Qué es el grado de un vértice?",["El número de aristas incidentes en él","El número de vértices del grafo","La longitud del camino más largo","El número de ciclos que lo contienen"]),
r=>{const n=ri(r,4,9);return mc(r,"¿Cuántas aristas tiene el grafo completo K_"+n+"?",n*(n-1)/2,[n*n,n*(n+1)/2,n-1,n*(n-1),n],"K_n tiene n(n−1)/2 aristas.")},
r=>{const m=ri(r,5,20);return mc(r,"Un grafo tiene "+m+" aristas. ¿Cuánto suman los grados de todos sus vértices?",2*m,[m,m+1,m*m,2*m+2,m-1],"Lema del apretón de manos: Σ grados = 2·|E|.")},
r=>{const n=ri(r,5,30);return mc(r,"¿Cuántas aristas tiene un árbol con "+n+" vértices?",n-1,[n,n+1,n-2,2*n,n*(n-1)/2],"Todo árbol con n vértices tiene n−1 aristas.")}];
const gr1=[
S("Un grafo conexo tiene un circuito euleriano si y solo si…",["Todos sus vértices tienen grado par","Tiene un ciclo hamiltoniano","Es bipartito","Es un árbol"],"Teorema de Euler."),
S("¿Cuál es el número cromático de un grafo bipartito con al menos una arista?",["2","1","3","4"],"Dos colores bastan (uno por parte) y uno solo no alcanza."),
S("El número de vértices de grado impar en cualquier grafo es…",["Siempre par","Siempre impar","Igual al número de aristas","Cualquiera"],"Σ grados = 2|E| es par."),
r=>{const n=ri(r,3,15);return mc(r,"¿Cuál es el número cromático del ciclo C_"+n+"?",n%2?3:2,[1,2,3,4,5],"Los ciclos pares son bipartitos; los impares necesitan 3 colores.")},
r=>{const m=ri(r,2,8),n=ri(r,2,8);return mc(r,"¿Cuántas aristas tiene el grafo bipartito completo K_{"+m+","+n+"}?",m*n,[m+n,m*n+m,m*n-1,(m+n)*(m+n-1)/2],"Cada vértice de una parte se une con todos los de la otra: m·n.")}];
const gr2=[
S("Fórmula de Euler para grafos planares conexos: |V| − |E| + |F| =",["2","1","0","|V|"]),
S("¿Cuál de estos grafos no es planar?",["K₅","K₄","C₆","Un árbol"],"K₅ y K₃,₃ son los grafos mínimos no planares (Kuratowski)."),
S("¿Cuánto vale el número de Ramsey R(3,3)?",["6","5","9","18"],"Entre 6 personas hay 3 que se conocen entre sí o 3 que no; con 5 no."),
S("El teorema de los cuatro colores afirma que todo mapa planar se colorea con…",["4 colores","3 colores","5 colores","6 colores"],"Appel y Haken, 1976."),
r=>{const n=ri(r,5,20);return mc(r,"¿Cuántas aristas puede tener, como máximo, un grafo planar simple con "+n+" vértices?",3*n-6,[3*n-3,3*n,2*n-4,n*(n-1)/2,3*n-5],"Consecuencia de la fórmula de Euler: |E| ≤ 3n − 6.")},
r=>{const n=ri(r,3,7);return mc(r,"Según la fórmula de Cayley, ¿cuántos árboles etiquetados distintos hay sobre "+n+" vértices?",Math.pow(n,n-2),[Math.pow(n,n-1),Math.pow(n-1,n-2),n*(n-1),Math.pow(n,n)],"Cayley: nⁿ⁻².")}];

// ===== ANÁLISIS REAL =====
const ar0=[
S("¿Cuál es el supremo del conjunto (0, 1)?",["1","0","1/2","No existe"],"Aunque 1 no pertenezca al conjunto, es su mínima cota superior."),
S("La serie geométrica Σ rⁿ (n ≥ 0) converge si y solo si…",["|r| < 1","r > 0","r ≠ 1","|r| ≤ 1"],"Para |r| < 1 suma 1/(1−r)."),
S("¿Cuál es la derivada de xⁿ?",["n·xⁿ⁻¹","xⁿ⁻¹","n·xⁿ","(n−1)·xⁿ"]),
r=>{const m=ri(r,2,6),c=ri(r,1,5),b=ri(r,1,9),d=ri(r,1,9);return mc(r,"Calcula lím (n→∞) de ("+(m*c)+"n + "+b+")/("+c+"n + "+d+").",m,[m*c,c,m+1,m+2,m-1],"Se divide por n: el límite es el cociente de los coeficientes líderes.")}];
const ar1=[
S("Toda sucesión acotada en ℝ tiene una subsucesión convergente. Es el teorema de…",["Bolzano–Weierstrass","Heine–Borel","Rolle","Cauchy–Schwarz"]),
S("fₙ(x) = xⁿ en [0,1] converge puntualmente pero no uniformemente. ¿Por qué?",["El límite no es continuo","El límite no existe","Cada fₙ es discontinua","[0,1] no es compacto"],"El límite vale 0 en [0,1) y 1 en x = 1; un límite uniforme de continuas es continuo."),
S("El teorema del valor medio dice que existe c con…",["f′(c) = (f(b) − f(a))/(b − a)","f(c) = 0","f′(c) = 0 siempre","f(c) = (f(a) + f(b))/2"]),
S("Una función continua en [a, b]…",["Alcanza su máximo y su mínimo","Es siempre derivable","Es siempre monótona","Es acotada solo si es derivable"],"Teorema de Weierstrass (compacidad)."),
r=>{const p=[0.5,1,1.5,2,3,1.1,0.9][ri(r,0,6)],ok=p>1;return mc(r,"¿Qué ocurre con la serie Σ 1/n^p (n ≥ 1) para p = "+p+"?",ok?"Converge":"Diverge",["Diverge","Converge","Oscila sin límite","Converge condicionalmente"],"La p-serie converge si y solo si p > 1.")}];
const ar2=[
S("Criterio de Lebesgue: f acotada es Riemann-integrable en [a,b] si y solo si sus discontinuidades…",["Forman un conjunto de medida cero","Son finitas","Son numerables y densas","Forman un cerrado"]),
S("El conjunto de Cantor es…",["No numerable y de medida cero","Numerable","Denso en [0,1]","De medida 1"],"Tiene la cardinalidad del continuo pero medida 0."),
S("Teorema de Baire: un espacio métrico completo no vacío no es unión numerable de…",["Cerrados de interior vacío","Abiertos densos","Compactos","Conexos"]),
S("Arzelà–Ascoli: un subconjunto de C([a,b]) es relativamente compacto si y solo si es…",["Acotado y equicontinuo","Cerrado y convexo","Monótono","Uniformemente derivable"]),
S("Teorema de Dini: fₙ continuas que convergen monótonamente y puntualmente a f continua en un compacto…",["Convergen uniformemente","Convergen solo en medida","Tienen límite derivable","No permiten concluir nada"])];

// ===== TOPOLOGÍA =====
const to0=[
S("Una topología contiene ∅ y X, es cerrada por uniones arbitrarias y por…",["Intersecciones finitas","Intersecciones arbitrarias","Complementos","Productos"]),
S("¿Cuál de estos subconjuntos de ℝ es compacto?",["[0, 1]","(0, 1)","ℝ","[0, ∞)"],"Heine–Borel: cerrado y acotado."),
S("¿Cuándo es abierto un subconjunto de ℝ con la topología usual?",["Si contiene un intervalo abierto alrededor de cada uno de sus puntos","Si es un intervalo cerrado","Si es finito","Si no tiene frontera"]),
r=>{const n=ri(r,2,8);return mc(r,"¿Cuántos abiertos tiene la topología discreta sobre un conjunto de "+n+" elementos?",Math.pow(2,n),[n*n,n,2*n,n*n+1,Math.pow(2,n)-1],"Todo subconjunto es abierto: 2ⁿ.")}];
const to1=[
S("f : X → Y es continua si y solo si…",["La preimagen de todo abierto es abierta","La imagen de todo abierto es abierta","Es biyectiva","Preserva distancias"]),
S("X es Hausdorff si…",["Puntos distintos tienen vecindades disjuntas","Todo abierto es cerrado","X es compacto","X es finito"]),
S("La imagen continua de un espacio conexo es…",["Conexa","Discreta","Abierta","Finita"]),
S("Teorema de Tychonoff: un producto arbitrario de espacios compactos es…",["Compacto","Conexo","Hausdorff","Metrizable"],"Equivale al axioma de elección."),
S("¿Cuál de estos espacios es conexo?",["ℝ","ℚ","ℤ","(0,1) ∪ (2,3)"])];
const to2=[
S("Lema de Urysohn: en un espacio normal, dos cerrados disjuntos A y B se separan con…",["Una función continua f : X → [0,1] con f=0 en A y f=1 en B","Un homeomorfismo","Una base numerable","Una métrica"]),
S("La topología de Zariski de A¹(ℂ) no es…",["Hausdorff","T₁","Compacta","Noetheriana"],"Dos abiertos no vacíos siempre se cortan."),
S("La compactificación por un punto de ℝⁿ es homeomorfa a…",["Sⁿ","Tⁿ","ℝPⁿ","Dⁿ"]),
S("Todo espacio compacto Hausdorff es…",["Normal","Discreto","Numerable","Metrizable"])];
const to3=[
S("¿Cuánto vale π₁(S¹)?",["ℤ","0","ℤ/2","ℤ × ℤ"],"Cuenta las vueltas alrededor del círculo."),
S("¿Cuánto vale π₁ del toro T²?",["ℤ × ℤ","ℤ","0","ℤ/2"]),
S("¿Cuánto vale π₁(S²)?",["0","ℤ","ℤ/2","No está definido"]),
S("Un espacio simplemente conexo es conexo por caminos y tiene…",["π₁ trivial","H₁ no nulo","Característica de Euler 1","π₁ abeliano"]),
r=>{const g=ri(r,0,8);return mc(r,"¿Cuál es la característica de Euler de la superficie orientable de género "+g+"?",2-2*g,[2*g-2,2+2*g,g,1-2*g,g+2],"χ = 2 − 2g.")}];
const to4=[
S("¿Cuál es H_n(Sⁿ; ℤ) para n ≥ 1?",["ℤ","0","ℤ/2","ℤⁿ"]),
S("¿Cuánto vale π₁(ℝP²)?",["ℤ/2","ℤ","0","ℤ × ℤ"]),
S("Seifert–van Kampen calcula π₁ de una unión de abiertos con intersección conexa por caminos mediante…",["Un producto amalgamado","Un producto directo","Un cociente por conmutadores","Una suma directa de homologías"]),
S("Teorema del punto fijo de Brouwer: toda función continua D² → D² tiene…",["Un punto fijo","Un 2-ciclo","Ningún punto fijo","Un punto fijo solo si es biyectiva"]),
S("La sucesión de Mayer–Vietoris relaciona la homología de X = A ∪ B con la de…",["A, B y A ∩ B","A y B solamente","X y su borde","π₁(X)"]),
S("Teorema de Hurewicz en grado 1: H₁(X) es…",["La abelianización de π₁(X)","π₁(X)","El centro de π₁(X)","Siempre trivial"])];

// ===== ÁLGEBRA ABSTRACTA =====
const aa0=[
S("Un grupo es un conjunto con una operación…",["Asociativa, con neutro e inversos","Conmutativa y con neutro","Distributiva sobre la suma","Idempotente"]),
S("¿Es (ℤ, +) un grupo?",["Sí, abeliano","No, faltan inversos","No, falta el neutro","Sí, pero no abeliano"]),
r=>{const n=ri(r,3,6);let f=1;for(let k=2;k<=n;k++)f*=k;return mc(r,"¿Cuántos elementos tiene el grupo simétrico S_"+n+"?",f,[n*n,n*(n-1),2*n,f/n,f+1,Math.pow(2,n)],"|Sₙ| = n!.")},
r=>{const n=ri(r,2,9),m=ri(r,2,9);return mc(r,"¿Cuántos elementos tiene ℤ_"+n+" × ℤ_"+m+"?",n*m,[n+m,n*m+n,n*m-1,n*n+1,m*m+2],"El orden de un producto es el producto de los órdenes.")}];
const aa1=[
S("Teorema de Lagrange: si H ≤ G con G finito, entonces…",["|H| divide a |G|","|G| divide a |H|","H es normal","G es abeliano"]),
S("¿Para qué n es ℤ_n un cuerpo?",["Cuando n es primo","Cuando n es par","Siempre","Cuando n es potencia de 2"]),
r=>{const n=ri(r,6,24),k=ri(r,2,n-1),g=gcd(k,n);return mc(r,"¿Cuál es el orden del elemento "+k+" en (ℤ_"+n+", +)?",n/g,[n,k,g,n-k,n/g+1,n*k],"El orden de k en ℤₙ es n/mcd(k, n).")},
r=>{const n=ri(r,5,24);return mc(r,"¿Cuántos generadores tiene el grupo cíclico ℤ_"+n+"?",phi(n),[n,n-1,phi(n)+1,phi(n)+2,Math.floor(n/2)],"Los generadores son los k con mcd(k, n) = 1: φ(n).")}];
const aa2=[
S("Un subgrupo N ◁ G es normal si…",["gNg⁻¹ = N para todo g ∈ G","Tiene índice 2","Es abeliano","Es cíclico"]),
S("Primer teorema de isomorfismo: G/ker φ ≅ …",["im φ","G","ker φ","Aut(G)"]),
S("Teorema de Cauchy: si un primo p divide a |G|, entonces G tiene…",["Un elemento de orden p","Un subgrupo normal de orden p","Un subgrupo de índice p","Centro no trivial"]),
r=>{const m=ri(r,2,12),n=ri(r,2,12),ok=gcd(m,n)===1;return mc(r,"¿Es cíclico el grupo ℤ_"+m+" × ℤ_"+n+"?",ok?"Sí":"No",["Sí","No","Solo si m = n","Solo si ambos son primos"],"Es cíclico si y solo si mcd(m, n) = 1 (teorema chino del resto).")}];
const aa3=[
S("Tercer teorema de Sylow: el número nₚ de p-subgrupos de Sylow cumple…",["nₚ ≡ 1 (mod p) y nₚ divide al índice","nₚ = p","nₚ divide a p","nₚ ≡ 0 (mod p)"]),
S("Para n ≥ 5, el grupo alternante Aₙ es…",["Simple","Soluble","Abeliano","Cíclico"]),
S("Todo dominio de ideales principales es…",["Un dominio de factorización única","Un cuerpo","Un anillo local","Finito"]),
S("¿Cuál de estos anillos es un dominio de ideales principales?",["ℚ[x]","ℤ[x]","ℚ[x,y]","ℤ[x,y]"],"k[x] es euclídeo; los otros no son DIP.")];
const aa4=[
S("Criterio de Eisenstein: f es irreducible en ℚ[x] si existe un primo p que…",["Divide a a₀,…,aₙ₋₁, no a aₙ, y p² no divide a a₀","Divide a todos los coeficientes","Divide solo a aₙ","Divide a aₙ y a a₀"]),
S("Teorema de la base de Hilbert: si R es noetheriano, entonces…",["R[x] es noetheriano","R es un DIP","R es un cuerpo","R[x] es un DIP"]),
S("Teorema de Feit–Thompson: todo grupo finito de orden impar es…",["Soluble","Simple","Abeliano","Cíclico"]),
S("Lema de Gauss: si f ∈ ℤ[x] es primitivo e irreducible en ℤ[x], entonces…",["Es irreducible en ℚ[x]","Es reducible en ℚ[x]","Tiene grado 1","Tiene una raíz entera"]),
S("El producto tensorial ⊗ sobre un anillo R es, en general…",["Exacto por la derecha, no por la izquierda","Exacto","Exacto por la izquierda, no por la derecha","Inexacto por ambos lados"])];
const aa5=[
S("Teorema fundamental de la teoría de Galois: los cuerpos intermedios de L/K (Galois) corresponden a…",["Los subgrupos de Gal(L/K), invirtiendo inclusiones","Solo los subgrupos normales","Los elementos de L","Los ideales de K"]),
S("¿Cuál es el orden de Gal(ℚ(√2, √3)/ℚ)?",["4","2","6","8"],"La extensión tiene grado 4 y su grupo es ℤ/2 × ℤ/2."),
S("¿Cuál es el grupo de Galois de x³ − 2 sobre ℚ?",["S₃","ℤ/3","ℤ/6","A₃"],"El cuerpo de descomposición ℚ(∛2, ω) tiene grado 6."),
S("x⁵ − x − 1 no es resoluble por radicales sobre ℚ porque su grupo de Galois es…",["S₅, que no es soluble","ℤ/5","A₄","ℤ/2"]),
S("Abel–Ruffini: la ecuación polinómica general de grado ≥ 5…",["No es resoluble por radicales","Siempre tiene solución racional","Tiene grupo de Galois abeliano","Es resoluble por radicales"]),
r=>{const n=[5,7,8,9,10,12,15,16,20][ri(r,0,8)];return mc(r,"¿Cuál es el grado de ℚ(ζ_n) sobre ℚ para n = "+n+"?",phi(n),[n,n-1,n/2,phi(n)+1,phi(n)*2],"El grado es φ(n) y Gal ≅ (ℤ/n)ˣ.")}];

// ===== ÁREAS, NIVELES Y TIEMPOS (segundos por pregunta) =====
const AREAS=[
{id:"ga",n:"Geometría algebraica",L:["Súper fácil","Fácil","Normal","Difícil","Français (difficile)","Grothendieck"],T:[15,20,25,35,40,45]},
{id:"gr",n:"Teoría de grafos",L:["Fácil","Normal","Difícil"],T:[15,25,35]},
{id:"ar",n:"Análisis real",L:["Fácil","Normal","Difícil"],T:[20,30,40]},
{id:"to",n:"Topología",L:["Fácil","Normal","Difícil","Topología algebraica I","Topología algebraica II"],T:[20,25,35,35,40]},
{id:"aa",n:"Álgebra abstracta",L:["Súper fácil","Fácil","Normal","Difícil","Muy difícil","Évariste Galois"],T:[15,20,25,35,40,45]}];
const BANK={ga:[GA[1],GA[2],GA[3],GA[4],GA[5],GA[6]],gr:[gr0,gr1,gr2],ar:[ar0,ar1,ar2],to:[to0,to1,to2,to3,to4],aa:[aa0,aa1,aa2,aa3,aa4,aa5]};
