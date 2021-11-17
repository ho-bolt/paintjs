const canvas=document.getElementById("jsCanvas");
const ctx=canvas.getContext('2d');
const colors=document.getElementsByClassName("controls_color jsColor");
const brush=document.getElementById("jsRange");
const mode=document.getElementById("jsMode");
const Inital_color="2c2c2c";
const Canvas_SIZE = 700;

canvas.width = Canvas_SIZE;
canvas.height = Canvas_SIZE; //이 pixel modifer를 줘야지 그릴 수가 있다.

ctx.strokeStyle = Inital_color;
//그릴 선의 색깔
ctx.lineWidth=2.5;
//그 선의 넓이
ctx.fillStyle=Inital_color;


let painting=false;
let filling=false;

function stopPainting(){
    painting=false;
    
}

function startPaint(){
    painting=true;
}
function onMouseMove(event){
    const x=event.offsetX;
    const y=event.offsetY;
    if(!painting){
        ctx.beginPath();
        //path는 선 그리지 않을 때에도 어디에 있는 지 파악
        ctx.moveTo(x,y); 
    }else{
        ctx.lineTo(x,y);
        //x,y연결
        ctx.stroke();
    
        //이게 선을 그린다.
        //내가 마우스를 움직이는 동안 발생한다.
    }
    
}

function handleColor(event){
    const color=event.target.style.backgroundColor;
    ctx.strokeStyle=color;
    ctx.fillStyle=ctx.strokeStyle;
}
function handleBrushSize(event){
    const brushSize=event.target.value
    ctx.lineWidth=brushSize;
}
function handleModeClick(event){
 if(filling===true){
     filling=false;
     mode.innerText="Fill";
 }else{
     filling=true;
     mode.innerText="Paint";
     
 }
}
function hadleCanvasClick(){
    if(filling){
        ctx.fillRect(0,0, Canvas_SIZE, Canvas_SIZE );
    }
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPaint);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", hadleCanvasClick);
}

Array.from(colors).forEach(color=>color.addEventListener("click",handleColor));

if(brush){
    brush.addEventListener("input",handleBrushSize);
}
if(mode){
    mode.addEventListener("click", handleModeClick);
}