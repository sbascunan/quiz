// AA - Nivel 3
reg('aa', 3, [
S("Un subgrupo N ◁ G es normal si…",["gNg⁻¹ = N para todo g ∈ G","Tiene índice 2","Es abeliano","Es cíclico"]),
S("Primer teorema de isomorfismo: G/ker φ ≅ …",["im φ","G","ker φ","Aut(G)"]),
S("Teorema de Cauchy: si un primo p divide a |G|, entonces G tiene…",["Un elemento de orden p","Un subgrupo normal de orden p","Un subgrupo de índice p","Centro no trivial"]),
S("Si H ≤ G tiene índice [G : H] = 2, entonces H es…",["Siempre normal en G","Siempre abeliano","El centro de G","Cíclico"]),
r=>{const m=ri(r,2,12),n=ri(r,2,12),ok=gcd(m,n)===1;return mc(r,"¿Es cíclico el grupo ℤ_"+m+" × ℤ_"+n+"?",ok?"Sí":"No",["Sí","No","Solo si m = n","Solo si ambos son primos"],"Es cíclico si y solo si mcd(m, n) = 1 (teorema chino del resto).")}
]);
