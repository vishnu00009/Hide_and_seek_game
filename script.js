const box1 = document.getElementById("boxes1");
const mainBox = document.querySelector(".box");
const box2 = document.getElementById("boxes2");
const box3 = document.getElementById("boxes3");
const box4 = document.getElementById("boxes4");
const box5 = document.getElementById("boxes5");
const box6 = document.getElementById("boxes6");
const box7 = document.getElementById("boxes7");
const box8 = document.getElementById("boxes8");
const box9 = document.getElementById("boxes9");
const box10 = document.getElementById("boxes10");
const box11 = document.getElementById("boxes11");
const box12 = document.getElementById("boxes12");
const box13 = document.getElementById("boxes13");
const box14 = document.getElementById("boxes14");
const box15 = document.getElementById("boxes15");
const box16 = document.getElementById("boxes16");
const box17 = document.getElementById("boxes17");
const box18 = document.getElementById("boxes18");
const box19 = document.getElementById("boxes19");
const box20 = document.getElementById("boxes20");
const box21 = document.getElementById("boxes21");
const box22 = document.getElementById("boxes22");
const box23 = document.getElementById("boxes23");
const box24 = document.getElementById("boxes24");
const box25 = document.getElementById("boxes25");
const box26 = document.getElementById("boxes26");
const box27 = document.getElementById("boxes27");
const box28 = document.getElementById("boxes28");
const box29 = document.getElementById("boxes29");
const box30 = document.getElementById("boxes30");
const box31 = document.getElementById("boxes31");
const box32 = document.getElementById("boxes32");
const box33 = document.getElementById("boxes33");
const box34 = document.getElementById("boxes34");
const box35 = document.getElementById("boxes35");
const box36 = document.getElementById("boxes36");

const gameOver = document.getElementById("gOver");
const gameWon = document.getElementById("Win");

function pageReload() {
  location.reload();
}

function nextLevel() {
  location.reload();
}

function third_level() {
  locattion.reload();
}

let count = 0;
let Miss = 0;

let Bomb = 0;
function generateRandom() {
  let ans = 1;
  let temp = Math.ceil(Math.random() * 9);

  if (temp != Bomb) {
    ans = temp;
  } else {
    generateRandom();
  }
  return ans;
}

Bomb = generateRandom();
console.log("Bomb", Bomb);

function generateRandomGift2(tempList) {
  let ans = 1;
  let temp = Math.ceil(Math.random() * 9);
  console.log("temp in gift 2 is " + temp);
  if (temp != Bomb && temp != tempList[0]) {
    ans = temp;
  } else {
    ans = generateRandomGift2(tempList);
  }
  return ans;
}

function generateRandomGift3(tempList) {
  let ans = 1;
  let temp = Math.ceil(Math.random() * 9);
  console.log("temp in gift  is 3 " + temp);

  if (temp != Bomb && temp != tempList[0] && temp != tempList[1]) {
    ans = temp;
  } else {
    ans = generateRandomGift3(tempList);
  }
  return ans;
}

let giftList = [];

for (let i = 0; i < 3; i++) {
  // console.log("for loop\n")
  // console.log(giftList[i])
  if (i == 1) {
    giftList[i] = generateRandomGift2(giftList);
    // if(giftList[i-1] == giftList[i]){
    //     giftList[i] = generateRandom()
    // }
    continue;
  }
  if (i == 2) {
    giftList[i] = generateRandomGift3(giftList);
    // if(giftList[i-1] == giftList[i] || giftList[i-2] == giftList[i]){
    //     giftList[i] = generateRandom()
    // }
    continue;
  }
  giftList[i] = generateRandom();
}

let [gift1, gift2, gift3] = giftList;
console.log(giftList);
console.log(gift1);
console.log(gift2);
console.log(gift3);

//User Input --> Display,count,Miss,and all other logics 
let userInput = document.getElementById("user-input");
let btn = document.getElementById("btn");
let giftCount = document.getElementById("gifts-count");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  let userValue = userInput.value;
  if (userValue == Bomb) {
    document.getElementById(`boxes${userValue}`).innerHTML = `
    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/skull-and-crossbones_2620-fe0f.png" width="80px" height="80px">
                `;
    gameOver.style.display = "block";
  } else if (userValue == gift1) {
    count++;
    giftCount.innerHTML = count;
    document.getElementById(
      `boxes${userValue}`
    ).innerHTML = `<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/joypixels/340/wrapped-gift_1f381.png"> `;
    gift1 = 0;
  } else if (userValue == gift2) {
    count++;
    giftCount.innerHTML = count;
    document.getElementById(
      `boxes${userValue}`
    ).innerHTML = `<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/joypixels/340/wrapped-gift_1f381.png"> `;
    gift2 = 0;
  } else if (userValue == gift3) {
    count++;
    giftCount.innerHTML = count;
    document.getElementById(`boxes${userValue}`).innerHTML = `<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/joypixels/340/wrapped-gift_1f381.png"> `;
    gift3 = 0;
  } else {
    Miss++;
    document.getElementById(`boxes${userValue}`).innerHTML = `<h2>Miss</h2>`;
  }
  console.log(count);
  let totalCount = count + Miss;
  if (count == 3) {
    gameWon.style.display = "block";
    document.getElementById("eff").innerHTML =
      "Efficiency = " + (count / totalCount) * 100 + "%";
  }
  userInput.value = "";
});
