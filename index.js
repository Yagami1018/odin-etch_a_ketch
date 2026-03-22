let container = document.getElementById('container');
const gSize = document.getElementById('gSize');
const subBtn = document.getElementById('subBtn');
const desiredSize = document.getElementById('desiredSize');

const playEtchAKetch = () => {
    if (container.hasChildNodes()) {
        container.remove();
        container = document.createElement('div');
        container.classList.add('container');
        document.body.insertBefore(container, desiredSize);
    }
    let size;
    if (gSize.value > 100) {
        globalThis.alert('The max value is 100');
        size = 100;
    } else if (gSize.value < 1) {
        globalThis.alert('The min value is 1');
        size = 1;
    } else {
        size = gSize.value;
    }
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        for (let j = 0; j < size; j++) {
            let div = document.createElement('div');
            div.classList.add('square');
            div.style.width = `${960 / size}px`;
            div.style.height = `${960 / size}px`;
            div.style.backgroundColor = 'hsla(0, 0%, 0%, 0.00)';
            let op = 0;
            let hue = Math.floor(Math.random() * 100);
            let saturation = Math.floor(Math.random() * 100);
            let brigth = Math.floor(Math.random() * 100);
            div.addEventListener('mouseenter', () => {
                op += 0.1;
                div.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${brigth}%, ${op})`;
            });
            row.appendChild(div);
        }
        container.appendChild(row);
    }
};

gSize.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        playEtchAKetch();
    }
});
subBtn.addEventListener('click', playEtchAKetch);

playEtchAKetch();
