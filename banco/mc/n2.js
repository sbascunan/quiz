// MC - Nivel 2
reg('mc', 2, [
S("El lagrangiano L de un sistema mecánico conservativo se define como:",["L = T − V (energía cinética menos potencial)","L = T + V","L = p·q̇ − H","L = F·r"]),
S("Las ecuaciones de Euler–Lagrange para una coordenada generalizada q_i sin fuerzas no conservativas son:",["d/dt(∂L/∂q̇_i) − ∂L/∂q_i = 0","∂L/∂q̇_i + ∂L/∂q_i = 0","d/dt(∂L/∂q_i) = ∂L/∂q̇_i","∂²L/∂t² = 0"]),
S("Si el lagrangiano L no depende explícitamente de una coordenada generalizada q_k (coordenada cíclica), entonces:",["Su momento conjugado p_k = ∂L/∂q̇_k se conserva","La coordenada q_k permanece constante","La energía potencial es nula","La aceleración q̈_k es cero"]),
S("La segunda ley de Kepler (la línea que une el planeta con el Sol barre áreas iguales en tiempos iguales) es consecuencia directa de la conservación de:",["El momento angular L","La energía mecánica E","El vector de Runge–Lenz","El momento lineal p"]),
S("En un sistema de referencia que rota con velocidad angular Ω respecto a uno inercial, la aceleración de Coriolis es:",["−2 Ω × v","−Ω × (Ω × r)","Ω × v","−m Ω² r"]),
r=>{const T=ri(r,2,8);return mc(r,"Por la tercera ley de Kepler (T² ∝ a³), si el semieje mayor de una órbita se multiplica por "+T*T+", su período orbital se multiplica por:",T*T*T,[T*T,T,2*T*T,T*T*T*T],"Si a' = k²·a, entonces T' = (k²)^{3/2} T = k³ T.")}
]);
