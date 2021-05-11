// Create a random word generator
// - get a list of nouns ✅
const nouns = [
  "a boy",
  "a girl",
  "the dog",
  "the cat",
  "a new car",
  "the old house",
  "an expired cake",
  "some greasy fries",
  "a cold slice of pizza",
  "a comfy chair",
  "a fake flower",
  "a giant red panda",
  "a big piñata"
];

// - get a list of actions ✅
const actions = [
  "talked to",
  "played a game with",
  "jumped on",
  "is running with",
  "is having dinner with",
  "ran a marathon with",
  "entered the room with",
  "read a book about",
  "does another random action"
];

// - get a random item from a list ✅
function pickRandomItem(list) {
  // any code I want to run multiple times goes here
  const randomIndex = Math.floor(Math.random() * list.length);
  const randomItem = list[randomIndex];
  return randomItem;
}

// - generate a random phrase ✅
function generateRandomPhrase() {
  const noun1 = pickRandomItem(nouns);
  const action = pickRandomItem(actions);
  const noun2 = pickRandomItem(nouns);

  return `${noun1} ${action} ${noun2}`;
}

// - put a random phrase on the page ✅
function putRandomPhraseOnPage() {
  const textEl = document.querySelector(".phrase");
  const phrase = generateRandomPhrase();
  textEl.innerText = phrase;
}

// - when the button is pressed
const buttonEl = document.querySelector(".generate-phrase");
buttonEl.addEventListener("click", putRandomPhraseOnPage);
