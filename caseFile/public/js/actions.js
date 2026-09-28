async function startNewCase() {
  const nameInput = document.getElementById('nameInput');
  const name = nameInput ? nameInput.value.trim() : '';
  state.error = null;
  try {
    const res = await api('/case/generate', {
      method: 'POST',
      body: JSON.stringify({ playerName: name })
    });
    state.case = res.case;
    state.selectedLocation = null;
    state.history = [];
    state.actionError = null;
    state.screen = 'intro';
    render();
  } catch (e) {
    state.error = e.message;
    render();
  }
}

async function doAction(type) {
  if (state.loading) return;
  state.loading = true;
  const location = state.selectedLocation;
  try {
    const res = await api('/case/' + type, {
      method: 'POST',
      body: JSON.stringify({ location })
    });
    state.actionError = null;
    state.history.push({ location, type, data: res, day: res.day });
    const fresh = await api('/case');
    state.case = fresh;
  } catch (e) {
    state.actionError = e.message;
  }
  state.loading = false;
  render();
}

async function accuse(npcId) {
  try {
    const res = await api('/case/accuse', {
      method: 'POST',
      body: JSON.stringify({ npcId })
    });
    const fresh = await api('/case');
    state.case = fresh;
    alert(res.correct ? "You got it. It's them." : "Not them. You were wrong.");
  } catch (e) {
    alert(e.message);
  }
  render();
}
