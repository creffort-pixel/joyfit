// ===== 장비 데이터 =====
const EQUIPMENT = {
  'running-machine':    { name: 'Running Machine',       labelKo: '런닝머신',           category: 'cardio',   youtubeId: 'njeZ29umqVE', youtubeSearch: 'treadmill+running+machine+how+to+use+gym' },
  'ascent-trainer':     { name: 'Ascent Trainer',        labelKo: '어센트 트레이너',     category: 'cardio',   youtubeId: 'y2dRMOXbPMk', youtubeSearch: 'ascent+trainer+how+to+use' },
  'recumbent-bike':     { name: 'Recumbent Bike',        labelKo: '리컴번트 바이크',     category: 'cardio',   youtubeId: 'XO0mMISa2dM', youtubeSearch: 'recumbent+bike+how+to+use+gym' },
  'spinning-bike':      { name: 'Spinning Bike',         labelKo: '스피닝 바이크',       category: 'cardio',   youtubeId: '4TMm-GtfS3I', youtubeSearch: 'spinning+bike+how+to+use+beginner' },
  'chest-press':        { name: 'Chest Press',           labelKo: '체스트 프레스',       category: 'strength', youtubeId: 'xUm0BiZfWoC', youtubeSearch: 'machine+chest+press+how+to+form' },
  'shoulder-press':     { name: 'Shoulder Press',        labelKo: '숄더 프레스',         category: 'strength', youtubeId: 'Wqq43dKoHQo', youtubeSearch: 'machine+shoulder+press+how+to+form' },
  'chest-rear-delt':    { name: 'Chest & Rear Delt',     labelKo: '체스트 & 리어 델트',  category: 'strength', youtubeId: 'D2t3pWEfZ6M', youtubeSearch: 'pec+deck+rear+delt+machine+how+to' },
  'glute':              { name: 'Glute',                 labelKo: '글루트 (엉덩이)',     category: 'strength', youtubeId: 'sqDGkIEen2Q', youtubeSearch: 'glute+machine+how+to+use+gym' },
  'hip-abductor-adductor': { name: 'Hip Abductor/Adductor', labelKo: '힙 어브덕터/어덕터', category: 'strength', youtubeId: 'MpMjHEZMwVE', youtubeSearch: 'hip+abductor+adductor+machine+how+to' },
  'leg-press':          { name: 'Leg Press',             labelKo: '레그 프레스',         category: 'strength', youtubeId: 'IZxyjW7MPJQ', youtubeSearch: 'leg+press+machine+how+to+form' },
  'leg-curl':           { name: 'Leg Curl',              labelKo: '레그 컬',             category: 'strength', youtubeId: '1Tq3QdYUuHs', youtubeSearch: 'lying+leg+curl+machine+how+to' },
  'leg-extension':      { name: 'Leg Extension',         labelKo: '레그 익스텐션',       category: 'strength', youtubeId: 'YyvSfVjQeL0', youtubeSearch: 'leg+extension+machine+how+to+form' },
  'abdominal-crunch':   { name: 'Abdominal Crunch',      labelKo: '복근 크런치 머신',    category: 'strength', youtubeId: '2fbujeH3F0E', youtubeSearch: 'ab+crunch+machine+how+to+form' },
  'ab-bench':           { name: 'Ab Bench',              labelKo: '복근대',              category: 'strength', youtubeId: 'sIqBHnSGnEw', youtubeSearch: 'ab+bench+sit+up+bench+how+to' },
  'rotary-torso':       { name: 'Rotary Torso',          labelKo: '로터리 토르소',       category: 'strength', youtubeId: 'KesUQkfmTRE', youtubeSearch: 'rotary+torso+machine+how+to' },
  'back-extension':     { name: 'Back Extension',        labelKo: '백 익스텐션',         category: 'strength', youtubeId: 'ph3pddpKzzw', youtubeSearch: 'back+extension+machine+how+to+form' },
  'low-row':            { name: 'Low Row',               labelKo: '로우 로우',           category: 'strength', youtubeId: 'UCXxvVItLoM', youtubeSearch: 'seated+low+row+machine+how+to' },
  'lat-pulldown':       { name: 'Lat Pulldown',          labelKo: '랫 풀다운',           category: 'strength', youtubeId: 'CAwf7n6Luuc', youtubeSearch: 'lat+pulldown+machine+how+to+form' },
  'back-bench':         { name: 'Back Bench',            labelKo: '등근대',              category: 'strength', youtubeId: 'BbhEayKBXs0', youtubeSearch: 'roman+chair+back+bench+how+to' }
};

