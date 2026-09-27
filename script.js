const lugares = {

    templo: {
        titulo: "Templo Doctrinero",
        icono: "⛪",
        categoria: "PATRIMONIO",
        imagen: "https://situr.boyaca.gov.co/wp-content/uploads/2017/05/Templo-doctrinero.jpg",
        descripcion: `El Templo Doctrinero es uno de los elementos
        históricos y religiosos más representativos
        de Sáchica.`,
        historia: `Su arquitectura y relación con el conjunto
        patrimonial permiten comprender parte de
        la historia cultural y religiosa del municipio.`,
        curioso: `Frente al conjunto doctrinero también
        se encuentra la Cruz Atrial.`,
        lat: 5.583672,
        lng: -73.542039,
        nombreMapa: "Templo Doctrinero, Sáchica"
    },

    calvario: {
        titulo: "Monte Calvario",
        icono: "⛰️",
        categoria: "RELIGIOSO",
        imagen: "https://situr.boyaca.gov.co/wp-content/uploads/2017/05/monte-calvario.jpg",
        descripcion: `El Sendero de Peregrinación del Monte
        Calvario combina tradición religiosa,
        caminata y paisaje.`,
        historia: `Es un lugar utilizado para actividades
        religiosas y recorridos de peregrinación.`,
        curioso: `El recorrido permite observar parte
        del paisaje seco y montañoso de Sáchica.`,
        lat: 5.579866,
        lng: -73.544147,
        nombreMapa: "Monte Calvario, Sáchica"
    },

    plaza: {
        titulo: "Plaza Principal",
        icono: "🏛️",
        categoria: "CULTURA",
        imagen: "https://situr.boyaca.gov.co/wp-content/uploads/2017/05/panorámica8.jpg",
        descripcion: `La Plaza Principal es uno de los puntos
        centrales para comenzar una visita a Sáchica.`,
        historia: `Alrededor del centro se encuentran
        diferentes elementos históricos y culturales.`,
        curioso: `Desde aquí puedes comenzar diferentes
        recorridos turísticos por el municipio.`,
        lat: 5.58333,
        lng: -73.55,
        nombreMapa: "Parque Principal, Sáchica"
    },

    pinturas: {
        titulo: "Pinturas Rupestres",
        icono: "🪨",
        categoria: "ARQUEOLOGÍA",
        imagen: "https://situr.boyaca.gov.co/wp-content/uploads/2017/05/pictogramas.jpg",
        descripcion: `Las pinturas rupestres forman parte
        del patrimonio arqueológico de Sáchica.`,
        historia: `Se encuentran asociadas a formaciones
        rocosas y antiguos habitantes del territorio.`,
        curioso: `La coordenada utilizada es una referencia
        cercana al yacimiento rupestre reportado.`,
        lat: 5.591275,
        lng: -73.516367,
        nombreMapa: "Pinturas Rupestres de Sáchica"
    },

    piedra: {
        titulo: "Piedra del Castigo",
        icono: "🪨",
        categoria: "HISTORIA",
        imagen: "https://situr.boyaca.gov.co/wp-content/uploads/2017/05/panoramica5.jpg",
        descripcion: `La Piedra del Castigo es uno de los
        elementos históricos conocidos de Sáchica.`,
        historia: `Se encuentra dentro del entorno histórico
        y patrimonial del municipio.`,
        curioso: `Puede incluirse dentro de un recorrido
        por el centro histórico.`,
        lat: 5.584055,
        lng: -73.542205,
        nombreMapa: "Piedra del Castigo, Sáchica"
    },

    gondava: {
        titulo: "Gondava",
        icono: "🦖",
        categoria: "PREHISTORIA",
        imagen: "https://situr.boyaca.gov.co/wp-content/uploads/2017/05/Gondava.jpg",
        descripcion: `Gondava es un parque temático
        relacionado con dinosaurios
        y animales prehistóricos.`,
        historia: `El parque utiliza representaciones
        de gran tamaño para acercar al visitante
        al mundo prehistórico.`,
        curioso: `Es uno de los atractivos más llamativos
        de esta zona del Alto Ricaurte.`,
        lat: 5.624620,
        lng: -73.5702553,
        nombreMapa: "Gondava Gran Parque de los Dinosaurios"
    },

    cruz: {
        titulo: "Cruz Atrial",
        icono: "✝️",
        categoria: "PATRIMONIO",
        imagen: "https://situr.boyaca.gov.co/wp-content/uploads/2017/05/Cruz-Atrial.jpg",
        descripcion: `La Cruz Atrial es un elemento patrimonial
        relacionado con el conjunto doctrinero
        de Sáchica.`,
        historia: `Está ubicada frente al conjunto religioso
        y forma parte del patrimonio local.`,
        curioso: `Su cercanía con el templo permite
        conocer varios sitios en un mismo recorrido.`,
        lat: 5.583750,
        lng: -73.541931,
        nombreMapa: "Cruz Atrial, Sáchica"
    },

    termales: {
        titulo: "Aguas Termales",
        icono: "♨️",
        categoria: "NATURALEZA",
        imagen: "https://situr.boyaca.gov.co/wp-content/uploads/2017/05/aguas-termales.jpg",
        descripcion: `Las aguas termales de Sáchica
        se encuentran asociadas a fuentes
        minerales de la zona.`,
        historia: `Complementan los atractivos naturales
        y paisajísticos del municipio.`,
        curioso: `Son una opción diferente dentro
        de los recorridos turísticos de la zona.`,
        lat: 5.586818,
        lng: -73.532381,
        nombreMapa: "Termales de Sáchica"
    },

    pliosaurio: {
        titulo: "Ruta Paleontológica",
        icono: "🦕",
        categoria: "PREHISTORIA",
        imagen: "https://situr.boyaca.gov.co/wp-content/uploads/2017/05/Gondava.jpg",
        descripcion: `Una ruta visual inspirada
        en el patrimonio paleontológico
        del Alto Ricaurte.`,
        historia: `La región posee formaciones geológicas
        y registros fósiles de gran importancia.`,
        curioso: `La animación del pliosaurio representa
        el pasado marino de la región.`,
        lat: 5.566551,
        lng: -73.534196,
        nombreMapa: "Zona paleontológica de Sáchica"
    }

};

