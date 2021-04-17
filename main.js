function clearCanvas(){
    const canvas = document.getElementById("myCanvas");
    const context = canvas.getContext('2d');
    context.clearRect(0,0,canvas.width,canvas.height);
}

document.getElementById("cur_color").textContent = document.getElementById('colorpicker').value;

var colorPicker = document.getElementById("colorpicker");

colorPicker.addEventListener("change",function(){
    let color = document.getElementById('colorpicker').value;
    document.getElementById("cur_color").textContent = color;
    ctx.strokeStyle = document.getElementById("cur_color").textContent;
    
    let mouse_coord_text = document.getElementsByClassName("mouse_coords");
    for(var i = 0;i<mouse_coord_text.length;i++)
    {
        mouse_coord_text.item(i).style.color=color;
    };

    let title_text = document.getElementById("title");
    title_text.style.color = color;

    let body_border = document.getElementsByTagName("body")[0];
    body_border.style.color=color;
});

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var painting = document.getElementById("content");
var paintStyle = getComputedStyle(painting);
canvas.width = parseInt(paintStyle.getPropertyValue("width"));
canvas.height = parseInt(paintStyle.getPropertyValue("height"));

var mouse = {x: 0,y:0};

canvas.addEventListener("mousemove",function(e)
{
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;

    document.getElementById("x-value").textContent=mouse.x;
    document.getElementById("y-value").textContent=mouse.y;


},false);

var slider = document.getElementById("myRange");
var slide_val = document.getElementById("slide_val");
slide_val.innerHTML = slider.value;
var line_width = slider.value;

ctx.lineWidth = line_width;

slider.oninput = function() {
    slide_val.innerHTML = this.value;
    line_width  = this.value;
    ctx.lineWidth = line_width;
}

ctx.lineJoin = 'round';
ctx.lineCap='round';

ctx.strokeStyle = document.getElementById("cur_color").textContent;

canvas.addEventListener('mousedown',function(e)
{
    ctx.beginPath();
    ctx.moveTo(mouse.x,mouse.y);
    canvas.addEventListener("mousemove",onPaint,false);

},false);

canvas.addEventListener('mouseup',function(){
    canvas.removeEventListener('mousemove',onPaint,false);
},false);

var onPaint = function()
{
    ctx.lineTo(mouse.x,mouse.y);
    ctx.stroke();
};