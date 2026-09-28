// Configuração e estado global da aplicação.
// Rotas montadas em /api/case e /api/character (ver app.js).
const API_BASE = '/api';

const state = {
  screen: 'start',      // start | intro | game
  playerName: '',
  case: null,            // resposta de getPublicCase()
  selectedLocation: null,
  history: [],           // [{ location, type, data, day }, ...] — todas as ações já feitas, empilhadas por local
  actionError: null,     // mensagem de erro da última ação tentada (transiente)
  loading: false,
  error: null
};
