// VC - Nivel 2
reg('vc', 2, [
S("Para f(z) = u(x,y) + iv(x,y), las ecuaciones de Cauchy–Riemann son:",["u_x = v_y  y  u_y = −v_x","u_x = −v_y  y  u_y = v_x","u_x = u_y  y  v_x = v_y","u_{xx} + v_{yy} = 0"]),
S("Teorema de Cauchy–Goursat: si f es holomorfa en un dominio simplemente conexo D, para toda curva cerrada simple γ en D:",["∮_γ f(z) dz = 0","∮_γ f(z) dz = 2πi","∮_γ f(z) dz = f(0)","La integral depende del radio de γ"]),
S("¿Cuánto vale la integral ∮_{|z|=1} (1/z) dz recorrida en sentido antihorario?",["2πi","0","πi","1"],"Con z = e^{iθ}, dz = ie^{iθ}dθ, la integral da ∫₀^{2π} i dθ = 2πi."),
S("La parte real e imaginaria de cualquier función holomorfa satisfacen la ecuación de Laplace, por lo que son funciones:",["Armónicas","Constantes","Polinomiales","Periódicas"]),
S("Fórmula integral de Cauchy: si f es holomorfa dentro y sobre un contorno cerrado simple γ que rodea a z₀:",["f(z₀) = (1/2πi) ∮_γ f(z)/(z − z₀) dz","f(z₀) = ∮_γ f(z)(z − z₀) dz","f(z₀) = (1/2π) ∮_γ f′(z) dz","f(z₀) = 0"]),
r=>{const R=ri(r,2,8);return mc(r,"¿Cuál es el radio de convergencia de la serie Σ (z/"+R+")^n?",R,[1,"1/"+R,R*R,0],"Por el criterio de la raíz, converge para |z/R| < 1, es decir |z| < "+R+".")}
]);
