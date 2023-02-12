let drawLines = (ctx, cord) => {

    ctx.beginPath();
    ctx.moveTo(cord[0],cord[1]);
    ctx.lineTo(cord[2], cord[3]);
    // ctx.moveTo(100, 100);
    // ctx.lineTo(1261, 320);
    // console.log(cord)

    // if(cord[2] === undefined) {
    //     onmousemove = function(e){
    //     ctx.lineTo(e.clientX, e.clientY);
    //     }
    // } else {
    // ctx.lineTo(cord[2], cord[3]);
    // }
    ctx.lineWidth = 5
    ctx.strokeStyle = '#ff0000'
    ctx.stroke();
}

export default drawLines
