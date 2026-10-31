// AA - Nivel 2
reg('aa', 2, [
S("Teorema de Lagrange: si H ≤ G con G finito, entonces…",["|H| divide a |G|","|G| divide a |H|","H es normal","G es abeliano"]),
S("¿Para qué n es ℤ_n un cuerpo?",["Cuando n es primo","Cuando n es par","Siempre","Cuando n es potencia de 2"]),
S("Todo grupo de orden primo p es…",["Cíclico e isomorfo a ℤ_p","No abeliano","Producto directo de dos subgrupos propios","Sin generadores"]),
r=>{const n=ri(r,6,24),k=ri(r,2,n-1),g=gcd(k,n);return mc(r,"¿Cuál es el orden del elemento "+k+" en (ℤ_"+n+", +)?",n/g,[n,k,g,n-k,n/g+1,n*k],"El orden de k en ℤₙ es n/mcd(k, n).")},
r=>{const n=ri(r,5,24);return mc(r,"¿Cuántos generadores tiene el grupo cíclico ℤ_"+n+"?",phi(n),[n,n-1,phi(n)+1,phi(n)+2,Math.floor(n/2)],"Los generadores son los k con mcd(k, n) = 1: φ(n).")}
]);
