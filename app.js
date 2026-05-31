const sentences = [
  {
    id: "a1-001",
    level: "A1",
    category: "Basics",
    english: "I am learning German.",
    german: "Ich lerne Deutsch.",
    grammar: "Verb second: ich + lerne. Deutsch is capitalized because language names are nouns.",
    weak: ["lerne", "Deutsch"],
  },
  {
    id: "a1-002",
    level: "A1",
    category: "Daily",
    english: "I have no time today.",
    german: "Ich habe heute keine Zeit.",
    grammar: "Keine is used before feminine nouns like die Zeit.",
    weak: ["keine", "Zeit"],
  },
  {
    id: "a1-003",
    level: "A1",
    category: "Intro",
    english: "My name is Sara.",
    german: "Ich heiße Sara.",
    grammar: "You can say ich heiße for my name is. The verb stays in position two.",
    weak: ["heiße"],
  },
  {
    id: "a1-004",
    level: "A1",
    category: "Home",
    english: "Where is the train station?",
    german: "Wo ist der Bahnhof?",
    grammar: "Der Bahnhof is masculine. In a question, the question word comes first.",
    weak: ["wo", "Bahnhof"],
  },
  {
    id: "a1-005",
    level: "A1",
    category: "Food",
    english: "I would like a coffee.",
    german: "Ich möchte einen Kaffee.",
    grammar: "Einen is used for masculine direct objects like der Kaffee.",
    weak: ["möchte", "einen"],
  },
  {
    id: "a1-006",
    level: "A1",
    category: "Daily",
    english: "She lives in Berlin.",
    german: "Sie wohnt in Berlin.",
    grammar: "Sie can mean she or they. Here wohnt shows it is she.",
    weak: ["wohnt"],
  },
  {
    id: "a1-007",
    level: "A1",
    category: "Family",
    english: "My brother is still young.",
    german: "Mein Bruder ist noch jung.",
    grammar: "Mein Bruder is masculine nominative, so mein has no ending.",
    weak: ["Bruder", "noch"],
  },
  {
    id: "a1-008",
    level: "A1",
    category: "Shopping",
    english: "How much does it cost?",
    german: "Wie viel kostet das?",
    grammar: "Wie viel means how much. Kostet is the conjugated verb.",
    weak: ["kostet"],
  },
  {
    id: "a2-001",
    level: "A2",
    category: "Plans",
    english: "Tomorrow I will visit my friend.",
    german: "Morgen besuche ich meinen Freund.",
    grammar: "Morgen takes position one, so the verb besuche still stays in position two.",
    weak: ["besuche", "meinen"],
  },
  {
    id: "a2-002",
    level: "A2",
    category: "Routine",
    english: "I have to work early.",
    german: "Ich muss früh arbeiten.",
    grammar: "With modal verbs, the second verb goes to the end as an infinitive.",
    weak: ["muss", "arbeiten"],
  },
  {
    id: "a2-003",
    level: "A2",
    category: "Weather",
    english: "It is colder than yesterday.",
    german: "Es ist kälter als gestern.",
    grammar: "Als is used for comparisons with different values.",
    weak: ["kälter", "als"],
  },
  {
    id: "a2-004",
    level: "A2",
    category: "Travel",
    english: "We are going to the city by bus.",
    german: "Wir fahren mit dem Bus in die Stadt.",
    grammar: "Mit takes dative: mit dem Bus. Direction uses in die Stadt.",
    weak: ["fahren", "mit dem"],
  },
  {
    id: "a2-005",
    level: "A2",
    category: "Health",
    english: "I have had a headache since morning.",
    german: "Ich habe seit dem Morgen Kopfschmerzen.",
    grammar: "Seit takes dative and describes when something started.",
    weak: ["seit", "Kopfschmerzen"],
  },
  {
    id: "a2-006",
    level: "A2",
    category: "Work",
    english: "Can you send me the file?",
    german: "Kannst du mir die Datei schicken?",
    grammar: "Mir is dative because the file is being sent to me.",
    weak: ["mir", "Datei"],
  },
  {
    id: "a2-007",
    level: "A2",
    category: "Daily",
    english: "I forgot my keys.",
    german: "Ich habe meine Schlüssel vergessen.",
    grammar: "Perfect tense uses habe plus the past participle vergessen.",
    weak: ["Schlüssel", "vergessen"],
  },
  {
    id: "a2-008",
    level: "A2",
    category: "Home",
    english: "The apartment is too small for us.",
    german: "Die Wohnung ist zu klein für uns.",
    grammar: "Zu before an adjective means too, as in too small.",
    weak: ["Wohnung", "für"],
  },
  {
    id: "b1-001",
    level: "B1",
    category: "Opinion",
    english: "I think that this solution is better.",
    german: "Ich glaube, dass diese Lösung besser ist.",
    grammar: "After dass, the conjugated verb moves to the end.",
    weak: ["dass", "Lösung"],
  },
  {
    id: "b1-002",
    level: "B1",
    category: "Reason",
    english: "Because it was raining, we stayed at home.",
    german: "Weil es geregnet hat, sind wir zu Hause geblieben.",
    grammar: "Weil sends the verb to the end of its clause.",
    weak: ["weil", "geblieben"],
  },
  {
    id: "b1-003",
    level: "B1",
    category: "Work",
    english: "I applied for a new job last week.",
    german: "Ich habe mich letzte Woche um eine neue Stelle beworben.",
    grammar: "Sich bewerben um means to apply for.",
    weak: ["beworben", "Stelle"],
  },
  {
    id: "b1-004",
    level: "B1",
    category: "Advice",
    english: "You should make an appointment.",
    german: "Du solltest einen Termin vereinbaren.",
    grammar: "Solltest is polite advice. Vereinbaren means to arrange.",
    weak: ["solltest", "Termin"],
  },
  {
    id: "b1-005",
    level: "B1",
    category: "Experience",
    english: "I have been living in Germany for two years.",
    german: "Ich lebe seit zwei Jahren in Deutschland.",
    grammar: "German often uses present tense with seit for actions still continuing.",
    weak: ["seit", "Jahren"],
  },
  {
    id: "b1-006",
    level: "B1",
    category: "Request",
    english: "Could you explain that again?",
    german: "Könnten Sie das noch einmal erklären?",
    grammar: "Könnten Sie is a polite formal request.",
    weak: ["Könnten", "erklären"],
  },
  {
    id: "b1-007",
    level: "B1",
    category: "Opinion",
    english: "In my opinion, the price is too high.",
    german: "Meiner Meinung nach ist der Preis zu hoch.",
    grammar: "Meiner Meinung nach puts the verb right after the phrase.",
    weak: ["Meinung", "Preis"],
  },
  {
    id: "b1-008",
    level: "B1",
    category: "Plans",
    english: "If I have time, I will call you.",
    german: "Wenn ich Zeit habe, rufe ich dich an.",
    grammar: "Wenn clause sends habe to the end. The main clause starts with rufe.",
    weak: ["wenn", "rufe an"],
  },
  {
    id: "b2-001",
    level: "B2",
    category: "Work",
    english: "The meeting was postponed due to technical problems.",
    german: "Das Meeting wurde wegen technischer Probleme verschoben.",
    grammar: "Wurde plus past participle forms passive in the past.",
    weak: ["wurde", "verschoben"],
  },
  {
    id: "b2-002",
    level: "B2",
    category: "Argument",
    english: "On the one hand it is practical, on the other hand it is expensive.",
    german: "Einerseits ist es praktisch, andererseits ist es teuer.",
    grammar: "Einerseits and andererseits structure balanced arguments.",
    weak: ["einerseits", "andererseits"],
  },
  {
    id: "b2-003",
    level: "B2",
    category: "Formal",
    english: "I am writing to ask for more information.",
    german: "Ich schreibe Ihnen, um weitere Informationen zu bitten.",
    grammar: "Um ... zu expresses purpose with an infinitive.",
    weak: ["weitere", "bitten"],
  },
  {
    id: "b2-004",
    level: "B2",
    category: "Opinion",
    english: "It depends on how much time we have.",
    german: "Es hängt davon ab, wie viel Zeit wir haben.",
    grammar: "Abhängen von means to depend on. Davon points to the following clause.",
    weak: ["hängt ab", "davon"],
  },
  {
    id: "b2-005",
    level: "B2",
    category: "Work",
    english: "The decision should be made by Friday.",
    german: "Die Entscheidung sollte bis Freitag getroffen werden.",
    grammar: "Getroffen werden forms the passive with a modal verb.",
    weak: ["Entscheidung", "getroffen"],
  },
  {
    id: "b2-006",
    level: "B2",
    category: "Problem",
    english: "Despite the delay, the project was completed successfully.",
    german: "Trotz der Verzögerung wurde das Projekt erfolgreich abgeschlossen.",
    grammar: "Trotz takes genitive here: der Verzögerung.",
    weak: ["trotz", "abgeschlossen"],
  },
  {
    id: "b2-007",
    level: "B2",
    category: "Formal",
    english: "Please let me know whether the appointment still works.",
    german: "Bitte teilen Sie mir mit, ob der Termin noch passt.",
    grammar: "Ob introduces an indirect yes/no question.",
    weak: ["mitteilen", "ob"],
  },
  {
    id: "b2-008",
    level: "B2",
    category: "News",
    english: "The number of participants has increased significantly.",
    german: "Die Zahl der Teilnehmenden ist deutlich gestiegen.",
    grammar: "Ist gestiegen uses sein because it describes a change of state.",
    weak: ["Zahl", "gestiegen"],
  },
  {
    id: "c1-001",
    level: "C1",
    category: "Analysis",
    english: "The proposal raises several questions that need to be clarified.",
    german: "Der Vorschlag wirft mehrere Fragen auf, die geklärt werden müssen.",
    grammar: "Aufwerfen is separable: wirft ... auf. Müssen sends werden to the end.",
    weak: ["wirft auf", "geklärt"],
  },
  {
    id: "c1-002",
    level: "C1",
    category: "Formal",
    english: "The implementation is likely to take longer than expected.",
    german: "Die Umsetzung dürfte länger dauern als erwartet.",
    grammar: "Dürfte expresses a careful assumption or probability.",
    weak: ["dürfte", "Umsetzung"],
  },
  {
    id: "c1-003",
    level: "C1",
    category: "Debate",
    english: "This argument cannot be dismissed entirely.",
    german: "Dieses Argument lässt sich nicht vollständig entkräften.",
    grammar: "Lässt sich plus infinitive can express can be done.",
    weak: ["lässt sich", "entkräften"],
  },
  {
    id: "c1-004",
    level: "C1",
    category: "Work",
    english: "The requirements must be aligned with the available resources.",
    german: "Die Anforderungen müssen mit den verfügbaren Ressourcen abgestimmt werden.",
    grammar: "Abgestimmt werden is passive. Mit takes dative: den Ressourcen.",
    weak: ["Anforderungen", "abgestimmt"],
  },
  {
    id: "c1-005",
    level: "C1",
    category: "Opinion",
    english: "From my perspective, the benefits outweigh the disadvantages.",
    german: "Aus meiner Sicht überwiegen die Vorteile die Nachteile.",
    grammar: "Überwiegen takes a direct object: die Nachteile.",
    weak: ["überwiegen", "Vorteile"],
  },
  {
    id: "c1-006",
    level: "C1",
    category: "Formal",
    english: "We reserve the right to make changes at short notice.",
    german: "Wir behalten uns vor, kurzfristig Änderungen vorzunehmen.",
    grammar: "Sich vorbehalten means to reserve the right.",
    weak: ["behalten vor", "vorzunehmen"],
  },
];

