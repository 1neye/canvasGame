let drawLines = (canvas, ctx, mousePosObj) => {

    canvas.addEventListener("click", function (evt) {
        var mousePos = getMousePos(canvas, evt);
        if(mousePosObj.mouse1.length === 0) {
            mousePosObj.mouse1.push(...[mousePos.x, mousePos.y])
        } else {
            if(mousePosObj.mouse2 <= 1) {
                mousePosObj.mouse2.push(...[mousePos.x, mousePos.y])
            }
            
        }

        
        console.log(mousePosObj.mouse1[0], mousePosObj.mouse1[1], mousePosObj.mouse2[0], mousePosObj.mouse2[1])
        if (mousePosObj.mouse2.length === 2) {
            ctx.beginPath();
            ctx.moveTo(918, 560);
            ctx.lineTo(510, 356);
            ctx.stroke();
            console.log(mousePosObj.mouse2)
            ctx.rect(10, 20, 150, 100);
ctx.fill();
        }
    }, false);

    
   



    ctx.rect(10, 20, 150, 100);
    ctx.fill();
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
}

export default drawLines
