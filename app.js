// ===== 장비 데이터 =====
const EQUIPMENT = [
  // 유산소 머신
  {
    id: 'running-machine',
    name: 'Running Machine',
    labelKo: '런닝머신',
    category: 'cardio',
    units: 8,
    youtubeSearch: 'treadmill+running+machine+how+to+use+gym',
    youtubeId: 'njeZ29umqVE'
  },
  {
    id: 'ascent-trainer',
    name: 'Ascent Trainer',
    labelKo: '어센트 트레이너',
    category: 'cardio',
    units: 2,
    youtubeSearch: 'ascent+trainer+how+to+use',
    youtubeId: 'y2dRMOXbPMk'
  },
  {
    id: 'recumbent-bike',
    name: 'Recumbent Bike',
    labelKo: '리컴번트 바이크',
    category: 'cardio',
    units: 2,
    youtubeSearch: 'recumbent+bike+how+to+use+gym',
    youtubeId: 'XO0mMISa2dM'
  },
  {
    id: 'spinning-bike',
    name: 'Spinning Bike',
    labelKo: '스피닝 바이크',
    category: 'cardio',
    units: 1,
    youtubeSearch: 'spinning+bike+how+to+use+beginner',
    youtubeId: '4TMm-GtfS3I'
  },
  // 근력 머신
  {
    id: 'chest-press',
    name: 'Chest Press',
    labelKo: '체스트 프레스',
    category: 'strength',
    units: 1,
    youtubeSearch: 'machine+chest+press+how+to+form',
    youtubeId: 'xUm0BiZfWoC'
  },
  {
    id: 'shoulder-press',
    name: 'Shoulder Press',
    labelKo: '숄더 프레스',
    category: 'strength',
    units: 1,
    youtubeSearch: 'machine+shoulder+press+how+to+form',
    youtubeId: 'Wqq43dKoHQo'
  },
  {
    id: 'chest-rear-delt',
    name: 'Chest & Rear Delt',
    labelKo: '체스트 & 리어 델트',
    category: 'strength',
    units: 1,
    youtubeSearch: 'pec+deck+rear+delt+machine+how+to',
    youtubeId: 'D2t3pWEfZ6M'
  },
  {
    id: 'glute',
    name: 'Glute',
    labelKo: '글루트 (엉덩이)',
    category: 'strength',
    units: 1,
    youtubeSearch: 'glute+machine+how+to+use+gym',
    youtubeId: 'sqDGkIEen2Q'
  },
  {
    id: 'hip-abductor-adductor',
    name: 'Hip Abductor/Adductor',
    labelKo: '힙 어브덕터/어덕터',
    category: 'strength',
    units: 1,
    youtubeSearch: 'hip+abductor+adductor+machine+how+to',
    youtubeId: 'MpMjHEZMwVE'
  },
  {
    id: 'leg-press',
    name: 'Leg Press',
    labelKo: '레그 프레스',
    category: 'strength',
    units: 1,
    youtubeSearch: 'leg+press+machine+how+to+form',
    youtubeId: 'IZxyjW7MPJQ'
  },
  {
    id: 'leg-curl',
    name: 'Leg Curl',
    labelKo: '레그 컬',
    category: 'strength',
    units: 1,
    youtubeSearch: 'lying+leg+curl+machine+how+to',
    youtubeId: '1Tq3QdYUuHs'
  },
  {
    id: 'leg-extension',
    name: 'Leg Extension',
    labelKo: '레그 익스텐션',
    category: 'strength',
    units: 1,
    youtubeSearch: 'leg+extension+machine+how+to+form',
    youtubeId: 'YyvSfVjQeL0'
  },
  {
    id: 'abdominal-crunch',
    name: 'Abdominal Crunch',
    labelKo: '복근 크런치 머신',
    category: 'strength',
    units: 1,
    youtubeSearch: 'ab+crunch+machine+how+to+form',
    youtubeId: '2fbujeH3F0E'
  },
  {
    id: 'ab-bench',
    name: 'Ab Bench',
    labelKo: '복근대',
    category: 'strength',
    units: 1,
    youtubeSearch: 'ab+bench+sit+up+bench+how+to',
    youtubeId: 'sIqBHnSGnEw'
  },
  {
    id: 'rotary-torso',
    name: 'Rotary Torso',
    labelKo: '로터리 토르소',
    category: 'strength',
    units: 1,
    youtubeSearch: 'rotary+torso+machine+how+to',
    youtubeId: 'KesUQkfmTRE'
  },
  {
    id: 'back-extension',
    name: 'Back Extension',
    labelKo: '백 익스텐션',
    category: 'strength',
    units: 1,
    youtubeSearch: 'back+extension+machine+how+to+form',
    youtubeId: 'ph3pddpKzzw'
  },
  {
    id: 'low-row',
    name: 'Low Row',
    labelKo: '로우 로우',
    category: 'strength',
    units: 1,
    youtubeSearch: 'seated+low+row+machine+how+to',
    youtubeId: 'UCXxvVItLoM'
  },
  {
    id: 'lat-pulldown',
    name: 'Lat Pulldown',
    labelKo: '랫 풀다운',
    category: 'strength',
    units: 1,
    youtubeSearch: 'lat+pulldown+machine+how+to+form',
    youtubeId: 'CAwf7n6Luuc'
  },
  {
    id: 'back-bench',
    name: 'Back Bench',
    labelKo: '등근대',
    category: 'strength',
    units: 1,
    youtubeSearch: 'roman+chair+back+bench+how+to',
    youtubeId: 'BbhEayKBXs0'
  }
];