const packTotals = {
  A1: 300,
  A2: 500,
  B1: 700,
  B2: 850,
  C1: 1000,
};

const state = {
  goal: 10,
  level: "A1",
  mode: "en-de",
  cardIndex: 0,
  revealed: false,
  quizChecked: false,
  daily: {},
  learned: {},
  weakWords: {},
};

const els = {
  goalButtons: document.querySelectorAll("[data-goal]"),
  levelButtons: document.querySelectorAll("[data-level]"),
  modeButtons: document.querySelectorAll("[data-mode]"),
  todayCount: document.getElementById("todayCount"),
  todayBar: document.getElementById("todayBar"),
  streakCount: document.getElementById("streakCount"),
  weakCount: document.getElementById("weakCount"),
  cardLevel: document.getElementById("cardLevel"),
  cardCategory: document.getElementById("cardCategory"),
  cardPosition: document.getElementById("cardPosition"),
  promptLabel: document.getElementById("promptLabel"),
  promptText: document.getElementById("promptText"),
  quizForm: document.getElementById("quizForm"),
  quizInput: document.getElementById("quizInput"),
  answerBlock: document.getElementById("answerBlock"),
  answerLabel: document.getElementById("answerLabel"),
  answerText: document.getElementById("answerText"),
  grammarText: document.getElementById("grammarText"),
  quizFeedback: document.getElementById("quizFeedback"),
  speakButton: document.getElementById("speakButton"),
  revealButton: document.getElementById("revealButton"),
  knowButton: document.getElementById("knowButton"),
  reviewButton: document.getElementById("reviewButton"),
  nextButton: document.getElementById("nextButton"),
  forecastLevel: document.getElementById("forecastLevel"),
  forecastDays: document.getElementById("forecastDays"),
  forecastDate: document.getElementById("forecastDate"),
  totalDays: document.getElementById("totalDays"),
  totalDate: document.getElementById("totalDate"),
  weakWords: document.getElementById("weakWords"),
  packDays: {
    A1: document.getElementById("a1Days"),
    A2: document.getElementById("a2Days"),
    B1: document.getElementById("b1Days"),
    B2: document.getElementById("b2Days"),
    C1: document.getElementById("c1Days"),
  },
};

