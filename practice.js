let compChoice = () => {
    let num = Math.random()
    if (num < 0.34) return 'gajah';
    if (num >= 0.34 && num < 0.64) return 'orang';
    return 'semut'
};

let result = (comp, player) => {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    if (player == 'semut') return (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
};

function putar() {
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const timeStart = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - timeStart > 1000) {
            clearInterval;
            return;
        };
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i = gambar.length) i = 0;
    }, 100)
}

const choice = document.querySelectorAll('li img');
choice.forEach(function (i) {
    i.addEventListener('click', function () {
        const comp = compChoice();
        const player = i.className;
        const hasil = result(comp, player);

        putar();

        setTimeout(function () {
            const imgComp = document.querySelector('.img-computer');
            imgComp.setAttribute('src', 'img/' + comp + '.png');

            const infoHasil = document.querySelector('.info');
            infoHasil.innerHTML = hasil;
        }, 1000)
    })
})