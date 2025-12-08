const textInput = document.getElementById("textInput");
const test = document.getElementById('test');

const container = document.getElementById('container');
function animateReorder(container, movingNode, referenceNode) {
  const startRect = movingNode.getBoundingClientRect();

  container.insertBefore(movingNode, referenceNode);

  const endRect = movingNode.getBoundingClientRect();
  const deltaY = startRect.top - endRect.top;

  movingNode.style.transition = 'none';
  movingNode.style.transform = `translateY(${deltaY}px)`;

  requestAnimationFrame(() => {
    movingNode.style.transition = 'transform 300ms ease';
    movingNode.style.transform = 'translateY(0)';
  });

  movingNode.addEventListener('transitionend', () => {
    movingNode.style.transform = '';
    movingNode.style.transition = '';
  }, { once: true });
}

//let color = Math.floor(Math.random() * 16777215);


const riddles = [
  { riddle: "What was the tallest mountain on earth befor Mount Everest was discovered?",
    answer: "mount everest"},

  { riddle: "The more you take, the more you leave behind. What am I?",
    answer: "footsteps"},

  { riddle: "I’m tall when I’m young, and short when I’m old. What am I?",
    answer: "candle"},

  { riddle: "What has a head, a tail, but no body?",
    answer: "coin"},

  {riddle: "What gets wet as it dries?",
    answer: "towel"},

  {riddle: " David's father has three sons: Snap, Crackle, and _____?",
    answer: "david"},
];

const riddl = document.getElementById('riddl');
let k = Math.floor(Math.random() * riddles.length)
let currentRiddle=riddles[k];
riddl.textContent=currentRiddle.riddle;

const rule = [
  document.getElementById('rule1'),
  document.getElementById('rule2'),
  document.getElementById('rule3'),
  document.getElementById('rule4'),
  document.getElementById('rule5'),
  document.getElementById('rule6'),
  document.getElementById('rule7'),
  document.getElementById('rule8'),
  document.getElementById('rule9'),
  document.getElementById('rule10'),
  document.getElementById('rule11'),
  document.getElementById('rule12'),
  document.getElementById('rule13'),
  document.getElementById('rule14'),
  document.getElementById('rule15')
];

const ruleNum = [
  document.getElementById('r1'), 
  document.getElementById('r2'),
  document.getElementById('r3'),
  document.getElementById('r4'),
  document.getElementById('r5'),
  document.getElementById('r6'),
  document.getElementById('r7'),
  document.getElementById('r8'),
  document.getElementById('r9'),
  document.getElementById('r10'),
  document.getElementById('r11'),
  document.getElementById('r12'),
  document.getElementById('r13'),
  document.getElementById('r14'),
  document.getElementById('r15')
];
const conditions = [
  () => textInput.value.length>3,
  () => /[A-Z]/.test(textInput.value),
  () => /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(textInput.value),
  () => /[0-9]/.test(textInput.value),
  () => textInput.value.includes(new Date().toLocaleDateString()),
  () => countNum(),
  () => /[IVXLCDM]/.test(textInput.value),
  () => numeralCount(),
  () => ["blossom", "bubbles", "buttercup"].some(sub => textInput.value.toLowerCase().includes(sub)),
  () => hex(),
  () => textInput.value.includes(code),
  () => (textInput.value.match(/🏋️/g) || []).length > 2,
  () => textInput.value.toLowerCase().includes(currentRiddle.answer),
  () => textInput.value.includes(textInput.value.length),
  () => ascii()
];


const numeralSum = document.getElementById('numeralSum');
const numerals = document.getElementById('numerals');
function numeralCount() { // Find all uppercase Roman numerals in a string and sum them 
  let total=0;
  console.log("running");
  // Only match uppercase Roman numeral sequences
  const matches = textInput.value.match(/[IVXLCDM]+/g) || [];
  console.log(matches); 
  for (let i = 0; i < matches.length; i++) { // Loop through each match
    let numeral = matches[i];       // e.g. "IX" 
    let value = romanToInt(numeral); // convert to integer 
    total += value;
  }
  console.log(total);
  numerals.textContent=matches+" Total: "+total;

 // numeralSum.textContent="Total: "+total;
  return total==1000;
}

