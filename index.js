const grid = document.getElementsByClassName('grid')[0];
const sliderSize = document.getElementById('size');
const btnGSize = document.getElementById('btn-size');
const spanSize = document.getElementById('span-size');
const btnClear = document.getElementById('btn-clear');
const sliderColor = document.getElementById('color');
const colorSample = document.getElementById('color-sample');
const btnPen = document.getElementById('btn-pen');
const btnEraser = document.getElementById('btn-eraser');

    const createGrid = (value) => {
        console.log('hola')
        grid.innerHTML="";
        gridSize = value * value;
        divSize = 1000 / value;
        for (let i = 0; i < value; i++) {
            const div = document.createElement('div');
            div.style.width = divSize + 'px';
            div.style.height = divSize + 'px';
            
            for (let j = 0; j < value; j++) {
                const subdiv = document.createElement('div');
                subdiv.style.width = divSize + 'px';
                subdiv.style.height = divSize + 'px';
                subdiv.addEventListener('mouseover', () => {
                    subdiv.style.backgroundColor = divColor;
                })
                div.appendChild(subdiv);
            }
            grid.appendChild(div);
        }
    }

    let divColor = 'hsl(0, 0%, 0%)';
    let sliderValue = 16;
    
    sliderSize.addEventListener('change', (e) => sliderValue = e.target.value); 
    sliderSize.addEventListener('mousemove', (e) => spanSize.innerHTML = e.target.value + 'x' + e.target.value); 
    sliderColor.addEventListener('change', (e) => divColor = `hsl(${e.target.value}, 100%, 50%)`); 
    sliderColor.addEventListener('mousemove', (e) => colorSample.style.backgroundColor = `hsl(${e.target.value}, 100%, 50%)`); 

    btnGSize.addEventListener('click', () => createGrid(sliderValue));
    btnClear.addEventListener('click', () => createGrid(sliderValue));
    btnPen.addEventListener('click', () => {
        divColor = 'hsl(0, 0%, 0%)';
        colorSample.style.backgroundColor = 'black';
    });
    btnEraser.addEventListener('click', () => {
        divColor = 'hsl(0, 0%, 100%)';
        colorSample.style.backgroundColor = 'white';
    });

    spanSize.innerHTML = sliderValue + 'x' + sliderValue;
    createGrid(sliderValue);