const textInput = document.getElementById("textInput"), nums = document.getElementById("nums"),
charCount = document.getElementById("charCount"), specials = document.getElementById("specials"),
TTC = document.getElementById("TTC"), uppers = document.getElementById("uppers"),
entropy = document.getElementById("entropy"), lowers = document.getElementById("lowers");
const hash = document.getElementById("hash"), tip = document.getElementById("tip");
const attacker = document.getElementById("attacker");
const hardware = document.getElementById("hardware");
const title = document.getElementById("title");
const threat = document.getElementById("threat");
const custom = document.getElementById("custom"),  arrow = document.getElementById("arrow");
const bar = document.getElementById("bar"), front = document.querySelector('.card-front');
const test = document.getElementById("test"), length = document.getElementById("length");



let hashrate, color="";
  
if(hashrate==undefined){
  TTC.textContent="Select a Threat Level";

  textInput.style.opacity=0;
}

  



document.getElementById('hashrate').addEventListener('change', function () {
  


  hashrate = parseInt(this.value);

  
  console.log("hash1: ", hashrate);
  //let color;
  
  switch (hashrate) {

    case 10: attacker.textContent = "Bob"; hardware.textContent = "Smart Fridge"; threat.textContent = "Trivial"; bio.textContent = "An IoT device gone rouge. Minimal compute power, barely capable of hashing."; document.getElementById("attackerImg").src = "trivial.png"; color="#1C4A7E";break;
    
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
    tip.textContent="Negative hashrates are prohibited. Please enter a valid positive number.";

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

  /[0-9]/.test(textInput.value) ? (time+=10, num=true) : (num=false);
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
  
  /*
  bar.style.height = `${score/31536000}px`; */test.textContent=`${score}`; 
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
 





  special === true ? (specials.style.color = "", specials.style.opacity = "1", specials.textContent='✅ Special characters') : (specials.style.color = "#999", specials.style.opacity = "0.6", specials.textContent="• Special characters");

  num === true ? (nums.style.color = "", nums.style.opacity = "1", nums.textContent='✅ Numbers') : (nums.style.color = "#999", nums.style.opacity = "0.6",nums.textContent="• Numbers");

  upper === true ? (uppers.style.color = "", uppers.style.opacity = "1", uppers.textContent='✅ Upper case letters') : (uppers.style.color = "#999", uppers.style.opacity = "0.6", uppers.textContent="• Upper case letters");

  lower === true ? (lowers.style.color = "", lowers.style.opacity = "1", lowers.textContent='✅ Lower case letters') : (lowers.style.color = "#999", lowers.style.opacity = "0.6", lowers.textContent="• Lower case letters");


  if(textInput.value.length==0){
  tip.textContent = ``, entropy.textContent =``,length.textContent="";
  document.querySelectorAll('.details p').forEach(el => el.textContent = '');
  }

  else if (textInput.value.length<8) {
    length.textContent = `Password is too short. Consider making it longer.`;
    minimum.style.color = "#999", minimum.style.opacity = "0.6",minimum.textContent="• 8 or more characters";
  }

  else {
    length.textContent=``;
    minimum.style.color = "white", minimum.style.opacity = "1", minimum.textContent='✅ 8 or more characters';
  }



  // Send password to server for checking
  fetch("http://localhost:8080/api/password/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ password: textInput.value })
  })
  .then(response => response.text())
  .then(message => {
    tip.textContent = message;
  })
  .catch(error => {
    console.error("Error:", error);
  });

  if(entrop ===1) entropy.textContent = "Low entropy: Weak and very predictable";
  if(entrop ===2) entropy.textContent = "Moderate entropy: Some variety but still guessable";
  if(entrop ===3) entropy.textContent = "High entropy: Good mix of characters. Harder to brute force";
  if(entrop ===4) entropy.textContent = "Very high entropy: Excellent diversity";
  if(entrop ===5) entropy.textContent = "Dictionary attack";

  entrop=0? entropy.style.opacity=0:entropy.style.opacity=1;

    if(score==0&&textInput.length>2){
    tip.textContent=`This password is among the top 100,000 most common passwords. Try to be more creative.`;
    length.textContent=``; entropy.textContent=``;
  }
  
});

// Send password to server for pattern analysis
  document.getElementById("analyzeBtn").addEventListener("click", async () => {
    const password = document.getElementById("textInput").value;
    const resultsDiv = document.getElementById("analysisResult");

    if (!password.trim()) {
      resultsDiv.innerHTML = "<p style='color:red;'>Please enter a password to analyze.</p>";
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/analyze/patterns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ password })
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      let html = `
        <h3>Pattern Analysis Results:</h3>
        <h4>Detected Segments:</h4>
      `;

      let weaknessFound = false;

      data.segments.forEach(seg => {
        html += `<div>${seg.text} → ${seg.type} (${seg.weakness || "No weakness"})</div>`;
        if (seg.weakness) {
          weaknessFound = true;
        }
      });

      if (weaknessFound) {
        html += `<h4 style="color:orange;">Your password contains common words or patterns. This may make it easier to crack. In order to improve password security, consider avoiding common words and patterns.</h4>
        `;
      } else {
        html += `<h4 style="color:green;">No common words or patterns detected.</h4>
        `;
      }

      resultsDiv.innerHTML = html;
    } catch (error) {
      console.error("Error during pattern analysis:", error);
      resultsDiv.innerHTML = "<p style='color:red;'>An error occurred while analyzing the password.</p>";
    }
  });

/////////////////////////////////////////






////////////////////////////////////////////


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
