// Escapa texto vindo de entrada do jogador (ex: nome do protagonista) antes de
// inseri-lo no innerHTML, evitando que HTML/script arbitrário seja injetado.
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str == null ? '' : String(str);
  return div.innerHTML;
}

function render() {
  const app = document.getElementById('app');
  if (state.screen === 'start') return renderStart(app);
  if (state.screen === 'intro') return renderIntro(app);
  return renderGame(app);
}

function renderStart(app) {
  app.innerHTML = `
    <div class="center-screen">
      <span class="stamp">CASE FILE — CONFIDENTIAL</span>
      <h1>Hollow Creek</h1>
      <p class="sub">A body was found on the outskirts of town. Before you begin, the record needs a name.</p>
      <input class="name-input" id="nameInput" placeholder="Your name" maxlength="40" />
      <div>
        <button id="startBtn">Begin the investigation</button>
      </div>
      <p style="color:var(--rust-bright);margin-top:16px;font-size:.85rem;">${state.error ? escapeHtml(state.error) : ''}</p>
    </div>
  `;
  document.getElementById('startBtn').onclick = () => startNewCase();
  document.getElementById('nameInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') startNewCase();
  });
}

function renderIntro(app) {
  app.innerHTML = `
    <div class="center-screen">
      <span class="stamp">Day 1</span>
      <h1>${escapeHtml(state.case.protagonist.name)}</h1>
      <div class="intro-text">${state.case.description}</div>
      <button id="continueBtn">Start Day 1</button>
    </div>
  `;
  document.getElementById('continueBtn').onclick = () => {
    state.screen = 'game';
    render();
  };
}

function statusBanner() {
  const c = state.case;

  if (c.status === 'solved') {
    return `
      <div class="banner solved">
        CASE CLOSED — you found your sister's killer.
        ${c.ending ? `<div class="ending-text">${escapeHtml(c.ending).trim()}</div>` : ''}
      </div>
    `;
  }

  if (c.status === 'over') {
    return `<div class="banner over">The deaths have piled up. No more time to wait — accuse someone now.</div>`;
  }

  if (c.status === 'lost') {
    return `
      <div class="banner over">
        THE KILLER GOT AWAY.
        ${c.ending ? `<div class="ending-text">${escapeHtml(c.ending).trim()}</div>` : ''}
      </div>
    `;
  }

  return '';
}

function postGameActions(c) {
  if (c.status !== 'solved' && c.status !== 'lost') return '';
  return `
    <div class="postgame-actions">
      <button class="ghost" id="newCaseBtn">Start a new case</button>
    </div>
  `;
}

function renderGame(app) {
  const c = state.case;
  const locations = c.npcs.map(n => n.location).sort();

  app.innerHTML = `
    <div class="topbar">
      <h1>Hollow Creek — Case File</h1>
      <div class="stats">
        <span>Day <b>${c.day}</b></span>
        <span>Deaths <b>${c.deathsCount}/${c.maxDeaths}</b></span>
        <span>Status <b>${c.status}</b></span>
      </div>
    </div>
    ${statusBanner()}
    ${postGameActions(c)}
    <div class="layout">
      <div class="panel">
        <h2>Locations</h2>
        <div id="locList"></div>
      </div>

      <div class="panel main-panel">
        <h2>${state.selectedLocation ? escapeHtml(state.selectedLocation) : 'Select a location'}</h2>
        <div id="mainContent"></div>
      </div>

      <div class="panel">
        <h2>Suspects</h2>
        <div id="suspectList"></div>
        <h2 style="margin-top:20px;">Notes</h2>
        <div class="log" id="logList"></div>
      </div>
    </div>
  `;

  const newCaseBtn = document.getElementById('newCaseBtn');
  if (newCaseBtn) {
    newCaseBtn.onclick = () => {
      state.screen = 'start';
      state.case = null;
      state.selectedLocation = null;
      state.history = [];
      state.actionError = null;
      state.error = null;
      render();
    };
  }

  renderLocationList(c, locations);
  renderMainContent(c);
  renderSuspects(c);
  renderLog(c);
}

function renderLocationList(c, locations) {
  const el = document.getElementById('locList');
  el.innerHTML = locations.map(loc => {
    const npc = c.npcs.find(n => n.location === loc);
    const active = state.selectedLocation === loc ? 'active' : '';
    const dead = !npc.alive ? 'dead' : '';
    return `
      <button class="loc-btn ${active} ${dead}" data-loc="${escapeHtml(loc)}">
        ${escapeHtml(loc)}
        <span class="who">${npc.alive ? escapeHtml(npc.name) + ' ' + escapeHtml(npc.lastname) : 'no one here anymore'}</span>
      </button>
    `;
  }).join('');
  el.querySelectorAll('.loc-btn').forEach(btn => {
    btn.onclick = () => {
      state.selectedLocation = btn.dataset.loc;
      state.actionError = null;
      render();
    };
  });
}

