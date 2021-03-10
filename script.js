let width_btn = document.querySelector('#width_btn');
let control_box = document.getElementById("control_box");

width_btn.addEventListener('click',function(){
    control_box.style.width = "100px";
});

let height_btn = document.querySelector('#height_btn');
height_btn.addEventListener('click',function(){
    control_box.style.height = "100px";
});

let color_btn = document.querySelector('#color_btn');
color_btn.addEventListener('click',function(){
    control_box.style.backgroundColor = "lightyellow";
});

let hidden_btn = document.querySelector('#hidden_btn');
hidden_btn.addEventListener('click',function(){
    control_box.style.display = 'none';
});

let reset_btn = document.querySelector('#reset_btn');
reset_btn.addEventListener('click',function(){
    control_box.style.width = '50px'
    control_box.style.height = '50px'
    control_box.style.backgroundColor = 'black'
    control_box.style.display = 'block'
});

/*--change_bgcolor--*/
let bgcolor_red = document.querySelector('.bgcolor_red');
let bgcolor_green = document.querySelector('.bgcolor_green');
let bgcolor_blue = document.querySelector('.bgcolor_blue');
let body_bg = document.querySelector('body');
let table_bg = document.querySelector('table');

bgcolor_red.addEventListener('click',function(){
    body_bg.style.backgroundColor = 'rgba(255,0,0,.3)';
    table_bg.style.backgroundColor = 'rgba(255,0,0,.5)';
});

bgcolor_green.addEventListener('click',function(){
    body_bg.style.backgroundColor = 'rgba(0,180,0,.3)';
    table_bg.style.backgroundColor = 'rgba(0,180,0,.5)';
});

bgcolor_blue.addEventListener('click',function(){
    body_bg.style.backgroundColor = 'rgba(0,100,150,.3)';
    table_bg.style.backgroundColor = 'rgba(0,100,150,.5)';
});