<template>
    <div class="others1">
        <homeButtonVue></homeButtonVue>
        <div class="multiplier-wrap">
            <div class="multiplier-plusTen">
                <h4>add</h4>
                <button class="controlBtn" data-value="10" id="plusTen">10</button>
                <h4>to multiplier</h4>
            </div>

            <div class="multiplier">
                <h4>multiplier</h4>
                <button class="controlBtn" data-value="0" id="reset"><span id="mValue"></span></button>
                <h4>click to reset</h4>
            </div>

            <div class="multiplier-plusOne">
                <h4>add</h4>
                <button class="controlBtn" data-value="1" id="plusOne">1</button>
                <h4>to multiplier</h4>
            </div>
        </div>

        <div class="main-wrap">
            <div class="slideContainer slideContainer--speed">
                <input type="range" id="speed" class="slider" name="speed" min="0" max="0.02" value="0.008"
                    step="0.0001">
                <h4 draggable="false">speed</h4>
            </div>

            <canvas class="graph"></canvas>

            <div class="slideContainer slideContainer--points">
                <input type="range" id="points" class="slider" name="points" min="2" max="200" value="160" step="1" />
                <h4 draggable="false">points</h4>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'others1',
        data() {
            return {};
        },
        methods: {
            initOthers1() {
                // https://www.webredone.com/
                const canvas = document.querySelector('.graph'),
                    ctx = canvas.getContext('2d'),
                    inputPoints = document.getElementById('points'),
                    inputSpeed = document.getElementById('speed'),
                    resetMultip = document.getElementById('reset'),
                    plusTen = document.getElementById('plusTen'),
                    plusOne = document.getElementById('plusOne'),
                    rangeLabels = document.querySelectorAll('.slideContainer h4'),
                    root = document.documentElement,
                    mValue = document.getElementById('mValue'),
                    size = {
                        s: 8,
                        w: 60,
                        h: 60,
                        o: 2
                    },
                    pi2 = Math.PI * 2;
                this.m = 1;

                size.sw = size.w * size.s;
                size.sh = size.h * size.s;

                size.mw = Math.floor(size.sw * .5);
                size.mh = Math.floor(size.sh * .5);

                size.lw = size.sw - size.s;
                size.lh = size.sh - size.s;
                canvas.width = size.sw;
                canvas.height = size.sh;

                const dist = (x1, y1, x2, y2) => {
                    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                };

                const map = (value, minA, maxA, minB, maxB) => {
                    return (1 - (value - minA) / (maxA - minA)) * minB + (value - minA) / (maxA - minA) * maxB;
                };

                const rect = (r, color) => {
                    ctx.fillStyle = color;
                    ctx.fillRect(r.x, r.y, r.w, r.h);
                };

                const line = (s, e, color) => {
                    ctx.strokeStyle = color;
                    ctx.beginPath();
                    ctx.moveTo(s.x, s.y);
                    ctx.lineTo(e.x, e.y);
                    ctx.stroke();
                };

                const circle = (c, color) => {
                    ctx.strokeStyle = color;
                    ctx.beginPath();
                    ctx.arc(c.x, c.y, c.r, 0, pi2);
                    ctx.stroke();
                };

                rangeLabels.forEach((label) => {
                    const word = [...label.textContent];
                    label.innerHTML = '';
                    word.forEach((letter) => {
                        const spannedLetter = document.createElement('span');
                        spannedLetter.textContent = letter;
                        label.appendChild(spannedLetter);
                    });
                });

                const drawGraph = () => {
                    const n = inputPoints.value,
                        r = Math.floor((size.w - size.o) * size.s * .5);

                    this.m >= 999 ? this.m = 0 : this.m += +inputSpeed.value;

                    rect({
                        x: 0,
                        y: 0,
                        w: size.sw,
                        h: size.sh
                    }, '#222');
                    circle({
                        x: size.mw,
                        y: size.mh,
                        r: r
                    }, '#333');

                    for (let i = 0; i < n; i++) {
                        const x = Math.sin(pi2 / n * i - pi2 * .25) * r,
                            y = Math.sin(pi2 / n * i) * r,
                            ex = Math.sin(pi2 / n * this.m * i - pi2 * .25) * r,
                            ey = Math.sin(pi2 / n * this.m * i) * r,
                            Xw = size.mw + x,
                            Yh = size.mh + y,
                            eXw = size.mw + ex,
                            eYh = size.mh + ey,
                            lineL = dist(Xw, Yh, eXw, eYh),
                            a = map(lineL, 0, r * 1.73, 1, 0.25) > 1 ? 1 : map(lineL, 0, r * 1.73, 1, 0.25).toFixed(
                                2);
                        circle({
                            x: Xw,
                            y: Yh,
                            r: size.o
                        }, '#fff');
                        line({
                            x: Xw,
                            y: Yh
                        }, {
                            x: eXw,
                            y: eYh
                        }, `hsla(${this.m * 100 % 360}, 100%, 85%, ${a})`);
                    }

                    mValue.textContent = parseFloat(Math.round(this.m * 100) / 100).toFixed(2);
                    root.style.setProperty('--Hsl', +this.m * 100 % 360);

                    requestAnimationFrame(drawGraph);
                };

                document.querySelectorAll('.controlBtn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const btnValue = btn.getAttribute('data-value');
                        btnValue == 0 ? this.m = 0 : this.m += +btnValue;
                    });
                });

                drawGraph();
            },
        },
        mounted() {
            this.initOthers1();

        }
    }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Major+Mono+Display");

    :root {
        --Hsl: 140;
    }

    .others1 {
        background: #222;
        text-align: center;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        font-family: "Major Mono Display", monospace;
        box-sizing: border-box;
        /* width */
        /* Track */
        /* Handle */
        /* Handle on hover */
    }

    body::-webkit-scrollbar {
        width: 4px;
    }

    body::-webkit-scrollbar-track {
        background: hsl(var(--Hsl), 72%, 30%);
    }

    body::-webkit-scrollbar-thumb {
        background: hsl(var(--Hsl), 72%, 78%);
        border-radius: 9999px;
    }

    body::-webkit-scrollbar-thumb:hover {
        background: hsl(var(--Hsl), 72%, 65%);
    }

    .main-wrap {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 30px;
        flex: 1;
        touch-action: none;
    }

    canvas {
        display: block;
        max-width: 45vw;
        height: auto;
        max-height: 50vh;
        width: auto;
    }

    h3,
    h4 {
        color: #fff;
    }

    h3 {
        font-size: 14px;
        margin-bottom: 10px;
    }

    h4 {
        font-size: 10px;
    }

    .multiplier-wrap {
        display: flex;
        justify-content: space-around;
        text-align: center;
        margin: 15px 0 30px 0;
    }

    .multiplier-wrap button {
        padding: 4px 16px;
        width: 100px;
        border-radius: 25px;
        border-color: hsl(var(--Hsl), 72%, 78%);
        color: #fff;
        background-color: transparent;
        outline: none;
    }

    .multiplier-wrap button:hover {
        cursor: pointer;
    }

    .multiplier-wrap h4 {
        margin-bottom: 4px;
    }

    .multiplier-wrap h4:last-of-type {
        margin-bottom: 0;
        margin-top: 4px;
    }

    .multiplier-wrap #mValue {
        font-size: 16px;
    }

    .slideContainer {
        position: relative;
        display: block;
        transform: rotate(-90deg);
        width: 200px;
        line-height: 10px;
    }

    .slideContainer h4 {
        display: flex;
        flex-direction: row-reverse;
        position: absolute;
        bottom: 0;
        transform: translateX(-50%);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        z-index: 1;
        letter-spacing: 1px;
        bottom: 24px;
        left: 50%;
    }

    .slideContainer h4 span {
        transform-origin: center;
        transform: rotate(90deg);
    }

    .slideContainer h4 span:not(:first-of-type) {
        margin-right: 10px;
    }

    .slideContainer--points h4 {
        margin-bottom: 0;
        bottom: -34px;
    }

    .slideContainer .slider {
        position: relative;
        z-index: 9999;
        -webkit-appearance: none;
        width: 100%;
        height: 2px;
        border-radius: 50%;
        background: hsl(var(--Hsl), 72%, 78%);
        outline: none;
        opacity: 0.8;
    }

    .slideContainer .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: hsl(var(--Hsl), 72%, 68%);
        border: 2px solid #fff;
        cursor: pointer;
        opacity: 0.9;
    }

    .slideContainer .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        background: #4CAF50;
        cursor: pointer;
    }

    .coolPatterns-wrap {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .coolPatterns-wrap button {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border: none;
        outline: none;
        margin: 8px;
    }

    .coolPatterns-wrap button:hover {
        cursor: pointer;
    }

    @media (max-width: 500px) {
        .coolPatterns-wrap button {
            width: 70px;
            height: 70px;
        }
    }
</style>