// ===== 상태 관리 =====
let currentUser = localStorage.getItem('joyfit_currentUser') || 'husband';
let currentModalEquipment = null;

// ===== 유틸리티 =====
function getTodayStr() {
  const d = new Date();
  return d.getFullYear() + '-' +
    String(d.getMonth() + 1).padStart(2, '0') + '-' +
    String(d.getDate()).padStart(2, '0');
}

function loadLogs() {
  try {
    return JSON.parse(localStorage.getItem('joyfit_logs')) || [];
  } catch {
    return [];
  }
}

function saveLogs(logs) {
  localStorage.setItem('joyfit_logs', JSON.stringify(logs));
}

function getEquipment(id) {
  return EQUIPMENT.find(e => e.id === id);
}

function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2000);
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return `${d.getMonth() + 1}/${d.getDate()} (${days[d.getDay()]})`;
}

// ===== 사용자 전환 =====
function switchUser(user) {
  currentUser = user;
  localStorage.setItem('joyfit_currentUser', user);

  document.querySelectorAll('.user-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.user === user);
  });

  document.body.classList.toggle('wife-mode', user === 'wife');

  // 현재 활성 탭 다시 렌더링
  const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
  if (activeTab === 'today') renderTodayTab();
  if (activeTab === 'history') renderHistoryTab();
}

// ===== 탭 전환 =====
function switchTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  document.getElementById('tab-' + tabName).classList.add('active');
  document.querySelector(`.tab-btn[data-tab="${tabName}"]`).classList.add('active');

  if (tabName === 'today') renderTodayTab();
  if (tabName === 'history') renderHistoryTab();
}

// ===== 탭1: 운동기구 목록 렌더링 =====
function renderEquipmentList() {
  const cardioList = document.getElementById('cardio-list');
  const strengthList = document.getElementById('strength-list');

  cardioList.innerHTML = '';
  strengthList.innerHTML = '';

  EQUIPMENT.forEach(eq => {
    const card = document.createElement('div');
    card.className = 'equipment-card';
    card.onclick = () => openEquipmentModal(eq.id);
    card.innerHTML = `
      <div class="eq-name">${eq.name}</div>
      <div class="eq-label">${eq.labelKo}</div>
      <div class="eq-bottom">
        <span class="eq-units">${eq.units}대</span>
        <span class="eq-video-icon">▶️</span>
      </div>
    `;

    if (eq.category === 'cardio') {
      cardioList.appendChild(card);
    } else {
      strengthList.appendChild(card);
    }
  });
}

