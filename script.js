//model
let audio = document.getElementById('audio');
let effect = document.getElementById('sound');
let info = 'klikk sopp for å ta med i kamp'
let mushroomNum = 0;
let playerChoice;
let bShroomNum = 0;
let maxhp = 0;
let hp = 0;
let atk = 0;
let maxbhp = 300;
let bhp = 300;
let batk = 15;
let mainImg = '<img src="img/mario.png">';
let move1Img = '<img src="img/luigi.png">';
let move2Img = '<img src="img/peach.png">';
let move3Img = '<img src="img/yoshi.png">';
let jumpImg = '';
let bowsImg = '';


//view
startknappSkjerm();
function startknappSkjerm() {
    document.getElementById('app').innerHTML = '<button class="button" onclick="startKnapp()">kjør spill</button>'
}
function startKnapp() {
    startMusic();
    startScreen();
}
function startScreen() {
    document.getElementById('app').innerHTML = /*html*/ `
    <div class="content">
    <!-- start screen -->
    <img src="img/select screen.png">
    <h1 class="info">${info}</h1>
    <div class="button2"></div>
    <div class="jump">${jumpImg}</div>
    <div class="shroom" onclick="addMushroom()"><img src="img/shroom.png"></div>
    <div class="main" onclick="playerSelect('mario')">${mainImg}</div>
    <div class="move1" onclick="playerSelect('luigi')">${move1Img}</div>
    <div class="move2" onclick="playerSelect('peach')">${move2Img}</div>
    <div class="move3" onclick="playerSelect('yoshi')">${move3Img}</div>
    <div class="bows">${bowsImg}</div>
    <div class="bshroom" onclick="addBshroom()"><img src="img/bowsershroom.png"></div>
    <div class="shroomnum">${mushroomNum}</div>
    <button class="button" onclick="setup()">Start!</button>
    <div class="bshroomnum">${bShroomNum}</div>
    </div>
    </div>
    `;
}
function battleScreen() {
    document.getElementById('app').innerHTML = /*html*/ `
    <div class="content">
    <!-- start screen -->
    <img src="img/stage.png">
    <h1 class="info">${info}</h1>
    <div class="button2"> <button class="button2" onclick="attack('player')">${playerChoice} angriper!</div>
    <div class="jump">${jumpImg}</div>
    <div class="shroom" onclick="useMushroom()"><img src="img/shroom.png"></div>
    <div class="main">${mainImg}</div>
    <div class="move1">${move1Img}</div>
    <div class="move2">${move2Img}</div>
    <div class="move3">${move3Img}</div>
    <div class="bows">${bowsImg}</div>
    <div class="bshroom" onclick="useBshroom()"><img src="img/bowsershroom.png"></div>
    <div class="shroomnum">${mushroomNum}</div>
    <meter class="healthplayer" value="${hp}" max="${maxhp}">${hp} av ${maxhp}</meter>
    <button class="button" onclick="attack('bows')">bowser angriper!</button>
    <meter class="healthbow" value="${bhp}" max="${maxbhp}">${bhp} av ${maxbhp}</meter>
    <div class="bshroomnum">${bShroomNum}</div>
    </div>
    </div>
    `;

}


//controller
//kunne kombinert victory og loss med forskjellige parametre, men det er seint på kvelden.
function victoryScreen() {
    document.getElementById('app').innerHTML = 'gratulerer. visual effects <br> <button class="button" onclick="startKnapp()">kjør spill</button>';
    mainImg = '<img src="img/mario.png">';
    move1Img = '<img src="img/luigi.png">';
    move2Img = '<img src="img/peach.png">';
    move3Img = '<img src="img/yoshi.png">';
    jumpImg = '';
    bowsImg = '';
    info = 'klikk sopp for å ta med i kamp';
    mushroomNum = 0;
    bShroomNum = 0;
}
function lossScreen() {
    document.getElementById('app').innerHTML = 'du tapte. such effort <br> <button class="button" onclick="startKnapp()">kjør spill</button>';
    mainImg = '<img src="img/mario.png">';
    move1Img = '<img src="img/luigi.png">';
    move2Img = '<img src="img/peach.png">';
    move3Img = '<img src="img/yoshi.png">';
    jumpImg = '';
    bowsImg = '';
    info = 'klikk sopp for å ta med i kamp';
    mushroomNum = 0;
    bShroomNum = 0;
}
function startMusic() {
    audio.innerHTML = `<audio src="sound/102 Main Title.mp3" autoplay loop></audio>`
}
function addMushroom() {
    mushroomNum++;
    startScreen();
}
function addBshroom() {
    bShroomNum++;
    startScreen();
}
function playerSelect(character) {
    playerChoice = character;
    if (character == 'mario') {
        hp = 200;
        maxhp = 200;
        atk = 20;
        info = character + '       hp=' + hp + '  attack=' + atk;
        return hp, atk, startScreen();
    }
    if (character == 'luigi') {
        hp = 140;
        maxhp = 140;
        atk = Math.floor(Math.random() * 26) + 8;
        info = character + '       hp=' + hp + '  attack=' + atk;
        return hp, atk, startScreen();
    }
    if (character == 'peach') {
        hp = 100;
        maxhp = 100;
        atk = Math.floor(Math.random() * 30) + 10;
        info = character + '       hp=' + hp + '  attack=' + atk;
        return hp, atk, startScreen();
    }
    if (character == 'yoshi') {
        hp = 80;
        maxhp = 80;
        atk = Math.floor(Math.random() * 50) + 20;
        info = character + '       hp=' + hp + '  attack=' + atk;
        return hp, atk, startScreen();
    }

}
function setup() {
    if (playerChoice) {
        mainImg = /*html*/'<img src="img/' + playerChoice + '.png">';
        move1Img = '';
        move2Img = '';
        move3Img = '';
        bowsImg = '<img src="img/bowser.png">'
        bhp = 300;
        info = 'klikk sopp for å fylle helse'
        audio.innerHTML = /*html*/`<audio src="sound/230 Bowser's Rage.mp3" autoplay loop></audio>`
        return battleScreen();
    } else info = 'Velg en karakter';
    startScreen();
}

