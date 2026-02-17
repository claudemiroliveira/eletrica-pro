const tela = document.getElementById("tela");

function abrirTela(nome){

/* INICIO */
if(nome==="inicio"){
tela.innerHTML=`
<div class="card">
<h2>Bem-vindo ao Elétrica PRO</h2>
<p>Aplicativo profissional para eletricistas.</p>
<p>✔ Funciona Offline</p>
<p>✔ Cálculos rápidos</p>
<p>✔ Tabelas elétricas</p>
</div>`;
}

/* TABELAS */
if(nome==="tabelas"){
tela.innerHTML=`
<div class="card">
<h3>Bitola por Corrente</h3>
<ul>
<li>1,5 mm² → 15A</li>
<li>2,5 mm² → 21A</li>
<li>4 mm² → 28A</li>
<li>6 mm² → 36A</li>
<li>10 mm² → 50A</li>
</ul>
</div>

<div class="card">
<h3>Disjuntores</h3>
<ul>
<li>Iluminação → 10A</li>
<li>Tomadas → 20A</li>
<li>Chuveiro → 32–50A</li>
</ul>
</div>`;
}

/* CALCULADORA */
if(nome==="calculadora"){
tela.innerHTML=`
<div class="card">
<h3>Cálculo de Corrente</h3>

<label>Potência (W)</label>
<input id="pot">

<label>Tensão (V)</label>
<input id="ten">

<button onclick="calcular()">Calcular</button>

<h2 id="resultado"></h2>
</div>`;
}

/* QUADROS */
if(nome==="quadros"){
tela.innerHTML=`
<div class="card">
<h3>Quadro Casa Pequena</h3>
<ul>
<li>Disjuntor geral 40A</li>
<li>Iluminação 10A</li>
<li>Tomadas 20A</li>
<li>Chuveiro 40A</li>
</ul>
</div>

<div class="card">
<h3>Quadro Casa Média</h3>
<ul>
<li>Geral 63A</li>
<li>Iluminação 10A</li>
<li>TUG 20A</li>
<li>Ar condicionado 25A</li>
<li>Chuveiro 50A</li>
</ul>
</div>`;
}

/* INDUSTRIAL */
if(nome==="industrial"){
tela.innerHTML=`
<div class="card">
<h3>Partida Direta Motor</h3>
<p>Disjuntor → Contator → Relé térmico → Motor</p>
</div>

<div class="card">
<h3>Comando Liga/Desliga</h3>
<p>Botão Liga (NA)</p>
<p>Botão Desliga (NF)</p>
<p>Selo auxiliar do contator</p>
</div>`;
}

}

/* CALCULO */
function calcular(){
let p = Number(document.getElementById("pot").value);
let v = Number(document.getElementById("ten").value);

if(!p || !v){
alert("Preencha os valores");
return;
}

let i = p/v;

document.getElementById("resultado").innerHTML =
"Corrente: "+i.toFixed(2)+" A";
}

abrirTela("inicio");
