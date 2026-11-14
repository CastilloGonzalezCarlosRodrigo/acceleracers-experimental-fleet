// =========================================
// BASE DE DATOS COMPLETA (16 PROTOTIPOS CON PARTES TÉCNICAS)
// =========================================
const prototypes = [
    // --- TEKU ---
    {
        id: 'deora2',
        name: 'DEORA II',
        team: 'teku',
        teamLabel: 'TEKU DIVISION',
        category: 'Aero-Concept Twin-Turbine',
        streetPower: '1,120 HP',
        trackPower: '1,380 HP',
        streetZero: '2.1s',
        trackZero: '1.7s',
        streetSpeed: '415 km/h',
        trackSpeed: '455 km/h',
        accelecharger: 'Jump Jets / Hydro-Glide',
        description: 'Vehículo insignia de aerodinámica invertida con cabina frontal panorámica y propulsión híbrida de hidrógeno Nitrox 2.',
        parts: { chassis: 'Aleación de Titanio-Carbono', aero: 'Difusores de Carga Invertida', core: 'Pila de Hidrógeno Mk.IV' },
        image: 'assets/img/Teku/deora2.jpg'
    },
    {
        id: 'reverb',
        name: 'REVERB',
        team: 'teku',
        teamLabel: 'TEKU DIVISION',
        category: 'Mid-Engine Hyper-Coupe',
        streetPower: '1,260 HP',
        trackPower: '1,490 HP',
        streetZero: '1.9s',
        trackZero: '1.5s',
        streetSpeed: '440 km/h',
        trackSpeed: '485 km/h',
        accelecharger: 'Overdrive Electromagnético',
        description: 'Hiperauto de motor central con difusores activos de carbono y respuesta instantánea en rectas de alta velocidad.',
        parts: { chassis: 'Monocasco de Fibra Compuesta', aero: 'Aleta Estabilizadora Activa', core: 'Inductor Magnético Dual' },
        image: 'assets/img/Teku/reverb.jpg'
    },
    {
        id: 'power',
        name: 'POWER RAGE',
        team: 'teku',
        teamLabel: 'TEKU DIVISION',
        category: 'Twin-Turbo Drift Spec',
        streetPower: '1,050 HP',
        trackPower: '1,290 HP',
        streetZero: '2.2s',
        trackZero: '1.8s',
        streetSpeed: '405 km/h',
        trackSpeed: '440 km/h',
        accelecharger: 'Vectorización de Agarre Lateral',
        description: 'Coupé deportivo de tracción integral variable diseñado para estabilidad absoluta en curvas cerradas.',
        parts: { chassis: 'Tubular de Acero Cromo-Molibdeno', aero: 'Splitter Ajustable de Carbono', core: 'V6 Twin-Turbo Intercooler' },
        image: 'assets/img/Teku/power.jpg'
    },
    {
        id: 'blue',
        name: 'BATTLE SPEC',
        team: 'teku',
        teamLabel: 'TEKU DIVISION',
        category: 'Open-Cockpit Speedster',
        streetPower: '1,140 HP',
        trackPower: '1,360 HP',
        streetZero: '2.0s',
        trackZero: '1.6s',
        streetSpeed: '420 km/h',
        trackSpeed: '460 km/h',
        accelecharger: 'Escudo Aerodinámico Frontal',
        description: 'Barchetta experimental asimétrica con sistema de sonido sónico integrado y baja resistencia al viento.',
        parts: { chassis: 'Aluminio Aeroespacial CNC', aero: 'Parabrisas Deflector Sónico', core: 'Turbina de Flujo Axial' },
        image: 'assets/img/Teku/blue.jpg'
    },
    {
        id: 'nolo',
        name: 'SYNKRO // NOLO SPEC',
        team: 'teku',
        teamLabel: 'TEKU DIVISION',
        category: 'Tri-Rotor Track Prototype',
        streetPower: '1,090 HP',
        trackPower: '1,320 HP',
        streetZero: '2.1s',
        trackZero: '1.7s',
        streetSpeed: '410 km/h',
        trackSpeed: '450 km/h',
        accelecharger: 'Telemetría Óptica de Precisión',
        description: 'Configuración especial de líder de escudería con reparto de pesos 50:50 y alerón de fibra forjada.',
        parts: { chassis: 'Fibra de Carbono Tricapa', aero: 'Alerón Trasero Hidráulico', core: 'Motor Tri-Rotor Experimental' },
        image: 'assets/img/Teku/Nolo.png'
    },

    // --- METAL MANIACS ---
    {
        id: 'spinebuster',
        name: 'SPINE BUSTER',
        team: 'maniacs',
        teamLabel: 'METAL MANIACS',
        category: 'Mid-Engine V10 Supercharged',
        streetPower: '1,340 HP',
        trackPower: '1,550 HP',
        streetZero: '2.0s',
        trackZero: '1.6s',
        streetSpeed: '425 km/h',
        trackSpeed: '470 km/h',
        accelecharger: 'Lava Plow / Blindaje Térmico',
        description: 'Bloque motor expuesto de diez cilindros con compresor volumétrico y escapes laterales de inconel forjado.',
        parts: { chassis: 'Viga de Acero Reforzado', aero: 'Pala Frontal Anti-Impacto', core: 'Supercargador Roots de Alto Caudal' },
        image: 'assets/img/Maniaks/spinebuster.jpg'
    },
    {
        id: 'maniak1',
        name: 'HOLLOWBACK',
        team: 'maniacs',
        teamLabel: 'METAL MANIACS',
        category: 'Heavy Muscle V8 Big-Block',
        streetPower: '1,390 HP',
        trackPower: '1,610 HP',
        streetZero: '2.1s',
        trackZero: '1.7s',
        streetSpeed: '430 km/h',
        trackSpeed: '475 km/h',
        accelecharger: 'Impacto Cinético Reforzado',
        description: 'Chasis de acero templado con motor atmosférico de alto desplazamiento y torque brutal desde bajas revoluciones.',
        parts: { chassis: 'Estructura de Alta Resistencia', aero: 'Toma de Aire Forzada', core: 'V8 Big-Block 9.2L' },
        image: 'assets/img/Maniaks/maniak1.jpg'
    },
    {
        id: 'maniak2',
        name: 'RIVITED',
        team: 'maniacs',
        teamLabel: 'METAL MANIACS',
        category: 'Supercharged Pony Interceptor',
        streetPower: '1,310 HP',
        trackPower: '1,520 HP',
        streetZero: '2.1s',
        trackZero: '1.7s',
        streetSpeed: '420 km/h',
        trackSpeed: '465 km/h',
        accelecharger: 'Tracción Off-Road Extrema',
        description: 'Carrocería remachada de aleación aeroespacial con admisión frontal directa y suspensión reforzada.',
        parts: { chassis: 'Paneles Remachados de Titanio', aero: 'Protector Inferior de Skiff', core: 'V8 Compresor Volumétrico' },
        image: 'assets/img/Maniaks/maniak2.jpg'
    },
    {
        id: 'maniak3',
        name: 'ROLLIN THUNDER',
        team: 'maniacs',
        teamLabel: 'METAL MANIACS',
        category: 'Armored Heavy SUV Spec',
        streetPower: '1,420 HP',
        trackPower: '1,650 HP',
        streetZero: '2.3s',
        trackZero: '1.9s',
        streetSpeed: '395 km/h',
        trackSpeed: '435 km/h',
        accelecharger: 'Estabilizador Giroscópico',
        description: 'Plataforma pesada de tracción total diseñada para atravesar terrenos hostiles sin pérdida de inercia.',
        parts: { chassis: 'Blindaje Multinivel', aero: 'Estabilizadores Hidráulicos', core: 'Bloque Diesel Twin-Turbo V12' },
        image: 'assets/img/Maniaks/maniak3.jpg'
    },

    // --- SILENCERZ ---
    {
        id: 'silencer1',
        name: 'TECHNETIUM',
        team: 'silencerz',
        teamLabel: 'SILENCERZ LABS',
        category: 'Stealth Electromagnetic Prototype',
        streetPower: '1,290 HP',
        trackPower: '1,540 HP',
        streetZero: '1.9s',
        trackZero: '1.5s',
        streetSpeed: '450 km/h',
        trackSpeed: '495 km/h',
        accelecharger: 'Camuflaje Óptico & Levitación',
        description: 'Carrocería de polímero inteligente capaz de refractar la luz y propulsión silenciosa de flujo magnético.',
        parts: { chassis: 'Polímero de Refracción Óptica', aero: 'Generador de Campo Electromagnético', core: 'Núcleo de Fusión Silenciosa' },
        image: 'assets/img/Silencers/silencer1.jpg'
    },
    {
        id: 'silencer2',
        name: 'IRIDIUM',
        team: 'silencerz',
        teamLabel: 'SILENCERZ LABS',
        category: 'Split-Wheel Recon Interceptor',
        streetPower: '1,320 HP',
        trackPower: '1,580 HP',
        streetZero: '1.8s',
        trackZero: '1.4s',
        streetSpeed: '460 km/h',
        trackSpeed: '505 km/h',
        accelecharger: 'Desacoplamiento Modular',
        description: 'Estructura de titanio líquido con ruedas independientes de absorción magnética y cero firma térmica.',
        parts: { chassis: 'Aleación de Iridio Líquido', aero: 'Ruedas de Suspensión Magnética', core: 'Propulsor de Iones Directos' },
        image: 'assets/img/Silencers/silencer2.jpg'
    },
    {
        id: 'silencer3',
        name: 'COVELIGHT',
        team: 'silencerz',
        teamLabel: 'SILENCERZ LABS',
        category: 'Zero-Drag Photon Racer',
        streetPower: '1,350 HP',
        trackPower: '1,600 HP',
        streetZero: '1.8s',
        trackZero: '1.4s',
        streetSpeed: '465 km/h',
        trackSpeed: '510 km/h',
        accelecharger: 'Campo de Gravedad Invertida',
        description: 'Cabina blindada de espectro cerrado con aerodinámica adaptativa sin superficies de fricción.',
        parts: { chassis: 'Matriz de Absorción Fotónica', aero: 'Flujo Aerodinámico Cero-Drag', core: 'Reactor Cuántico Portátil' },
        image: 'assets/img/Silencers/silencer3.jpg'
    },

    // --- RACING DRONES ---
    {
        id: 'rd09',
        name: 'RD-09',
        team: 'drones',
        teamLabel: 'RACING DRONES',
        category: 'Autonomous Apex Interceptor',
        streetPower: '1,500 HP',
        trackPower: '1,750 HP',
        streetZero: '1.8s',
        trackZero: '1.4s',
        streetSpeed: '480 km/h',
        trackSpeed: '520 km/h',
        accelecharger: 'Núcleo Sintético de Energía Pura',
        description: 'Arquitectura monoplaza impulsada por inteligencia artificial y aerodinámica activa de carga vertical extrema.',
        parts: { chassis: 'Exoesqueleto Sintético Negro', aero: 'Carga Aerodinámica Variable por IA', core: 'Núcleo Energético Dron' },
        image: 'assets/img/Drones/rd09.jpg'
    },
    {
        id: 'dron1',
        name: 'RD-02',
        team: 'drones',
        teamLabel: 'RACING DRONES',
        category: 'Reconnaissance Strike Unit',
        streetPower: '1,380 HP',
        trackPower: '1,620 HP',
        streetZero: '1.9s',
        trackZero: '1.5s',
        streetSpeed: '465 km/h',
        trackSpeed: '505 km/h',
        accelecharger: 'Propulsión de Plasma Pulsado',
        description: 'Unidad táctica ligera de respuesta rápida equipada con sensores LiDAR de rastreo predictivo.',
        parts: { chassis: 'Compuesto de Grafeno Prensado', aero: 'Sensores LiDAR Integrados', core: 'Plasma Pulsado de Alta Frecuencia' },
        image: 'assets/img/Drones/dron1.jpg'
    },
    {
        id: 'dron2',
        name: 'RD-06',
        team: 'drones',
        teamLabel: 'RACING DRONES',
        category: 'Swarm Tactical Interceptor',
        streetPower: '1,410 HP',
        trackPower: '1,660 HP',
        streetZero: '1.9s',
        trackZero: '1.5s',
        streetSpeed: '470 km/h',
        trackSpeed: '510 km/h',
        accelecharger: 'Sincronización de Enjambre',
        description: 'Chasis exoesquelético de carbono negro mate diseñado para maniobras coordinadas a velocidades supersónicas.',
        parts: { chassis: 'Fibra de Carbono Mate Absorbente', aero: 'Estabilizadores de Enjambre', core: 'Generador Sincrónico IA' },
        image: 'assets/img/Drones/dron2.jpg'
    },
    {
        id: 'dron3',
        name: 'RD-08',
        team: 'drones',
        teamLabel: 'RACING DRONES',
        category: 'Heavy Assault Apex Unit',
        streetPower: '1,480 HP',
        trackPower: '1,720 HP',
        streetZero: '1.8s',
        trackZero: '1.4s',
        streetSpeed: '475 km/h',
        trackSpeed: '515 km/h',
        accelecharger: 'Sobrecarga de Núcleo Sintético',
        description: 'Vehículo blindado de asalto con doble turbina trasera y neumáticos compuestos de alta adherencia.',
        parts: { chassis: 'Aleación de Asalto Pesado', aero: 'Doble Turbina de Empuje Vectorial', core: 'Núcleo Sintético de Sobrecarga' },
        image: 'assets/img/Drones/dron3.jpg'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // 1. PRELOADER CINEMÁTICO CENTRADO
    const preloader = document.getElementById('preloader');
    const loaderBar = document.getElementById('loader-bar');
    const preloaderText = document.getElementById('preloader-text');
    let loadProgress = 0;

    const loadInterval = setInterval(() => {
        loadProgress += Math.floor(Math.random() * 18) + 8;
        if (loadProgress >= 100) {
            loadProgress = 100;
            clearInterval(loadInterval);
            setTimeout(() => {
                preloader.classList.add('fade-out');
            }, 350);
        }
        if (loaderBar) loaderBar.style.width = loadProgress + '%';
        if (preloaderText) preloaderText.innerText = `INICIALIZANDO NÚCLEO NITROX [${loadProgress}%]`;
    }, 50);

    // 2. TERMINAL DE TELEMETRÍA EN VIVO (LOGS ROTATIVOS)
    const terminalLog = document.getElementById('terminal-log');
    const terminalLogs = [
        "[TELEMETRÍA] Sincronizando satélite orbital Hangar Principal...",
        "[NITROX 2] Presión de hidrógeno estable en bloque central.",
        "[SEGURIDAD] Encriptación cuántica activa en pasarela.",
        "[CLIMA] Simulador de reinos operando al 100% de capacidad.",
        "[RED] Conexión establecida con Nodo Toluca Tech Park."
    ];
    let logIndex = 0;
    setInterval(() => {
        logIndex = (logIndex + 1) % terminalLogs.length;
        if (terminalLog) terminalLog.innerText = terminalLogs[logIndex];
    }, 5000);

    // 3. CURSOR HUD INTERACTIVO
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');

    window.addEventListener('mousemove', (e) => {
        if (cursorDot && cursorRing) {
            cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            cursorRing.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
    });

    function bindCursorHover() {
        document.querySelectorAll('a, button, input, select, .realm-card, .pilot-card').forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });
    }
    bindCursorHover();

    // Poblar selector del formulario de contacto con los 16 autos
    const prototypeSelect = document.getElementById('prototype-select');
    if (prototypeSelect) {
        prototypes.forEach(car => {
            const opt = document.createElement('option');
            opt.value = car.id;
            opt.textContent = `${car.name} (${car.teamLabel})`;
            prototypeSelect.appendChild(opt);
        });
    }

    // 4. SIMULADOR DE REINOS INTERACTIVO
    const realmCards = document.querySelectorAll('.realm-card');
    realmCards.forEach(card => {
        card.addEventListener('click', () => {
            realmCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            const realm = card.dataset.realm;
            document.body.setAttribute('data-realm', realm);
            if (terminalLog) terminalLog.innerText = `[SIMULADOR] Entorno cambiado a: ${card.querySelector('h3').innerText}`;
        });
    });

    // 5. CARRUSEL AUTOMÁTICO DE PASARELA FLUIDA (AUTO A AUTO)
    const fleetGrid = document.getElementById('fleet-grid');
    const carouselWrapper = document.getElementById('carousel-wrapper');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    const counterLabel = document.getElementById('carousel-counter');
    const progressFill = document.getElementById('carousel-progress');

    let currentList = [...prototypes];
    let currentIndex = 0;
    let autoplayTimer = null;
    let isPaused = false;

    function updateCarouselPosition() {
        if (!fleetGrid || currentList.length === 0) return;
        const card = fleetGrid.querySelector('.car-card');
        if (!card) return;

        const gap = 32;
        const stepWidth = card.offsetWidth + gap;
        const viewportWidth = fleetGrid.parentElement.offsetWidth;
        const visibleCards = Math.max(1, Math.floor(viewportWidth / stepWidth));
        const maxIndex = Math.max(0, currentList.length - visibleCards);

        if (currentIndex > maxIndex) currentIndex = 0;
        if (currentIndex < 0) currentIndex = maxIndex;

        fleetGrid.style.transform = `translateX(-${currentIndex * stepWidth}px)`;

        const activeNumber = String(currentIndex + 1).padStart(2, '0');
        const totalNumber = String(currentList.length).padStart(2, '0');
        if (counterLabel) counterLabel.innerText = `UNIDAD ${activeNumber} / ${totalNumber}`;
        if (progressFill) {
            const pct = maxIndex === 0 ? 100 : ((currentIndex + 1) / (maxIndex + 1)) * 100;
            progressFill.style.width = `${pct}%`;
        }
    }

    function nextSlide() {
        const card = fleetGrid.querySelector('.car-card');
        if (!card) return;
        const stepWidth = card.offsetWidth + 32;
        const visibleCards = Math.max(1, Math.floor(fleetGrid.parentElement.offsetWidth / stepWidth));
        const maxIndex = Math.max(0, currentList.length - visibleCards);

        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateCarouselPosition();
    }

    function prevSlide() {
        const card = fleetGrid.querySelector('.car-card');
        if (!card) return;
        const stepWidth = card.offsetWidth + 32;
        const visibleCards = Math.max(1, Math.floor(fleetGrid.parentElement.offsetWidth / stepWidth));
        const maxIndex = Math.max(0, currentList.length - visibleCards);

        currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
        updateCarouselPosition();
    }

    function startAutoplay() {
        stopAutoplay();
        autoplayTimer = setInterval(() => {
            if (!isPaused) nextSlide();
        }, 3500);
    }

    function stopAutoplay() {
        if (autoplayTimer) clearInterval(autoplayTimer);
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoplay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoplay(); });

    if (carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', () => { isPaused = true; });
        carouselWrapper.addEventListener('mouseleave', () => { isPaused = false; });
    }

    window.addEventListener('resize', updateCarouselPosition);

    function renderFleet(filter = 'all') {
        if (!fleetGrid) return;
        fleetGrid.innerHTML = '';
        currentList = filter === 'all' 
            ? [...prototypes] 
            : prototypes.filter(car => car.team === filter);
        currentIndex = 0;

        currentList.forEach(car => {
            const card = document.createElement('article');
            card.className = 'car-card';
            card.innerHTML = `
                <div class="car-img-wrapper" onmousemove="handleBlueprint(event, this)">
                    <span class="car-team-badge">${car.teamLabel}</span>
                    <img src="${car.image}" alt="${car.name}">
                    <div class="blueprint-overlay">DIAGRAMA TÉCNICO // WIREFRAME</div>
                </div>
                <div class="car-body">
                    <h3 class="car-name">${car.name}</h3>
                    <p class="car-category">${car.category}</p>
                    <div class="car-specs">
                        <div class="spec"><span>Potencia</span><strong>${car.streetPower}</strong></div>
                        <div class="spec"><span>0-100 km/h</span><strong>${car.streetZero}</strong></div>
                        <div class="spec"><span>Vel. Máx</span><strong>${car.streetSpeed}</strong></div>
                    </div>
                    <button class="card-btn" onclick="openCarModal('${car.id}')">Inspeccionar Telemetría</button>
                </div>
            `;
            fleetGrid.appendChild(card);
        });

        bindCursorHover();
        updateCarouselPosition();
        startAutoplay();
    }

    renderFleet();

    window.handleBlueprint = (e, wrapper) => {
        const rect = wrapper.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / wrapper.clientWidth) * 100;
        const y = ((e.clientY - rect.top) / wrapper.clientHeight) * 100;
        wrapper.style.setProperty('--x', `${x}%`);
        wrapper.style.setProperty('--y', `${y}%`);
    };

    // 6. CAMBIO DE ESCUDERÍA + SCRAMBLE TEXT
    const factionBtns = document.querySelectorAll('.faction-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const navbar = document.getElementById('navbar');
    const heroBg = document.querySelector('.hero-bg');

    const factionHeroImages = {
        teku: 'assets/img/Teku/deora2.jpg',
        maniacs: 'assets/img/Maniaks/spinebuster.jpg',
        silencerz: 'assets/img/Silencers/silencer1.jpg',
        drones: 'assets/img/Drones/rd09.jpg'
    };

    function scrambleText(element, originalText) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@&_";
        let iteration = 0;
        clearInterval(element.interval);
        
        element.interval = setInterval(() => {
            element.innerText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) return originalText[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");
            
            if (iteration >= originalText.length) {
                clearInterval(element.interval);
            }
            iteration += 1 / 3;
        }, 30);
    }

    factionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            factionBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const theme = btn.dataset.theme;
            document.body.setAttribute('data-faction', theme);
            
            if (factionHeroImages[theme] && heroBg) {
                heroBg.style.backgroundImage = `url('${factionHeroImages[theme]}')`;
            }

            const subtitle = document.querySelector('.hero-subtitle');
            const title = document.querySelector('.hero-title');
            if (subtitle) scrambleText(subtitle, "DIVISIÓN DE PROTOTIPOS DE ALTO RENDIMIENTO");
            if (title) scrambleText(title, "INGENIERÍA MÁS ALLÁ DEL LÍMITE");
        });
    });

    // 7. FILTROS DE CATÁLOGO
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderFleet(btn.dataset.filter);
        });
    });

    // 8. NAVBAR SCROLL EFFECT
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 9. MODAL INTERACTIVA DE TELEMETRÍA (CON INSPECCIÓN DE PARTES)
    const modal = document.getElementById('car-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');

    window.openCarModal = (id, currentMode = 'street') => {
        const car = prototypes.find(c => c.id === id);
        if (!car) return;

        isPaused = true;
        const isTrack = currentMode === 'track';
        const power = isTrack ? car.trackPower : car.streetPower;
        const zero = isTrack ? car.trackZero : car.streetZero;
        const speed = isTrack ? car.trackSpeed : car.streetSpeed;

        modalBody.innerHTML = `
            <img src="${car.image}" alt="${car.name}" style="width:100%; height:180px; object-fit:cover; margin-bottom:1rem; border:1px solid var(--border-subtle);">
            <span class="section-tag">${car.teamLabel}</span>
            <h2 class="section-title" style="margin-bottom: 0.5rem;">${car.name}</h2>
            <p style="color: var(--text-secondary); margin-bottom: 1.2rem; font-size: 0.9rem;">${car.description}</p>
            
            <div class="telemetry-modes">
                <button class="mode-btn ${!isTrack ? 'active' : ''}" onclick="openCarModal('${car.id}', 'street')">Modo Estándar (Calle)</button>
                <button class="mode-btn ${isTrack ? 'active' : ''}" onclick="openCarModal('${car.id}', 'track')">Modo Pista (Nitrox 2)</button>
            </div>

            <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-left: 3px solid var(--accent); margin-bottom: 1.2rem;">
                <strong style="font-family: var(--font-display); font-size: 0.75rem; display:block; color: var(--accent);">ACCELECHARGER EQUIPADO</strong>
                <span style="font-size: 0.9rem;">${car.accelecharger}</span>
            </div>

            <div class="parts-breakdown">
                <strong style="font-family: var(--font-display); font-size: 0.75rem; display:block; color: var(--accent); margin-bottom: 0.5rem;">INSPECCIÓN DE PARTES // INGENIERÍA</strong>
                <div class="part-item"><span>Chasis:</span> <strong>${car.parts.chassis}</strong></div>
                <div class="part-item"><span>Aerodinámica:</span> <strong>${car.parts.aero}</strong></div>
                <div class="part-item"><span>Propulsión:</span> <strong>${car.parts.core}</strong></div>
            </div>
            
            <div class="car-specs" style="margin-top: 1.5rem;">
                <div class="spec"><span>Potencia</span><strong>${power}</strong></div>
                <div class="spec"><span>0-100 km/h</span><strong>${zero}</strong></div>
                <div class="spec"><span>Vel. Máx</span><strong>${speed}</strong></div>
            </div>
        `;
        modal.classList.add('open');
        bindCursorHover();
    };

    function closeModal() {
        modal.classList.remove('open');
        isPaused = false;
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // 10. FORMULARIO
    const actualForm = document.getElementById('contact-form');
    if (actualForm) {
        actualForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Solicitud de telemetría enviada al Hangar Principal. Un ingeniero se pondrá en contacto.');
            e.target.reset();
        });
    }

    // 11. GSAP ANIMATIONS
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.gs-reveal', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.7
    });

    document.querySelectorAll('.stat-number').forEach(stat => {
        const target = parseFloat(stat.dataset.target);
        gsap.to(stat, {
            innerText: target,
            duration: 2,
            snap: { innerText: target % 1 === 0 ? 1 : 0.1 },
            scrollTrigger: {
                trigger: stat,
                start: 'top 85%'
            }
        });
    });
});