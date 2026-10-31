// GA - Nivel 3
reg('ga', 3, [
{q:"Nullstellensatz fuerte: ¿cuánto vale I(V(J))?",o:["J","El primo mínimo sobre J","√J, el radical de J","J²"],c:2,e:"Sobre k algebraicamente cerrado, I(V(J)) = √J."},
{q:"¿Cuál de estos ideales de k[x,y] es primo?",o:["(xy)","(x²)","(x² − y²)","(x² − y)"],c:3,e:"k[x,y]/(x²−y) ≅ k[x] es un dominio; los otros tienen divisores de cero."},
{q:"Una variedad afín V es irreducible si y solo si:",o:["I(V) es primo","I(V) es maximal","V es finita","I(V) es principal"],c:0,e:"Irreducible ⇔ I(V) primo. Maximal ocurre solo para puntos."},
{q:"¿Cuál es la dimensión de Krull de k[x,y,z]?",o:["1","2","4","3"],c:3,e:"Cadena maximal: 0 ⊂ (x) ⊂ (x,y) ⊂ (x,y,z)."},
{q:"¿Qué ideales de k[x₁,…,xₙ] corresponden a puntos de Aⁿ?",o:["Los maximales (x₁−a₁,…,xₙ−aₙ)","Los primos de altura 1","Los principales","Los radicales"],c:0,e:"Nullstellensatz débil: los maximales son los de esa forma."},
{q:"¿Cómo es la curva V(y² − x³) en el origen?",o:["Lisa","Una cúspide (singular)","Un nodo","No pasa por el origen"],c:1,e:"Las parciales (−3x², 2y) se anulan en (0,0): punto singular."},
{q:"En la topología de Zariski de A¹(ℂ), los cerrados propios son:",o:["Los intervalos cerrados","Los conjuntos finitos","Los discretos","Los numerables"],c:1,e:"Un polinomio no nulo en una variable tiene finitas raíces."},
S("¿Cómo es la singularidad de la curva V(y² − x³ − x²) en el origen?",["Un nodo (punto doble ordinario)","Una cúspide","Un punto liso","Un punto aislado"],"Las ramas tangentes son y = ±x, distintas entre sí.")
]);