const rutas = Object.fromEntries(
    Object.entries(lugares).map(([clave, lugar]) => [
        clave,
        {
            titulo: `${lugar.icono} Ruta a ${lugar.titulo}`,
            texto: lugar.descripcion,
            icono: lugar.icono,
            lat: lugar.lat,
            lng: lugar.lng,
            destino: lugar.nombreMapa
        }
    ])
);

function controlarIntro() {

    const intro = document.getElementById("intro");

    if (!intro) {
        return;
    }

    const destinoHash = window.location.hash;

    if (
        destinoHash === "#lugares" ||
        destinoHash === "#cosas-hacer" ||
        destinoHash === "#restaurantes"
    ) {

        intro.style.display = "none";

        setTimeout(() => {

            const idDestino = destinoHash.replace("#", "");

            const seccion = document.getElementById(idDestino);

            if (!seccion) {
                return;
            }

            const header = document.getElementById("header");

            const alturaHeader =
                header ? header.offsetHeight : 0;

            const posicion =
                seccion.getBoundingClientRect().top +
                window.pageYOffset -
                alturaHeader;

            window.scrollTo({
                top: posicion,
                behavior: "auto"
            });

        }, 50);

    }

}

function crearTemplo() {

    return `
        <div class="escena-lugar escena-templo">

            <div class="sol-escena">☀️</div>

            <div class="nube-escena nube-escena1">
                ☁️
            </div>

            <div class="nube-escena nube-escena2">
                ☁️
            </div>

            <div class="iglesia-animada">

                <div class="cuerpo-templo">

                    <div class="cruz-centro">
                        ✝
                    </div>

                    <div class="ventana-templo"></div>

                    <div class="puerta-templo"></div>

                </div>

                <div class="torre-templo">

                    <div class="cruz-templo">
                        ✝
                    </div>

                    <div class="ventana-torre"></div>

                    <div class="campana-escena">
                        🔔
                    </div>

                </div>

            </div>

            <div class="suelo-escena"></div>

            <div class="nombre-escena">
                TEMPLO DOCTRINERO
            </div>

        </div>
    `;

}

