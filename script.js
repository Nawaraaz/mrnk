function showFlirting() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('flirt-screen').style.display = 'block';
}

function showLoveQuestion() {
    document.getElementById('flirt-screen').style.display = 'none';
    document.getElementById('love-screen').style.display = 'block';
}

function showLoveAccepted() {
    document.getElementById('love-screen').style.display = 'none';
    document.getElementById('final-screen').style.display = 'block';
}

function moveNoButton() {
    const noBtn = document.getElementById('no-btn');
    noBtn.classList.add('move');
    setTimeout(() => {
        noBtn.classList.remove('move');
    }, 500);
}
