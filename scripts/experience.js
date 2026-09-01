 // Remplace ce tableau par tes propres expériences
  const jobs = [
    {
      company: "ESTLC",
      role: "Développeur backend - Stage",
      dates: "Mai 2026 - Aout 2026",
      bullets: [
        "Mis en place de plus de 15 end points sécurisés pour l'API REST de l'application",
        "Implémentation de la gestion des utilisateurs et de l'authentification via JWT",
        "Implémentation des notifications en temps réel via WebSocket pour améliorer l'expérience utilisateur"
      ]
    },
    {
      company: "Digiplus Consulting",
      role: "Développeur Backend - stage",
      dates: "Oct 2024 - Mars 2025",
      bullets: [
        "Création des end point pour l'API REST d'un SaaS de gestion de bots IA",
        "Implémentation de la logique de paiement stripe et paypal pour l'abonnement des utilisateurs",
        "Mise en place des mésures de sécurité via l'authentification JWT",
      ]
    },
    {
      company: "2Tcorp",
      role: "Développeur front-end mobile Flutter - Stage",
      dates: "Mai 2023 — Sept 2023",
      bullets: [
        "Conception des maquettes et de l'interface utilisateur de l'application mobile",
        "intégration des maquettes en Flutter pour créer une expérience utilisateur fluide et réactive",
        "Mise en place de l'authentification et de la gestion des utilisateurs via L'API disponible",
      ]
    }
  ];
  (function initExperienceSection() {
    const tabList = document.querySelector('.tab-list');
    const panel = document.querySelector('.tab-panel');
    let activeIndex = 0;
 
    function renderTabs() {
      tabList.innerHTML = '';
      jobs.forEach((job, i) => {
        const btn = document.createElement('button');
        btn.className = 'tab-button' + (i === activeIndex ? ' active' : '');
        btn.textContent = job.company;
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', i === activeIndex);
        btn.addEventListener('click', () => {
          activeIndex = i;
          renderTabs();
          renderPanel();
        });
        tabList.appendChild(btn);
      });
    }
 
    function renderPanel() {
      const job = jobs[activeIndex];
      panel.innerHTML = `
        <h3>${job.role} <span class="job-company">@ ${job.company}</span></h3>
        <p class="job-dates">${job.dates}</p>
        <ul>
          ${job.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      `;
    }
 
    renderTabs();
    renderPanel();
  })();