// ===== 장비 모달 =====
function openEquipmentModal(equipmentId) {
  const eq = getEquipment(equipmentId);
  if (!eq) return;

  currentModalEquipment = eq;

  document.getElementById('modal-title').textContent = eq.name;
  document.getElementById('modal-subtitle').textContent = eq.labelKo + ' · ' + eq.units + '대';

  // YouTube 동영상
  const videoDiv = document.getElementById('modal-video');
  const videoUrl = `https://www.youtube.com/embed/${eq.youtubeId}`;
  const searchUrl = `https://www.youtube.com/results?search_query=${eq.youtubeSearch}`;
  videoDiv.innerHTML = `
    <iframe src="${videoUrl}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      onerror="this.parentElement.innerHTML='<a href=\\'${searchUrl}\\' target=\\'_blank\\' style=\\'color:white;text-align:center;display:block;padding-top:25%\\'>YouTube에서 검색하기</a>'">
    </iframe>
  `;

  // 날짜 설정
  document.getElementById('modal-date').value = getTodayStr();

  // 기존 기록 로드 또는 빈 세트
  loadModalSets();

  document.getElementById('equipment-modal').classList.add('open');
}

function loadModalSets() {
  const date = document.getElementById('modal-date').value;
  const logs = loadLogs();
  const existing = logs.find(l =>
    l.date === date && l.equipmentId === currentModalEquipment.id && l.user === currentUser
  );

  const setsDiv = document.getElementById('modal-sets');
  setsDiv.innerHTML = '';

  if (currentModalEquipment.category === 'cardio') {
    // 유산소: 시간 + 거리
    if (existing && existing.sets.length > 0) {
      existing.sets.forEach((s, i) => addCardioSetRow(s.duration || '', s.distance || '', s.speed || ''));
    } else {
      addCardioSetRow('', '', '');
    }
  } else {
    // 근력: 무게 + 횟수
    if (existing && existing.sets.length > 0) {
      existing.sets.forEach((s, i) => addStrengthSetRow(s.weight || '', s.reps || ''));
    } else {
      addStrengthSetRow('', '');
      addStrengthSetRow('', '');
      addStrengthSetRow('', '');
    }
  }
}

function addStrengthSetRow(weight, reps) {
  const setsDiv = document.getElementById('modal-sets');
  const idx = setsDiv.children.length + 1;
  const row = document.createElement('div');
  row.className = 'set-row';
  row.innerHTML = `
    <span class="set-label">세트 ${idx}</span>
    <input type="number" placeholder="무게" value="${weight}" class="input-weight" inputmode="decimal" step="0.5">
    <span class="set-unit">kg</span>
    <input type="number" placeholder="횟수" value="${reps}" class="input-reps" inputmode="numeric">
    <span class="set-unit">회</span>
    <button class="set-delete" onclick="removeSetRow(this)">&times;</button>
  `;
  setsDiv.appendChild(row);
}

function addCardioSetRow(duration, distance, speed) {
  const setsDiv = document.getElementById('modal-sets');
  const row = document.createElement('div');
  row.className = 'set-row';
  row.innerHTML = `
    <input type="number" placeholder="시간" value="${duration}" class="input-duration" inputmode="numeric">
    <span class="set-unit">분</span>
    <input type="number" placeholder="거리" value="${distance}" class="input-distance" inputmode="decimal" step="0.1">
    <span class="set-unit">km</span>
    <input type="number" placeholder="속도" value="${speed}" class="input-speed" inputmode="decimal" step="0.1">
    <span class="set-unit">km/h</span>
    <button class="set-delete" onclick="removeSetRow(this)">&times;</button>
  `;
  setsDiv.appendChild(row);
}

