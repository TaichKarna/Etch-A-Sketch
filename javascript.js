
const board = document.querySelector('.board');
const container = document.querySelector('.container');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');
const pen = document.querySelector('.pen');
const size = document.querySelector('.slider');
const color = document.querySelector('.color');
const rainbow = document.querySelector('.rainbow');

let num = size.value;
let penColor = color.value;

function createDiv(num)
{
    for(let i = 0 ; i<num;i++)
    {
        const div = document.createElement('div');
        div.setAttribute('id',`div_${i}`);
        board.appendChild(div);
    }
    for(let j = 0;j<num;j++){

    for(let i = 0 ; i<num; i++)
    {   const par = document.querySelector(`#div_${j}`)
        const div = document.createElement('div');
        div.classList.add(`div_${i}`)
        par.appendChild(div);
    }
}
}
 
createDiv(num);

board.addEventListener('mouseover', (event)=>
{
    let target = event.target;

    target.style.cssText = `background-color: ${penColor}` 
});

board.addEventListener('mouseout', (event)=>
{
    let target = event.target;
    target.style.cssText = `background-color: ${penColor}` 
});


clear.addEventListener('click', (event)=>
{
    for(let i = 0 ; i< num ;i++){
        for(let j = 0; j< num ; j++){
            const div = document.querySelector( `#div_${i}`);
            const element = div.querySelector(`.div_${j}`);
            element.style.cssText = "background-color: white;";
        }
    }
});

eraser.addEventListener('click',(event)=>
{ penColor = "white";
});

pen.addEventListener('click',(event)=>
{   penColor = "black";
});

size.addEventListener('click',(event)=>
{ 
    for(let i = 0 ; i< num ;i++){
        const div = document.querySelector( `#div_${i}`);

        for(let j = 0; j< num ; j++){
            const element = div.querySelector(`.div_${j}`);
            div.removeChild(element);
        }
        board.removeChild(div);
    }
     num = size.value;
    createDiv(num);
});

color.addEventListener('click',(event)=>
{   penColor = color.value;
});