function crearCalvario() {

    return `
        <div class="escena-lugar escena-calvario">

            <div class="sol-escena">
                ☀️
            </div>

            <div class="nube-escena nube-escena1">
                ☁️
            </div>

            <div class="nube-escena nube-escena2">
                ☁️
            </div>

            <div class="montana-calvario fondo-calvario"></div>

            <div class="montana-calvario frente-calvario"></div>

            <div class="sendero-calvario"></div>

            <div class="cruz-calvario cruz-calvario1">
                ✝
            </div>

            <div class="cruz-calvario cruz-calvario2">
                ✝
            </div>

            <div class="cruz-calvario cruz-calvario3">
                ✝
            </div>

            <div class="peregrino-calvario">
                🚶
            </div>

            <div class="planta-calvario planta-calvario1">
                🌿
            </div>

            <div class="planta-calvario planta-calvario2">
                🌵
            </div>

            <div class="nombre-escena">
                MONTE CALVARIO
            </div>

        </div>
    `;

}

function crearPlaza() {

    return `
        <div class="escena-lugar escena-plaza">

            <div class="sol-escena">
                ☀️
            </div>

            <div class="nube-escena nube-escena1">
                ☁️
            </div>

            <div class="nube-escena nube-escena2">
                ☁️
            </div>

            <div class="edificio-plaza edificio-plaza1">

                <div class="techo-plaza"></div>

                <div class="ventana-plaza ventana-plaza1"></div>

                <div class="ventana-plaza ventana-plaza2"></div>

                <div class="puerta-plaza"></div>

            </div>

            <div class="edificio-plaza edificio-plaza2">

                <div class="techo-plaza"></div>

                <div class="ventana-plaza ventana-plaza1"></div>

                <div class="ventana-plaza ventana-plaza2"></div>

                <div class="puerta-plaza"></div>

            </div>

            <div class="fuente-plaza">
                ⛲
            </div>

            <div class="arbol-plaza arbol-plaza1">
                🌳
            </div>

            <div class="arbol-plaza arbol-plaza2">
                🌳
            </div>

            <div class="farol-plaza farol-plaza1">
                🏮
            </div>

            <div class="farol-plaza farol-plaza2">
                🏮
            </div>

            <div class="paloma-plaza paloma-plaza1">
                🕊️
            </div>

            <div class="paloma-plaza paloma-plaza2">
                🕊️
            </div>

            <div class="suelo-plaza"></div>

            <div class="nombre-escena">
                PLAZA PRINCIPAL
            </div>

        </div>
    `;

}

function crearPinturas() {

    return `
        <div class="escena-lugar escena-pinturas">

            <div class="sol-escena sol-rupestre">
                ☀️
            </div>

            <div class="montana-rupestre montana-rupestre1"></div>

            <div class="montana-rupestre montana-rupestre2"></div>

            <div class="roca-rupestre">

                <div class="dibujo-rupestre dibujo-rupestre1">
                    ◎
                </div>

                <div class="dibujo-rupestre dibujo-rupestre2">
                    ✋
                </div>

                <div class="dibujo-rupestre dibujo-rupestre3">
                    ☀
                </div>

                <div class="dibujo-rupestre dibujo-rupestre4">
                    ◇
                </div>

            </div>

            <div class="persona-rupestre persona-rupestre1">

                <div class="cabeza-persona"></div>

                <div class="cuerpo-persona"></div>

                <div class="brazo-dibujando"></div>

            </div>

            <div class="persona-rupestre persona-rupestre2">

                <div class="cabeza-persona"></div>

                <div class="cuerpo-persona"></div>

                <div class="brazo-observando"></div>

            </div>

            <div class="planta-rupestre planta-rupestre1">
                🌿
            </div>

            <div class="planta-rupestre planta-rupestre2">
                🌾
            </div>

            <div class="nombre-escena">
                PINTURAS RUPESTRES
            </div>

        </div>
    `;

}

