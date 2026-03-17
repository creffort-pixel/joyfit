// ===== 장비 데이터 =====
const EQUIPMENT = {
  'running-machine':       { name: 'Running Machine',        labelKo: '런닝머신',           category: 'cardio',   youtubeId: 'njeZ29umqVE', youtubeSearch: 'treadmill+how+to+use+gym' },
  'ascent-trainer':        { name: 'Ascent Trainer',         labelKo: '어센트 트레이너',     category: 'cardio',   youtubeId: 'y2dRMOXbPMk', youtubeSearch: 'ascent+trainer+how+to+use' },
  'recumbent-bike':        { name: 'Recumbent Bike',         labelKo: '리컴번트 바이크',     category: 'cardio',   youtubeId: 'XO0mMISa2dM', youtubeSearch: 'recumbent+bike+how+to+use' },
  'spinning-bike':         { name: 'Spinning Bike',          labelKo: '스피닝 바이크',       category: 'cardio',   youtubeId: '4TMm-GtfS3I', youtubeSearch: 'spinning+bike+beginner' },
  'chest-press':           { name: 'Chest Press',            labelKo: '체스트 프레스',       category: 'strength', youtubeId: 'xUm0BiZfWoC', youtubeSearch: 'machine+chest+press+form' },
  'shoulder-press':        { name: 'Shoulder Press',         labelKo: '숄더 프레스',         category: 'strength', youtubeId: 'Wqq43dKoHQo', youtubeSearch: 'machine+shoulder+press+form' },
  'chest-rear-delt':       { name: 'Chest & Rear Delt',      labelKo: '체스트 & 리어 델트',  category: 'strength', youtubeId: 'D2t3pWEfZ6M', youtubeSearch: 'pec+deck+rear+delt+machine' },
  'glute':                 { name: 'Glute',                  labelKo: '글루트 (엉덩이)',     category: 'strength', youtubeId: 'sqDGkIEen2Q', youtubeSearch: 'glute+machine+gym' },
  'hip-abductor-adductor': { name: 'Hip Abductor/Adductor',  labelKo: '힙 어브덕터/어덕터', category: 'strength', youtubeId: 'MpMjHEZMwVE', youtubeSearch: 'hip+abductor+adductor+machine' },
  'leg-press':             { name: 'Leg Press',              labelKo: '레그 프레스',         category: 'strength', youtubeId: 'IZxyjW7MPJQ', youtubeSearch: 'leg+press+machine+form' },
  'leg-curl':              { name: 'Leg Curl',               labelKo: '레그 컬',             category: 'strength', youtubeId: '1Tq3QdYUuHs', youtubeSearch: 'lying+leg+curl+machine' },
  'leg-extension':         { name: 'Leg Extension',          labelKo: '레그 익스텐션',       category: 'strength', youtubeId: 'YyvSfVjQeL0', youtubeSearch: 'leg+extension+machine+form' },
  'abdominal-crunch':      { name: 'Abdominal Crunch',       labelKo: '복근 크런치 머신',    category: 'strength', youtubeId: '2fbujeH3F0E', youtubeSearch: 'ab+crunch+machine+form' },
  'ab-bench':              { name: 'Ab Bench',               labelKo: '복근대',              category: 'strength', youtubeId: 'sIqBHnSGnEw', youtubeSearch: 'ab+bench+sit+up' },
  'rotary-torso':          { name: 'Rotary Torso',           labelKo: '로터리 토르소',       category: 'strength', youtubeId: 'KesUQkfmTRE', youtubeSearch: 'rotary+torso+machine' },
  'back-extension':        { name: 'Back Extension',         labelKo: '백 익스텐션',         category: 'strength', youtubeId: 'ph3pddpKzzw', youtubeSearch: 'back+extension+machine+form' },
  'low-row':               { name: 'Low Row',                labelKo: '로우 로우',           category: 'strength', youtubeId: 'UCXxvVItLoM', youtubeSearch: 'seated+low+row+machine' },
  'lat-pulldown':          { name: 'Lat Pulldown',           labelKo: '랫 풀다운',           category: 'strength', youtubeId: 'CAwf7n6Luuc', youtubeSearch: 'lat+pulldown+machine+form' },
  'back-bench':            { name: 'Back Bench',             labelKo: '등근대',              category: 'strength', youtubeId: 'BbhEayKBXs0', youtubeSearch: 'roman+chair+back+bench' }
};

