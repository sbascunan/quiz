// ranking.js — ranking global con Google (Firebase Auth + Firestore).
// Pega aquí la configuración de tu app web de Firebase (Project settings → Your apps → SDK setup).
// Estos valores son públicos por diseño: la seguridad la dan las reglas de firestore.rules.
const FIREBASE_CONFIG={
  apiKey:"AIzaSyABaobiHX-WprdeU8CFRh9tGeDf9kjb93M",
  authDomain:"duelo-de-preguntas-2026.firebaseapp.com",
  projectId:"duelo-de-preguntas-2026",
  storageBucket:"duelo-de-preguntas-2026.firebasestorage.app",
  messagingSenderId:"369075075035",
  appId:"1:369075075035:web:2d77c42590d10d2dac99fe"
};

const RK={on:false,user:null,onAuth:null};
(function(){
  if(!FIREBASE_CONFIG.apiKey||!window.firebase)return; // sin configurar: la página sigue con récords locales
  firebase.initializeApp(FIREBASE_CONFIG);
  const auth=firebase.auth(),db=firebase.firestore();
  const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
  const ref=k=>db.collection("rank").doc(k).collection("scores");
  RK.on=true;
  auth.onAuthStateChanged(u=>{RK.user=u;if(RK.onAuth)RK.onAuth(u)});
  RK.signIn=()=>auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(e=>{if(e.code!=="auth/popup-closed-by-user")alert("No se pudo iniciar sesión: "+e.code)});
  RK.signOut=()=>auth.signOut();
  // Guarda solo si mejora tu marca anterior en esa configuración.
  RK.submit=(k,p)=>{const u=auth.currentUser;if(!u||!(p>0))return Promise.resolve();const d=ref(k).doc(u.uid);
    return d.get().then(s=>{if(s.exists&&s.data().p>=p)return;
      const data={n:u.displayName||"",p:Math.round(p),t:firebase.firestore.FieldValue.serverTimestamp()};
      return s.exists?d.update(data):d.set(data)}).catch(e=>console.warn("ranking:",e.code||e))};
  RK.refresh=k=>{const el=document.getElementById("rk");if(!el)return;
    ref(k).orderBy("p","desc").limit(10).get().then(q=>{
      const me=RK.user&&RK.user.uid;
      const li=q.docs.map(d=>`<li class="${d.id===me?"me":""}">${esc(d.data().n)} — <b>${d.data().p}</b></li>`).join("");
      el.innerHTML=`<h3>Ranking global</h3><p class="mut">Para la configuración elegida arriba.${RK.user?"":" Inicia sesión con Google para aparecer aquí."}</p>`+(li?`<ol class="bd">${li}</ol>`:`<p class="mut">Aún no hay marcas. ¡Sé el primero!</p>`);
    }).catch(()=>{el.innerHTML=`<h3>Ranking global</h3><p class="mut">No se pudo cargar el ranking.</p>`})};
})();
