// VC - Nivel 3
reg('vc', 3, [
S("Teorema de Liouville: toda función entera (holomorfa en todo ℂ) y acotada es necesariamente:",["Constante","Un polinomio de grado 1","Periódica","Idénticamente nula"]),
S("En z = 0, la función f(z) = e^{1/z} tiene una singularidad:",["Esencial","Evitable","Polo simple","Polo de orden 2"],"Su serie de Laurent tiene infinitos términos con potencias negativas de z."),
S("El gran teorema de Picard afirma que en toda vecindad perforada de una singularidad esencial, f(z) toma:",["Todos los valores complejos infinitas veces, salvo a lo sumo uno","Solo valores reales","Un número finito de valores","Valores acotados"]),
S("El principio del argumento relaciona (1/2πi) ∮_γ (f′(z)/f(z)) dz con:",["N − P (número de ceros menos número de polos dentro de γ, con multiplicidad)","N + P","La suma de los residuos de f","El grado de γ"]),
S("Por el lema de Schwarz, si f : D → D es holomorfa con f(0) = 0 en el disco unidad D, entonces:",["|f(z)| ≤ |z| para todo z ∈ D y |f′(0)| ≤ 1","|f(z)| ≥ |z|","f es constante","f(z) = z²"]),
r=>{const a=ri(r,1,5),k=ri(r,2,6);return mc(r,"¿Cuál es el residuo de f(z) = "+k+"/(z − "+a+") en z = "+a+"?",k,[a,0,k*a,2*k],"Para un polo simple en z = a, Res(f, a) = lím_{z→a} (z−a)f(z) = "+k+".")}
]);
