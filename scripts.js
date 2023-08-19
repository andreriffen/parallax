(function () {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");

    function parallax(e) {
        let w = window.innerWidth / 2;
        let h = window.innerHeight /2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let depth1 = `${50-(mouseX-w)*0.01}% ${50-(mouseY-h)*0.01}%`;
        let depth2 = `${50-(mouseX-w)*0.018}% ${50-(mouseY-h)*0.018}%`;
        let depth3 = `${50-(mouseX-w)*0.023}% ${50-(mouseY-h)*0.023}%`;
        let x = `${depth3},${depth2},${depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }
})();
/* (function () {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");

    function parallax(e) {
        let w = window.innerWidth / 2;
        let h = window.innerHeight /2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let depth1 = `${50-(mouseX-w)*0.01}% ${50-(mouseY-h)*0.01}%`;
        let depth2 = `${50-(mouseX-w)*0.018}% ${50-(mouseY-h)*0.018}%`;
        let depth3 = `${50-(mouseX-w)*0.023}% ${50-(mouseY-h)*0.023}%`;
        let x = `${depth3},${depth2},${depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }
})(); */
/* (function () {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");

    function parallax(e) {
        let w = window.innerWidth / 2;
        let h = window.innerHeight /2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let depth1 = `${50-(mouseX-w)*0.01}% ${50-(mouseY-h)*0.01}%`;
        let depth2 = `${50-(mouseX-w)*0.018}% ${50-(mouseY-h)*0.018}%`;
        let depth3 = `${50-(mouseX-w)*0.023}% ${50-(mouseY-h)*0.023}%`;
        let x = `${depth3},${depth2},${depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }
})(); */
/* (function () {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");

    function parallax(e) {
        let w = window.innerWidth / 2;
        let h = window.innerHeight /2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let depth1 = `${50-(mouseX-w)*0.01}% ${50-(mouseY-h)*0.01}%`;
        let depth2 = `${50-(mouseX-w)*0.018}% ${50-(mouseY-h)*0.018}%`;
        let depth3 = `${50-(mouseX-w)*0.023}% ${50-(mouseY-h)*0.023}%`;
        let x = `${depth3},${depth2},${depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }
})(); */
/* (function () {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");

    function parallax(e) {
        let w = window.innerWidth / 2;
        let h = window.innerHeight /2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let depth1 = `${50-(mouseX-w)*0.01}% ${50-(mouseY-h)*0.01}%`;
        let depth2 = `${50-(mouseX-w)*0.018}% ${50-(mouseY-h)*0.018}%`;
        let depth3 = `${50-(mouseX-w)*0.023}% ${50-(mouseY-h)*0.023}%`;
        let x = `${depth3},${depth2},${depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }
})(); */