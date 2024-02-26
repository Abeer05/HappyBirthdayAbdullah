const input = document.getElementById('textbox');
let age = 0;
let clicked = false;
let finish = false;
let stream;
var rows = 3;
var columns = 4;
var tile, otherTile;
var turns = 0;
var order = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const correctOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

function restart() {
    orders = [
        [3, 2, 1, 4, 6, 5, 7, 8, 9, 10, 11, 12], 
        [1, 5, 2, 4, 3, 7, 6, 8, 9, 10, 11, 12], 
        [1, 3, 2, 4, 5, 7, 6, 8, 9, 10, 11, 12], 
        [1, 2, 3, 6, 5, 4, 7, 8, 9, 10, 11, 12], 
        [1, 2, 3, 5, 7, 6, 4, 8, 9, 10, 11, 12], 
        [1, 2, 3, 5, 4, 6, 7, 8, 9, 10, 11, 12], 
        [1, 2, 3, 5, 4, 6, 7, 9, 8, 10, 11, 12], 
        [1, 2, 3, 5, 4, 6, 7, 8, 10, 11, 9, 12], 
        [1, 2, 3, 5, 4, 6, 7, 8, 9, 11, 10, 12], 
        [1, 2, 3, 5, 4, 6, 7, 8, 9, 10, 12, 11]
    ];
    let tiles = document.getElementById("board").getElementsByTagName("img");
    tiles = Array.from(tiles);
    tiles.forEach(tile => {
        tile.parentNode.removeChild(tile);
    });
    order = orders[randInt(false, 10, 0)];
    puzzle();
};

function randInt(decimal, num1, num2) {
    let num;
    if (!decimal) {
        num = Math.floor((Math.random() * num1) + num2);
    } else {
        num = Math.random() * num1;
    }
    return num;
}

function popup() {
    document.getElementById('captcha-popup').classList.remove('hidden');
}

function captcha() {
    let num = randInt(false, 5, 0);
    let file = `img/captcha${num}.png`;
    let img = document.getElementById('captcha-image');
    img.src = file;
}

function info() {
    alert('Type the text shown in the photo below (case sensitive)');
}

function tts() {
    let path = document.getElementById('captcha-image').src;
    let file = path.replace(/^.*[\\\/]/, '');
    let num = file.replace(/[^0-9]/g, '');
    let mp3 = `audio/audio${num}.mp3`;
    new Audio(mp3).play();
}

function button() {
    let button = document.getElementById('verify');
    let label = document.getElementById('textbox-label');
    if (input.value != '') {
        input.style.borderColor = 'transparent transparent #5797E4 transparent';
        label.classList.add('hidden');
        button.style.opacity = '100%';
        button.classList.add('click');
    } else {
        button.style.opacity = '50%'; 
    }
}

function verify() {
    const text = ['i need abeer', 'abeer is my future wife', 'abeer is awesome', 'i love abeer', 'abeer is amazing'];
    let label = document.getElementById('textbox-label');
    let path = document.getElementById('captcha-image').src;
    let file = path.replace(/^.*[\\\/]/, '');
    let num = file.replace(/[^0-9]/g, '');

    if (input.value != '') {
        if (input.value == text[num]) {
            document.getElementById('captcha-top').style.display = 'none';
            document.getElementById('captcha-bottom').style.display = 'none';
            document.getElementById('love1').classList.remove('hidden');
        } else {
            input.style.borderColor = 'red';
            label.classList.remove('hidden');
            captcha();
        }
    }
}

if (input) {
    input.addEventListener('keyup', function(event) {
        if (event.key == 'Enter') {
            verify();
        }
    })
}

function no1() {
    let button = document.getElementById('no1');
    let text = document.getElementById('dylm1');
    let yes = document.getElementById('yes1')
    let buttonX, buttonY;
    do {
        buttonX = randInt(true, 390, 0);
        buttonY = randInt(true, 212, 0);
        button.style.left = `${buttonX}px`;
        button.style.top = `${buttonY}px`;r
        var buttonRect = button.getBoundingClientRect();
        var textRect = text.getBoundingClientRect();
        var yesRect = yes.getBoundingClientRect();
    } while (!(buttonRect.right < textRect.left ||  
        buttonRect.left > textRect.right ||  
        buttonRect.bottom < textRect.top ||  
        buttonRect.top > textRect.bottom) ||
        !(buttonRect.right < yesRect.left ||  
            buttonRect.left > yesRect.right ||  
            buttonRect.bottom < yesRect.top ||  
            buttonRect.top > yesRect.bottom));
}

function yes1() {
    document.getElementById('love1').classList.add('hidden');
    document.getElementById('love2').classList.remove('hidden');
}

function no2() {
    let no = document.getElementById('no2');
    let yes = document.getElementById('yes2');
    if (no.textContent == 'NO') {
        no.textContent = 'YES';
        no.style.backgroundColor = 'rgb(83, 195, 83)';
        yes.textContent = 'NO';
        yes.style.backgroundColor = 'rgb(248, 107, 107)';
    }
}

function yes2() {
    let no = document.getElementById('no2');
    let yes = document.getElementById('yes2');
    if (yes.textContent = 'NO') {
        yes.textContent = 'YES';
        yes.style.backgroundColor = 'rgb(83, 195, 83)';
        no.textContent = 'NO';
        no.style.backgroundColor = 'rgb(248, 107, 107)';
    }
}

function yes() {
    document.getElementById('love2').classList.add('hidden');
    document.getElementById('love3').classList.remove('hidden');
}

