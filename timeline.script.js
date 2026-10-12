/* ===== SCREEN TRANSITION ===== */

function changeScreen(currentId, nextId) {

    const currentScreen = document.getElementById(currentId);
    const nextScreen = document.getElementById(nextId);

    currentScreen.classList.add('screen-transition-out');

    setTimeout(() => { 

        currentScreen.classList.add('hidden');
        currentScreen.classList.remove('screen-transition-out');

        nextScreen.classList.remove('hidden');
        nextScreen.classList.add('screen-transition-in');

        setTimeout(() => {
            nextScreen.classList.remove('screen-transition-in');
        }, 800);

    }, 600);
}


/* ===== JOURNEY START ===== */

function showMemory() {

    document.querySelector('.timeline-page > h1').style.display = 'none';
    document.querySelector('.timeline-intro').style.display = 'none';
    document.querySelector('.timeline-start').style.display = 'none';

    const memory = document.getElementById('memory-1');
    // Start the reel only after Begin the Journey is clicked
    document.getElementById('photo-reel').classList.remove('hidden');

    memory.classList.remove('hidden');
    memory.classList.add('screen-transition-in');

    setTimeout(() => {
        memory.classList.remove('screen-transition-in');
    }, 800);
}


/* ===== MEMORIES ===== */

function showMemory2() {
    changeScreen('memory-1', 'memory-2');
}

function showMemory3() {
    changeScreen('memory-2', 'memory-3');
}

function showMemory4() {
    changeScreen('memory-3', 'memory-4');
}

function showMemory5() {
    changeScreen('memory-4', 'memory-5');
}

function showMemory6() {
    changeScreen('memory-5', 'memory-6');
}

function showMemory7() {
    changeScreen('memory-6', 'memory-7');
}

function showMemory8() {
    changeScreen('memory-7', 'memory-8');
}

function showMemory9() {
    changeScreen('memory-8', 'memory-9');
}


/* ===== BIRTHDAY MESSAGE ===== */

function showBirthdayMessage() {
    changeScreen('memory-9', 'birthday-message');
}


/* ===== BIRTHDAY PARTY ===== */

function showBirthdayParty() {
    // Stop and hide the reel before the final celebration
    document.getElementById('photo-reel').classList.add('hidden');

    changeScreen('birthday-message', 'birthday-party');
}