function addSetRow() {
  if (!currentModalEquipment) return;
  if (currentModalEquipment.category === 'cardio') {
    addCardioSetRow('', '', '');
  } else {
    addStrengthSetRow('', '');
  }
}

function removeSetRow(btn) {
  const row = btn.closest('.set-row');
  row.remove();
  // 세트 번호 업데이트
  const setsDiv = document.getElementById('modal-sets');
  setsDiv.querySelectorAll('.set-row').forEach((r, i) => {
    const label = r.querySelector('.set-label');
    if (label) label.textContent = `세트 ${i + 1}`;
  });
}

function saveSets() {
  if (!currentModalEquipment) return;

  const date = document.getElementById('modal-date').value;
  const setsDiv = document.getElementById('modal-sets');
  const rows = setsDiv.querySelectorAll('.set-row');
  const sets = [];

  if (currentModalEquipment.category === 'cardio') {
    rows.forEach(row => {
      const duration = parseFloat(row.querySelector('.input-duration')?.value) || 0;
      const distance = parseFloat(row.querySelector('.input-distance')?.value) || 0;
      const speed = parseFloat(row.querySelector('.input-speed')?.value) || 0;
      if (duration > 0 || distance > 0) {
        sets.push({ duration, distance, speed });
      }
    });
  } else {
    rows.forEach(row => {
      const weight = parseFloat(row.querySelector('.input-weight')?.value) || 0;
      const reps = parseInt(row.querySelector('.input-reps')?.value) || 0;
      if (weight > 0 || reps > 0) {
        sets.push({ weight, reps });
      }
    });
  }

  if (sets.length === 0) {
    showToast('기록할 세트를 입력해주세요');
    return;
  }

  const logs = loadLogs();
  const existingIdx = logs.findIndex(l =>
    l.date === date && l.equipmentId === currentModalEquipment.id && l.user === currentUser
  );

  const entry = {
    date: date,
    equipmentId: currentModalEquipment.id,
    user: currentUser,
    sets: sets,
    updatedAt: new Date().toISOString()
  };

  if (existingIdx >= 0) {
    logs[existingIdx] = entry;
  } else {
    logs.push(entry);
  }

  saveLogs(logs);
  showToast('저장되었습니다!');
  closeModal();

  // 오늘 탭이면 다시 렌더링
  const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
  if (activeTab === 'today') renderTodayTab();
}

function closeModal() {
  document.getElementById('equipment-modal').classList.remove('open');
  // 동영상 정지
  document.getElementById('modal-video').innerHTML = '';
  currentModalEquipment = null;
}

function closeModalOverlay(event) {
  if (event.target === event.currentTarget) closeModal();
}

// 모달 날짜 변경 시 기록 다시 로드
document.getElementById('modal-date').addEventListener('change', function() {
  if (currentModalEquipment) loadModalSets();
});

