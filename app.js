const canvas=document.getElementById("jsCanvas");
const ctx=canvas.getContext('2d');

canvas.width=700;
canvas.height=700; //이 pixel modifer를 줘야지 그릴 수가 있다.

ctx.strokeStyle="#2c2c2c";
//그릴 선의 색깔
ctx.lineWidth=2.5;
//그 선의 넓이

let painting=false;

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
function onMouseDown(event){
    painting=true;
}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPaint);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