// ===== 기본 프로그램 =====
const DEFAULT_PROGRAMS = [
  {
    id: 'h-fullbody', name: '전신 운동', user: 'husband',
    steps: [
      { equipId: 'running-machine',  type: 'cardio',   duration: 30, label: '워밍업 + 유산소' },
      { equipId: 'chest-press',      type: 'strength', sets: 3, reps: 12, label: '가슴' },
      { equipId: 'shoulder-press',   type: 'strength', sets: 3, reps: 12, label: '어깨' },
      { equipId: 'lat-pulldown',     type: 'strength', sets: 3, reps: 12, label: '등 (상부)' },
      { equipId: 'low-row',          type: 'strength', sets: 3, reps: 12, label: '등 (하부)' },
      { equipId: 'leg-press',        type: 'strength', sets: 3, reps: 12, label: '다리 (전체)' },
      { equipId: 'leg-curl',         type: 'strength', sets: 3, reps: 10, label: '다리 (후면)' },
      { equipId: 'leg-extension',    type: 'strength', sets: 3, reps: 10, label: '다리 (전면)' },
      { equipId: 'abdominal-crunch', type: 'strength', sets: 3, reps: 15, label: '복근' },
      { equipId: 'back-extension',   type: 'strength', sets: 3, reps: 15, label: '허리' },
    ]
  },
  {
    id: 'h-upper', name: '상체 집중', user: 'husband',
    steps: [
      { equipId: 'running-machine',  type: 'cardio',   duration: 15, label: '워밍업' },
      { equipId: 'chest-press',      type: 'strength', sets: 4, reps: 10, label: '가슴' },
      { equipId: 'shoulder-press',   type: 'strength', sets: 4, reps: 10, label: '어깨' },
      { equipId: 'chest-rear-delt',  type: 'strength', sets: 3, reps: 12, label: '가슴 & 후면 어깨' },
      { equipId: 'lat-pulldown',     type: 'strength', sets: 4, reps: 10, label: '등 (상부)' },
      { equipId: 'low-row',          type: 'strength', sets: 4, reps: 10, label: '등 (하부)' },
      { equipId: 'abdominal-crunch', type: 'strength', sets: 3, reps: 15, label: '복근' },
      { equipId: 'back-extension',   type: 'strength', sets: 3, reps: 15, label: '허리' },
    ]
  },
  {
    id: 'h-lower', name: '하체 집중', user: 'husband',
    steps: [
      { equipId: 'running-machine',  type: 'cardio',   duration: 15, label: '워밍업' },
      { equipId: 'leg-press',        type: 'strength', sets: 4, reps: 12, label: '다리 (전체)' },
      { equipId: 'leg-extension',    type: 'strength', sets: 4, reps: 10, label: '다리 (전면)' },
      { equipId: 'leg-curl',         type: 'strength', sets: 4, reps: 10, label: '다리 (후면)' },
      { equipId: 'hip-abductor-adductor', type: 'strength', sets: 3, reps: 15, label: '힙 (내/외전)' },
      { equipId: 'glute',            type: 'strength', sets: 3, reps: 15, label: '엉덩이' },
      { equipId: 'abdominal-crunch', type: 'strength', sets: 3, reps: 15, label: '복근' },
      { equipId: 'rotary-torso',     type: 'strength', sets: 3, reps: 15, label: '옆구리' },
      { equipId: 'back-extension',   type: 'strength', sets: 3, reps: 15, label: '허리' },
    ]
  },
  {
    id: 'w-fullbody', name: '전신 운동', user: 'wife',
    steps: [
      { equipId: 'ascent-trainer',        type: 'cardio',   duration: 20, label: '워밍업 + 유산소' },
      { equipId: 'hip-abductor-adductor', type: 'strength', sets: 3, reps: 15, label: '힙 (내/외전)' },
      { equipId: 'glute',                 type: 'strength', sets: 3, reps: 15, label: '엉덩이' },
      { equipId: 'leg-press',             type: 'strength', sets: 3, reps: 12, label: '다리 (전체)' },
      { equipId: 'leg-curl',              type: 'strength', sets: 3, reps: 12, label: '다리 (후면)' },
      { equipId: 'leg-extension',         type: 'strength', sets: 3, reps: 12, label: '다리 (전면)' },
      { equipId: 'chest-rear-delt',       type: 'strength', sets: 3, reps: 12, label: '가슴 & 후면 어깨' },
      { equipId: 'rotary-torso',          type: 'strength', sets: 3, reps: 15, label: '옆구리' },
      { equipId: 'ab-bench',              type: 'strength', sets: 3, reps: 15, label: '복근' },
      { equipId: 'back-extension',        type: 'strength', sets: 3, reps: 12, label: '허리' },
    ]
  },
  {
    id: 'w-lower-hip', name: '하체 & 힙 집중', user: 'wife',
    steps: [
      { equipId: 'recumbent-bike',        type: 'cardio',   duration: 15, label: '워밍업' },
      { equipId: 'glute',                 type: 'strength', sets: 4, reps: 15, label: '엉덩이' },
      { equipId: 'hip-abductor-adductor', type: 'strength', sets: 4, reps: 15, label: '힙 (내/외전)' },
      { equipId: 'leg-press',             type: 'strength', sets: 4, reps: 12, label: '다리 (전체)' },
      { equipId: 'leg-curl',              type: 'strength', sets: 3, reps: 12, label: '다리 (후면)' },
      { equipId: 'leg-extension',         type: 'strength', sets: 3, reps: 12, label: '다리 (전면)' },
      { equipId: 'ab-bench',              type: 'strength', sets: 3, reps: 15, label: '복근' },
      { equipId: 'back-extension',        type: 'strength', sets: 3, reps: 12, label: '허리' },
    ]
  },
  {
    id: 'w-core-upper', name: '코어 & 상체', user: 'wife',
    steps: [
      { equipId: 'ascent-trainer',   type: 'cardio',   duration: 15, label: '워밍업' },
      { equipId: 'chest-press',      type: 'strength', sets: 3, reps: 12, label: '가슴' },
      { equipId: 'shoulder-press',   type: 'strength', sets: 3, reps: 12, label: '어깨' },
      { equipId: 'chest-rear-delt',  type: 'strength', sets: 3, reps: 12, label: '가슴 & 후면 어깨' },
      { equipId: 'lat-pulldown',     type: 'strength', sets: 3, reps: 12, label: '등' },
      { equipId: 'abdominal-crunch', type: 'strength', sets: 3, reps: 15, label: '복근 머신' },
      { equipId: 'rotary-torso',     type: 'strength', sets: 3, reps: 15, label: '옆구리' },
      { equipId: 'ab-bench',         type: 'strength', sets: 3, reps: 15, label: '복근대' },
      { equipId: 'back-extension',   type: 'strength', sets: 3, reps: 12, label: '허리' },
    ]
  }
];