// ===== 탭2: 오늘의 기록 =====
function renderTodayTab() {
  const dateInput = document.getElementById('log-date');
  if (!dateInput.value) dateInput.value = getTodayStr();

  const date = dateInput.value;
  const logs = loadLogs().filter(l => l.date === date && l.user === currentUser);
  const summaryDiv = document.getElementById('today-summary');

  if (logs.length === 0) {
    summaryDiv.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📋</div>
        <p>아직 기록이 없습니다</p>
        <p>아래 버튼을 눌러 운동을 추가하세요</p>
      </div>
    `;
    return;
  }

  summaryDiv.innerHTML = logs.map(log => {
    const eq = getEquipment(log.equipmentId);
    if (!eq) return '';

    let setsHtml = '';
    if (eq.category === 'cardio') {
      setsHtml = log.sets.map((s, i) =>
        `<div class="set-row-display">
          <span>${s.duration}분 / ${s.distance}km</span>
          <span>${s.speed ? s.speed + 'km/h' : ''}</span>
        </div>`
      ).join('');
    } else {
      setsHtml = log.sets.map((s, i) =>
        `<div class="set-row-display">
          <span>세트 ${i + 1}</span>
          <span>${s.weight}kg × ${s.reps}회</span>
        </div>`
      ).join('');
    }

    return `
      <div class="today-card">
        <div class="tc-header">
          <div>
            <div class="tc-title">${eq.name}</div>
            <div class="tc-subtitle">${eq.labelKo}</div>
          </div>
          <button class="tc-add-btn" onclick="openEquipmentModal('${eq.id}')">+</button>
        </div>
        ${setsHtml}
      </div>
    `;
  }).join('');
}

// 날짜 변경 이벤트
document.getElementById('log-date').addEventListener('change', renderTodayTab);

// ===== 장비 선택 모달 =====
function showEquipmentPicker() {
  const pickerList = document.getElementById('picker-list');
  let html = '';

  html += '<div class="picker-category-title">🏃 유산소 머신</div>';
  EQUIPMENT.filter(e => e.category === 'cardio').forEach(eq => {
    html += `
      <div class="picker-item" onclick="selectFromPicker('${eq.id}')">
        <div>
          <div class="pi-name">${eq.name}</div>
          <div class="pi-label">${eq.labelKo}</div>
        </div>
      </div>
    `;
  });

  html += '<div class="picker-category-title">💪 근력 머신</div>';
  EQUIPMENT.filter(e => e.category === 'strength').forEach(eq => {
    html += `
      <div class="picker-item" onclick="selectFromPicker('${eq.id}')">
        <div>
          <div class="pi-name">${eq.name}</div>
          <div class="pi-label">${eq.labelKo}</div>
        </div>
      </div>
    `;
  });

  pickerList.innerHTML = html;
  document.getElementById('picker-modal').classList.add('open');
}

function selectFromPicker(equipmentId) {
  closePicker();
  openEquipmentModal(equipmentId);
}

function closePicker() {
  document.getElementById('picker-modal').classList.remove('open');
}

function closePickerOverlay(event) {
  if (event.target === event.currentTarget) closePicker();
}

// ===== 탭3: 기록 보기 =====
function renderHistoryTab() {
  const startDate = document.getElementById('history-start').value;
  const endDate = document.getElementById('history-end').value;
  const equipFilter = document.getElementById('history-equipment-filter').value;
  const showBoth = document.getElementById('history-show-both').checked;

  let logs = loadLogs();

  // 사용자 필터
  if (!showBoth) {
    logs = logs.filter(l => l.user === currentUser);
  }

  // 날짜 필터
  if (startDate) logs = logs.filter(l => l.date >= startDate);
  if (endDate) logs = logs.filter(l => l.date <= endDate);

  // 장비 필터
  if (equipFilter !== 'all') {
    logs = logs.filter(l => l.equipmentId === equipFilter);
  }

  // 날짜별 그룹핑 (최신순)
  logs.sort((a, b) => b.date.localeCompare(a.date) || a.equipmentId.localeCompare(b.equipmentId));

  const grouped = {};
  logs.forEach(l => {
    if (!grouped[l.date]) grouped[l.date] = [];
    grouped[l.date].push(l);
  });

  const listDiv = document.getElementById('history-list');

  if (Object.keys(grouped).length === 0) {
    listDiv.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📊</div>
        <p>기록이 없습니다</p>
      </div>
    `;
    return;
  }

  let html = '';
  Object.keys(grouped).sort().reverse().forEach(date => {
    html += `<div class="history-day-group">`;
    html += `<div class="history-day-title">${formatDate(date)}</div>`;

    grouped[date].forEach(log => {
      const eq = getEquipment(log.equipmentId);
      if (!eq) return;

      const userLabel = log.user === 'husband' ? '🧔 남편' : '👩 아내';
      const userClass = log.user;

      let setsHtml = '';
      if (eq.category === 'cardio') {
        setsHtml = log.sets.map(s =>
          `<div class="set-row-display">
            <span>${s.duration}분 / ${s.distance}km</span>
            <span>${s.speed ? s.speed + 'km/h' : ''}</span>
          </div>`
        ).join('');
      } else {
        setsHtml = log.sets.map((s, i) =>
          `<div class="set-row-display">
            <span>세트 ${i + 1}</span>
            <span>${s.weight}kg × ${s.reps}회</span>
          </div>`
        ).join('');
      }

      html += `
        <div class="history-item">
          <div class="hi-header">
            <span class="hi-name">${eq.name} <small style="color:#6E6E73">${eq.labelKo}</small></span>
            ${showBoth ? `<span class="hi-user ${userClass}">${userLabel}</span>` : ''}
            <button class="hi-delete" onclick="deleteLog('${date}','${log.equipmentId}','${log.user}')">삭제</button>
          </div>
          ${setsHtml}
        </div>
      `;
    });

    html += `</div>`;
  });

  listDiv.innerHTML = html;
}