function crearPiedra() {

    return `
        <div class="escena-lugar escena-piedra">

            <div class="sol-escena">
                ☀️
            </div>

            <div class="nube-escena nube-escena1">
                ☁️
            </div>

            <div class="piedra-castigo">
                <span>PIEDRA</span>
            </div>

            <div class="figura-historica figura-autoridad">

                <div class="cabeza-historica"></div>

                <div class="cuerpo-historico autoridad-cuerpo"></div>

                <div class="brazo-senalando"></div>

            </div>

            <div class="figura-historica figura-acompanante">

                <div class="cabeza-historica"></div>

                <div class="cuerpo-historico acompanante-cuerpo"></div>

            </div>

            <div class="planta-piedra planta-piedra1">
                🌿
            </div>

            <div class="planta-piedra planta-piedra2">
                🌾
            </div>

            <div class="nombre-escena">
                PIEDRA DEL CASTIGO
            </div>

        </div>
    `;

}

function crearGondava() {

    return `
        <div class="escena-lugar escena-gondava">

            <div class="sol-escena">
                ☀️
            </div>

            <div class="nube-escena nube-escena1">
                ☁️
            </div>

            <div class="montana-gondava montana-gondava1"></div>

            <div class="montana-gondava montana-gondava2"></div>

            <div class="dino-gondava">

                <div class="cola-dino"></div>

                <div class="cuerpo-dino"></div>

                <div class="cabeza-dino">

                    <div class="ojo-dino"></div>

                    <div class="boca-dino"></div>

                </div>

                <div class="pata-dino pata-dino1"></div>

                <div class="pata-dino pata-dino2"></div>

                <div class="brazo-dino brazo-dino1"></div>

                <div class="brazo-dino brazo-dino2"></div>

            </div>

            <div class="rugido-dino">
                ROAR!
            </div>

            <div class="palmera-gondava palmera-gondava1">
                🌴
            </div>

            <div class="palmera-gondava palmera-gondava2">
                🌴
            </div>

            <div class="nombre-escena">
                GONDAVA
            </div>

        </div>
    `;

}

function crearCruz() {

    return `
        <div class="escena-lugar escena-cruz">

            <div class="sol-escena">
                ☀️
            </div>

            <div class="nube-escena nube-escena1">
                ☁️
            </div>

            <div class="nube-escena nube-escena2">
                ☁️
            </div>

            <div class="iglesia-fondo-cruz">

                <div class="techo-iglesia-cruz"></div>

                <div class="puerta-iglesia-cruz"></div>

            </div>

            <div class="base-cruz-atrial"></div>

            <div class="cruz-atrial-grande">
                ✝
            </div>

            <div class="flor-cruz flor-cruz1">
                🌼
            </div>

            <div class="flor-cruz flor-cruz2">
                🌼
            </div>

            <div class="flor-cruz flor-cruz3">
                🌼
            </div>

            <div class="nombre-escena">
                CRUZ ATRIAL
            </div>

        </div>
    `;

}

