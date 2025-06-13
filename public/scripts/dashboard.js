document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const activeTabInput = document.getElementById('active-tab');

  // Set initial active tab styles
  const initialTab = activeTabInput.value;
  tabButtons.forEach((button) => {
    if (button.getAttribute('data-tab') === initialTab) {
      button.classList.add('border-b-2', 'border-blue-500', 'text-blue-500');
    } else {
      button.classList.remove('border-b-2', 'border-blue-500', 'text-blue-500');
      button.classList.add('text-gray-700');
    }
  });

  // Main tab switching with page reload
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      tabButtons.forEach((btn) => {
        btn.classList.remove('border-b-2', 'border-blue-500', 'text-blue-500');
        btn.classList.add('text-gray-700');
      });

      button.classList.add('border-b-2', 'border-blue-500', 'text-blue-500');

      const tabId = button.getAttribute('data-tab');
      activeTabInput.value = tabId;
      // Trigger page reload with query param at /dashboard
      window.location.href = `/dashboard?tab=${tabId}`;
    });
  });

  // Initialize sub-tabs for Usuários tab
  function initializeSubTabs() {
    if (document.getElementById('user-content')) {
      const subTabLinks = document.querySelectorAll('.tab-link');
      subTabLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          switchTab(event, link.getAttribute('onclick').match(/'([^']+)'/)[1]);
        });
      });
    }
  }

  // Sub-tab switching function
  window.switchTab = function (event, tabId) {
    event.preventDefault();
    document.querySelectorAll('.tab-link').forEach((link) => {
      link.classList.remove('active', 'border-blue-500', 'text-blue-600');
      link.classList.add('border-transparent');
    });
    document.querySelectorAll('.tab-content').forEach((content) => {
      content.classList.add('hidden');
    });
    event.target.classList.add('active', 'border-blue-500', 'text-blue-600');
    document.getElementById(tabId).classList.remove('hidden');
  };

  // Filter users
  window.filterUsers = function (searchTerm) {
    const userList = document.getElementById('user-list');
    const users = userList.getElementsByTagName('li');
    searchTerm = searchTerm.toLowerCase();
    for (let user of users) {
      const userName = user.textContent.toLowerCase();
      if (userName.includes(searchTerm)) {
        user.style.display = 'flex';
      } else {
        user.style.display = 'none';
      }
    }
  };

  // Show user details
  window.showUserDetails = async function (userStr) {
    window.currentUser = JSON.parse(userStr);
    const detailsSection = document.getElementById('user-details');
    const defaultMessage = document.getElementById('default-message');
    const userContent = document.getElementById('user-content');

    defaultMessage.classList.add('hidden');
    userContent.classList.remove('hidden');

    document.getElementById('user-name').textContent = currentUser.nome;
    document.getElementById('user-email').textContent = currentUser.email;
    document.getElementById('user-score').textContent = currentUser.score;

    await loadUserTrails();
    await loadUserCertificates();
    await loadUserNotifications();
    await loadUserProgress();

    document.querySelector('.tab-link').click();
  };

  // Load user trails
  window.loadUserTrails = async function () {
    try {
      const response = await fetch(`/api/trail/user/${currentUser.id}`);
      if (!response.ok) throw new Error('Erro ao buscar trilhas');

      const data = await response.json();
      const assignedTrails = document.getElementById('assigned-trails');
      const completedTrails = document.getElementById('completed-trails');

      assignedTrails.innerHTML = '';
      completedTrails.innerHTML = '';

      if (data.assigned_trails && data.assigned_trails.length > 0) {
        data.assigned_trails.forEach((trail) => {
          const trailElement = createTrailElement(trail, false);
          assignedTrails.appendChild(trailElement);
        });
      } else {
        assignedTrails.innerHTML = '<p class="text-gray-500">Nenhuma trilha atribuída</p>';
      }

      const completedData = data.filter((trail) => trail.completed);
      if (completedData.length > 0) {
        completedData.forEach((trail) => {
          const trailElement = createTrailElement(trail, true);
          completedTrails.appendChild(trailElement);
        });
      } else {
        completedTrails.innerHTML = '<p class="text-gray-500">Nenhuma trilha concluída</p>';
      }
    } catch (error) {
      console.error('Erro ao carregar trilhas:', error);
      document.getElementById('assigned-trails').innerHTML =
        '<p class="text-red-500">Erro ao carregar trilhas</p>';
    }
  };

  // Create trail element
  window.createTrailElement = function (trail, isCompleted) {
    const element = document.createElement('div');
    element.className = 'bg-gray-50 p-3 rounded-lg';
    const statusBadge = isCompleted
      ? '<span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-2">Concluída</span>'
      : '<span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mr-2">Em andamento</span>';
    const progressBar = isCompleted
      ? '<div class="w-full bg-gray-200 rounded-full h-2.5 mt-2"><div class="bg-green-600 h-2.5 rounded-full" style="width: 100%"></div></div>'
      : `<div class="w-full bg-gray-200 rounded-full h-2.5 mt-2"><div class="bg-blue-600 h-2.5 rounded-full" style="width: ${
          trail.progress || 0
        }%"></div></div>`;
    element.innerHTML = `
      <div class="flex justify-between items-start">
        <div>
          <h4 class="font-medium">${trail.title}</h4>
          ${statusBadge}
          ${
            trail.deadline
              ? `<span class="text-xs text-gray-500">Prazo: ${new Date(
                  trail.deadline,
                ).toLocaleDateString()}</span>`
              : ''
          }
        </div>
        <span class="text-sm">${trail.progress || 0}%</span>
      </div>
      ${progressBar}
    `;
    return element;
  };

  // Load user certificates
  window.loadUserCertificates = async function () {
    try {
      const response = await fetch(`/api/certificate/user/${currentUser.id}`);
      const certificatesList = document.getElementById('certificates-list');
      certificatesList.innerHTML = '';

      if (response.ok) {
        const data = await response.json();
        if (data.certificates && data.certificates.length > 0) {
          data.certificates.forEach((cert) => {
            const certElement = document.createElement('div');
            certElement.className = 'bg-white border rounded-lg p-4 shadow-sm';
            certElement.innerHTML = `
              <div class="flex items-center mb-3">
                <div class="bg-blue-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 class="font-medium">${cert.title}</h4>
              </div>
              <p class="text-sm text-gray-600 mb-3">Concluído em: ${new Date(
                cert.completed_at,
              ).toLocaleDateString()}</p>
              <button class="text-blue-600 text-sm font-medium hover:underline" onclick="downloadCertificate('${
                cert.id
              }')">
                Baixar Certificado
              </button>
            `;
            certificatesList.appendChild(certElement);
          });
        } else {
          certificatesList.innerHTML =
            '<p class="text-gray-500 col-span-3">Nenhum certificado encontrado</p>';
        }
      } else {
        certificatesList.innerHTML =
          response.status === 404
            ? '<p class="text-gray-500 col-span-3">Nenhum certificado encontrado</p>'
            : '<p class="text-red-500 col-span-3">Erro ao carregar certificados</p>';
      }
    } catch (error) {
      console.error('Erro ao carregar certificados:', error);
    }
  };

  // Load user notifications
  window.loadUserNotifications = async function () {
    try {
      const response = await fetch(`/api/notification/user/${currentUser.id}`);
      const notificationsList = document.getElementById('notifications-list');
      notificationsList.innerHTML = '';

      if (response.ok) {
        const data = await response.json();
        if (data.notifications && data.notifications.length > 0) {
          data.notifications.forEach((notification) => {
            const notifElement = document.createElement('div');
            notifElement.className = 'bg-white border rounded-lg p-4 shadow-sm';
            notifElement.innerHTML = `
              <div class="flex justify-between">
                <h4 class="font-medium">${notification.title}</h4>
                <span class="text-xs text-gray-500">${new Date(
                  notification.created_at,
                ).toLocaleDateString()}</span>
              </div>
              <p class="text-sm text-gray-600 mt-1">${notification.description}</p>
            `;
            notificationsList.appendChild(notifElement);
          });
        } else {
          notificationsList.innerHTML =
            '<p class="text-gray-500">Nenhuma notificação encontrada</p>';
        }
      } else {
        notificationsList.innerHTML = '<p class="text-red-500">Erro ao carregar notificações</p>';
      }
    } catch (error) {
      console.error('Erro ao carregar notificações:', error);
    }
  };

  // Load user progress
  window.loadUserProgress = async function () {
    try {
      const progressData = {
        labels: ['Trilha 1', 'Trilha 2', 'Trilha 3', 'Trilha 4', 'Trilha 5'],
        progress: [85, 60, 45, 90, 30],
      };

      const ctx = document.getElementById('progressChart').getContext('2d');
      if (window.progressChart) {
        window.progressChart.destroy();
      }
      window.progressChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: progressData.labels,
          datasets: [
            {
              label: 'Progresso (%)',
              data: progressData.progress,
              backgroundColor: [
                'rgba(59, 130, 246, 0.7)',
                'rgba(59, 130, 246, 0.7)',
                'rgba(59, 130, 246, 0.7)',
                'rgba(59, 130, 246, 0.7)',
                'rgba(59, 130, 246, 0.7)',
              ],
              borderColor: [
                'rgba(59, 130, 246, 1)',
                'rgba(59, 130, 246, 1)',
                'rgba(59, 130, 246, 1)',
                'rgba(59, 130, 246, 1)',
                'rgba(59, 130, 246, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: { y: { beginAtZero: true, max: 100 } },
        },
      });

      const improvementAreas = [
        { name: 'Configuração de máquinas', progress: 30 },
        { name: 'Análise de dados', progress: 45 },
        { name: 'Relatórios personalizados', progress: 25 },
      ];
      const improvementContainer = document.getElementById('improvement-areas');
      improvementContainer.innerHTML = '';
      improvementAreas.forEach((area) => {
        const areaElement = document.createElement('div');
        areaElement.className = 'mb-2';
        areaElement.innerHTML = `
          <div class="flex justify-between mb-1">
            <span class="text-sm font-medium">${area.name}</span>
            <span class="text-sm">${area.progress}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-yellow-500 h-2 rounded-full" style="width: ${area.progress}%"></div>
          </div>
        `;
        improvementContainer.appendChild(areaElement);
      });

      const recentPerformance = [
        { trail: 'Introdução ao FieldView', score: 85, date: '2025-05-15' },
        { trail: 'Configuração Básica', score: 72, date: '2025-05-10' },
        { trail: 'Análise de Dados', score: 68, date: '2025-05-05' },
      ];
      const performanceContainer = document.getElementById('recent-performance');
      performanceContainer.innerHTML = '';
      recentPerformance.forEach((perf) => {
        const perfElement = document.createElement('div');
        perfElement.className = 'flex justify-between items-center p-2 bg-gray-50 rounded';
        perfElement.innerHTML = `
          <div>
            <h4 class="text-sm font-medium">${perf.trail}</h4>
            <span class="text-xs text-gray-500">${new Date(perf.date).toLocaleDateString()}</span>
          </div>
          <span class="text-sm font-semibold ${
            perf.score >= 70 ? 'text-green-600' : 'text-yellow-600'
          }">
            ${perf.score}%
          </span>
        `;
        performanceContainer.appendChild(perfElement);
      });
    } catch (error) {
      console.error('Erro ao carregar progresso:', error);
    }
  };

  // Admin actions
  window.assignTrail = function () {
    alert(`Atribuir trilha para ${currentUser.nome}`);
  };

  window.sendNotification = function () {
    alert(`Enviar notificação para ${currentUser.nome}`);
  };

  window.downloadCertificate = function (certId) {
    alert(`Baixar certificado ${certId}`);
  };

  // Initialize sub-tabs for the default tab if it's Usuários
  if (activeTabInput.value === 'usuarios') {
    initializeSubTabs();
  }
});

// Global variables
window.currentUser = null;
window.progressChart = null;