function deleteLog(date, equipmentId, user) {
  if (!confirm('이 기록을 삭제하시겠습니까?')) return;

  let logs = loadLogs();
  logs = logs.filter(l => !(l.date === date && l.equipmentId === equipmentId && l.user === user));
  saveLogs(logs);
  showToast('삭제되었습니다');
  renderHistoryTab();
}

// 필터 이벤트
document.getElementById('history-start').addEventListener('change', renderHistoryTab);
document.getElementById('history-end').addEventListener('change', renderHistoryTab);
document.getElementById('history-equipment-filter').addEventListener('change', renderHistoryTab);
document.getElementById('history-show-both').addEventListener('change', renderHistoryTab);

// 장비 필터 옵션 생성
function populateEquipmentFilter() {
  const select = document.getElementById('history-equipment-filter');
  EQUIPMENT.forEach(eq => {
    const opt = document.createElement('option');
    opt.value = eq.id;
    opt.textContent = `${eq.name} (${eq.labelKo})`;
    select.appendChild(opt);
  });
}

// ===== 데이터 내보내기/가져오기 =====
function exportData() {
  const logs = loadLogs();
  const data = {
    appName: 'JoyFit 아자부주반',
    exportedAt: new Date().toISOString(),
    logs: logs
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `joyfit_backup_${getTodayStr()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('데이터를 내보냈습니다');
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.logs || !Array.isArray(data.logs)) {
        showToast('올바른 파일이 아닙니다');
        return;
      }

      const existingLogs = loadLogs();
      let imported = 0;

      data.logs.forEach(newLog => {
        const exists = existingLogs.find(l =>
          l.date === newLog.date && l.equipmentId === newLog.equipmentId && l.user === newLog.user
        );
        if (!exists) {
          existingLogs.push(newLog);
          imported++;
        }
      });

      saveLogs(existingLogs);
      showToast(`${imported}개의 기록을 가져왔습니다`);
      renderHistoryTab();
    } catch {
      showToast('파일을 읽을 수 없습니다');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

// ===== 초기화 =====
function initApp() {
  // 사용자 상태 복원
  switchUser(currentUser);

  // 장비 목록 렌더링
  renderEquipmentList();

  // 필터 옵션 생성
  populateEquipmentFilter();

  // 오늘 날짜 기본값
  document.getElementById('log-date').value = getTodayStr();

  // 기록 기간 기본값 (최근 30일)
  const today = getTodayStr();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  document.getElementById('history-start').value =
    thirtyDaysAgo.getFullYear() + '-' +
    String(thirtyDaysAgo.getMonth() + 1).padStart(2, '0') + '-' +
    String(thirtyDaysAgo.getDate()).padStart(2, '0');
  document.getElementById('history-end').value = today;
}

document.addEventListener('DOMContentLoaded', initApp);
