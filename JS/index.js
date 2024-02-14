const display1 = document.getElementById("display-1");
const display2 = document.getElementById("display-2");
const display3 = document.getElementById("display-3");
const display4 = document.getElementById("display-4");
const display5 = document.getElementById("display-5");
const display6 = document.getElementById("display-6");
const d = document.getElementsByClassName("dis");
const cancel = document.getElementsByClassName("same");
function triangle() {
    const d1 = document.getElementById("d-1");
    const getBase = parseFloat(document.getElementById("t-base").value);
    const getHeight = parseFloat(document.getElementById("t-height").value);
    if (isNaN(getBase) || isNaN(getHeight)) {
        alert("Oops sorry! Your input field was missed");
        d.style.display = "none";
    }

    const result = (getBase * getHeight) * 0.5;
    if (!isNaN(result)) {
        display1.innerText = `Area of the triangle ${result}`;
    }
    d1.style.display = "block";
    document.getElementById("t-base").value = "";
    document.getElementById("t-height").value = "";
}
function rectangle() {
    const d2 = document.getElementById("d-2");
    const getBase = parseFloat(document.getElementById("r-base").value);
    const getHeight = parseFloat(document.getElementById("r-height").value);
    if (isNaN(getBase) || isNaN(getHeight)) {
        alert("Oops sorry! Your input field was missed");
        d.style.display = "none";
    } else {

        const result = (getBase * getHeight);
        if (!isNaN(result)) {
            display2.innerText = `Area of the rectangle ${result}`;
        }
    }
    d2.style.display = "block";
    document.getElementById("r-base").value = "";
    document.getElementById("r-height").value = "";

}
function rhombus() {
    const d3 = document.getElementById("d-3");
    const getBase = parseFloat(document.getElementById("rh-base").value);
    const getHeight = parseFloat(document.getElementById("rh-height").value);
    if (isNaN(getBase) || isNaN(getHeight)) {
        alert("Oops sorry! Your input field was missed");
        d.style.display = "none";
    } else {

        const result = (getBase * getHeight) * 0.5;
        if (!isNaN(result)) {
            display3.innerText = `Area of the rhombus ${result}`;
        }
    }
    d3.style.display = "block";
    document.getElementById("rh-base").value = "";
    document.getElementById("rh-height").value = "";

}
function parallelogram() {
    const d4 = document.getElementById("d-4");
    const getBase = parseFloat(document.getElementById("p-base").value);
    const getHeight = parseFloat(document.getElementById("p-height").value);
    if (isNaN(getBase) || isNaN(getHeight)) {
        alert("Oops sorry! Your input field was missed");
        d.style.display = "none";
    } else {

        const result = (getBase * getHeight);
        if (!isNaN(result)) {
            display4.innerText = `Area of the parallelogram ${result}`;
        }
    }
    d4.style.display = "block";
    document.getElementById("p-base").value = "";
    document.getElementById("p-height").value = "";

}
function pentagon() {
    const d5 = document.getElementById("d-5");
    const getBase = parseFloat(document.getElementById("pt-base").value);
    const getHeight = parseFloat(document.getElementById("pt-height").value);
    if (isNaN(getBase) || isNaN(getHeight)) {
        alert("Oops sorry! Your input field was missed");
        d.style.display = "none";
    } else {

        const result = (getBase * getHeight) * 0.5;
        if (!isNaN(result)) {
            display5.innerText = `Area of the pentagon ${result}`;
        }
    }
    d5.style.display = "block";
    document.getElementById("pt-base").value = "";
    document.getElementById("pt-height").value = "";

}
function ellipse() {
    const d6 = document.getElementById("d-6");
    const getBase = parseFloat(document.getElementById("e-base").value);
    const getHeight = parseFloat(document.getElementById("e-height").value);
    if (isNaN(getBase) || isNaN(getHeight)) {
        alert("Oops sorry! Your input field was missed");
        d.style.display = "none";
    } else {

        const result = parseFloat((getBase * getHeight) * Math.PI.toFixed(4));
        if (!isNaN(result)) {
            display6.innerText = `Area of the ellipse ${result}`;
        }
    }
    d6.style.display = 'block';
    document.getElementById("e-base").value = "";
    document.getElementById("e-height").value = "";
}



for (const s of cancel) {
    s.onclick = function () {

        for (const iterator of d) {
            iterator.style.display = "none";

        }
    }
}