// Convert a single Roman numeral string into an integer 

function romanToInt(roman) {

 const values = {
  I:1, V:5, X:10, L:50, C:100, D:500, M:1000,
 // i:1, v:5, x:10, l:50, c:100, d:500, m:1000
};
 let sum = 0;

  for (let i = 0; i < roman.length; i++) {
    let current = values[roman[i]];
    next = values[roman[i+1]];
    (next && current < next) ? sum -= current :sum += current;
  }
  return sum; 
}

const randColor = document.getElementById('randColor');
const red = Math.floor(Math.random() * 256); // 0–255
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);
const color = `rgb(${red}, ${green}, ${blue})`
randColor.style.backgroundColor=color;
//document.body.style.backgroundColor=color;
console.log(color);
function hex(){
  
  let j=0, hx, clr="";
  for(let i = 0; i<textInput.value.length; i++){
    
 
    if(j>0&&/^[0-9a-fA-F]$/.test(textInput.value[i])){
      clr+=textInput.value.charAt(i);
      j++;
      console.log(textInput.value.charAt[i]);
      console.log(textInput.value[i]);
      console.log(clr);
    }
    else{
        console.log(textInput.value.charAt[i]);
      console.log("j",j);

    j=0;
    clr="";
   }
    if (j==7){
    console.log("hex detected", clr);
    hx=clr;
    }

    if(textInput.value[i]=="#"){
    console.log("# detected");
    j++;  
    }
    
  }

  if(hx){
  let r = parseInt(hx.slice(0, 2), 16), // "ff" → 255
  g = parseInt(hx.slice(2, 4), 16), // "cc" → 204
  b = parseInt(hx.slice(4, 6), 16); // "00" → 0
    console.log(r," ",g," ", b);
    console.log(red," ",green," ", blue);
    console.log(Math.abs(red-r)," ",Math.abs(green-g)," ", Math.abs(blue-b));
  if(Math.sqrt((red-r)**2+(green-g)**2+(blue-b)**2)<77)
  return true;
  else return false;
  }
}

function getJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      document.getElementById('setup').textContent = data.setup;
      document.getElementById('punchline').textContent = data.punchline;
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
    });
}

let code;
const country = document.getElementById('country');
const CC = document.getElementById('CC');
fetch("https://restcountries.com/v3.1/all?fields=name,idd")

  .then(response => response.json())
  .then(data => {
    // Filter countries with valid dialing codes
    const countries = data
      .filter(c => c.idd?.root && c.idd?.suffixes?.length)
      .map(c => ({
        name: c.name.common,
        code: c.idd.root + c.idd.suffixes[0] // e.g., "+94"
      }));

    // Pick a random country
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];

    // Display country name and dialing code
    country.textContent = `${randomCountry.name}`;

    // Store dialing code for later use
    code = randomCountry.code.replace('+', ''); // optional: remove '+' if you want just the digits
    console.log("Dialing code:", code);
    CC.textContent=code;
  })  
  .catch(error => console.error("Error fetching country data:", error));



const button  = document.getElementById('showhide');
function showHide(){
button.textContent==="👀"? (textInput.type="text", button.textContent="🫣"):(button.textContent="👀", textInput.type="password");
}


//function

const total  = document.getElementById('total');
function countNum() {
  let count = 0;
  for (const char of textInput.value) 
    if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) 
      count += char.charCodeAt(0) - 48;
  total.textContent="total "+count;
  return count === 85;
}
/*
function sacrifice() {
  let i =0;
  while(rule[i]){

  }
}*/

const Ascii  = document.getElementById('Ascii');
//const Valu  = document.getElementById('Valu');
let temp=0, randAscii=Math.floor(Math.random() * (126 - 32 + 1)) + 32, helper, position;

function ascii() {
  
  helper = textInput.value.charAt(textInput.value.length-1).charCodeAt(0);
    console.log(helper, " ", );
  return (helper>randAscii&&helper<(randAscii+5))}
    console.log("randAscii",randAscii);

  Ascii.textContent=" the last character of password must have an Ascii value between "+randAscii+" and "+(randAscii+5);
  
