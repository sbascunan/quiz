// GA - Nivel 5
reg('ga', 5, [
{q:"Que dit le théorème de Bézout pour deux courbes de P² de degrés d et e sans composante commune ?",o:["Elles se coupent en d + e points","Elles se coupent en d·e points, comptés avec multiplicité","Elles ne se coupent jamais","Elles se coupent en max(d, e) points"],c:1,e:"Le nombre d’intersections, avec multiplicité, vaut d·e."},
{q:"Que dit le théorème de Riemann–Roch pour un diviseur D sur une courbe projective lisse de genre g ?",o:["ℓ(D) − ℓ(K − D) = deg D + 1 − g","ℓ(D) = deg D + g","ℓ(D) + ℓ(K − D) = g","ℓ(D) = deg D − g − 1"],c:0,e:"C’est la formule ℓ(D) − ℓ(K−D) = deg D + 1 − g."},
{q:"Quel est le lieu singulier de la courbe V(xy) ?",o:["L’axe des x","L’axe des y","L’origine (0,0)","Il n’y en a pas"],c:2,e:"Les dérivées partielles (y, x) s’annulent seulement à l’origine."},
{q:"Qu’est-ce qu’un morphisme fini de variétés affines ?",o:["Un morphisme à fibres vides","Un morphisme bijectif","Un morphisme à fibres infinies","Un morphisme dont l’anneau de coordonnées de la source est un module de type fini sur celui du but"],c:3,e:"Fini = A est un B-module de type fini via f*."},
{q:"Quelle est la dimension de la grassmannienne G(2,4) des droites de P³ ?",o:["2","3","4","6"],c:2,e:"dim G(k,n) = k(n − k) = 2·2 = 4."},
{q:"Pour une courbe elliptique E, l’application P ↦ [P − O] ∈ Pic⁰(E) est :",o:["Un isomorphisme de variétés E ≅ Pic⁰(E)","Constante","Un revêtement de degré 2","Non définie"],c:0,e:"C’est l’identification de E avec sa jacobienne."},
S("Quel est le degré du diviseur canonique K sur une courbe lisse de genre g ?",["2g − 2","g − 1","2g + 2","g"],"Par Riemann–Roch appliqué à D = K, deg(K) = 2g − 2."),
S("Le plongement de Segre P¹ × P¹ → P³ a pour image :",["Une quadrique lisse V(xw − yz)","Un plan projectif","Une cubique gauche","Une hypersurface de degré 4"],"L’image de ([x:y],[u:v]) = [xu:xv:yu:yv] satisfait z₀z₃ − z₁z₂ = 0.")
]);
