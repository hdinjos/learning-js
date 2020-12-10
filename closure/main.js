function resizeFont(size) {
    return function(){ //function closure
        document.body.style.fontSize = size + 'px';
    };
}

let size8 = resizeFont(8); //size8 is closure, because this function can read varible size from resizeFont
let size15 = resizeFont(15);
let size20 = resizeFont(20);

// document.querySelector('#to12').onclick = size12;
// document.querySelector('#to15').onclick = size15;
// document.querySelector('#to20').onclick = size20;

document.querySelector('#to8').addEventListener('click', size8);
document.querySelector('#to15').addEventListener('click', size15);
document.querySelector('#to20').addEventListener('click', size20);