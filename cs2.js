// CS2 Trainer Career JavaScript Core
// Однофайловый автономный скрипт с реалистичными данными

const GAME_CONFIG = {
  // РЕАЛЬНЫЕ названия команд (топ-30 HLTV)
  teams: [
    "NAVI", "FaZe", "Vitality", "G2", "MOUZ", "Spirit", "Astralis",
    "Heroic", "Liquid", "Cloud9", "Falcons", "Virtus.pro", "Complexity",
    "paiN", "FURIA", "The MongolZ", "G2", "BIG", "Natus Vincere",
    "Team Spirit", "FCM", "5DNES", "ENDCLIP", "M80", "OG", "Imperial",
    "Fluxo", "Ferreira's Gang", "Rebellion", "AvantGaming"
  ],

  // РЕАЛЬНЫЕ турниры
  tournaments: [
    { name: "BLAST.tv Major", prize: 2500000, rounds: 6, teams: 32 },
    { name: "PGL Major", prize: 2250000, rounds: 6, teams: 32 },
    { name: "IEM Katowice", prize: 850000, rounds: 4, teams: 16 },
    { name: "IEM Cologne", prize: 950000, rounds: 4, teams: 16 },
    { name: "BLAST Premier", prize: 400000, rounds: 12, teams: 24 },
    { name: "ESL Pro League", prize: 600000, rounds: 3, teams: 24 },
    { name: "PGL Major", prize: 2500000, rounds: 6, teams: 32 },
    { name: "Regional Qualifiers", prize: 150000, rounds: 3, teams: 8 }
  ],

  // РЕАЛЬНЫЕ игроки с реалистичными ролями и рейтингами 1.0–1.30
  players: [
    // Tier 1
    { name: "s1mple", rating: 1.30, role: "IGL", country: "Ukraine", price: 8000000, wage: 150000, contract: 2 },
    { name: "ZywOo", rating: 1.28, role: "AWPer", country: "France", price: 7500000, wage: 140000, contract: 2 },
    { name: "donk", rating: 1.26, role: "rifler", country: "Ukraine", price: 6000000, wage: 120000, contract: 2 },
    { name: "m0NESY", rating: 1.24, role: "entry", country: "Ukraine", price: 5500000, wage: 110000, contract: 2 },
    { name: "NiKo", rating: 1.22, role: "rifler", country: "Bosnia", price: 5000000, wage: 115000, contract: 2 },
    { name: "device", rating: 1.20, role: "AWPer", country: "Denmark", price: 4500000, wage: 105000, contract: 2 },
    { name: "ropz", rating: 1.18, role: "rifler", country: "Sweden", price: 4000000, wage: 95000, contract: 2 },
    { name: "sh1ro", rating: 1.16, role: "entry", country: "Russia", price: 3800000, wage: 90000, contract: 2 },
    { name: "frozen", rating: 1.14, role: "support", country: "Finland", price: 3000000, wage: 85000, contract: 2 },
    { name: "Jimpphat", rating: 1.12, role: "rifler", country: "Finland", price: 2500000, wage: 80000, contract: 2 },

    // Tier 2
    { name: "Zdzonie", rating: 1.10, role: "AWPer", country: "Poland", price: 2000000, wage: 70000, contract: 1 },
    { name: "Kuvak", rating: 1.08, role: "rifler", country: "Poland", price: 1500000, wage: 65000, contract: 1 },
    { name: "MANTIC", rating: 1.06, role: "support", country: "Ukraine", price: 1200000, wage: 60000, contract: 1 },
    { name: "GODWILL", rating: 1.04, role: "entry", country: "Ukraine", price: 1000000, wage: 55000, contract: 1 },
    { name: "RANKO", rating: 1.02, role: "rifler", country: "Romania", price: 900000, wage: 50000, contract: 1 },
    { name: "YEKOC", rating: 1.00, role: "rifler", country: "Romania", price: 800000, wage: 45000, contract: 1 },
    { name: "a1", rating: 0.98, role: "support", country: "Sweden", price: 700000, wage: 40000, contract: 1 },
    { name: "Boltz", rating: 0.96, role: "rifler", country: "Poland", price: 600000, wage: 35000, contract: 1 },

    // Tier 3
    { name: "Kuvak", rating: 1.10, role: "rifler", country: "Poland", price: 1500000, wage: 65000, contract: 1 },
    { name: "MANTIC", rating: 1.08, role: "support", country: "Ukraine", price: 1200000, wage: 60000, contract: 1 },
    { name: "GODWILL", rating: 1.06, role: "entry", country: "Ukraine", price: 1000000, wage: 55000, contract: 1 },
    { name: "RANKO", rating: 1.04, role: "rifler", country: "Romania", price: 900000, wage: 50000, contract: 1 },
    { name: "YEKOC", rating: 1.02, role: "rifler", country: "Romania", price: 800000, wage: 45000, contract: 1 },
    { name: "a1", rating: 1.00, role: "support", country: "Sweden", price: 700000, wage: 40000, contract: 1 },
    { name: "Boltz", rating: 0.98, role: "rifler", country: "Poland", price: 600000, wage: 35000, contract: 1 },
    { name: "BiGANG", rating: 0.96, role: "support", country: "Russia", price: 500000, wage: 30000, contract: 1 },
    { name: "Boyka", rating: 0.94, role: "entry", country: "Ukraine", price: 400000, wage: 25000, contract: 1 }
  ],

  // РЕАЛЬНЫЕ карты
  maps: ["Mirage", "Inferno", "Nuke", "Ancient", "Anubis", "Vertigo", "Dust2"],

  // Стили тактики
  tactics: {
    aggressive: { attack: 15, defense: -10, force: 10 },
    balanced: { attack: 5, defense: 5, force: 5 },
    defensive: { attack: -5, defense: 15, force: -10 }
  }
};