function yes3() {
    let popup = document.getElementById('captcha-popup');
    popup.style.animation = 'fade-out 1s';
    setTimeout(function() {
        popup.style.display = 'none';
        document.getElementById('check').classList.add('hidden');
        document.getElementById('loading').classList.remove('hidden');
        setTimeout(function() {
            document.getElementById('captcha').style.display = 'none';
            document.getElementById('puzzle-container').classList.remove('hidden');
            shuffle(order);
        }, 4000);
    }, 1000);
}


function candle(event) {
    let candle = document.createElement('img');
    candle.src = 'img/candle.png';
    candle.classList.add('candle');
    let cake = document.getElementById('cake-container');
    let rect = cake.getBoundingClientRect();
    let flame = document.createElement('img');
    flame.src = 'img/flame.png';
    flame.classList.add('flame');
    let text = document.getElementById('wish');
    let num = document.getElementById('age').innerHTML;
    let map = document.getElementById('map');
    let button = document.getElementById('stop');
    
    if (num == `"ARE YOU <b>19</b>?"`) {
        map.style.display = 'none';
        finish = true;
    }
    if (clicked) {
        text.classList.add('hidden');
        clicked = false;
    }
    if (!finish) {
        let offsetX = rect.left + window.scrollX;
        let offsetY = rect.top + window.scrollY;
        const x = event.clientX - offsetX;
        const y = event.clientY - offsetY;
        candle.style.left = `${x-15}px`;
        candle.style.top = `${y-70}px`;
        flame.style.left = `${x-15}px`;
        flame.style.top = `${y-210}px`;
        cake.appendChild(candle);
        cake.appendChild(flame);
        age++;
        document.getElementById('age').innerHTML = `"ARE YOU <b>${age}</b>?"`;
    } else {
        button.innerHTML = '"STOP!!!!!"';
    }

}

function stop() {
    let num = document.getElementById('age');
    let text = document.getElementById('wish');
    let title = document.getElementsByClassName('title')[0];
    if (num.innerHTML != `"ARE YOU <b>19</b>?"`) {
        text.classList.remove('hidden');
        clicked = true;
    } else {
        num.classList.add('hidden');
        title.innerHTML = '<b>BLOW OUT THE CANDLES!!</b>';
        getStream();
    }
}

async function getStream() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext = new AudioContext();
        const mediaStreamSource = audioContext.createMediaStreamSource(stream);

        await audioContext.audioWorklet.addModule('loudness-processor.js');
        const loudness = new AudioWorkletNode(audioContext, 'loudness-processor');
        mediaStreamSource.connect(loudness);
        loudness.connect(audioContext.destination);

        loudness.port.onmessage = function(event) {
            if (event.data === 'blowing') {
                blowing();
            }
        };
    } catch (error) {
        console.error('Error accessing microphone:', error);
    }
}

function blowing() {
    let parent = document.getElementById('cake-container');
    let flames = document.getElementsByClassName('flame');

    if (flames.length > 0) {
        let index = randInt(false, flames.length, 0);
        parent.removeChild(flames[index]);
    } else {
        stopStream();
        setTimeout(function() {
            confetti({
                particleCount: 100,
                spread: 100,
                origin: { y: 0.6 }
            });
            let mp3 = 'audio/yay.mp3';
            new Audio(mp3).play();
            setTimeout(function() {
                parent.classList.add('hidden');
                document.getElementById('card').classList.remove('hidden');
            }, 2000);
        }, 2000);
    }
}

function stopStream() {
    if (stream) {
        stream.getAudioTracks().forEach(track => track.stop());
    }
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    while (!solvable(order)) {
        shuffle(order);
    }
    let tiles = document.getElementById("board").getElementsByTagName("img");
    tiles = Array.from(tiles);
    tiles.forEach(tile => {
        tile.parentNode.removeChild(tile);
    });
    puzzle();
}

function solvable(arr) {
    let inversions = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] !== "4" && arr[j] !== "4" && arr[i] > arr[j]) {
                inversions++;
            }
        }
    }
    return inversions % 2 === 0;
}

function puzzle() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let tile = document.createElement("img");
            tile.id = `${i}-${j}`;
            tile.src = `img/${order.shift()}.png`;
            
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile);
        }
    }
}

function dragStart() {
    tile = this;
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
}

function dragLeave(event) {
    event.preventDefault();
}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {
    if (otherTile.src.includes("4.png")) {
        let coords = tile.id.split("-");
        let row1 = parseInt(coords[0]);
        let column1 = parseInt(coords[1]);

        let otherCoords = otherTile.id.split("-");
        let row2 = parseInt(otherCoords[0]);
        let column2 = parseInt(otherCoords[1]);

        let left = row1 == row2 && column2 == column1 - 1;
        let right = row1 == row2 && column2 == column1 + 1;
        let up = column1 == column2 && row2 == row1 - 1;
        let down = column1 == column2 && row2 == row1 + 1;
        let adjacent = left || right || up || down;

        if (adjacent) {
            let img = tile.src;
            let otherImg = otherTile.src;
            tile.src = otherImg;
            otherTile.src = img;
        }
    }

    if (solved()) {
        confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.6 }
        });
        let mp3 = 'audio/yay.mp3';
        new Audio(mp3).play();
        document.getElementById("puzzle-container").classList.add("hidden");
        document.getElementById("cake-container").classList.remove("hidden");
    }
}

function solved() {
    let tiles = document.getElementById("board").getElementsByTagName("img");
    for (let i = 0; i < tiles.length; i++) {
        let path = tiles[i].src;
        let file = path.replace(/^.*[\\\/]/, '');
        let num = file.replace(/[^0-9]/g, '');
        if (num !== correctOrder[i]) {
            return false;
        }
    }
    return true;
}

function finale() {
    document.getElementById("paragraph").classList.remove("hidden");
}

captcha();