// ===== Firebase =====
const firebaseConfig = {
  apiKey: "AIzaSyBXkcPEgrKuJ-0K0HmZ2Rkc-oQwXIVMjeQ",
  authDomain: "joyfit-15059.firebaseapp.com",
  databaseURL: "https://joyfit-15059-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "joyfit-15059",
  storageBucket: "joyfit-15059.firebasestorage.app",
  messagingSenderId: "791685455378",
  appId: "1:791685455378:web:b7518461f3daf94ffe02cb",
  measurementId: "G-DZ8RTSLWK8"
};

let db = null, firebaseReady = false;
try {
  if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    db = firebase.database();
    firebaseReady = true;
  }
} catch (e) { console.warn('Firebase init failed:', e); }

// ===== 상태 =====
let currentUser = localStorage.getItem('joyfit_currentUser') || 'husband';
let openDetailIdx = null; // 현재 열려있는 상세 패널 인덱스
let editingProgramId = null;

// ===== 유틸 =====
function getTodayStr() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}
function logKey(date, equipId, user) { return `${date}_${equipId}_${user}`; }
function eq(id) { return EQUIPMENT[id]; }
function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

function showToast(msg) {
  document.querySelector('.toast')?.remove();
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t); setTimeout(() => t.remove(), 2000);
}
function formatDate(ds) {
  const d = new Date(ds + 'T00:00:00');
  return `${d.getMonth()+1}/${d.getDate()} (${'일월화수목금토'[d.getDay()]})`;
}

// ===== Logs (localStorage + Firebase) =====
function loadLogs() {
  try { return JSON.parse(localStorage.getItem('joyfit_logs')) || []; } catch { return []; }
}
function saveLogs(logs) { localStorage.setItem('joyfit_logs', JSON.stringify(logs)); }
function saveLogFB(entry) {
  if (!firebaseReady) return;
  db.ref('logs/' + logKey(entry.date, entry.equipmentId, entry.user)).set(entry).catch(console.warn);
}
function deleteLogFB(date, equipId, user) {
  if (!firebaseReady) return;
  db.ref('logs/' + logKey(date, equipId, user)).remove().catch(console.warn);
}