const hexText  = document.getElementById('hexText');

function check(rule,ruleNum,i) {
  console.log("rule: ",i+1);
  console.log(conditions[i]);
  console.log(conditions[i]());
  
  
  if ((i > 0&& conditions[i-1]() && !conditions[i]())||textInput.value.length>1||i==0) { 
   
  
  if (conditions[i]()){
    ruleNum[i].textContent="✅ Rule # "+(i+1), rule[i].style.opacity=1;
    
    return true;
  }
   
  else{

    if(i==9){
    hexText.style.opacity=1;
     r10.style.opacity=1;
    }
    else{rule[i].style.opacity=.65;}

    ruleNum[i].textContent="❌ Rule # "+(i+1);
     
    console.log(i);
    //console.log(rule[i]);
    rule[i].hidden = false;}
    
   if (container.firstChild !== rule[i]) {animateReorder(container, rule[i], container.firstChild);}

   // if(i==1) {rule[i].style.opacity=1;}
   /*
    rule[i].style.opacity="",rule[i].style.borderColor = "rgba(0, 0, 0, 0.6)";
    
  }*/
    
    return false;
  } 
}


let startTime;
let timerInterval;

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 10); // update every 10ms
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateTimer() {
  const elapsed = Date.now() - startTime;

  const minutes = Math.floor(elapsed / 60000);
  const seconds = Math.floor((elapsed % 60000) / 1000);
  const milliseconds = elapsed % 1000;

  // Format with leading zeros
  const formattedTime =
    String(minutes).padStart(2, '0') + ":" +
    String(seconds).padStart(2, '0') + "." +
    String(milliseconds).padStart(2, '0');

  let timerDisplay = document.getElementById("timerDisplay").textContent = formattedTime;

}




let highest=0;
let tim=false;
const lengthy  = document.getElementById('lengthy');
const joke  = document.getElementById('joke');

textInput.addEventListener("input", () => { 
  joke.hidden=true;
  lengthy.textContent=textInput.value.length;

  const length  = document.getElementById('showhide');
  
  timerDisplay.style.opacity= ((textInput.value.length-9)/50).toString();

  if(tim===false){
  startTimer();
  tim = true;}
    
    
    if(textInput.value.length>15)
    textInput.style.width = (textInput.value.length) + "ch";

  /*
    const displayArea = document.getElementById('displayArea');
    if (displayArea.hidden) {
    document.body.style.justifyContent = "center";
    } else {
    document.body.style.justifyContent = "space-between";
    }*/

  button.hidden = textInput.value === "";
  let i=0;
  while(check(rule,ruleNum,i)){
  i++;
  if(i==15){ //i=15; 
  break;
  }
  }

  if(i<highest)
  for(j=i;j<=highest;j++)
  check(rule,ruleNum,j)
  
  else
  highest=i;

  const proceed = document.getElementById('proceed');
  const next = document.getElementById('next');
  if(i==15){
    //proceed.textContent=textInput.value;
   // document.getElementById("proceed").textContent = textInput.value;
    next.hidden=false;
    proceed.hidden=false;
  }
  else
  proceed.hidden=true;
});

const pswrd = document.getElementById('pswrd');
pswrd.textContent=textInput.value;

const pswrdAgain = document.getElementById('pswrdAgain');

const results = document.getElementById('results');

// High Scores Management
const STORAGE_KEY = 'passwordGameHighScores';
const MAX_SCORES = 10; // Keep top 10 scores

// Store current score data temporarily before saving with name
let pendingScore = null;

function getHighScores() {
  const scoresJson = localStorage.getItem(STORAGE_KEY);
  if (scoresJson) {
    try {
      return JSON.parse(scoresJson);
    } catch (e) {
      console.error('Error parsing high scores:', e);
      return [];
    }
  }
  return [];
}