function renderMainContent(c) {
  const el = document.getElementById('mainContent');
  if (!state.selectedLocation) {
    el.innerHTML = `<p class="desc">Pick a location on the left to see what's there.</p>`;
    return;
  }

  const npc = c.npcs.find(n => n.location === state.selectedLocation);
  const gameOver = c.status !== 'active';
  const suspectDead = !npc.alive;

  const entries = state.history
    .filter(entry => entry.location === state.selectedLocation)
    .slice()
    .reverse();

  el.innerHTML = `
    <div class="actions">
      <button id="btnInvestigate" ${gameOver ? 'disabled' : ''}>Investigate</button>
      <button id="btnInterrogate" ${gameOver || suspectDead ? 'disabled' : ''}>Interrogate</button>
      <button id="btnTalk" ${gameOver || suspectDead ? 'disabled' : ''}>Talk</button>
      <button id="btnStay" ${gameOver || suspectDead ? 'disabled' : ''}>Stay the night</button>
    </div>
    <div id="errorBox"></div>
    <div class="result-stack">
      ${entries.length
        ? entries.map(renderHistoryEntry).join('')
        : '<p class="desc">Nothing done here yet.</p>'}
    </div>
  `;

  document.getElementById('btnInvestigate').onclick = () => doAction('investigate');
  document.getElementById('btnInterrogate').onclick = () => doAction('interrogate');
  document.getElementById('btnTalk').onclick = () => doAction('talk');
  document.getElementById('btnStay').onclick = () => doAction('stay');

  renderActionError();
}

function actionLabel(type) {
  return {
    investigate: 'Investigate',
    interrogate: 'Interrogate',
    talk: 'Talk',
    stay: 'Stay the night'
  }[type] || type;
}

function renderHistoryEntry(entry) {
  const { type, data, day } = entry;
  let inner = '';

  if (type === 'investigate') {
    const found = typeof data.foundObject === 'string' ? data.foundObject : data.foundObject.item;
    inner = `
      <div class="desc">${data.description}</div>
      <div class="result">
        <span class="tag">Found</span>
        ${escapeHtml(found)}
      </div>
    `;
  } else if (type === 'interrogate') {
    const a = data.answers;
    inner = `
      <div class="result">
        <span class="tag">${escapeHtml(data.suspect.name)} ${escapeHtml(data.suspect.lastname)} — ${escapeHtml(data.suspect.occupation)}</span>
        "${escapeHtml(a.whatHappened)}"<br><br>
        ${a.murderLocationGuess ? `<b>Where it happened:</b> ${escapeHtml(a.murderLocationGuess)}<br>` : ''}
        ${a.witnessSeen ? `<b>Seen near the victim:</b> ${escapeHtml(a.witnessSeen)}<br>` : ''}
        ${a.suspicion ? `<b>Who they suspect:</b> ${escapeHtml(a.suspicion)}` : ''}
      </div>
    `;
  } else if (type === 'talk') {
    inner = `
      <div class="result">
        <span class="tag">${escapeHtml(data.suspect.name)} ${escapeHtml(data.suspect.lastname)}</span>
        "${escapeHtml(data.line)}"
      </div>
    `;
  } else if (type === 'stay') {
    inner = `
      <div class="result ${data.staySafe ? '' : 'bad'}">
        <span class="tag">${data.staySafe ? 'Quiet night' : 'Someone died'}</span>
        ${data.staySafe
          ? 'Nothing happened tonight.'
          : `${escapeHtml(data.deceased.name)} ${escapeHtml(data.deceased.lastname)} was found dead this morning at ${escapeHtml(data.deceased.location)}.`}
      </div>
    `;
  }

  return `
    <div class="history-entry">
      <span class="history-meta">Day ${day} — ${escapeHtml(actionLabel(type))}</span>
      ${inner}
    </div>
  `;
}

function renderActionError() {
  const box = document.getElementById('errorBox');
  if (!box) return;
  if (!state.actionError) { box.innerHTML = ''; return; }
  box.innerHTML = `
    <div class="result bad">
      <span class="tag">Couldn't do that</span>
      ${escapeHtml(state.actionError)}
    </div>
  `;
}

function renderSuspects(c) {
  const el = document.getElementById('suspectList');
  const caseOver = c.status === 'solved' || c.status === 'lost';
  el.innerHTML = c.npcs.map(n => `
    <div class="suspect-row ${!n.alive ? 'dead' : ''}">
      <span class="name">${escapeHtml(n.name)} ${escapeHtml(n.lastname)}</span>
      <span class="meta">${escapeHtml(n.occupation)} · ${escapeHtml(n.trait)} · ${escapeHtml(n.location)}</span>
      ${n.alive ? `<button data-id="${n.id}" class="ghost accuseBtn" ${caseOver ? 'disabled' : ''}>Accuse</button>` : ''}
    </div>
  `).join('');
  el.querySelectorAll('.accuseBtn').forEach(btn => {
    btn.onclick = () => accuse(btn.dataset.id);
  });
}

function renderLog(c) {
  const el = document.getElementById('logList');
  if (!c.log.length) { el.innerHTML = '<p style="color:var(--paper-dim);">Nothing recorded yet.</p>'; return; }
  el.innerHTML = [...c.log].reverse().map(entry => `
    <div class="log-entry">
      <b>Day ${entry.day} — ${escapeHtml(entry.type)}</b><br>${escapeHtml(entry.location)}
    </div>
  `).join('');
}