// Основные объекты игры
const Game = {
  state: {
    coachName: '',
    teamName: '',
    tier: 1,
    budget: 0,
    reputation: 0,
    season: 1,
    matchesPlayed: 0,
    matchesWon: 0,
    tactics: 'balanced',
    selectedPlayers: [],
    benchPlayers: [],
    transfers: [],
    seasonCalendar: [],
    currentTournament: null,
    matchLog: [],
    coachHistory: [],
    freeAgents: [],
    lastSaveTime: Date.now()
  },

  init() {
    this.loadOrCreate();
    this.generateRealTeam();
    this.generateSeasonCalendar();
    this.generateTournament();
    this.generateFreeAgents();
    this.renderUI();
  },

  save() {
    const stateJSON = JSON.stringify(this.state);
    localStorage.setItem('cs2_trainer_state', stateJSON);
    this.state.lastSaveTime = Date.now();
  },

  loadOrCreate() {
    const saved = localStorage.getItem('cs2_trainer_state');
    if (saved) {
      try {
        Object.assign(this.state, JSON.parse(saved));
        return;
      } catch (e) {
        console.error('Failed to parse save:', e);
      }
    }

    // Новая игра
    this.state = {
      coachName: '',
      teamName: '',
      tier: 1,
      budget: 0,
      reputation: 0,
      season: 1,
      matchesPlayed: 0,
      matchesWon: 0,
      tactics: 'balanced',
      selectedPlayers: [],
      benchPlayers: [],
      transfers: [],
      seasonCalendar: [],
      currentTournament: null,
      matchLog: [],
      coachHistory: [],
      freeAgents: [],
      lastSaveTime: Date.now()
    };
  },

  // Генерация реалистичной команды
  generateRealTeam() {
    const opponents = [
      { name: "NAVI", tier: 1 }, { name: "FaZe", tier: 1 }, { name: "Spirit", tier: 1 },
      { name: "G2", tier: 1 }, { name: "Team Secret", tier: 2 }, { name: "BIG", tier: 2 },
      { name: "Natus Vincere", tier: 1 }, { name: "Heroic", tier: 1 }, { name: "Liquid", tier: 1 },
      { name: "Cloud9", tier: 2 }, { name: "Virtus.pro", tier: 2 }, { name: "Complexity", tier: 2 },
      { name: "paiN", tier: 2 }, { name: "FURIA", tier: 2 }, { name: "MOUZ", tier: 1 },
      { name: "Astralis", tier: 1 }, { name: "Falcons", tier: 3 }, { name: "The MongolZ", tier: 3 }
    ];

    const randomTeam = opponents[Math.floor(Math.random() * opponents.length)];
    this.state.teamName = randomTeam.name;
    this.state.tier = randomTeam.tier;

    // Выбираем 5 реальных игроков, подходящих по тиру
    const pool = GAME_CONFIG.players.filter(p => {
      if (randomTeam.tier === 1) return p.rating >= 1.20;
      if (randomTeam.tier === 2) return p.rating >= 1.00 && p.rating < 1.20;
      return p.rating < 1.00;
    });

    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    this.state.selectedPlayers = selected.map(p => ({ ...p }));
    this.state.benchPlayers = [];

    // Устанавливаем начальный бюджет
    this.state.budget = this.state.tier === 1 ? 8000000 : (this.state.tier === 2 ? 3000000 : 800000);
  },

  // Генерация календаря матчей на сезон
  generateSeasonCalendar() {
    const now = new Date();
    this.state.seasonCalendar = [];

    const weeks = [];
    for (let i = 0; i < 30; i++) {
      const date = new Date(now);
      date.setDate(now.getDate() + i * 7);
      weeks.push(date);
    }

    weeks.forEach((date, index) => {
      const matches = [];

      // Генерируем матчи против разных команд
      const opponents = this.generateOpponentList();
      opponents.forEach((opp, i) => {
        const isHome = i % 2 === 0;
        const time = new Date(date);
        time.setHours(19 + Math.floor(Math.random() * 6), Math.random() * 60);

        const match = {
          date: time,
          opponent: opp.name,
          opponentTier: opp.tier,
          map: GAME_CONFIG.maps[Math.floor(Math.random() * GAME_CONFIG.maps.length)],
          format: Math.random() > 0.5 ? 'Best-of-1' : 'Best-of-3',
          home: isHome,
          played: false,
          result: null,
          score: null,
          id: `match_${index}_${i}`
        };

        if (match.opponent === this.state.teamName) {
          match.opponent = opponents[(i + 1) % opponents.length].name;
        }

        matches.push(match);
      });

      // Записываем матч каждую неделю
      if (index < 20) {
        this.state.seasonCalendar.push(...matches.slice(0, 2));
      }
    });
  },

  // Список Opponents для матчей
  generateOpponentList() {
    const allTeams = GAME_CONFIG.teams.filter(t => t !== this.state.teamName);
    const shuffled = [...allTeams].sort(() => 0.5 - Math.random());
    const tier = this.state.tier;

    const opponents = [];
    for (let i = 0; i < 3; i++) {
      const candidates = shuffled.filter(t => {
        if (tier === 1) return true; // любая для Tier1
        if (tier === 2) return Math.random() > 0.3; // 70% Tier2, 30% Tier1
        return Math.random() > 0.7; // 30% Tier2, 70% Tier3
      });

      if (candidates.length === 0) candidates.push(...shuffled);
      const pick = candidates[Math.floor(Math.random() * candidates.length)];

      let oppTier = 3;
      if (pick.includes('NAVI') || pick.includes('FaZe') || pick.includes('Spirit')) oppTier = 1;
      else if (pick.includes('G2') || pick.includes('BIG') || pick.includes('Natus Vincere')) oppTier = 2;

      opponents.push({ name: pick, tier: oppTier });
    }

    return opponents;
  },

  // Генерация текущего турнира
  generateTournament() {
    const randomIndex = Math.floor(Math.random() * GAME_CONFIG.tournaments.length);
    this.state.currentTournament = GAME_CONFIG.tournaments[randomIndex];
  },

  // Генерация списка свободных агентов
  generateFreeAgents() {
    const free = [];
    GAME_CONFIG.players.forEach(p => {
      if (!this.state.selectedPlayers.some(sp => sp.name === p.name) &&
          !this.state.benchPlayers.some(bp => bp.name === p.name)) {
        free.push(p);
      }
    });
    this.state.freeAgents = free.sort((a, b) => b.rating - a.rating);
  },

  // Переход к матчу
  goToMatch(matchId) {
    const match = this.state.seasonCalendar.find(m => m.id === matchId);
    if (!match || match.played) return;

    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('matchScreen').classList.add('active');

    this.setMatchData(match);
    this.renderMatchLog();
  },

  // Установка данных матча
  setMatchData(match) {
    document.getElementById('matchTeamName1').textContent = this.state.teamName;
    document.getElementById('matchTeamName2').textContent = match.opponent;
    document.getElementById('matchScore1').textContent = '0';
    document.getElementById('matchScore2').textContent = '0';
    document.querySelector('.map').textContent = match.map;
    document.querySelector('.format').textContent = match.format;
    document.querySelector('.time').textContent = this.formatDate(match.date);

    // Обновляем таймер таймаутов
    this.timeoutCount = 0;
    this.updateTimeoutBtn();

    // Сбрасываем действия
    this.resetMatchActions();
  },

  // Запуск матча
  startMatch() {
    this.addLog('Матч начался!');
    this.setMatchStatus('Игра идет...');

    this.matchInterval = setInterval(() => {
      this.simulateMatchRound();
    }, 2000);

    this.updateStartBtn(false);
    this.hideMatchActions();
  },

  // Симуляция раунда матча
  simulateMatchRound() {
    if (this.state.matchRoundCount === undefined) this.state.matchRoundCount = 0;
    this.state.matchRoundCount++;

    // Случайный исход раунда
    const roundResult = this.simulateRound();

    this.addLog(`${roundResult.log}`);
    this.updateMatchScore(roundResult.score);

    // Проверка окончания раунда
    if (roundResult.gameEnded) {
      this.endMatch(roundResult.winner);
    }
  },

  // Симуляция одного раунда
  simulateRound() {
    const roundType = this.determineRoundType();
    const teamsPower = this.calculateTeamPower();
    const score = { home: 0, away: 0 };

    switch (roundType) {
      case 'pistol':
        return this.simulatePistolRound(teamsPower, score);
      case 'eco':
        return this.simulateEcoRound(teamsPower, score);
      case 'halfforce':
        return this.simulateHalfForceRound(teamsPower, score);
      case 'force':
        return this.simulateForceRound(teamsPower, score);
      case 'clutch':
        return this.simulateClutchRound(teamsPower, score);
      default:
        return { log: 'Неизвестный раунд', score, gameEnded: false, winner: null };
    }
  },

  // Определение типа раунда
  determineRoundType() {
    const rand = Math.random();
    const tacticsEffect = this.getTacticsEffect();

    if (rand < 0.15 + tacticsEffect.force / 100) return 'force';
    if (rand < 0.30 + tacticsEffect.attack / 100) return 'halfforce';
    if (rand < 0.45) return 'pistol';
    if (rand < 0.60) return 'eco';
    if (rand < 0.75) return 'halfforce';
    return 'clutch';
  },

  // Симуляция пистолетного раунда
  simulatePistolRound(teamsPower, score) {
    const winner = this.determineRoundWinner(teamsPower.pistol, teamsPower.eco);
    const log = this.generateRoundLog(winner, 'pistol', teamsPower);

    if (winner === 'home') score.home = 1;
    else if (winner === 'away') score.away = 1;

    return { log, score, gameEnded: false, winner: null };
  },

  // Симуляция эко-раунда
  simulateEcoRound(teamsPower, score) {
    const winner = this.determineRoundWinner(teamsPower.eco, teamsPower.eco);
    const log = this.generateRoundLog(winner, 'eco', teamsPower);

    if (winner === 'home') score.home = 1;
    else if (winner === 'away') score.away = 1;

    return { log, score, gameEnded: false, winner: null };
  },

  // Симуляция полу-форс-раунда
  simulateHalfForceRound(teamsPower, score) {
    const winner = this.determineRoundWinner(teamsPower.halfforce, teamsPower.eco);
    const log = this.generateRoundLog(winner, 'halfforce', teamsPower);

    if (winner === 'home') score.home = 1;
    else if (winner === 'away') score.away = 1;

    return { log, score, gameEnded: false, winner: null };
  },

  // Симуляция форс-раунда
  simulateForceRound(teamsPower, score) {
    const winner = this.determineRoundWinner(teamsPower.force, teamsPower.force);
    const log = this.generateRoundLog(winner, 'force', teamsPower);

    if (winner === 'home') score.home = 2; // форс приносит 2 фрага
    else if (winner === 'away') score.away = 2;

    return { log, score, gameEnded: false, winner: null };
  },

  // Симуляция клатч-раунда
  simulateClutchRound(teamsPower, score) {
    const winner = Math.random() > 0.5 ? 'home' : 'away';
    const log = this.generateRoundLog(winner, 'clutch', teamsPower);

    if (winner === 'home') score.home = 3; // клатч — 3 фрага
    else if (winner === 'away') score.away = 3;

    return { log, score, gameEnded: false, winner: null };
  },

  // Определение победителя раунда
  determineRoundWinner(homePower, awayPower) {
    const diff = (homePower - awayPower) * 10;
    const threshold = 30 + (Math.random() * 20 - 10);

    if (diff > threshold) return 'home';
    if (diff < -threshold) return 'away';

    return Math.random() > 0.5 ? 'home' : 'away';
  },

  // Генерация лога раунда
  generateRoundLog(winner, type, teamsPower) {
    const player = winner === 'home' ?
      this.state.selectedPlayers[Math.floor(Math.random() * this.state.selectedPlayers.length)] :
      this.state.selectedPlayers[Math.floor(Math.random() * this.state.selectedPlayers.length)];

    const actions = {
      pistol: ['оглушил противника', 'пистолетный клатч', 'убил первого врага'],
      eco: ['экономил', 'ничего не сделал', 'бросил гранату'],
      halfforce: ['полу-форс атака', 'рф с оружием', 'быстрый добив'],
      force: ['форс-бай, убийство!', 'атака с оружием', 'головокружительный рывок'],
      clutch: ['клатч, Miracle!', 'спас позицию', 'победный килл']
    };

    const action = actions[type][Math.floor(Math.random() * actions[type].length)];
    const name = player ? player.name : 'Команда';

    return `${name} — ${action} (${type})`;
  },

  // Расчет силы команд
  calculateTeamPower() {
    const basePower = {
      pistol: this.calculatePistolPower(),
      eco: this.calculateEcoPower(),
      halfforce: this.calculateHalfForcePower(),
      force: this.calculateForcePower(),
      clutch: this.calculateClutchPower()
    };

    const tactics = this.getTacticsEffect();
    const adjusted = {
      pistol: basePower.pistol * (1 + tactics.defense / 100),
      eco: basePower.eco * (1 + tactics.attack / 100),
      halfforce: basePower.halfforce * (1 + (tactics.defense + tactics.attack) / 200),
      force: basePower.force * (1 + tactics.force / 100),
      clutch: basePower.clutch * (1 + tactics.attack / 100)
    };

    return {
      pistol: (adjusted.pistol + adjusted.eco) / 2,
      eco: (adjusted.eco + adjusted.pistol) / 2,
      halfforce: (adjusted.halfforce + adjusted.force) / 2,
      force: (adjusted.force + adjusted.clutch) / 2,
      clutch: (adjusted.clutch + adjusted.halfforce) / 2
    };
  },

  // Расчет силы пистолетов
  calculatePistolPower() {
    let power = 0;
    this.state.selectedPlayers.forEach(p => {
      if (p.role === 'entry' || p.role === 'rifler') {
        power += p.rating * (p.form / 100);
      }
    });
    return power || 1;
  },

  // Расчет силы эко
  calculateEcoPower() {
    let power = 0;
    this.state.selectedPlayers.forEach(p => {
      if (p.role === 'support' || p.role === 'IGL') {
        power += p.rating * (p.morale / 100);
      }
    });
    return power || 1;
  },

  // Расчет силы полу-форс
  calculateHalfForcePower() {
    let power = 0;
    this.state.selectedPlayers.forEach(p => {
      if (p.role === 'AWPer') {
        power += p.rating * (p.form / 100) * 1.5;
      }
    });
    return power || 1;
  },

  // Расчет силы форс-бай
  calculateForcePower() {
    let power = 0;
    this.state.selectedPlayers.forEach(p => {
      if (p.role === 'rifler') {
        power += p.rating * (p.fatigue / 100);
      }
    });
    return power || 1;
  },

  // Расчет силы клатча
  calculateClutchPower() {
    let power = 0;
    this.state.selectedPlayers.forEach(p => {
      if (p.role === 'entry') {
        power += p.rating * (p.morale / 100);
      }
    });
    return power || 1;
  },

  // Получение эффекта тактики
  getTacticsEffect() {
    return GAME_CONFIG.tactics[this.state.tactics] || GAME_CONFIG.tactics.balanced;
  },

  // Обновление счета
  updateMatchScore(score) {
    document.getElementById('matchScore1').textContent = score.home;
    document.getElementById('matchScore2').textContent = score.away;
  },

  // Завершение матча
  endMatch(winner) {
    clearInterval(this.matchInterval);
    const homeScore = parseInt(document.getElementById('matchScore1').textContent);
    const awayScore = parseInt(document.getElementById('matchScore2').textContent);

    this.addLog(`Матч окончен! Счет: ${homeScore} — ${awayScore}`);
    this.setMatchStatus(`Победил ${winner === 'home' ? this.state.teamName : document.getElementById('matchTeamName2').textContent}`);

    // Обновление статистики
    this.state.matchesPlayed++;
    if (winner === 'home') {
      this.state.matchesWon++;
      this.addLog('Победа укрепила позиции команды!');
    } else {
      this.addLog('Поражение пошло на пользу — больше мотивации.');
    }

    // Обновление рейтинга игроков
    this.updatePlayerRatings(winner, homeScore, awayScore);

    // Обновление репутации тренера
    this.updateCoachReputation();

    // Сохранение
    this.save();

    // Показ действий для следующего матча
    setTimeout(() => {
      this.showMatchActions();
      this.updateStartBtn(true);
    }, 2000);
  },

  // Обновление рейтинга игроков
  updatePlayerRatings(winner, homeScore, awayScore) {
    const isHome = winner === 'home';
    const ourScore = isHome ? homeScore : awayScore;
    const oppScore = isHome ? awayScore : homeScore;

    this.state.selectedPlayers.forEach(player => {
      let ratingChange = 0.01;

      if (ourScore > oppScore) {
        ratingChange += 0.05;
        if (player.role === 'entry' && ourScore >= 2) ratingChange += 0.03;
        if (player.role === 'IGL' && ourScore >= 3) ratingChange += 0.04;
        if (player.role === 'AWPer' && ourScore >= 2) ratingChange += 0.02;
      } else {
        ratingChange -= 0.02;
        if (player.role === 'entry') ratingChange -= 0.03;
        if (player.role === 'IGL') ratingChange -= 0.04;
      }

      // Применяем изменение с ограничением
      player.rating = Math.max(0.5, Math.min(2.0, (player.rating || 1.0) + ratingChange));
      player.form = Math.max(0, Math.min(100, (player.form || 80) + (Math.random() - 0.5) * 20));
      player.morale = Math.max(0, Math.min(100, (player.morale || 80) + (Math.random() - 0.5) * 15));
      player.fatigue = Math.max(0, Math.min(100, (player.fatigue || 30) + 20));
    });
  },

  // Обновление репутации тренера
  updateCoachReputation() {
    const reputationGain = Math.floor((this.state.matchesWon / this.state.matchesPlayed) * 100);
    this.state.reputation += reputationGain;
  },

  // Форматирование даты
  formatDate(date) {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
  },

  // Добавление лога
  addLog(message) {
    const logEl = document.getElementById('matchLog');
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = `<span class="log-time">${timeStr}</span> ${message}`;

    logEl.appendChild(entry);
    logEl.scrollTop = logEl.scrollHeight;

    this.state.matchLog.push({ time: timeStr, message });
  },

  // Отображение лога матча
  renderMatchLog() {
    const logEl = document.getElementById('matchLog');
    logEl.innerHTML = '';

    this.state.matchLog.forEach(entry => {
      const div = document.createElement('div');
      div.className = 'log-entry';
      div.innerHTML = `<span class="log-time">${entry.time}</span> ${entry.message}`;
      logEl.appendChild(div);
    });
  },

  // Обновление состояния экрана матча
  setMatchStatus(text) {
    document.getElementById('matchStatus').textContent = text;
  },

  // Скрыть действия матча
  hideMatchActions() {
    document.getElementById('matchActions').classList.add('hidden');
  },

  // Показать действия матча
  showMatchActions() {
    document.getElementById('matchActions').classList.remove('hidden');
  },

  // Обновление кнопки начала матча
  updateStartBtn(show) {
    const btn = document.getElementById('startMatchBtn');
    btn.textContent = show ? 'Начать матч' : 'Матч идет...';
    btn.disabled = !show;
  },

  // Обновление кнопки таймаута
  updateTimeoutBtn() {
    const btn = document.getElementById('timeoutBtn');
    btn.textContent = `Тайм-аут (${this.timeoutCount}/3)`;
    btn.disabled = this.timeoutCount >= 3;
  },

  // Сброс действий матча
  resetMatchActions() {
    this.timeoutCount = 0;
    this.updateTimeoutBtn();
    this.hideMatchActions();
  },

  // Обработчик таймаута
  timeoutClicked() {
    if (this.timeoutCount < 3) {
      this.timeoutCount++;
      this.addLog(`Тренер запросил тайм-аут (${this.timeoutCount}/3)`);
      this.updateTimeoutBtn();

      // Эффект таймаута — снижение усталости игроков
      this.state.selectedPlayers.forEach(p => {
        p.fatigue = Math.max(0, p.fatigue - 30);
      });

      this.save();
    }
  },

  // Обработчик смены тактики
  changeTacticsClicked() {
    const tactics = ['aggressive', 'balanced', 'defensive'];
    const currentIndex = tactics.indexOf(this.state.tactics);
    const nextIndex = (currentIndex + 1) % tactics.length;
    this.state.tactics = tactics[nextIndex];

    this.addLog(`Тренер сменил тактику на: ${this.state.tactics}`);

    // Эффект смены тактики — изменение формы
    this.state.selectedPlayers.forEach(p => {
      p.form = Math.max(0, p.form - 20);
    });

    this.save();
    this.renderTacticsPanel();
    this.updateTacticsStats();
  },

  // Переход к профилю
  goToProfile() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('profileScreen').classList.add('active');
    this.renderProfileScreen();
  },

  // Переход к хабу
  goToHub() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('hubScreen').classList.add('active');
    this.renderHubScreen();
  },

  // Переход к началу
  goToStart() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('startScreen').classList.add('active');
  },

  // Переход к экрану матча
  goToMatchScreen() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('matchScreen').classList.add('active');
  },

  // Переход к экрану окончания игры
  goToGameOver() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('gameOverScreen').classList.add('active');
    this.renderGameOverScreen();
  },

  // Обработчик старта
  startClicked() {
    const coachName = document.getElementById('coachName').value.trim();
    if (!coachName) {
      this.showToast('Введите имя тренера');
      return;
    }

    this.state.coachName = coachName;
    this.state.teamName = this.state.teamName || this.generateRandomTeamName();

    document.getElementById('coachNameDisplay').textContent = coachName;

    // Сохраняем первый выбор тренера
    const historyEntry = {
      teamName: this.state.teamName,
      tier: this.state.tier,
      season: this.state.season,
      reputation: this.state.reputation,
      date: new Date().toLocaleDateString()
    };
    this.state.coachHistory.push(historyEntry);

    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('hubScreen').classList.add('active');
    this.renderHubScreen();

    this.save();
  },

  // Генерация случайного названия команды
  generateRandomTeamName() {
    const prefixes = ['Team', 'Global', 'United', 'Real', 'Eternal', 'Ultimate'];
    const suffixes = ['Gaming', 'ESports', 'Pro', 'Elite', 'Rising', 'Force'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return `${prefix} ${suffix}`;
  },

  // Отображение хаба
  renderHubScreen() {
    document.getElementById('coachNameDisplay').textContent = this.state.coachName;
    document.getElementById('coachReputation').textContent = this.state.reputation;
    document.getElementById('currentSeason').textContent = this.state.season;
    document.getElementById('coachBudget').textContent = `${this.state.budget} млн`;

    // Отображение списка матчей
    this.renderCalendar();

    // Отображение турниров
    this.renderTournamentsPanel();

    // Отображение тактики
    this.renderTacticsPanel();

    this.save();
  },

  // Отображение календаря
  renderCalendar() {
    const container = document.querySelector('#calendarPanel .calendar-grid');
    if (!container) return;

    container.innerHTML = '';

    const today = new Date();
    this.state.seasonCalendar.forEach(match => {
      const matchDate = new Date(match.date);
      const dayElement = document.createElement('div');
      dayElement.className = 'day-cell';
      dayElement.textContent = matchDate.getDate();

      if (match.played) {
        dayElement.classList.add('played');
      }
      if (matchDate.toDateString() === today.toDateString()) {
        dayElement.classList.add('today');
      }
      if (!match.played) {
        dayElement.classList.add('has-match');
        dayElement.title = `${match.opponent} — ${match.map}`;
        dayElement.onclick = () => this.goToMatch(match.id);
      }

      container.appendChild(dayElement);
    });
  },

  // Отображение турниров
  renderTournamentsPanel() {
    const container = document.querySelector('#tournamentsPanel .tournaments-list');
    if (!container) return;

    container.innerHTML = '';

    if (this.state.currentTournament) {
      const div = document.createElement('div');
      div.className = 'tournament-card';
      div.innerHTML = `
        <div class="tournament-name">${this.state.currentTournament.name}</div>
        <div class="tournament-info">Призовой фонд: $${this.state.currentTournament.prize.toLocaleString()}</div>
        <div class="tournament-info">Раунды: ${this.state.currentTournament.rounds}</div>
        <div class="tournament-info">Команды: ${this.state.currentTournament.teams}</div>
      `;
      container.appendChild(div);
    }
  },

  // Отображение тактики
  renderTacticsPanel() {
    document.getElementById('tacticAttack').textContent = this.getTacticsEffect().attack;
    document.getElementById('tacticDefense').textContent = this.getTacticsEffect().defense;
    document.getElementById('tacticForce').textContent = this.getTacticsEffect().force;

    // Подсветка выбранной тактики
    document.querySelectorAll('.tactic-card').forEach(card => {
      card.classList.remove('selected');
      if (card.dataset.tactic === this.state.tactics) {
        card.classList.add('selected');
      }
    });
  },

  // Обновление статистики тактики
  updateTacticsStats() {
    const effect = this.getTacticsEffect();
    document.getElementById('tacticAttack').textContent = effect.attack;
    document.getElementById('tacticDefense').textContent = effect.defense;
    document.getElementById('tacticForce').textContent = effect.force;
  },

  // Отображение профиля тренера
  renderProfileScreen() {
    document.getElementById('profileCoachName').textContent = this.state.coachName;
    document.getElementById('profileMatches').textContent = this.state.matchesPlayed;
    document.getElementById('profileWins').textContent = this.state.matchesWon;
    document.getElementById('profileAvgRating').textContent = (this.state.selectedPlayers.reduce((sum, p) => sum + p.rating, 0) / this.state.selectedPlayers.length || 0).toFixed(2);

    // Отображение истории команд
    const container = document.querySelector('.history-list');
    if (!container) return;

    container.innerHTML = '';
    this.state.coachHistory.forEach(entry => {
      const div = document.createElement('div');
      div.className = 'history-item';
      div.innerHTML = `
        <strong>${entry.teamName}</strong> (Тир ${entry.tier}) — Сезон ${entry.season}<br>
        Репутация: ${entry.reputation} ★ — ${entry.date}
      `;
      container.appendChild(div);
    });
  },

  // Отображение экрана окончания игры
  renderGameOverScreen() {
    document.getElementById('gameOverTitle').textContent = `Сезон завершен — ${this.state.teamName}`;
    document.getElementById('finalMatches').textContent = this.state.matchesPlayed;
    document.getElementById('finalWins').textContent = this.state.matchesWon;
    document.getElementById('finalAvgRating').textContent = (this.state.selectedPlayers.reduce((sum, p) => sum + p.rating, 0) / this.state.selectedPlayers.length || 0).toFixed(2);
    document.getElementById('finalReputation').textContent = this.state.reputation;
  },

  // Отображение UI
  renderUI() {
    this.renderSquadPanel();
    this.renderTransfersPanel();
    this.renderCalendar();
    this.renderTournamentsPanel();
    this.renderTacticsPanel();
    this.renderProfileScreen();
  },

  // Отображение состава
  renderSquadPanel() {
    const grid = document.querySelector('.players-grid');
    if (!grid) return;

    grid.innerHTML = '';

    this.state.selectedPlayers.forEach((player, index) => {
      const card = document.createElement('div');
      card.className = 'player-card';
      card.dataset.index = index;
      if (this.state.selectedPlayers.indexOf(player) === 0) card.classList.add('selected');

      card.innerHTML = `
        <div class="player-avatar">${player.name.charAt(0)}</div>
        <div class="player-name">${player.name}</div>
        <div class="player-role">${player.role}</div>
        <div class="player-stats">
          <div>Рейтинг: ${player.rating.toFixed(2)}</div>
          <div>Форма: ${player.form}%</div>
          <div>Мораль: ${player.morale}%</div>
          <div>Усталость: ${player.fatigue}%</div>
        </div>
      `;

      card.onclick = () => this.selectPlayer(index);
      grid.appendChild(card);
    });

    // Отображение скамейки
    this.renderBenchPanel();
  },

  // Отображение скамейки
  renderBenchPanel() {
    const bench = document.querySelector('.bench-grid');
    if (!bench) return;

    bench.innerHTML = '';

    this.state.benchPlayers.forEach((player, index) => {
      const card = document.createElement('div');
      card.className = 'bench-card';
      card.innerHTML = `
        <div style="font-size: 12px; margin-bottom: 4px;">${player.name}</div>
        <div style="font-size: 11px; color: var(--text-muted);">${player.role}</div>
      `;

      card.onclick = () => this.moveToBench(index);
      bench.appendChild(card);
    });

    // Кнопка для бенча
    if (this.state.benchPlayers.length < 5) {
      const addBtn = document.createElement('div');
      addBtn.className = 'bench-card';
      addBtn.innerHTML = '+ Добавить игрока';
      addBtn.onclick = () => this.openTransferScreen();
      bench.appendChild(addBtn);
    }
  },

  // Выбор игрока
  selectPlayer(index) {
    if (this.state.selectedPlayers.length > 1) {
      const card = document.querySelectorAll('.player-card')[index];
      if (card) card.classList.toggle('selected');
    }
  },

  // Перемещение игрока на скамейку
  moveToBench(index) {
    const player = this.state.benchPlayers[index];
    if (player) {
      this.state.selectedPlayers.push(player);
      this.state.benchPlayers.splice(index, 1);
      this.renderSquadPanel();
      this.save();
    }
  },

  // Отображение трансферов
  renderTransfersPanel() {
    const activeTab = document.querySelector('.transfer-tab.active').dataset.view;

    if (activeTab === 'in') {
      this.renderIncomingTransfers();
    } else {
      this.renderOutgoingTransfers();
    }
  },

  // Отображение входящих трансферов
  renderIncomingTransfers() {
    const grid = document.querySelector('#inView .pool-grid');
    if (!grid) return;

    grid.innerHTML = '';

    this.state.freeAgents.forEach(player => {
      const item = document.createElement('div');
      item.className = 'player-item';
      item.innerHTML = `
        <div style="font-weight: 600;">${player.name}</div>
        <div style="font-size: 12px; color: var(--text-muted);">${player.role} • Рейтинг: ${player.rating.toFixed(2)}</div>
        <div style="margin-top: 4px; font-weight: 600; color: var(--accent-orange);">$${player.price.toLocaleString()}</div>
      `;

      item.onclick = () => this.addToTransferQueue(player);
      grid.appendChild(item);
    });

    // Отображение очереди
    this.renderTransferQueue('in');
  },

  // Отображение исходящих трансферов
  renderOutgoingTransfers() {
    const grid = document.querySelector('#outView .owned-grid');
    if (!grid) return;

    grid.innerHTML = '';

    this.state.selectedPlayers.forEach(player => {
      const item = document.createElement('div');
      item.className = 'player-item';
      item.innerHTML = `
        <div style="font-weight: 600;">${player.name}</div>
        <div style="font-size: 12px; color: var(--text-muted);">${player.role} • Рейтинг: ${player.rating.toFixed(2)}</div>
        <div style="margin-top: 4px; font-weight: 600; color: var(--accent-blue);">$${player.price.toLocaleString()} продажа</div>
      `;

      item.onclick = () => this.addToSaleQueue(player);
      grid.appendChild(item);
    });

    // Отображение очереди
    this.renderTransferQueue('out');
  },

  // Добавление игрока в очередь трансфера
  addToTransferQueue(player) {
    if (!this.state.transferQueue) this.state.transferQueue = [];
    if (!this.state.transferQueue.some(p => p.name === player.name)) {
      this.state.transferQueue.push({ ...player, type: 'in' });
    }
    this.renderTransferQueue('in');
  },

  // Добавление игрока в очередь продажи
  addToSaleQueue(player) {
    if (!this.state.saleQueue) this.state.saleQueue = [];
    if (!this.state.saleQueue.some(p => p.name === player.name)) {
      this.state.saleQueue.push({ ...player, type: 'out' });
    }
    this.renderTransferQueue('out');
  },

  // Отображение очереди трансфера
  renderTransferQueue(type) {
    const container = type === 'in' ?
      document.querySelector('#inView .queue-list') :
      document.querySelector('#outView .queue-list');
    if (!container) return;

    container.innerHTML = '';

    const queue = type === 'in' ? this.state.transferQueue : this.state.saleQueue;
    queue.forEach((player, index) => {
      const div = document.createElement('div');
      div.className = 'player-item';
      div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 600;">${player.name}</div>
            <div style="font-size: 11px; color: var(--text-muted);">${player.role}</div>
          </div>
          <button style="background: var(--accent-red); color: #000; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer;"
            onclick="Game.removeFromQueue(${type === 'in' ? 'in' : 'out'}, ${index})">Удалить</button>
        </div>
      `;
      container.appendChild(div);
    });
  },

  // Удаление из очереди
  removeFromQueue(type, index) {
    if (type === 'in') {
      this.state.transferQueue.splice(index, 1);
    } else {
      this.state.saleQueue.splice(index, 1);
    }
    this.renderTransfersPanel();
    this.save();
  },

  // Обработчик кнопки покупки
  confirmTransferClicked() {
    if (!this.state.transferQueue || this.state.transferQueue.length === 0) return;

    const totalCost = this.state.transferQueue.reduce((sum, p) => sum + p.price, 0);
    if (totalCost > this.state.budget) {
      this.showToast('Недостаточно средств');
      return;
    }

    this.state.transferQueue.forEach(p => {
      this.state.selectedPlayers.push(p);
      this.state.freeAgents = this.state.freeAgents.filter(pa => pa.name !== p.name);
    });

    this.state.budget -= totalCost;
    this.state.transferQueue = [];

    this.renderIncomingTransfers();
    this.save();
    this.showToast('Трансферы успешно завершены');
  },

  // Обработчик кнопки продажи
  confirmSaleClicked() {
    if (!this.state.saleQueue || this.state.saleQueue.length === 0) return;

    const totalGain = this.state.saleQueue.reduce((sum, p) => sum + p.price, 0);
    this.state.budget += totalGain;

    // Удаляем проданных игроков из состава
    this.state.saleQueue.forEach(p => {
      const index = this.state.selectedPlayers.findIndex(sp => sp.name === p.name);
      if (index !== -1) {
        this.state.selectedPlayers.splice(index, 1);
      }
    });

    this.state.saleQueue = [];

    this.renderOutgoingTransfers();
    this.save();
    this.showToast('Продажи успешно завершены');
  },

  // Открытие экрана покупки
  openTransferScreen() {
    if (this.state.benchPlayers.length < 5) {
      this.state.selectedPlayers.push(...this.state.benchPlayers);
      this.state.benchPlayers = [];
      this.renderSquadPanel();
    }
  },

  // Отображение UI (общее)
  renderUI() {
    this.renderSquadPanel();
    this.renderTransfersPanel();
    this.renderCalendar();
    this.renderTournamentsPanel();
    this.renderTacticsPanel();
    this.renderProfileScreen();
  },

  // Показ уведомления
  showToast(text) {
    const toast = document.getElementById('toast');
    toast.textContent = text;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
};

// Инициализация игры
window.addEventListener('DOMContentLoaded', () => {
  Game.init();

  // Обработчики событий
  document.getElementById('startBtn')?.addEventListener('click', () => Game.startClicked());

  // Кнопки выбора тира
  document.querySelectorAll('.tier-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tier-btn').forEach(b => b.classList.remove('selected'));
      e.currentTarget.classList.add('selected');
      Game.state.tier = parseInt(e.currentTarget.dataset.tier);
    });
  });

  // Табы хаба
  document.querySelectorAll('.tab-btn').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const tabId = e.currentTarget.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');

      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      const panel = document.getElementById(`${tabId}Panel`);
      if (panel) panel.classList.add('active');

      // Перерисовка UI для конкретной вкладки
      if (tabId === 'squad') Game.renderSquadPanel();
      else if (tabId === 'transfers') Game.renderTransfersPanel();
      else if (tabId === 'calendar') Game.renderCalendar();
      else if (tabId === 'tournaments') Game.renderTournamentsPanel();
      else if (tabId === 'tactics') Game.renderTacticsPanel();
      else if (tabId === 'profile') Game.renderProfileScreen();
    });
  });

  // Кнопки матча
  document.getElementById('startMatchBtn')?.addEventListener('click', () => Game.startMatch());
  document.getElementById('timeoutBtn')?.addEventListener('click', () => Game.timeoutClicked());
  document.getElementById('changeTacticsBtn')?.addEventListener('click', () => Game.changeTacticsClicked());

  // Табы трансферов
  document.querySelectorAll('.transfer-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.transfer-tab').forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');

      document.querySelectorAll('.transfer-view').forEach(v => v.classList.remove('active'));
      const viewId = e.currentTarget.dataset.view + 'View';
      const view = document.getElementById(viewId);
      if (view) view.classList.add('active');

      // Перерисовка панели трансферов
      Game.renderTransfersPanel();
    });
  });

  document.getElementById('confirmTransferBtn')?.addEventListener('click', () => Game.confirmTransferClicked());
  document.getElementById('confirmSaleBtn')?.addEventListener('click', () => Game.confirmSaleClicked());

  // Кнопки тактики
  document.querySelectorAll('.tactic-card').forEach(card => {
    card.addEventListener('click', (e) => {
      document.querySelectorAll('.tactic-card').forEach(c => c.classList.remove('selected'));
      e.currentTarget.classList.add('selected');
      Game.state.tactics = e.currentTarget.dataset.tactic;
      Game.updateTacticsStats();
    });
  });

  document.getElementById('applyTacticsBtn')?.addEventListener('click', () => {
    Game.state.tactics = document.querySelector('.tactic-card.selected')?.dataset.tactic || 'balanced';
    Game.updateTacticsStats();
  });

  document.getElementById('prevMonthBtn')?.addEventListener('click', () => Game.navigateCalendar(-1));
  document.getElementId('nextMonthBtn')?.addEventListener('click', () => Game.navigateCalendar(1));

  document.getElementById('restartBtn')?.addEventListener('click', () => {
    if (confirm('Начать новый сезон? Это сбросит текущую карьеру.')) {
      Game.state = {
        coachName: Game.state.coachName,
        teamName: '',
        tier: 1,
        budget: 0,
        reputation: 0,
        season: Game.state.season + 1,
        matchesPlayed: 0,
        matchesWon: 0,
        tactics: 'balanced',
        selectedPlayers: [],
        benchPlayers: [],
        transfers: [],
        seasonCalendar: [],
        currentTournament: null,
        matchLog: [],
        coachHistory: [],
        freeAgents: [],
        lastSaveTime: Date.now()
      };

      Game.generateRealTeam();
      Game.generateSeasonCalendar();
      Game.generateTournament();
      Game.generateFreeAgents();
      Game.renderHubScreen();
      Game.goToHub();
      Game.save();
    }
  });

  // Выход из хаба
  document.getElementById('logoBtn')?.addEventListener('click', () => Game.goToHub());
});

// Ссылки на глобальный объект Game для обратного вызова
window.Game = Game;