// MQ - Nivel 1
reg('mq', 1, [
S("Según la relación de Planck–Einstein, la energía de un fotón de frecuencia ν es:",["E = h·ν","E = h/ν","E = ½ h·ν²","E = m·c·ν"]),
S("La longitud de onda de De Broglie λ asociada a una partícula con momento lineal p es:",["λ = h / p","λ = h·p","λ = p / h","λ = ℏ·p²"]),
S("El principio de incertidumbre de Heisenberg para la posición x y el momento p_x establece que:",["Δx · Δp_x ≥ ℏ / 2","Δx · Δp_x = 0","Δx / Δp_x ≥ h","Δx + Δp_x ≤ ℏ"]),
S("Según la interpretación probabilística de Born, la densidad de probabilidad de encontrar una partícula en x es:",["|ψ(x, t)|²","ψ(x, t)","Re(ψ(x, t))","|∇ψ(x, t)|"]),
S("Los niveles de energía de una partícula de masa m en un pozo infinito unidimensional de ancho L son:",["E_n = n² π² ℏ² / (2mL²)","E_n = n ℏ ω","E_n = −13.6 eV / n²","E_n = n π ℏ / (mL)"]),
r=>{const n=ri(r,2,6);return mc(r,"En un pozo de potencial infinito 1D, ¿cuál es el cociente E_"+n+" / E_1 entre el nivel n = "+n+" y el estado fundamental?",n*n,[n,2*n,n*n-1,n+1],"Como E_n ∝ n², se cumple E_n / E_1 = n².")}
]);