const storageKey = "deutschDailyState";

function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function addDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + Math.max(0, days));
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/[.,!?;:]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved) return;
    Object.assign(state, saved);
  } catch {
    return;
  }
}

function saveState() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      goal: state.goal,
      level: state.level,
      mode: state.mode,
      cardIndex: state.cardIndex,
      daily: state.daily,
      learned: state.learned,
      weakWords: state.weakWords,
    }),
  );
}

function currentDeck() {
  return sentences.filter((item) => item.level === state.level);
}

function currentCard() {
  const deck = currentDeck();
  return deck[state.cardIndex % deck.length];
}

function todayStats() {
  const key = todayKey();
  if (!state.daily[key]) {
    state.daily[key] = { count: 0, goal: state.goal };
  }
  state.daily[key].goal = state.goal;
  return state.daily[key];
}

function calculateStreak() {
  let streak = 0;
  const cursor = new Date();

  while (true) {
    const key = todayKey(cursor);
    const stat = state.daily[key];
    if (!stat || stat.count < stat.goal) break;
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function setActiveButtons() {
  els.goalButtons.forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.goal) === state.goal);
  });

  els.levelButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.level === state.level);
  });

  els.modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
}

function renderProgress() {
  const stat = todayStats();
  const percent = Math.min(100, Math.round((stat.count / state.goal) * 100));
  const weakTotal = Object.keys(state.weakWords).length;

  els.todayCount.textContent = `${stat.count}/${state.goal}`;
  els.todayBar.style.width = `${percent}%`;
  els.streakCount.textContent = `${calculateStreak()} days`;
  els.weakCount.textContent = String(weakTotal);
}

