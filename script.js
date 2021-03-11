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
    table_bg.style.backgroundColor = 'rgba(255,0,0,.8)';
});

bgcolor_green.addEventListener('click',function(){
    body_bg.style.backgroundColor = 'rgba(0,180,0,.3)';
    table_bg.style.backgroundColor = 'rgba(0,180,0,.8)';
});

bgcolor_blue.addEventListener('click',function(){
    body_bg.style.backgroundColor = 'rgba(0,100,150,.3)';
    table_bg.style.backgroundColor = 'rgba(0,100,150,.8)';
});

/*--alert*2--*/
document.querySelector('#alert_btn').addEventListener('click',function(){
    let text_1 = document.querySelector('#text_1').value;
    let text_2 = document.querySelector('#text_2').value;
    alert (text_1);
    alert (text_2);
});

/*--change_div color--*/
var a=1;
let div_group = document.querySelectorAll('.divcolor');
document.querySelector('#divcolor_btn').addEventListener('click',function(){
    if (a>0){
        for (var i=0;i<div_group.length;i++){
            div_group[i].style.backgroundColor = 'red';
        }
        a=a*-1
    }else{
        for (var i=0;i<div_group.length;i++){
            div_group[i].style.backgroundColor = 'black';
        }
        a=a*-1
    }
});

/*--hover_style--*/
let hover_box = document.querySelector('.hover_box')
hover_box.addEventListener('mouseenter',function(){
    hover_box.classList.add('hover');
});
hover_box.addEventListener('mouseout',function(){
    hover_box.classList.remove('hover');
});

/*--password--*/
let checkbox1 = document.querySelector('.checkbox1')
let note = document.querySelector('.note')
checkbox1.addEventListener('mouseenter',function(){
    note.style.display = 'block';
});
checkbox1.addEventListener('mouseout',function(){
    note.style.display = 'none';
});