function crearTermales() {

    return `
        <div class="escena-lugar escena-termales">

            <div class="sol-escena">
                ☀️
            </div>

            <div class="montana-termal montana-termal1"></div>

            <div class="montana-termal montana-termal2"></div>

            <div class="piscina-termal">

                <div class="onda-termal onda-termal1"></div>

                <div class="onda-termal onda-termal2"></div>

                <div class="onda-termal onda-termal3"></div>

            </div>

            <div class="banista banista1">

                <div class="cabeza-banista"></div>

                <div class="hombros-banista"></div>

            </div>

            <div class="banista banista2">

                <div class="cabeza-banista"></div>

                <div class="hombros-banista"></div>

            </div>

            <div class="banista banista3">

                <div class="cabeza-banista"></div>

                <div class="hombros-banista"></div>

            </div>

            <div class="vapor-termal vapor-termal1">
                ~
            </div>

            <div class="vapor-termal vapor-termal2">
                ~
            </div>

            <div class="vapor-termal vapor-termal3">
                ~
            </div>

            <div class="vapor-termal vapor-termal4">
                ~
            </div>

            <div class="roca-termal roca-termal1"></div>

            <div class="roca-termal roca-termal2"></div>

            <div class="nombre-escena">
                AGUAS TERMALES
            </div>

        </div>
    `;

}

function obtenerVisual(clave, lugar) {

    const visuales = {
        templo: crearTemplo,
        calvario: crearCalvario,
        plaza: crearPlaza,
        pinturas: crearPinturas,
        piedra: crearPiedra,
        gondava: crearGondava,
        cruz: crearCruz,
        termales: crearTermales
    };

    if (visuales[clave]) {
        return visuales[clave]();
    }

    return `
        <img
            class="lugar-imagen"
            src="${lugar.imagen}"
            alt="${lugar.titulo}"
        >
    `;

}

function cargarLugar() {

    const contenedor =
        document.getElementById("contenidoLugar");

    if (!contenedor) {
        return;
    }

    const parametros =
        new URLSearchParams(
            window.location.search
        );

    const clave =
        parametros.get("lugar");

    const lugar =
        lugares[clave];

    if (!lugar) {

        contenedor.innerHTML = `

            <section class="lugar-contenido">

                <div class="titulo">

                    <small>
                        ERROR
                    </small>

                    <h2>
                        Lugar no encontrado
                    </h2>

                    <p>
                        El lugar solicitado no existe.
                    </p>

                    <br>

                    <a
                        class="boton"
                        href="index.html#lugares"
                    >
                        VOLVER A LOS LUGARES
                    </a>

                </div>

            </section>

        `;

        return;

    }

    document.title =
        `SáchicaTour | ${lugar.titulo}`;

    const urlRuta =
        `https://www.google.com/maps/dir/?api=1&destination=${lugar.lat},${lugar.lng}`;

    const visual =
        obtenerVisual(
            clave,
            lugar
        );

    contenedor.innerHTML = `

        <section
            class="lugar-hero"
            style="background-image:url('${lugar.imagen}');"
        >

            <div class="lugar-hero-contenido">

                <div class="lugar-icono">
                    ${lugar.icono}
                </div>

                <div class="lugar-categoria">
                    ${lugar.categoria}
                </div>

                <h1>
                    ${lugar.titulo}
                </h1>

                <p>
                    Descubre su historia,
                    importancia y ubicación.
                </p>

            </div>

        </section>

        <section class="lugar-contenido">

            <div class="lugar-grid">

                <div class="lado-visual">

                    ${visual}

                </div>

                <div class="lugar-texto">

                    <div class="lugar-categoria-info">
                        ${lugar.categoria}
                    </div>

                    <h2>
                        ${lugar.icono}
                        ${lugar.titulo}
                    </h2>

                    <p>
                        ${lugar.descripcion}
                    </p>

                    <p>
                        ${lugar.historia}
                    </p>

                    <div class="dato-especial">

                        <strong>
                            💡 DATO CURIOSO
                        </strong>

                        <p>
                            ${lugar.curioso}
                        </p>

                    </div>

                    <div class="botones-lugar">

                        <a
                            class="boton"
                            href="index.html#lugares"
                        >
                            ← TODOS LOS LUGARES
                        </a>

                        <a
                            class="boton"
                            target="_blank"
                            rel="noopener"
                            href="${urlRuta}"
                        >
                            📍 ABRIR RUTA REAL
                        </a>

                    </div>

                </div>

            </div>

        </section>

    `;

}

