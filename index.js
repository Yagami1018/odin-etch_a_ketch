let container = document.getElementById('container');
const gSize = document.getElementById('gSize');
const subBtn = document.getElementById('subBtn');
const desiredSize = document.getElementById('desiredSize');

subBtn.addEventListener('click', () => {
    if (container.hasChildNodes()) {
        container.remove();
        container = document.createElement('div');
        container.classList.add('container');
        document.body.insertBefore(container, desiredSize);
    }

    const size = Math.min(gSize.value, 100);
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
});