// ===== Programs (localStorage + Firebase) =====
function loadPrograms() {
  try {
    const saved = JSON.parse(localStorage.getItem('joyfit_programs'));
    if (saved && saved.length) return saved;
  } catch {}
  return JSON.parse(JSON.stringify(DEFAULT_PROGRAMS));
}
function savePrograms(progs) {
  localStorage.setItem('joyfit_programs', JSON.stringify(progs));
  if (firebaseReady) db.ref('programs').set(progs).catch(console.warn);
}
function getSelectedProgramId() {
  return localStorage.getItem('joyfit_prog_' + currentUser) || null;
}
function setSelectedProgramId(id) {
  localStorage.setItem('joyfit_prog_' + currentUser, id);
}
function getMyPrograms() {
  return loadPrograms().filter(p => p.user === currentUser);
}
function getActiveProgram() {
  const progs = getMyPrograms();
  const selId = getSelectedProgramId();
  return progs.find(p => p.id === selId) || progs[0] || null;
}

// ===== Firebase Sync =====
function startFirebaseSync() {
  if (!firebaseReady) return;
  db.ref('logs').on('value', snap => {
    const data = snap.val();
    saveLogs(data ? Object.values(data) : []);
    const tab = document.querySelector('.tab-btn.active')?.dataset.tab;
    if (tab === 'today') renderProgram();
    if (tab === 'history') renderHistory();
  });
  db.ref('programs').on('value', snap => {
    const data = snap.val();
    if (data && Array.isArray(data)) {
      localStorage.setItem('joyfit_programs', JSON.stringify(data));
      populateProgramSelect();
    }
  });
  const el = document.getElementById('sync-status');
  if (el) firebase.database().ref('.info/connected').on('value', s => {
    el.textContent = s.val() ? '동기화 중' : '오프라인';
  });
}

// ===== 사용자 / 탭 =====
function switchUser(user) {
  currentUser = user;
  localStorage.setItem('joyfit_currentUser', user);
  document.querySelectorAll('.user-btn').forEach(b => b.classList.toggle('active', b.dataset.user === user));
  document.body.classList.toggle('wife-mode', user === 'wife');
  openDetailIdx = null;
  populateProgramSelect();
  const tab = document.querySelector('.tab-btn.active').dataset.tab;
  if (tab === 'today') renderProgram();
  if (tab === 'history') renderHistory();
  if (tab === 'programs') renderProgramManager();
}

function switchTab(name) {
  document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  document.querySelector(`.tab-btn[data-tab="${name}"]`).classList.add('active');
  if (name === 'today') renderProgram();
  if (name === 'history') renderHistory();
  if (name === 'programs') renderProgramManager();
}

// ===== 프로그램 선택 드롭다운 =====
function populateProgramSelect() {
  const sel = document.getElementById('program-select');
  const progs = getMyPrograms();
  const activeId = getActiveProgram()?.id;
  sel.innerHTML = progs.map(p =>
    `<option value="${p.id}" ${p.id === activeId ? 'selected' : ''}>${p.name} (${p.steps.length}종목)</option>`
  ).join('');
}
function onProgramSelect() {
  setSelectedProgramId(document.getElementById('program-select').value);
  openDetailIdx = null;
  renderProgram();
}