function iniciarReveal() {

    const elementos =
        document.querySelectorAll(".revelar");

    if (!elementos.length) {
        return;
    }

    const observador =
        new IntersectionObserver(
            entradas => {

                entradas.forEach(
                    entrada => {

                        if (entrada.isIntersecting) {

                            entrada.target.classList.add(
                                "visible"
                            );

                            observador.unobserve(
                                entrada.target
                            );

                        }

                    }
                );

            },
            {
                threshold: .12
            }
        );

    elementos.forEach(
        elemento => {
            observador.observe(elemento);
        }
    );

}

function iniciarMenu() {

    const boton =
        document.getElementById("menuBtn");

    const menu =
        document.getElementById("menu");

    if (!boton || !menu) {
        return;
    }

    boton.addEventListener(
        "click",
        () => {
            menu.classList.toggle("abierto");
        }
    );

    menu.querySelectorAll("a").forEach(
        enlace => {

            enlace.addEventListener(
                "click",
                () => {
                    menu.classList.remove("abierto");
                }
            );

        }
    );

}

function iniciarHeader() {

    const header =
        document.getElementById("header");

    if (!header) {
        return;
    }

    window.addEventListener(
        "scroll",
        () => {

            header.classList.toggle(
                "scrolled",
                window.scrollY > 70
            );

        },
        {
            passive: true
        }
    );

}

function iniciarBotonArriba() {

    const boton =
        document.getElementById("arriba");

    if (!boton) {
        return;
    }

    window.addEventListener(
        "scroll",
        () => {

            boton.classList.toggle(
                "mostrar",
                window.scrollY > 600
            );

        },
        {
            passive: true
        }
    );

    boton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}

function crearBurbujasIntro() {

    const contenedor =
        document.getElementById("burbujasIntro");

    if (!contenedor) {
        return;
    }

    if (
        window.location.hash === "#lugares" ||
        window.location.hash === "#cosas-hacer" ||
        window.location.hash === "#restaurantes"
    ) {
        return;
    }

    for (let i = 0; i < 18; i++) {

        const burbuja =
            document.createElement("span");

        burbuja.className =
            "burbuja-intro";

        const tamano =
            Math.random() * 14 + 6;

        burbuja.style.width =
            `${tamano}px`;

        burbuja.style.height =
            `${tamano}px`;

        burbuja.style.left =
            `${Math.random() * 100}%`;

        burbuja.style.animationDuration =
            `${Math.random() * 5 + 5}s`;

        burbuja.style.animationDelay =
            `${Math.random() * 5}s`;

        contenedor.appendChild(
            burbuja
        );

    }

}

function crearParticulasHero() {

    const contenedor =
        document.getElementById("particulasHero");

    if (!contenedor) {
        return;
    }

    for (let i = 0; i < 28; i++) {

        const particula =
            document.createElement("span");

        particula.className =
            "particula-hero";

        const tamano =
            Math.random() * 4 + 2;

        particula.style.width =
            `${tamano}px`;

        particula.style.height =
            `${tamano}px`;

        particula.style.left =
            `${Math.random() * 100}%`;

        particula.style.bottom =
            `${Math.random() * 35}%`;

        particula.style.animationDuration =
            `${Math.random() * 6 + 5}s`;

        particula.style.animationDelay =
            `${Math.random() * 6}s`;

        contenedor.appendChild(
            particula
        );

    }

}

function crearBurbujasMar() {

    const contenedor =
        document.getElementById("particulasMar");

    if (!contenedor) {
        return;
    }

    for (let i = 0; i < 22; i++) {

        const particula =
            document.createElement("span");

        particula.className =
            "particula-mar";

        const tamano =
            Math.random() * 14 + 5;

        particula.style.width =
            `${tamano}px`;

        particula.style.height =
            `${tamano}px`;

        particula.style.left =
            `${Math.random() * 100}%`;

        particula.style.bottom =
            `${Math.random() * 25}%`;

        particula.style.animationDuration =
            `${Math.random() * 6 + 6}s`;

        particula.style.animationDelay =
            `${Math.random() * 7}s`;

        contenedor.appendChild(
            particula
        );

    }

}

