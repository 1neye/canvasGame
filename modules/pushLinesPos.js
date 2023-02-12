import getMousePos from "./getMousePos.js";

let pushLinesPos = function (linePos,canvas, evt, shift) {
    var getMousePosVar = getMousePos(canvas, evt);

    if(linePos[linePos.length -1].length < 3) {
        linePos[linePos.length -1].push(...[getMousePosVar.x, getMousePosVar.y])
    } else if(linePos[linePos.length -1].length === 4) {
        linePos.push([getMousePosVar.x, getMousePosVar.y])
    }
    console.log(linePos)
}

export default pushLinesPos