// ===== 탭1: 오늘의 운동 =====
function renderProgram() {
  const dateInput = document.getElementById('log-date');
  if (!dateInput.value) dateInput.value = getTodayStr();
  const date = dateInput.value;
  const prog = getActiveProgram();
  const logs = loadLogs();
  const list = document.getElementById('program-list');

  if (!prog) {
    list.innerHTML = '<div class="empty-state"><div class="empty-icon">📋</div><p>프로그램을 선택하세요</p></div>';
    document.getElementById('progress-fill').style.width = '0%';
    document.getElementById('progress-text').textContent = '0/0';
    return;
  }

  let completedCount = 0;
  let html = '';

  prog.steps.forEach((step, idx) => {
    const e = eq(step.equipId);
    if (!e) return;
    const existing = logs.find(l => l.date === date && l.equipmentId === step.equipId && l.user === currentUser);
    const isDone = existing?.done || false;
    if (isDone) completedCount++;
    const isOpen = openDetailIdx === idx;

    if (step.type === 'cardio') {
      html += renderCardioStep(step, e, idx, existing, isDone, isOpen, date);
    } else {
      html += renderStrengthStep(step, e, idx, existing, isDone, isOpen, date);
    }
  });

  list.innerHTML = html;
  const pct = prog.steps.length ? Math.round((completedCount / prog.steps.length) * 100) : 0;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${completedCount}/${prog.steps.length}`;
}

function renderCardioStep(step, e, idx, existing, isDone, isOpen, date) {
  const dur = existing?.sets?.[0]?.duration || '';
  const dist = existing?.sets?.[0]?.distance || '';
  return `
    <div class="step-card ${isDone ? 'done' : ''}" id="step-${idx}">
      <div class="step-main" onclick="toggleDetail(${idx})">
        <div class="step-check">${isDone ? '✓' : ''}</div>
        <div class="step-info">
          <div class="step-order">STEP ${idx+1} · ${step.label}</div>
          <div class="step-name">${e.name}</div>
          <div class="step-target">${step.duration}분 목표</div>
        </div>
        <button class="step-video-btn" onclick="event.stopPropagation();openVideo('${step.equipId}')">▶️</button>
      </div>
      <div class="step-detail ${isOpen ? 'open' : ''}" id="detail-${idx}">
        <div class="cardio-detail">
          <input type="number" id="cardio-dur-${idx}" value="${dur}" placeholder="시간" inputmode="numeric">
          <span class="set-unit">분</span>
          <input type="number" id="cardio-dist-${idx}" value="${dist}" placeholder="거리" inputmode="decimal" step="0.1">
          <span class="set-unit">km</span>
          <button class="cardio-done-btn ${isDone ? 'checked' : ''}"
            onclick="saveCardio(${idx},'${date}','${step.equipId}')">
            ${isDone ? '완료됨 ✓' : '완료'}
          </button>
        </div>
      </div>
    </div>`;
}

function renderStrengthStep(step, e, idx, existing, isDone, isOpen, date) {
  let setsHtml = '';
  for (let s = 0; s < step.sets; s++) {
    const savedKg = existing?.sets?.[s]?.weight || '';
    const savedReps = existing?.sets?.[s]?.reps || '';
    const setDone = existing?.sets?.[s]?.done || false;
    setsHtml += `
      <div class="set-line">
        <span class="set-label">세트 ${s+1}</span>
        <input type="number" id="kg-${idx}-${s}" value="${savedKg}" placeholder="kg" inputmode="decimal" step="0.5">
        <span class="set-unit">kg</span>
        <input type="number" id="reps-${idx}-${s}" value="${savedReps || step.reps}" placeholder="${step.reps}" inputmode="numeric">
        <span class="set-unit">회</span>
        <button class="set-check-btn ${setDone ? 'checked' : ''}" id="setbtn-${idx}-${s}"
          onclick="toggleSet(${idx},${s},'${date}','${step.equipId}',${step.sets})">
          ${setDone ? '✓' : ''}
        </button>
      </div>`;
  }
  return `
    <div class="step-card ${isDone ? 'done' : ''}" id="step-${idx}">
      <div class="step-main" onclick="toggleDetail(${idx})">
        <div class="step-check">${isDone ? '✓' : ''}</div>
        <div class="step-info">
          <div class="step-order">STEP ${idx+1} · ${step.label}</div>
          <div class="step-name">${e.name}</div>
          <div class="step-target">${step.sets}세트 × ${step.reps}회</div>
        </div>
        <button class="step-video-btn" onclick="event.stopPropagation();openVideo('${step.equipId}')">▶️</button>
      </div>
      <div class="step-detail ${isOpen ? 'open' : ''}" id="detail-${idx}">
        ${setsHtml}
      </div>
    </div>`;
}

function toggleDetail(idx) {
  if (openDetailIdx === idx) {
    openDetailIdx = null;
  } else {
    openDetailIdx = idx;
  }
  // 모든 detail 토글 (DOM만 조작, 전체 re-render 없음)
  document.querySelectorAll('.step-detail').forEach((el, i) => {
    el.classList.toggle('open', i === openDetailIdx);
  });
}

// ===== 근력 세트 체크 (화면 유지) =====
function toggleSet(stepIdx, setIdx, date, equipId, totalSets) {
  const logs = loadLogs();
  let entry = logs.find(l => l.date === date && l.equipmentId === equipId && l.user === currentUser);

  if (!entry) {
    entry = { date, equipmentId: equipId, user: currentUser, sets: [], done: false, updatedAt: new Date().toISOString() };
    logs.push(entry);
  }
  while (entry.sets.length <= setIdx) entry.sets.push({});

  const kgVal = parseFloat(document.getElementById(`kg-${stepIdx}-${setIdx}`)?.value) || 0;
  const repsVal = parseInt(document.getElementById(`reps-${stepIdx}-${setIdx}`)?.value) || 0;
  const newDone = !entry.sets[setIdx]?.done;

  entry.sets[setIdx] = { weight: kgVal, reps: repsVal, done: newDone };
  entry.updatedAt = new Date().toISOString();

  // 전체 세트 완료 여부
  let allDone = true;
  for (let i = 0; i < totalSets; i++) {
    if (!entry.sets[i]?.done) { allDone = false; break; }
  }
  entry.done = allDone;

  saveLogs(logs);
  saveLogFB(entry);

  if (allDone) {
    // 전부 완료 → 닫고 전체 re-render
    openDetailIdx = null;
    renderProgram();
    showToast('완료!');
  } else {
    // 개별 세트만 업데이트 (화면 유지)
    const btn = document.getElementById(`setbtn-${stepIdx}-${setIdx}`);
    if (btn) {
      btn.classList.toggle('checked', newDone);
      btn.textContent = newDone ? '✓' : '';
    }
    // 진행률만 업데이트
    updateProgress();
  }
}

function updateProgress() {
  const prog = getActiveProgram();
  if (!prog) return;
  const date = document.getElementById('log-date').value;
  const logs = loadLogs();
  let count = 0;
  prog.steps.forEach(step => {
    const log = logs.find(l => l.date === date && l.equipmentId === step.equipId && l.user === currentUser);
    if (log?.done) count++;
  });
  const pct = Math.round((count / prog.steps.length) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${count}/${prog.steps.length}`;
}