function renderForecast() {
  const learnedForLevel = Math.min(state.learned[state.level] || 0, packTotals[state.level]);
  const remainingForLevel = Math.max(0, packTotals[state.level] - learnedForLevel);
  const levelDays = Math.ceil(remainingForLevel / state.goal);
  const totalRemaining = Object.entries(packTotals).reduce((sum, [level, total]) => {
    return sum + Math.max(0, total - (state.learned[level] || 0));
  }, 0);
  const totalDays = Math.ceil(totalRemaining / state.goal);

  els.forecastLevel.textContent = `${state.level} Pack`;
  els.forecastDays.textContent = `${levelDays} days`;
  els.forecastDate.textContent = `Finish by ${addDays(levelDays)}`;
  els.totalDays.textContent = `${totalDays} days`;
  els.totalDate.textContent = `Finish by ${addDays(totalDays)}`;

  Object.entries(packTotals).forEach(([level, total]) => {
    const remaining = Math.max(0, total - (state.learned[level] || 0));
    els.packDays[level].textContent = `${Math.ceil(remaining / state.goal)}d`;
  });
}

function renderWeakWords() {
  const words = Object.entries(state.weakWords)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([word]) => word);

  els.weakWords.innerHTML = "";

  if (words.length === 0) {
    const empty = document.createElement("span");
    empty.textContent = "Clear";
    els.weakWords.appendChild(empty);
    return;
  }

  words.forEach((word) => {
    const tag = document.createElement("span");
    tag.textContent = word;
    els.weakWords.appendChild(tag);
  });
}

