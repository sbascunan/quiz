// ME - Nivel 1
reg('me', 1, [
S("La fórmula de Boltzmann que relaciona la entropía S con el número de microestados accesibles Ω es:",["S = k_B ln Ω","S = k_B Ω","S = Ω ln k_B","S = −k_B / Ω"]),
S("En un gas ideal clásico de N partículas a temperatura T, la ecuación de estado es:",["P·V = N·k_B·T","P·V = N·T²","P / V = N·k_B·T","P·V² = N·k_B·T"]),
S("Según el teorema de equipartición de la energía, cada grado de libertad cuadrático en el hamiltoniano clásico aporta una energía media de:",["½ k_B T","k_B T","3/2 k_B T","2 k_B T"]),
S("La primera ley de la termodinámica expresa la conservación de la energía interna dU como:",["dU = δQ − δW (o δQ + δW según convención de trabajo)","dU = T dS","dU = P dV","dU = 0 para todo proceso"]),
r=>{const f=ri(r,3,7);return mc(r,"Por equipartición clásica, ¿cuál es la energía interna por partícula (en unidades de ½ k_B T) de un gas ideal con "+f+" grados de libertad cuadráticos?",f,[2*f,f-1,f+2,1],"Cada grado de libertad cuadrático aporta ½ k_B T, totalizando "+f+" veces ½ k_B T.")}
]);