function saveHighScore(timeString, timeMs, playerName = 'Anonymous') {
  console.log("Saving high score. Time:", timeString, "TimeMs:", timeMs, "Name:", playerName);
  
  if (!timeString || timeMs === undefined || timeMs === null) {
    console.error("Invalid score data:", { timeString, timeMs });
    return { isHighScore: false, rank: null, totalScores: 0 };
  }
  
  const scores = getHighScores();
  console.log("Current scores:", scores);
  
  const newScore = {
    time: timeString,
    timeMs: timeMs,
    date: new Date().toLocaleDateString(),
    timestamp: Date.now(),
    name: playerName.trim() || 'Anonymous'
  };
  
  scores.push(newScore);
  // Sort by time (ascending - lower time is better)
  scores.sort((a, b) => a.timeMs - b.timeMs);
  // Keep only top MAX_SCORES
  const topScores = scores.slice(0, MAX_SCORES);
  
  console.log("Top scores after save:", topScores);
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(topScores));
    console.log("Score saved to localStorage");
  } catch (e) {
    console.error("Error saving to localStorage:", e);
  }
  
  displayHighScores();
  
  // Find the rank of this score (match by timestamp since it's unique)
  let rank = -1;
  for (let i = 0; i < topScores.length; i++) {
    if (topScores[i].timestamp === newScore.timestamp) {
      rank = i;
      break;
    }
  }
  
  const result = {
    isHighScore: rank !== -1,
    rank: rank !== -1 ? rank + 1 : null,
    totalScores: topScores.length
  };
  
  console.log("High score result:", result);
  return result;
}

