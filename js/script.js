const poemas = [
  {
    "titulo": "Amor eterno",
    "autor": "Gustavo Adolfo Bécquer",
    "html": "<p>Podrá nublarse el sol eternamente;</p><p>Podrá secarse en un instante el mar;</p><p>Podrá romperse el eje de la tierra</p><p>Como un débil cristal.</p><p>¡todo sucederá! Podrá la muerte</p><p>Envolverme en sus pálidas banderas;</p><p>Podrá desencadenarse la tormenta</p><p>Que deshaga el cielo en mil pedazos:</p><p>pero jamás podrá mitigar la sed</p><p>Ardiente, imperiosa, y que me devora</p><p>El insaciable afán de aquella hermosa</p><p>Hermosura, ideal de mis entrañas.</p>"
  },
  {
    "titulo": "Contigo",
    "autor": "Luis Cernuda",
    "html": "<p>Mi tierra?</p><p>Mi tierra eres tú.</p><p>Mi gente?</p><p>Mi gente eres tú.</p><p>El destierro y la muerte</p><p>para mi están adonde</p><p>no estés tú.</p><p>Y mi vida?</p><p>Deja, que no vea</p><p>Mientras me quieras eres</p><p>para mi cuanto me falta.</p>"
  },
  {
    "titulo": "Te quiero",
    "autor": "Mario Benedetti",
    "html": "<p>Tus manos son mi caricia<br>mis acordes cotidianos<br>te quiero porque tus manos<br>trabajan por la justicia</p><p>si te quiero es porque sos<br>mi amor mi cómplice y todo<br>y en la calle codo a codo<br>somos mucho más que dos</p>"
  },
  {
    "titulo": "Todavía",
    "autor": "Mario Benedetti",
    "html": "<p>No lo creo todavía<br>estás llegando a mi lado<br>y la noche es un puñado<br>de estrellas y de alegría</p><p>palpo gusto escucho y veo<br>tu rostro tu paso largo<br>tus manos y en el letargo<br>de los dioses creo y creo</p>"
  },
  {
    "titulo": "Hagamos un trato",
    "autor": "Mario Benedetti",
    "html": "<p>Compañera<br>usted sabe<br>puede contar<br>conmigo<br>no hasta dos<br>o hasta diez<br>sino contar<br>conmigo</p><p>si alguna vez<br>advierte<br>que la miro a los ojos<br>y una vez<br>más interrumpo la fiesta<br>es tan sólo porque estoy<br>esperando las palabras<br>que alguna vez ha dejado<br>sin decir</p>"
  },
  {
    "titulo": "Te quiero sin mirar atrás",
    "autor": "Mario Benedetti",
    "html": "<p>Te quiero mansamente, entre las sombras de las falsas ilusiones.</p><p>Te quiero como para leerte cada noche, como mi libro favorito quiero leerte, línea tras línea, letra por letra.</p><p>Te quiero con la calma de quien sabe el destino, te quiero sin esperar ser correspondido, te quiero así, como ahora, queriéndote sin saberlo tú.</p>"
  },
  {
    "titulo": "A veces",
    "autor": "Nicolás Guillén",
    "html": "<p>A veces tengo ganas de ser cursi<br>para decir: La amo a usted con locura.<br>A veces tengo ganas de ser tonto<br>para gritar: ¡La quiero tanto!</p><p>A veces tengo ganas de ser tonto<br>pa decir las cosas claras con ternura</p>"
  },
  {
    "titulo": "Madrigal",
    "autor": "Amado Nervo",
    "html": "<p>Por tus ojos verdes yo me perdería,<br>sirena de aquellas que Ulises, sagaz,<br>amaba y temía.<br>Por tus ojos verdes yo me perdería.<br>Por tus ojos verdes en lo que, fugaz<br>y profundo, late la melancolía.</p>"
  },
  {
    "titulo": "Amor",
    "autor": "Salvador Novo",
    "html": "<p>Amar es este tímido silencio<br>cerca de ti, sin que lo sepas,<br>y recordar tu voz cuando te marchas<br>y sentir el calor de tu saludo.</p><p>Amar es aguardarte<br>como si fuera un don de la esperanza,<br>y en tus ojos encontrar<br>la razón de mi tardanza.</p>"
  },
  {
    "titulo": "Dos cuerpos",
    "autor": "Octavio Paz",
    "html": "<p>Dos cuerpos frente a frente<br>son a veces dos olas<br>y la noche es océano.</p><p>Dos cuerpos frente a frente<br>son a veces dos piedras<br>y la noche desierto.</p><p>Dos cuerpos frente a frente<br>son a veces raíces<br>en la noche enlazadas.</p>"
  }
];

const vistaAlbum = document.getElementById('vista-album');
const vistaMenu = document.getElementById('vista-menu');
const overlay = document.getElementById('overlay-poema');
const hoja = document.getElementById('contenido-hoja');
const listaPoemas = document.getElementById('lista-poemas');

function inicializarPoemas() {
  if (listaPoemas) {
    listaPoemas.innerHTML = poemas.map((p, i) =>
      `<li>
        <button class="item-poema" onclick="abrirPoema(${i})">
          <span class="adorno">❦</span>
          <span class="item-poema-texto">
            <span class="item-poema-titulo">${escapeHtml(p.titulo)}</span>
            <span class="item-poema-autor">${escapeHtml(p.autor)}</span>
          </span>
        </button>
      </li>`
    ).join('');
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function irAMenu() {
  vistaAlbum.style.display = 'none';
  vistaMenu.style.display = 'block';
  window.scrollTo(0, 0);
}

function irAAlbum() {
  vistaMenu.style.display = 'none';
  vistaAlbum.style.display = 'block';
  cerrarOverlay();
  window.scrollTo(0, 0);
}

function irACarta() {
  window.location.href = 'carta.html';
}

function abrirPoema(i) {
  const p = poemas[i];
  if (!p) return;

  hoja.innerHTML = `
    <button class="cerrar-x" onclick="cerrarOverlay()" aria-label="Cerrar">×</button>
    <h3>${escapeHtml(p.titulo)}</h3>
    <p class="autor-poema">${escapeHtml(p.autor)}</p>
    <div class="poema">${p.html}</div>
    <div class="acciones-hoja">
      <button class="btn-secundario" onclick="cerrarOverlay()">Cerrar</button>
      <button class="btn-secundario" onclick="irAAlbum()">Volver al inicio</button>
    </div>
  `;

  overlay.classList.add('abierto');
}

function cerrarOverlay() {
  overlay.classList.remove('abierto');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') cerrarOverlay();
});

document.addEventListener('DOMContentLoaded', inicializarPoemas);
