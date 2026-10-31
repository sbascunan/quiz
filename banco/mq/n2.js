// MQ - Nivel 2
reg('mq', 2, [
S("¿Cuánto vale el conmutador canónico [x̂, p̂_x] en mecánica cuántica?",["iℏ","0","−iℏ","ℏ/2"]),
S("Los niveles de energía del oscilador armónico cuántico unidimensional son:",["E_n = ℏω(n + 1/2) con n = 0, 1, 2, …","E_n = nℏω con n = 1, 2, …","E_n = ℏω(n² + 1)","E_n = ½ ℏω n²"]),
S("Los autovalores del operador cuadrado del momento angular L̂² son:",["ℏ² l(l + 1) con l = 0, 1, 2, …","ℏ l","ℏ² l²","ℏ(l + 1/2)"]),
S("Las matrices de Pauli σ_x, σ_y, σ_z satisfacen la relación de conmutación [σ_x, σ_y] =",["2i σ_z","i σ_z","0","−σ_z"]),
S("En el oscilador armónico cuántico, el operador de creación â† actuando sobre el estado |n⟩ produce:",["√(n + 1) |n + 1⟩","√n |n − 1⟩","(n + 1) |n + 1⟩","n |n⟩"]),
r=>{const l=ri(r,0,6);return mc(r,"Para un número cuántico orbital l = "+l+", ¿cuántos valores posibles tiene el número cuántico magnético m_l?",2*l+1,[l,l+1,2*l,l*l],"m_l toma valores desde −l hasta +l en pasos enteros: 2l + 1 valores.")}
]);
