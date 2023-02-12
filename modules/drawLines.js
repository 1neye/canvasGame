let drawLines = (ctx, cord, mouseX, mouseY, shift, canvas, linePos, idx) => {

    ctx.beginPath();
    ctx.moveTo(cord[0], cord[1]);
    if (cord[2] === undefined || cord[3] === undefined) {
        if (shift) {

            let x = cord[0] - mouseX
            let y = cord[1] - mouseY

            if (Math.abs(x) < Math.abs(y)) {
                mouseX = cord[0]
            } else {
                mouseY = cord[1]
            }


            canvas.addEventListener('click', function Func() {
                if (Math.abs(x) < Math.abs(y)) {
                    cord[2] = cord[0]
                    cord[3] = mouseY
                } else {
                    cord[2] = mouseX
                    cord[3] = cord[1]
                }
                cord = JSON.parse(JSON.stringify([cord[0], cord[1], cord[2], cord[3]]))
                linePos[idx] = cord
                canvas.removeEventListener('click', Func)
            })

        }
        ctx.lineTo(mouseX, mouseY);



    }
    ctx.lineTo(cord[2], cord[3]);
    ctx.lineWidth = 10
    ctx.strokeStyle = '#ff0000'
    ctx.stroke();


}

export default drawLines