function iniciarTarjetas3D() {

    if (window.innerWidth < 800) {
        return;
    }

    document
        .querySelectorAll(".tarjeta")
        .forEach(
            tarjeta => {

                tarjeta.addEventListener(
                    "mousemove",
                    evento => {

                        const rect =
                            tarjeta.getBoundingClientRect();

                        const rotY =
                            (
                                evento.clientX -
                                rect.left -
                                rect.width / 2
                            ) / 32;

                        const rotX =
                            -(
                                evento.clientY -
                                rect.top -
                                rect.height / 2
                            ) / 38;

                        tarjeta.style.transform =
                            `perspective(900px)
                            rotateX(${rotX}deg)
                            rotateY(${rotY}deg)
                            translateY(-10px)`;

                    }
                );

                tarjeta.addEventListener(
                    "mouseleave",
                    () => {
                        tarjeta.style.transform = "";
                    }
                );

            }
        );

}

function mostrarRuta(clave) {

    const info =
        document.getElementById("rutaInfo");

    const viajero =
        document.getElementById("viajero");

    const destino =
        document.getElementById("destinoRuta");

    const seccion =
        document.getElementById("rutas");

    const ruta =
        rutas[clave];

    if (
        !info ||
        !viajero ||
        !destino ||
        !ruta
    ) {
        return;
    }

    document
        .querySelectorAll(".selector-rutas button")
        .forEach(
            boton => {

                boton.classList.toggle(
                    "activa",
                    boton.dataset.ruta === clave
                );

            }
        );

    destino.textContent =
        ruta.icono;

    destino.classList.remove(
        "destino-activo"
    );

    void destino.offsetWidth;

    destino.classList.add(
        "destino-activo"
    );

    const url =
        `https://www.google.com/maps/dir/?api=1&destination=${ruta.lat},${ruta.lng}`;

    info.innerHTML = `

        <div class="ruta-icono">
            ${ruta.icono}
        </div>

        <h3>
            ${ruta.titulo}
        </h3>

        <p>
            ${ruta.texto}
        </p>

        <a
            class="boton boton-mapa"
            target="_blank"
            rel="noopener"
            href="${url}"
        >
            📍 ABRIR RUTA REAL EN GOOGLE MAPS
        </a>

    `;

    viajero.classList.remove(
        "animando"
    );

    void viajero.offsetWidth;

    viajero.classList.add(
        "animando"
    );

    if (seccion) {

        seccion.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}

function iniciarRutas() {

    document
        .querySelectorAll("[data-ruta]")
        .forEach(
            boton => {

                boton.addEventListener(
                    "click",
                    () => {

                        mostrarRuta(
                            boton.dataset.ruta
                        );

                    }
                );

            }
        );

    const pliosaurio =
        document.getElementById(
            "rutaPliosaurio"
        );

    if (pliosaurio) {

        pliosaurio.addEventListener(
            "click",
            () => {

                mostrarRuta(
                    "pliosaurio"
                );

            }
        );

    }

}

function iniciarParallax() {

    const fondo =
        document.querySelector(".hero-fondo");

    if (!fondo) {
        return;
    }

    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY <
                window.innerHeight
            ) {

                fondo.style.backgroundPosition =
                    `center calc(50% + ${window.scrollY * .10}px)`;

            }

        },
        {
            passive: true
        }
    );

}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        controlarIntro();

        cargarLugar();

        iniciarReveal();

        iniciarMenu();

        iniciarHeader();

        iniciarBotonArriba();

        crearBurbujasIntro();

        crearParticulasHero();

        crearBurbujasMar();

        iniciarTarjetas3D();

        iniciarRutas();

        iniciarParallax();

    }
);