function showCompletionModal(timeString, highScoreInfo, timeMs) {
  console.log("Showing completion modal. Time:", timeString, "HighScoreInfo:", highScoreInfo);
  
  const modal = document.getElementById('completionModal');
  const modalTime = document.getElementById('modalTime');
  const highScoreMessage = document.getElementById('highScoreMessage');
  const highScoreText = document.getElementById('highScoreText');
  const nameInputSection = document.getElementById('nameInputSection');
  const playerNameInput = document.getElementById('playerName');
  const saveScoreBtn = document.getElementById('saveScoreBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  
  if (!modal) {
    console.error("Modal element not found!");
    return;
  }
  
  if (!modalTime) {
    console.error("ModalTime element not found!");
    return;
  }
  
  modalTime.textContent = timeString || "00:00.00";
  
  if (highScoreInfo && highScoreInfo.isHighScore) {
    if (highScoreMessage) highScoreMessage.style.display = 'block';
    if (nameInputSection) nameInputSection.style.display = 'block';
    if (saveScoreBtn) saveScoreBtn.style.display = 'inline-block';
    if (closeModalBtn) closeModalBtn.style.display = 'none';
    if (playerNameInput) {
      playerNameInput.value = '';
      playerNameInput.focus();
    }
    
    const rank = highScoreInfo.rank;
    let medal = '';
    let message = '';
    
    if (rank === 1) {
      medal = '🥇';
      message = 'NEW #1 HIGH SCORE!';
    } else if (rank === 2) {
      medal = '🥈';
      message = 'NEW #2 HIGH SCORE!';
    } else if (rank === 3) {
      medal = '🥉';
      message = 'NEW #3 HIGH SCORE!';
    } else {
      medal = '🏅';
      message = `NEW HIGH SCORE! Ranked #${rank}`;
    }
    
    if (highScoreText) {
      highScoreText.textContent = `${medal} ${message}`;
      highScoreText.style.color = rank <= 3 ? '#ff6600' : '#0066cc';
    }
    
    // Store pending score data
    pendingScore = {
      timeString: timeString,
      timeMs: timeMs
    };
  } else {
    if (highScoreMessage) highScoreMessage.style.display = 'none';
    if (nameInputSection) nameInputSection.style.display = 'none';
    if (saveScoreBtn) saveScoreBtn.style.display = 'none';
    if (closeModalBtn) closeModalBtn.style.display = 'inline-block';
    pendingScore = null;
  }
  
  // Set display to flex to center the modal content
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.zIndex = '1000';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  
  console.log("Modal should now be visible. Display:", modal.style.display);
  console.log("Modal element:", modal);
}

function saveScoreWithName() {
  const playerNameInput = document.getElementById('playerName');
  const name = playerNameInput ? playerNameInput.value.trim() : 'Anonymous';
  
  if (!pendingScore) {
    console.error("No pending score to save");
    closeCompletionModal();
    return;
  }
  
  // Save the score with the player's name
  saveHighScore(pendingScore.timeString, pendingScore.timeMs, name);
  pendingScore = null;
  
  // Close the modal
  closeCompletionModal();
}

function closeCompletionModal() {
  const modal = document.getElementById('completionModal');
  modal.style.display = 'none';
}

function displayHighScores() {
  const scores = getHighScores();
  const highScoresList = document.getElementById('highScoresList');
  
  if (scores.length === 0) {
    highScoresList.innerHTML = '<p style="color: #666;">No scores yet. Complete the game to set your first high score!</p>';
  } else {
    let html = '<ol style="text-align: center; padding-left: 0; list-style-position: inside; display: inline-block; margin: 0 auto;">';
    scores.forEach((score, index) => {
      const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅';
      const playerName = score.name || 'Anonymous';
      html += `<li style="margin-bottom: 8px; text-align: center;">
        <span style="font-weight: bold;">${medal} ${score.time}</span>
        <span style="color: #4fa3b8; font-weight: 600; margin-left: 10px;">${playerName}</span>
        <span style="color: #666; font-size: 0.9em; margin-left: 10px;">(${score.date})</span>
      </li>`;
    });
    html += '</ol>';
    highScoresList.innerHTML = html;
  }
}

function clearHighScores() {
  if (confirm('Are you sure you want to clear all high scores?')) {
    localStorage.removeItem(STORAGE_KEY);
    displayHighScores();
  }
}

function verify() {
  if (pswrdAgain.value==textInput.value){
    stopTimer();
    const next = document.getElementById('next');
    if (next) next.hidden = true;
    
    const timerDisplay = document.getElementById("timerDisplay");
    const timeString = timerDisplay ? timerDisplay.textContent.trim() : "00:00.00";
    
    // Calculate elapsed time
    const elapsed = startTime ? (Date.now() - startTime) : 0;
    
    console.log("Game completed! Time:", timeString, "Elapsed:", elapsed);
    
    results.textContent="Congratulations! You have successfully chosen a password in " + timeString + "!";
    
    // Check if this would be a high score before saving
    const scores = getHighScores();
    let wouldBeHighScore = false;
    let rank = null;
    
    if (scores.length < MAX_SCORES) {
      // There's room in the leaderboard
      wouldBeHighScore = true;
      rank = scores.length + 1;
    } else if (scores.length > 0) {
      // Check if this time is better than the worst time
      const worstTime = Math.max(...scores.map(s => s.timeMs));
      if (elapsed < worstTime) {
        wouldBeHighScore = true;
        // Temporarily add to check rank
        const tempScore = { time: timeString, timeMs: elapsed, timestamp: Date.now() };
        const tempScores = [...scores, tempScore];
        tempScores.sort((a, b) => a.timeMs - b.timeMs);
        rank = tempScores.findIndex(s => s.timestamp === tempScore.timestamp) + 1;
      }
    } else {
      // No scores yet, this is definitely a high score
      wouldBeHighScore = true;
      rank = 1;
    }
    
    let highScoreInfo;
    if (wouldBeHighScore) {
      highScoreInfo = { isHighScore: true, rank: rank, totalScores: Math.min(scores.length + 1, MAX_SCORES) };
    } else {
      highScoreInfo = { isHighScore: false, rank: null, totalScores: scores.length };
    }
    
    // Show completion popup with time and high score info
    // Don't save yet if it's a high score - wait for name input
    showCompletionModal(timeString, highScoreInfo, elapsed);
  }
  else
  results.textContent="The passwords do not match"
}
//pswrdAgain.addEventListener("input", () => { })

// Load and display high scores when page loads
document.addEventListener('DOMContentLoaded', () => {
  displayHighScores();
});

//let i=0;
//console.log("i1: ",i);


/*
const rule1 = document.getElementById('rule1'), r1 = document.getElementById("r1");
i++;
if(textInput.value.length>1) rule1.hidden=false;
if(textInput.value.length>2)
{r1.textContent="✅ Rule #1",rule1.style.opacity=1;} 
else {r1.textContent="❌ Rule #1",i--, rule1.style.opacity=.5;
  if (container.firstChild !== rule1) {animateReorder(container, rule1, container.firstChild);}
}
console.log("i2: ",i);

const rule2 = document.getElementById('rule2'), r2 = document.getElementById("r2");
if(i>0) {rule2.hidden=false;} 
i++;
if(/[0-9]/.test(textInput.value)){
  r2.textContent="✅  Rule #2",rule2.style.opacity=1;} 
else {r2.textContent="❌  Rule #2",i--, rule2.style.opacity=.5;
  if (container.firstChild !== rule2) {animateReorder(container, rule2, container.firstChild);}}
*/
/*

  /[0-9]/.test(textInput.value) ? (time+=10, num=true,a=1) : (num=false);
  /[a-z]/.test(textInput.value) ? (time+=26,lower=true,b=1) : (lower =false);
  /[A-Z]/.test(textInput.value) ? (time+=26,upper=true,c=1) : (upper =false);
  /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(textInput.value) ? (time+=33,special=true,d=1) : (special =false);
  


let hashrate, color="";
  
if(hashrate==undefined){
  TTC.textContent="select a threat level";

  textInput.style.opacity=0;
}

document.getElementById('hashrate').addEventListener('change', function () {
  
  hashrate = parseInt(this.value);

  
  console.log("hash1: ", hashrate);
  //let color;
  
  switch (hashrate) {

    case 10: attacker.textContent = "Bob"; hardware.textContent = "Smart Fridge"; threat.textContent = "Trivial"; bio.textContent = "An IoT device gone rouge. Minimal compute power, barely capable of hashing."; document.getElementById("attackerImg").src = "Trivial.png"; color="#1C4A7E";break;
    
    case 100: attacker.textContent = "Luigi"; hardware.textContent = "Old Laptop"; threat.textContent = "Low"; bio.textContent = "Don't let the scary green skull fool you. It's a decade-old laptop running outdated software. Slow but persistent.";  document.getElementById("attackerImg").src = "luigi.png";color="#00ff66";  break;
    
    case 1000: attacker.textContent = "Walter"; hardware.textContent = "Office Desktop"; threat.textContent = "Moderate"; bio.textContent = "Unhappy with his wage, Walter has found an unethical method of using company hardware to supplement his income."; document.getElementById("attackerImg").src = "Eugene.png"; color="#FA4616 ";break;
    
    case 10000: attacker.textContent = "Eugene"; hardware.textContent = "Gaming PC"; threat.textContent = "Elevated"; bio.textContent = "Dual RTX 4090s in SLI, RGB lighting synced to his snack breaks, and enough GPU acceleration to brute-force the gates of Mordor."; document.getElementById("attackerImg").src = "gamer.png"; color="violet"; break;
    
    case 100000: attacker.textContent = "张伟"; hardware.textContent = "加密货币挖矿设备 "; threat.textContent = "高"; bio.textContent = "最初为挖矿而建的多 GPU 设置, 现已改用于密码破解"; document.getElementById("attackerImg").src = "mining.png"; color="cyan";break;
    
    case 1000000: attacker.textContent = "Dr. Amlan"; hardware.textContent = "University Cluster"; threat.textContent = "Severe"; bio.textContent = "An academic with access to institutional compute power and advanced cracking techniques."; document.getElementById("attackerImg").src = "amlan.png"; color="teal";break;
    
    case 10000000: attacker.textContent = "Jeff Bezos"; hardware.textContent = "AWS Supercomputer"; threat.textContent = "Existential"; bio.textContent = "Evil billionaire with unlimited cloud resources, capable of brute-forcing entire databases."; document.getElementById("attackerImg").src = "jeff2.png"; color="#C45508";break;

    case 0: attacker.textContent = "незнакомый"; hardware.textContent = "Hardware: безвестный"; threat.textContent = "тайный  "; bio.textContent = "Привет! Как дела? Это пример русского текста"; document.getElementById("attackerImg").src = "bobby.png"; color="white";break;
   
  }

  textInput.dispatchEvent(new Event('input'));

  if(hashrate==0){
  custom.style.display = 'inline-block'; 
  custom.disabled = false; 
  console.log("field is visible:");
  }
  else{
  custom.style.display = 'none';
  custom.disabled = true; 
  console.log("field is invisible:");
  }
  
  test.textContent=`${color}`;
  front.style.borderColor=color;
  //if(hashrate>2) title.style.color=color;
  let shadow = `4px 4px 12px ${color}`;
  front.style.boxShadow = shadow;
  //if(ha)
  hash.textContent=hashrate;

});


custom.addEventListener('input', function() {
  
  if( parseInt(this.value)>0){
  hashrate = custom.value;
  hash.textContent=hashrate;
  textInput.dispatchEvent(new Event('input'));}
  else
    tip.textContent="negative hashrates are prohibited. idk how that would even work"

});

let time1, time2, num, upper, lower, special;
let unit1=``, unit2=``;


let passwordSet = new Set();
fetch('./100000-most-common-passwords.json')
.then(res=>res.json())
.then(data=> { 
  passwordSet = new Set(data.map(p =>p.toLowerCase()))
})

textInput.addEventListener("input", () => { 
  
  
  if(hashrate==0)
  hashrate = custom.value;
  
  console.log("hash2: ", hashrate);
 
  textInput.style.opacity=1;
  
  arrow.style.opacity=0;

  charCount.textContent =textInput.value===`` ? ``:`Characters: ${textInput.value.length}`;

  let time=0,score;

  /[0-9]/.test(textInput.value) ? (time+=10, num=true,a=1) : (num=false);
  /[a-z]/.test(textInput.value) ? (time+=26,lower=true,b=1) : (lower =false);
  /[A-Z]/.test(textInput.value) ? (time+=26,upper=true,c=1) : (upper =false);
  /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(textInput.value) ? (time+=33,special=true,d=1) : (special =false);
 
  console.log("Current input:", textInput.value);
  //console.log("Has number:", num);
  //console.log("Has lowercase:", lower);
  //console.log("Has uppercase:", upper);
  //console.log("Has special:", special);
  //console.log("Time score:", time);
 
  time=time**textInput.value.length;
  score=(num+lower+upper+special)*textInput.value.length*3;
  console.log(" score:", score);
  time=(time/hashrate)/2;

  if(time>31536000){
    unit1= `years`;
    unit2= `days`;
  
    time1=Math.floor(time/31536000);
    time2=Math.floor((time%31536000)/86400);
   
  }
  else{
    unit1= `days`;
    unit2= `hours`;
  
    time1=Math.floor(time/86400);
    time2=Math.floor((time1%86400)/3600);
  }

  if(time<172800){
    unit1= `hours`;
    unit2= `minutes`;
  
    time1=Math.floor(time/3600);
    time2=Math.floor((time%3600)/60);
  }

  if(time<3600){
    unit1= `minutes`;
    unit2= `seconds`;
  
    time1=Math.floor(time/60);
    time2=Math.floor((time/60)%60);
  }

  if(time<120) {
    unit1= `seconds`, unit2=``,time1 = Math.floor(time), time2=``;
  }

  TTC.textContent=textInput.value===`` ? `???`:`${time1} ${unit1} ${time2 ?? ``} ${unit2??``}`;

  TTC.textContent='Time to crack: '+ TTC.textContent;
  
  let entrop = num+upper+lower+special;
  
  const outcome = document.getElementById("outcome");
  const chuck = document.getElementById("chuck");
  const bill = document.getElementById("bill");
  score = Math.min(score, 100);
  if (passwordSet.has(textInput.value.toLowerCase())) {
    score=0;
    outcome.textContent=" has stolen your identification";
    chuck.textContent=attacker.textContent;
    chuck.style.color = color;
    //outcome.textContent=" has been defeated";
    bill.style.opacity=1;
    entrop=5;
    TTC.textContent=`Dictionary Attack!`;

  }
    
  else if(time>50000000&&hashrate>0){//attacker.style.color=color; 
     
    chuck.textContent=attacker.textContent;
    chuck.style.color = color;
    outcome.textContent=" has been defeated";
    bill.style.opacity=1;
  }
  else
    bill.style.opacity=0;
  
  
  bar.style.height = `${score/31536000}px`; test.textContent=`${score}`; 
    // Interpolate from red (255, 0, 0) to green (0, 255, 0)
  const red = Math.round(255 * (1 - score / 100));
  const green = Math.round(255 * (score / 100));

  
  
  //console.log("test:",passwordSet.has(textInput.value.toLowerCase()));
  if (passwordSet.has(textInput.value.toLowerCase()))  
  console.log("match detected!");
 



  if(score>99){ bar.style.boxShadow=" 0 0 12px #00FF66"; }
  else
  bar.style.boxShadow="";
  // Convert to hex and return
  bar.style.background = `rgb(${red}, ${green}, ${0})`;
  
  bar.style.height = `${score*2}px`;

  const minimum = document.getElementById("minimum");

  special === true ? (specials.style.color = "", specials.style.opacity = "1", specials.textContent='✅ special characters') : (specials.style.color = "#999", specials.style.opacity = "0.6", specials.textContent="• special characters");

  num === true ? (nums.style.color = "", nums.style.opacity = "1", nums.textContent='✅ numbers') : (nums.style.color = "#999", nums.style.opacity = "0.6",nums.textContent="• numbers");

  upper === true ? (uppers.style.color = "", uppers.style.opacity = "1", uppers.textContent='✅ upper case letters') : (uppers.style.color = "#999", uppers.style.opacity = "0.6", uppers.textContent="• upper case letters");

  lower === true ? (lowers.style.color = "", lowers.style.opacity = "1", lowers.textContent='✅ lower case letters') : (lowers.style.color = "#999", lowers.style.opacity = "0.6", lowers.textContent="• lower case letters");


  if(textInput.value.length==0){
  tip.textContent = ``, entropy.textContent =``,length.textContent="";
  document.querySelectorAll('.details p').forEach(el => el.textContent = '');
  }

  else if (textInput.value.length<8) {
    length.textContent = `password too short. consider making it longer `;
    minimum.style.color = "#999", minimum.style.opacity = "0.6",minimum.textContent="• 8 or more characters";
  }

  else {
    length.textContent=``;
    minimum.style.color = "white", minimum.style.opacity = "1", minimum.textContent='✅ 8 or more characters';
  }

  /*

  if(textInput.value.length>3){
    let key = `${+num}${+upper}${+lower}${+special}`;
    switch (key) {
    case "0001":
    tip.textContent = "This is only specials characters. how are you even going to remember that";
    break;
    case "1000":
    tip.textContent = "Its a password. Not a PIN number. Add some letters and special characters";
    break;
    case "1111":
    tip.textContent = "Strong variety!";
    break;
    }
  }
  
  if(entrop ===1) entropy.textContent = "Low entropy: weak and very predictable";
  if(entrop ===2) entropy.textContent = "moderate entropy: some variety but still guessable";
  if(entrop ===3) entropy.textContent = "High entropy: good mix of characters. harder to bute force";
  if(entrop ===4) entropy.textContent = "Very high entropy: excellent diversity";
  if(entrop ===5) entropy.textContent = "Dictionary attack";

  entrop=0? entropy.style.opacity=0:entropy.style.opacity=1;

    if(score==0&&textInput.length>2){
    tip.textContent=`this password is among the top 100,000 most common passwords. Try to be more creative`;
    length.textContent=``; entropy.textContent=``;
  }
  
});


/*
document.getElementById('hashrate').addEventListener('change', function() {
  const value = this.value;
  console.log(`Hashrate set to ${value} GH/s`);
});


document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggleBlurBtn");
  const iframe = document.querySelector("iframe");
  const chunk = document.querySelector(".chunk"); 
  let isBlurred = true;

  button.addEventListener("click", () => {
    if (isBlurred) {

      iframe.style.filter = "blur(0px)";

      button.textContent = "Blur Map";
    chunk.style.opacity = "0";

    } else {

    iframe.style.filter = "blur(8px)";

    button.textContent = "Unblur Map";

    chunk.style.opacity = "1";

    }

    isBlurred = !isBlurred;

  });
});
*/