// ===== 유산소 완료 =====
function saveCardio(stepIdx, date, equipId) {
  const dur = parseFloat(document.getElementById(`cardio-dur-${stepIdx}`)?.value) || 0;
  const dist = parseFloat(document.getElementById(`cardio-dist-${stepIdx}`)?.value) || 0;

  const logs = loadLogs();
  let entry = logs.find(l => l.date === date && l.equipmentId === equipId && l.user === currentUser);
  if (!entry) {
    entry = { date, equipmentId: equipId, user: currentUser, sets: [], done: false, updatedAt: new Date().toISOString() };
    logs.push(entry);
  }
  entry.sets = [{ duration: dur, distance: dist }];
  entry.done = !entry.done;
  entry.updatedAt = new Date().toISOString();

  saveLogs(logs);
  saveLogFB(entry);
  showToast(entry.done ? '완료!' : '완료 취소');
  openDetailIdx = null;
  renderProgram();
}

// ===== 탭2: 기록 보기 =====
function renderHistory() {
  const startDate = document.getElementById('history-start').value;
  const endDate = document.getElementById('history-end').value;
  const showBoth = document.getElementById('history-show-both')?.checked;

  let logs = loadLogs().filter(l => l.done);
  if (!showBoth) logs = logs.filter(l => l.user === currentUser);
  if (startDate) logs = logs.filter(l => l.date >= startDate);
  if (endDate) logs = logs.filter(l => l.date <= endDate);
  logs.sort((a, b) => b.date.localeCompare(a.date));

  const grouped = {};
  logs.forEach(l => { if (!grouped[l.date]) grouped[l.date] = []; grouped[l.date].push(l); });

  const div = document.getElementById('history-list');
  if (!Object.keys(grouped).length) {
    div.innerHTML = '<div class="empty-state"><div class="empty-icon">📊</div><p>기록이 없습니다</p></div>';
    return;
  }

  let html = '';
  Object.keys(grouped).sort().reverse().forEach(date => {
    html += `<div class="history-day-group"><div class="history-day-title">${formatDate(date)}</div>`;
    grouped[date].forEach(log => {
      const e = eq(log.equipmentId); if (!e) return;
      const userLabel = log.user === 'husband' ? '🧔 정환' : '👩 고은';
      let setsHtml = '';
      if (e.category === 'cardio') {
        setsHtml = log.sets.map(s => `<div class="set-row-display"><span>${s.duration||0}분 / ${s.distance||0}km</span></div>`).join('');
      } else {
        setsHtml = log.sets.filter(s => s.done).map((s, i) =>
          `<div class="set-row-display"><span>세트 ${i+1}</span><span>${s.weight ? s.weight+'kg × ' : ''}${s.reps}회</span></div>`
        ).join('');
      }
      html += `<div class="history-item"><div class="hi-header"><span class="hi-name">${e.name}</span>
        <span class="hi-user ${log.user}">${userLabel}</span>
        <button class="hi-delete" onclick="deleteLog('${date}','${log.equipmentId}','${log.user}')">삭제</button>
        </div>${setsHtml}</div>`;
    });
    html += '</div>';
  });
  div.innerHTML = html;
}

