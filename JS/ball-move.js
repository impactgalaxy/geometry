const container = document.getElementById("container");
const ball = document.getElementById("ball");
let posLeft, posTop;

ball.addEventListener("mousedown", function (e) {
    if (!posLeft && !posTop) {
        posLeft = e.clientX;
        posTop = e.clientY;
    }
})
function handleMove(e) {
    const left = e.clientX - posLeft;
    const top = e.clientY - posTop;

    ball.style.left = `${left}px`
    ball.style.top = `${top}px`

}
container.addEventListener("mousemove", handleMove)

ball.addEventListener("mouseup", function () {
    container.removeEventListener("mousemove", handleMove)
})