// ===== 운동 프로그램 =====
const PROGRAMS = {
  husband: [
    { equipId: 'running-machine',    type: 'cardio',   duration: 30, label: '워밍업 + 유산소' },
    { equipId: 'chest-press',        type: 'strength', sets: 3, reps: 12, label: '가슴' },
    { equipId: 'shoulder-press',     type: 'strength', sets: 3, reps: 12, label: '어깨' },
    { equipId: 'lat-pulldown',       type: 'strength', sets: 3, reps: 12, label: '등 (상부)' },
    { equipId: 'low-row',            type: 'strength', sets: 3, reps: 12, label: '등 (하부)' },
    { equipId: 'leg-press',          type: 'strength', sets: 3, reps: 12, label: '다리 (전체)' },
    { equipId: 'leg-curl',           type: 'strength', sets: 3, reps: 10, label: '다리 (후면)' },
    { equipId: 'leg-extension',      type: 'strength', sets: 3, reps: 10, label: '다리 (전면)' },
    { equipId: 'abdominal-crunch',   type: 'strength', sets: 3, reps: 15, label: '복근' },
    { equipId: 'back-extension',     type: 'strength', sets: 3, reps: 15, label: '허리' },
  ],
  wife: [
    { equipId: 'ascent-trainer',     type: 'cardio',   duration: 20, label: '워밍업 + 유산소' },
    { equipId: 'hip-abductor-adductor', type: 'strength', sets: 3, reps: 15, label: '힙 (내/외전)' },
    { equipId: 'glute',              type: 'strength', sets: 3, reps: 15, label: '엉덩이' },
    { equipId: 'leg-press',          type: 'strength', sets: 3, reps: 12, label: '다리 (전체)' },
    { equipId: 'leg-curl',           type: 'strength', sets: 3, reps: 12, label: '다리 (후면)' },
    { equipId: 'leg-extension',      type: 'strength', sets: 3, reps: 12, label: '다리 (전면)' },
    { equipId: 'chest-rear-delt',    type: 'strength', sets: 3, reps: 12, label: '가슴 & 후면 어깨' },
    { equipId: 'rotary-torso',       type: 'strength', sets: 3, reps: 15, label: '옆구리' },
    { equipId: 'ab-bench',           type: 'strength', sets: 3, reps: 15, label: '복근' },
    { equipId: 'back-extension',     type: 'strength', sets: 3, reps: 12, label: '허리' },
  ]
};

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

// ===== 유틸리티 =====
function getTodayStr() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}
function logKey(date, equipId, user) { return `${date}_${equipId}_${user}`; }
function eq(id) { return EQUIPMENT[id]; }

function loadLogs() {
  try { return JSON.parse(localStorage.getItem('joyfit_logs')) || []; }
  catch { return []; }
}
function saveLogs(logs) { localStorage.setItem('joyfit_logs', JSON.stringify(logs)); }

function saveLogToFirebase(entry) {
  if (!firebaseReady) return;
  db.ref('logs/' + logKey(entry.date, entry.equipmentId, entry.user)).set(entry).catch(e => console.warn(e));
}
function deleteLogFromFirebase(date, equipId, user) {
  if (!firebaseReady) return;
  db.ref('logs/' + logKey(date, equipId, user)).remove().catch(e => console.warn(e));
}

function startFirebaseSync() {
  if (!firebaseReady) return;
  db.ref('logs').on('value', snap => {
    const data = snap.val();
    saveLogs(data ? Object.values(data) : []);
    const tab = document.querySelector('.tab-btn.active')?.dataset.tab;
    if (tab === 'today') renderProgram();
    if (tab === 'history') renderHistory();
  });
  const el = document.getElementById('sync-status');
  if (el) firebase.database().ref('.info/connected').on('value', s => {
    el.textContent = s.val() ? '동기화 중' : '오프라인';
  });
}

function showToast(msg) {
  document.querySelector('.toast')?.remove();
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2000);
}