function renderCard() {
  const deck = currentDeck();
  const card = currentCard();
  const isQuiz = state.mode === "quiz";
  const promptText = state.mode === "de-en" ? card.german : card.english;
  const answerText = state.mode === "de-en" ? card.english : card.german;

  els.cardLevel.textContent = card.level;
  els.cardCategory.textContent = card.category;
  els.cardPosition.textContent = `${(state.cardIndex % deck.length) + 1} of ${deck.length}`;
  els.promptLabel.textContent = state.mode === "de-en" ? "German" : "English";
  els.promptText.textContent = promptText;
  els.answerLabel.textContent = state.mode === "de-en" ? "English" : "German";
  els.answerText.textContent = answerText;
  els.grammarText.textContent = card.grammar;
  els.answerBlock.classList.toggle("is-hidden", !state.revealed);
  els.quizForm.classList.toggle("is-hidden", !isQuiz);
  els.quizFeedback.classList.toggle("is-hidden", !state.quizChecked);
  els.quizFeedback.classList.toggle("is-correct", !!state.lastQuizCorrect);
  els.quizFeedback.classList.toggle("is-wrong", state.quizChecked && !state.lastQuizCorrect);
  els.revealButton.disabled = state.revealed && !isQuiz;
  els.knowButton.disabled = !state.revealed;
  els.reviewButton.disabled = !state.revealed;

  if (!isQuiz) {
    els.quizInput.value = "";
    els.quizFeedback.textContent = "";
  }

  setActiveButtons();
  renderProgress();
  renderForecast();
  renderWeakWords();
}

function revealCard() {
  state.revealed = true;
  state.quizChecked = false;
  els.quizFeedback.textContent = "";
  renderCard();
}

function nextCard() {
  const deck = currentDeck();
  state.cardIndex = (state.cardIndex + 1) % deck.length;
  state.revealed = false;
  state.quizChecked = false;
  state.lastQuizCorrect = false;
  els.quizInput.value = "";
  els.quizFeedback.textContent = "";
  renderCard();
  saveState();
}

function practiceCredit(isReview) {
  const card = currentCard();
  const stat = todayStats();

  stat.count += 1;
  state.learned[state.level] = Math.min(packTotals[state.level], (state.learned[state.level] || 0) + 1);

  card.weak.forEach((word) => {
    if (isReview) {
      state.weakWords[word] = (state.weakWords[word] || 0) + 1;
    } else if (state.weakWords[word]) {
      state.weakWords[word] = Math.max(0, state.weakWords[word] - 1);
      if (state.weakWords[word] === 0) delete state.weakWords[word];
    }
  });

  saveState();
  nextCard();
}

function checkQuiz(event) {
  event.preventDefault();
  const card = currentCard();
  const typed = normalize(els.quizInput.value);
  const answer = normalize(card.german);
  const isCorrect = typed === answer;

  state.revealed = true;
  state.quizChecked = true;
  state.lastQuizCorrect = isCorrect;
  els.quizFeedback.textContent = isCorrect ? "✓ Correct!" : "✗ Review this one";

  if (!isCorrect) {
    card.weak.forEach((word) => {
      state.weakWords[word] = (state.weakWords[word] || 0) + 1;
    });
  }

  renderCard();
  saveState();
}

function speakGerman() {
  const card = currentCard();
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(card.german);
  utterance.lang = "de-DE";
  utterance.rate = 0.86;
  window.speechSynthesis.speak(utterance);
}

function bindEvents() {
  els.goalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.goal = Number(button.dataset.goal);
      todayStats().goal = state.goal;
      saveState();
      renderCard();
    });
  });

  els.levelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.level = button.dataset.level;
      state.cardIndex = 0;
      state.revealed = false;
      state.quizChecked = false;
      saveState();
      renderCard();
    });
  });

  els.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      state.revealed = false;
      state.quizChecked = false;
      saveState();
      renderCard();
    });
  });

  els.revealButton.addEventListener("click", revealCard);
  els.nextButton.addEventListener("click", nextCard);
  els.knowButton.addEventListener("click", () => practiceCredit(false));
  els.reviewButton.addEventListener("click", () => practiceCredit(true));
  els.speakButton.addEventListener("click", speakGerman);
  els.quizForm.addEventListener("submit", checkQuiz);

  document.addEventListener("keydown", (event) => {
    if (document.activeElement === els.quizInput) return;
    if (event.metaKey || event.ctrlKey || event.altKey) return;

    switch (event.key) {
      case " ":
        event.preventDefault();
        if (!state.revealed) revealCard();
        else nextCard();
        break;
      case "k":
      case "K":
        if (!els.knowButton.disabled) practiceCredit(false);
        break;
      case "r":
      case "R":
        if (!els.reviewButton.disabled) practiceCredit(true);
        break;
      case "s":
      case "S":
        speakGerman();
        break;
    }
  });
}

loadState();
bindEvents();
renderCard();