function deleteLog(date, equipId, user) {
  if (!confirm('이 기록을 삭제하시겠습니까?')) return;
  let logs = loadLogs().filter(l => !(l.date === date && l.equipmentId === equipId && l.user === user));
  saveLogs(logs); deleteLogFB(date, equipId, user);
  showToast('삭제되었습니다'); renderHistory();
}

document.getElementById('history-start').addEventListener('change', renderHistory);
document.getElementById('history-end').addEventListener('change', renderHistory);
document.getElementById('history-show-both').addEventListener('change', renderHistory);

// ===== 탭3: 프로그램 관리 =====
function renderProgramManager() {
  document.getElementById('program-manager').style.display = '';
  document.getElementById('program-editor').style.display = 'none';

  const progs = getMyPrograms();
  const activeId = getActiveProgram()?.id;
  const cardsDiv = document.getElementById('program-cards');

  cardsDiv.innerHTML = progs.map(p => `
    <div class="prog-card ${p.id === activeId ? 'active-prog' : ''}" onclick="editProgram('${p.id}')">
      <div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-info">${p.steps.length}종목 · ${p.steps.filter(s=>s.type==='cardio').length > 0 ? '유산소+' : ''}근력</div>
      </div>
      <span class="pc-arrow">›</span>
    </div>
  `).join('');

  // 운동 설명 가이드
  const guideDiv = document.getElementById('guide-list');
  let guideHtml = '';
  Object.entries(EQUIPMENT).forEach(([id, e]) => {
    guideHtml += `
      <div class="guide-card" onclick="openVideo('${id}')">
        <span class="gc-play">▶️</span>
        <div><div class="gc-name">${e.name}</div><div class="gc-label">${e.labelKo}</div></div>
      </div>`;
  });
  guideDiv.innerHTML = guideHtml;
}

// ===== 프로그램 편집 =====
function editProgram(progId) {
  const progs = loadPrograms();
  const prog = progs.find(p => p.id === progId);
  if (!prog) return;
  editingProgramId = progId;
  showEditor(prog);
}

function createNewProgram() {
  editingProgramId = null;
  showEditor({ id: null, name: '', user: currentUser, steps: [] });
}

function showEditor(prog) {
  document.getElementById('program-manager').style.display = 'none';
  document.getElementById('program-editor').style.display = '';
  document.getElementById('btn-delete-prog').style.display = editingProgramId ? '' : 'none';
  document.getElementById('edit-prog-name').value = prog.name;

  const stepsDiv = document.getElementById('edit-steps');
  stepsDiv.innerHTML = '';
  prog.steps.forEach((step, i) => addEditorStepDOM(step, i));
}

function addEditorStep() {
  const stepsDiv = document.getElementById('edit-steps');
  const idx = stepsDiv.children.length;
  addEditorStepDOM({ equipId: 'chest-press', type: 'strength', sets: 3, reps: 12, label: '' }, idx);
}

function addEditorStepDOM(step, idx) {
  const stepsDiv = document.getElementById('edit-steps');
  const div = document.createElement('div');
  div.className = 'edit-step';
  div.dataset.idx = idx;

  const equipOptions = Object.entries(EQUIPMENT).map(([id, e]) =>
    `<option value="${id}" ${id === step.equipId ? 'selected' : ''}>${e.name} (${e.labelKo})</option>`
  ).join('');

  const isCardio = step.type === 'cardio';

  div.innerHTML = `
    <div class="edit-step-num">STEP ${stepsDiv.children.length + 1}</div>
    <button class="edit-step-remove" onclick="removeEditorStep(this)">×</button>
    <div class="edit-step-row">
      <select class="es-equip" onchange="onEquipChange(this)">${equipOptions}</select>
    </div>
    <div class="edit-step-row">
      <input type="text" class="es-label" value="${step.label || ''}" placeholder="부위 라벨 (예: 가슴)">
    </div>
    <div class="edit-step-row es-strength-row" style="display:${isCardio ? 'none' : 'flex'}">
      <input type="number" class="es-sets" value="${step.sets || 3}" inputmode="numeric" style="width:40px">
      <span class="es-unit">세트</span>
      <input type="number" class="es-reps" value="${step.reps || 12}" inputmode="numeric" style="width:40px">
      <span class="es-unit">회</span>
    </div>
    <div class="edit-step-row es-cardio-row" style="display:${isCardio ? 'flex' : 'none'}">
      <input type="number" class="es-duration" value="${step.duration || 20}" inputmode="numeric" style="width:50px">
      <span class="es-unit">분</span>
    </div>
  `;
  stepsDiv.appendChild(div);
}