function formatDate(ds) {
  const d = new Date(ds + 'T00:00:00');
  const days = ['일','월','화','수','목','금','토'];
  return `${d.getMonth()+1}/${d.getDate()} (${days[d.getDay()]})`;
}

// ===== 사용자 / 탭 =====
function switchUser(user) {
  currentUser = user;
  localStorage.setItem('joyfit_currentUser', user);
  document.querySelectorAll('.user-btn').forEach(b => b.classList.toggle('active', b.dataset.user === user));
  document.body.classList.toggle('wife-mode', user === 'wife');
  const tab = document.querySelector('.tab-btn.active').dataset.tab;
  if (tab === 'today') renderProgram();
  if (tab === 'history') renderHistory();
}

function switchTab(name) {
  document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  document.querySelector(`.tab-btn[data-tab="${name}"]`).classList.add('active');
  if (name === 'today') renderProgram();
  if (name === 'history') renderHistory();
  if (name === 'guide') renderGuide();
}

// ===== 탭1: 오늘의 운동 프로그램 =====
function renderProgram() {
  const dateInput = document.getElementById('log-date');
  if (!dateInput.value) dateInput.value = getTodayStr();
  const date = dateInput.value;
  const program = PROGRAMS[currentUser];
  const logs = loadLogs();
  const list = document.getElementById('program-list');

  let completedCount = 0;
  let html = '';

  program.forEach((step, idx) => {
    const e = eq(step.equipId);
    const existing = logs.find(l => l.date === date && l.equipmentId === step.equipId && l.user === currentUser);
    const isDone = existing && existing.done;
    if (isDone) completedCount++;

    if (step.type === 'cardio') {
      html += renderCardioStep(step, e, idx, existing, isDone, date);
    } else {
      html += renderStrengthStep(step, e, idx, existing, isDone, date);
    }
  });

  list.innerHTML = html;

  // 진행률
  const pct = Math.round((completedCount / program.length) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${completedCount}/${program.length}`;
}

function renderCardioStep(step, e, idx, existing, isDone, date) {
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
      <div class="step-detail" id="detail-${idx}">
        <div class="cardio-detail">
          <input type="number" id="cardio-dur-${idx}" value="${dur}" placeholder="시간" inputmode="numeric">
          <span class="set-unit">분</span>
          <input type="number" id="cardio-dist-${idx}" value="${dist}" placeholder="거리" inputmode="decimal" step="0.1">
          <span class="set-unit">km</span>
          <button class="cardio-done-btn ${isDone ? 'checked' : ''}" onclick="saveCardio(${idx},'${date}','${step.equipId}')">
            ${isDone ? '완료됨 ✓' : '완료'}
          </button>
        </div>
      </div>
    </div>`;
}

function renderStrengthStep(step, e, idx, existing, isDone, date) {
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
      <div class="step-detail" id="detail-${idx}">
        ${setsHtml}
      </div>
    </div>`;
}

function toggleDetail(idx) {
  const el = document.getElementById('detail-' + idx);
  el.classList.toggle('open');
}

// 근력 세트 체크
function toggleSet(stepIdx, setIdx, date, equipId, totalSets) {
  const logs = loadLogs();
  let entry = logs.find(l => l.date === date && l.equipmentId === equipId && l.user === currentUser);

  if (!entry) {
    entry = { date, equipmentId: equipId, user: currentUser, sets: [], done: false, updatedAt: new Date().toISOString() };
    logs.push(entry);
  }

  // 세트 배열 확보
  while (entry.sets.length <= setIdx) entry.sets.push({});

  // kg, reps 읽기
  const kgInput = document.getElementById(`kg-${stepIdx}-${setIdx}`);
  const repsInput = document.getElementById(`reps-${stepIdx}-${setIdx}`);
  const kg = parseFloat(kgInput?.value) || 0;
  const reps = parseInt(repsInput?.value) || 0;

  entry.sets[setIdx] = { weight: kg, reps, done: !entry.sets[setIdx]?.done };
  entry.updatedAt = new Date().toISOString();

  // 전체 세트 완료 여부 체크
  let allDone = true;
  for (let i = 0; i < totalSets; i++) {
    if (!entry.sets[i]?.done) { allDone = false; break; }
  }
  entry.done = allDone;

  saveLogs(logs);
  saveLogToFirebase(entry);
  renderProgram();
}

// 유산소 완료
function saveCardio(stepIdx, date, equipId) {
  const durInput = document.getElementById(`cardio-dur-${stepIdx}`);
  const distInput = document.getElementById(`cardio-dist-${stepIdx}`);
  const duration = parseFloat(durInput?.value) || 0;
  const distance = parseFloat(distInput?.value) || 0;

  const logs = loadLogs();
  let entry = logs.find(l => l.date === date && l.equipmentId === equipId && l.user === currentUser);

  if (!entry) {
    entry = { date, equipmentId: equipId, user: currentUser, sets: [], done: false, updatedAt: new Date().toISOString() };
    logs.push(entry);
  }

  entry.sets = [{ duration, distance }];
  entry.done = !entry.done;
  entry.updatedAt = new Date().toISOString();

  saveLogs(logs);
  saveLogToFirebase(entry);
  showToast(entry.done ? '완료!' : '완료 취소');
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
      const e = eq(log.equipmentId);
      if (!e) return;
      const userLabel = log.user === 'husband' ? '🧔 남편' : '👩 아내';

      let setsHtml = '';
      if (e.category === 'cardio') {
        setsHtml = log.sets.map(s =>
          `<div class="set-row-display"><span>${s.duration || 0}분 / ${s.distance || 0}km</span></div>`
        ).join('');
      } else {
        setsHtml = log.sets.filter(s => s.done).map((s, i) =>
          `<div class="set-row-display"><span>세트 ${i+1}</span><span>${s.weight ? s.weight+'kg × ' : ''}${s.reps}회</span></div>`
        ).join('');
      }

      html += `
        <div class="history-item">
          <div class="hi-header">
            <span class="hi-name">${e.name}</span>
            <span class="hi-user ${log.user}">${userLabel}</span>
            <button class="hi-delete" onclick="deleteLog('${date}','${log.equipmentId}','${log.user}')">삭제</button>
          </div>
          ${setsHtml}
        </div>`;
    });
    html += '</div>';
  });

  div.innerHTML = html;
}

function deleteLog(date, equipId, user) {
  if (!confirm('이 기록을 삭제하시겠습니까?')) return;
  let logs = loadLogs().filter(l => !(l.date === date && l.equipmentId === equipId && l.user === user));
  saveLogs(logs);
  deleteLogFromFirebase(date, equipId, user);
  showToast('삭제되었습니다');
  renderHistory();
}

document.getElementById('history-start').addEventListener('change', renderHistory);
document.getElementById('history-end').addEventListener('change', renderHistory);
document.getElementById('history-show-both').addEventListener('change', renderHistory);

// ===== 탭3: 운동 설명 =====
function renderGuide() {
  const cardioDiv = document.getElementById('guide-cardio');
  const strengthDiv = document.getElementById('guide-strength');
  let cardioHtml = '', strengthHtml = '';

  Object.entries(EQUIPMENT).forEach(([id, e]) => {
    const card = `
      <div class="guide-card" onclick="openVideo('${id}')">
        <span class="gc-play">▶️</span>
        <div>
          <div class="gc-name">${e.name}</div>
          <div class="gc-label">${e.labelKo}</div>
        </div>
      </div>`;
    if (e.category === 'cardio') cardioHtml += card;
    else strengthHtml += card;
  });

  cardioDiv.innerHTML = cardioHtml;
  strengthDiv.innerHTML = strengthHtml;
}

// ===== 동영상 모달 =====
function openVideo(equipId) {
  const e = eq(equipId);
  if (!e) return;
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
document.getElementById('log-date').addEventListener('change', renderProgram);

// ===== 초기화 =====
function initApp() {
  switchUser(currentUser);
  document.getElementById('log-date').value = getTodayStr();

  const today = getTodayStr();
  const ago = new Date(); ago.setDate(ago.getDate() - 30);
  document.getElementById('history-start').value = ago.getFullYear() + '-' + String(ago.getMonth()+1).padStart(2,'0') + '-' + String(ago.getDate()).padStart(2,'0');
  document.getElementById('history-end').value = today;

  renderProgram();

  if (firebaseReady) {
    loadLogs().forEach(e => saveLogToFirebase(e));
    startFirebaseSync();
  } else {
    const el = document.getElementById('sync-status');
    if (el) el.textContent = '오프라인 모드';
  }
}

document.addEventListener('DOMContentLoaded', initApp);