function useMushroom() {
    if (mushroomNum > 0) {
        mushroomNum--;
        hp += 30;
    } else info = playerChoice + ' er tom for sopp';
    battleScreen();
}
function useBshroom() {
    if (bShroomNum > 0) {
        bhp += 30;
        bShroomNum--;
    } else info = 'bowser er tom for sopp';
    battleScreen();
}
function attack(attacker) {
    if (attacker == 'player') playerMove1();
    if (attacker == 'bows') bowsMove1();
}

function playerMove1() {
    mainImg = '';
    move1Img = '<img src="img/' + playerChoice + '.png">';
    battleScreen();
    let stmove = setTimeout(playerMove2, 200);
}
function playerMove2() {
    move1Img = '';
    move2Img = '<img src="img/' + playerChoice + '.png">';
    battleScreen();
    let ndmove = setTimeout(playerMove3, 200);
}
function playerMove3() {
    move2Img = '';
    move3Img = '<img src="img/' + playerChoice + '.png">';
    battleScreen();
    let rdmove = setTimeout(playerMove4, 200);
}
function playerMove4() {
    move3Img = '';
    jumpImg = '<img src="img/' + playerChoice + '.png">';
    effect.innerHTML = `<audio src="sound/boing.WAV" autoplay></audio>`
    bhp -= atk;
    if (bhp < 0) return victoryScreen();
    battleScreen();
    let thmove = setTimeout(playerMove5, 200);
}
function playerMove5() {
    jumpImg = '';
    move2Img = '<img src="img/' + playerChoice + '.png">';
    battleScreen();
    let bkmove = setTimeout(playerMovebk, 200);
}
function playerMovebk() {
    move2Img = ''
    mainImg = '<img src="img/' + playerChoice + '.png">'
    battleScreen();
}
function bowsMove1() {
    bowsImg = '';
    move3Img = '<img src="img/bowser.png">'
    effect.innerHTML = `<audio src="sound/bowser-step.WAV" autoplay></audio>`;
    battleScreen();
    let stbmove = setTimeout(bowsMove2, 200);
}
function bowsMove2() {
    move3Img = ''
    move2Img = '<img src="img/bowser.png">'
    effect.innerHTML = `<audio src="sound/bowser-step.WAV" autoplay></audio>`;
    battleScreen();
    let ndbmove = setTimeout(bowsMove3, 200);
}
function bowsMove3() {
    move2Img = ''
    move1Img = '<img src="img/bowser.png">'
    effect.innerHTML = `<audio src="sound/bowser-something.WAV" autoplay></audio>`;
    hp -= batk;
    if (hp < 0) return lossScreen();
    battleScreen();
    let ndbmove = setTimeout(bowsMove4, 200);
}
function bowsMove4() {
    move1Img = ''
    move3Img = '<img src="img/bowser.png">'
    effect.innerHTML = `<audio src="sound/bowser-step.WAV" autoplay></audio>`;
    battleScreen();
    let thbmove = setTimeout(bowsMovebk, 200);
}
function bowsMovebk() {
    move3Img = ''
    bowsImg = '<img src="img/bowser.png">'
    effect.innerHTML = `<audio src="sound/bowser-step.WAV" autoplay></audio>`;
    battleScreen();
}