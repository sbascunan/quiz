// AA - Nivel 1
reg('aa', 1, [
S("Un grupo es un conjunto con una operación…",["Asociativa, con neutro e inversos","Conmutativa y con neutro","Distributiva sobre la suma","Idempotente"]),
S("¿Es (ℤ, +) un grupo?",["Sí, abeliano","No, faltan inversos","No, falta el neutro","Sí, pero no abeliano"]),
S("En cualquier grupo G, el inverso del producto (a·b)⁻¹ es igual a…",["b⁻¹·a⁻¹","a⁻¹·b⁻¹","a·b⁻¹","b·a"]),
r=>{const n=ri(r,3,6);let f=1;for(let k=2;k<=n;k++)f*=k;return mc(r,"¿Cuántos elementos tiene el grupo simétrico S_"+n+"?",f,[n*n,n*(n-1),2*n,f/n,f+1,Math.pow(2,n)],"|Sₙ| = n!.")},
r=>{const n=ri(r,2,9),m=ri(r,2,9);return mc(r,"¿Cuántos elementos tiene ℤ_"+n+" × ℤ_"+m+"?",n*m,[n+m,n*m+n,n*m-1,n*n+1,m*m+2],"El orden de un producto es el producto de los órdenes.")}
]);