function onEquipChange(sel) {
  const step = sel.closest('.edit-step');
  const equipId = sel.value;
  const e = eq(equipId);
  const isCardio = e?.category === 'cardio';
  step.querySelector('.es-strength-row').style.display = isCardio ? 'none' : 'flex';
  step.querySelector('.es-cardio-row').style.display = isCardio ? 'flex' : 'none';
}

function removeEditorStep(btn) {
  btn.closest('.edit-step').remove();
  // 번호 업데이트
  document.querySelectorAll('#edit-steps .edit-step').forEach((el, i) => {
    el.querySelector('.edit-step-num').textContent = `STEP ${i + 1}`;
  });
}

function saveProgram() {
  const name = document.getElementById('edit-prog-name').value.trim();
  if (!name) { showToast('프로그램 이름을 입력하세요'); return; }

  const stepEls = document.querySelectorAll('#edit-steps .edit-step');
  if (!stepEls.length) { showToast('운동을 추가하세요'); return; }

  const steps = [];
  stepEls.forEach(el => {
    const equipId = el.querySelector('.es-equip').value;
    const e = eq(equipId);
    const label = el.querySelector('.es-label').value.trim();
    if (e.category === 'cardio') {
      steps.push({ equipId, type: 'cardio', duration: parseInt(el.querySelector('.es-duration').value) || 20, label });
    } else {
      steps.push({
        equipId, type: 'strength',
        sets: parseInt(el.querySelector('.es-sets').value) || 3,
        reps: parseInt(el.querySelector('.es-reps').value) || 12,
        label
      });
    }
  });

  const progs = loadPrograms();
  if (editingProgramId) {
    const idx = progs.findIndex(p => p.id === editingProgramId);
    if (idx >= 0) { progs[idx].name = name; progs[idx].steps = steps; }
  } else {
    const newProg = { id: genId(), name, user: currentUser, steps };
    progs.push(newProg);
    setSelectedProgramId(newProg.id);
  }

  savePrograms(progs);
  populateProgramSelect();
  showToast('저장되었습니다!');
  closeEditor();
}

function deleteProgram() {
  if (!editingProgramId) return;
  if (!confirm('이 프로그램을 삭제하시겠습니까?')) return;
  let progs = loadPrograms().filter(p => p.id !== editingProgramId);
  savePrograms(progs);
  populateProgramSelect();
  showToast('삭제되었습니다');
  closeEditor();
}

function closeEditor() {
  editingProgramId = null;
  renderProgramManager();
}

// ===== 동영상 모달 =====
function openVideo(equipId) {
  const e = eq(equipId); if (!e) return;
  document.getElementById('video-title').textContent = e.name;
  document.getElementById('video-subtitle').textContent = e.labelKo;
  document.getElementById('video-player').innerHTML = `
    <iframe src="https://www.youtube.com/embed/${e.youtubeId}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>`;
  document.getElementById('video-modal').classList.add('open');
}
function closeVideo() {
  document.getElementById('video-modal').classList.remove('open');
  document.getElementById('video-player').innerHTML = '';
}

// ===== 날짜 변경 =====
document.getElementById('log-date').addEventListener('change', () => { openDetailIdx = null; renderProgram(); });

// ===== 초기화 =====
function initApp() {
  // 기본 프로그램 초기화 (처음 한 번)
  if (!localStorage.getItem('joyfit_programs')) {
    savePrograms(DEFAULT_PROGRAMS);
  }

  switchUser(currentUser);
  document.getElementById('log-date').value = getTodayStr();

  const today = getTodayStr();
  const ago = new Date(); ago.setDate(ago.getDate() - 30);
  document.getElementById('history-start').value = ago.getFullYear() + '-' + String(ago.getMonth()+1).padStart(2,'0') + '-' + String(ago.getDate()).padStart(2,'0');
  document.getElementById('history-end').value = today;

  populateProgramSelect();
  renderProgram();

  if (firebaseReady) {
    loadLogs().forEach(e => saveLogFB(e));
    const progs = loadPrograms();
    if (progs.length) db.ref('programs').set(progs).catch(console.warn);
    startFirebaseSync();
  } else {
    const el = document.getElementById('sync-status');
    if (el) el.textContent = '오프라인 모드';
  }
}

document.addEventListener('DOMContentLoaded', initApp);
