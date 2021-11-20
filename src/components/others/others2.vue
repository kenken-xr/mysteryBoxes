<template>
    <div class="others2">
        <homeButtonVue></homeButtonVue>
        <div class="blank"></div>
        <div class="app">
            <canvas class="canvas"
                style="background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/96252/emoji_map_demo.png)"></canvas>
            <div class="structures"></div>
            <div class="palette"></div>
        </div>
        <div class="toolbar">
            <button
                class="button button--nina button--round-l button--text-thick button--inverted clear warn">清除</button>
            <button class="button button--nina button--round-l button--text-thick button--inverted save">保存</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'others2',
        data() {
            return {

            };
        },
        methods: {
            initOthers2() {
                const STATE = {
                    mode: "structure",
                    gridX: 0,
                    gridY: 0,
                    current: "",
                    structures: "🏠,🏡,🏭,🏢,🏬,🏪,🏣,🏥,🏨,🏰,🏯,🎡,⛲️,🚗,🚙,🚘,🚑,🚧,🚏,⛽️,🚦,🚤,⛵️,🌲,🌳,🌵,🌴,🌼,🗻,⛰️,🌋,🔥,🌊",
                    colors: [
                        "#6B8E23",
                        "#9ACD32",
                        "#2E8B57",
                        "#228B22",
                        "#32CD32",
                        "#7CFC00",
                        "#BDB76B",
                        "#F0E68C",
                        "#CD853F",
                        "#DAA520",
                        "#191970",
                        "#4169E1",
                        "#1E90FF",
                        "#B0C4DE",
                        "#696969",
                        "#A9A9A9",
                        "#D3D3D3"
                    ]
                };


                const CANVAS = document.querySelector(".canvas");
                const STRUCTURES = document.querySelector(".structures");
                const PALETTE = document.querySelector(".palette");
                const SAVE_BTN = document.querySelector(".save");
                const CLEAR_BTN = document.querySelector(".clear");
                const CTX = CANVAS.getContext("2d");
                const CWIDTH = 600;
                const CHEIGHT = 600;
                CANVAS.width = CWIDTH;
                CANVAS.height = CHEIGHT;
                const GRID_SIZE = 40;

                CANVAS.addEventListener("mousemove", mouseMove);
                CANVAS.addEventListener("mousedown", canvasClick);

                STRUCTURES.addEventListener("click", structureClick);
                PALETTE.addEventListener("click", paletteClick);
                SAVE_BTN.addEventListener("click", saveImage);
                CLEAR_BTN.addEventListener("click", clearCanvas);

                CANVAS.addEventListener(
                    "contextmenu",
                    function (e) {
                        e.preventDefault();
                    },
                    false
                );

                CTX.font = `${GRID_SIZE - 4}px serif`;
                CTX.textBaseline = "top";
                CTX.textAlign = "center";

                const plots = new Map();

                class Plot {
                    constructor(x, y, charX, charY, col, structure) {
                        this.x = x;
                        this.y = y;
                        this.charX = charX;
                        this.charY = charY;
                        this.col = col;
                        this.structure = structure;
                    }
                }

                for (let x = 0; x < CWIDTH; x += GRID_SIZE) {
                    for (let y = 0; y < CHEIGHT; y += GRID_SIZE) {
                        plots.set(
                            `${x}-${y}`,
                            new Plot(x, y, x + GRID_SIZE / 2, y + 4, "transparent", "")
                        );
                        //CTX.strokeRect(x, y, GRID_SIZE, GRID_SIZE);
                    }
                }

                createUI();

                function createUI() {
                    const STRUCT_ARRAY = STATE.structures.split(",");
                    STRUCT_ARRAY.forEach(e => {
                        createElement({
                            parent: STRUCTURES,
                            tag: "div",
                            content: e,
                            classes: "structure",
                            addToParent: true
                        });
                    });
                    STATE.colors.forEach(e => {
                        createElement({
                            parent: PALETTE,
                            tag: "div",
                            classes: "col",
                            addToParent: true,
                            style: e,
                            hex: e
                        });
                    });
                }

                function createElement({
                    parent,
                    tag,
                    content,
                    classes,
                    addToParent,
                    style,
                    hex
                } = {}) {
                    let el = document.createElement(tag);
                    if (content) {
                        let txt = document.createTextNode(content);
                        el.appendChild(txt);
                    }
                    if (classes) {
                        el.setAttribute("class", classes);
                    }
                    if (style) {
                        el.setAttribute("style", `background-color:${style};width:3rem;height:2.9rem`);
                    }
                    if (hex) {
                        el.dataset.hex = hex;
                    }
                    if (addToParent) {
                        parent.appendChild(el);
                    }
                    return el;
                }

                function mouseMove(e) {
                    let cx = e.x - CANVAS.offsetLeft;
                    let cy = e.y - CANVAS.offsetTop + window.scrollY;
                    STATE.gridX = roundDown(cx);
                    STATE.gridY = roundDown(cy);

                    redraw();
                    CTX.fillStyle = "rgba(255, 165, 0, 0.5)";
                    CTX.fillRect(STATE.gridX, STATE.gridY, GRID_SIZE, GRID_SIZE);
                    CTX.fillStyle = "black";

                    switch (e.buttons) {
                        case 1:
                            paint();
                            break;
                        case 2:
                            erase();
                            break;
                    }
                    removeDemo();
                }

                function removeDemo() {
                    if (CANVAS.style.backgroundImage) {
                        CANVAS.style.backgroundImage = "";
                    }
                }

                function roundDown(num) {
                    return Math.ceil(num / GRID_SIZE) * GRID_SIZE - GRID_SIZE;
                }

                function redraw() {
                    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
                    plots.forEach(e => {
                        CTX.fillStyle = e.col;
                        CTX.fillRect(e.x, e.y, GRID_SIZE, GRID_SIZE);
                        CTX.fillStyle = "black";
                        CTX.fillText(e.structure, e.charX, e.charY);
                        CTX.fillStyle = "transparent";
                    });
                }

                function canvasClick(e) {
                    switch (e.buttons) {
                        case 1:
                            paint();
                            break;
                        case 2:
                            erase();
                            break;
                    }
                }

                function structureClick(e) {
                    let t = e.target;
                    if (
                        t.className === "structure" &&
                        t.childNodes.length === 1 &&
                        t.childNodes[0].length <= 2
                    ) {
                        STATE.mode = "structure";
                        STATE.current = t.childNodes[0].textContent;
                    }
                }

                function paletteClick(e) {
                    let t = e.target;
                    if (t.classList.contains("col")) {
                        STATE.mode = "paint";
                        STATE.current = t.dataset.hex;
                    }
                }

                function paint() {
                    if (STATE.current) {
                        let plot = plots.get(`${STATE.gridX}-${STATE.gridY}`);
                        if (plot) {
                            if (validate() === false) {
                                return;
                            }
                            switch (STATE.mode) {
                                case "structure":
                                    plot.structure = STATE.current;
                                    break;
                                case "paint":
                                    plot.col = STATE.current;
                                    break;
                            }
                            redraw();
                        }
                    }
                }

                function erase() {
                    let plot = plots.get(`${STATE.gridX}-${STATE.gridY}`);
                    plot.structure = "";
                    redraw();
                }

                function validate() {
                    //Check that we are painting with a structure or color specified in the STATE object
                    let structArray = STATE.structures.split(",");
                    let colArray = STATE.colors;
                    if (structArray.includes(STATE.current) || colArray.includes(STATE.current)) {
                        return true;
                    } else {
                        return false;
                    }
                }

                function clearCanvas() {
                    plots.forEach(function (value, key) {
                        value.structure = "";
                        value.col = "transparent";
                    });
                    removeDemo();
                    redraw();
                }

                function saveImage() {
                    redraw();
                    saveData("emoji_map.png");
                }

                let saveData = (function () {
                    let a = document.createElement("a");
                    document.body.appendChild(a);
                    a.style = "display: none";
                    return function (filename) {
                        CANVAS.toBlob(function (blob) {
                            let newImg = document.createElement("img"),
                                url = URL.createObjectURL(blob);

                            newImg.onload = function () {
                                URL.revokeObjectURL(url);
                            };

                            a.href = url;
                            a.download = filename;
                            a.click();
                        });
                    };
                })();

            }
        },
        mounted() {
            this.initOthers2();

        }
    }
</script>

<style scoped>
    :root {
        --toolbarHeight: 30px
    }

    .others2 {
        background-color: black;
        height: 100vh;
    }

    .blank {
        height: calc((100vh - (30px + 600px))/ 2)
    }

    .app {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-top: auto;
    }

    .canvas {
        box-shadow: 0 0 10px;
        position: relative;
        background-color: white;
    }

    .tool,
    .col,
    .structure {
        transition: all 0.3s;
        z-index: 1;
        background-color: white;
    }

    .tool:hover,
    .col:hover,
    .structure div:hover {
        transform: scale(1.4);
        z-index: 2;
    }

    .structures {
        height: 600px;
        padding: 0 1rem;
        font-size: 2rem;
        text-align: center;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .palette {
        height: 600px;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .structure {
        display: block;
        cursor: pointer;
        font-size: 20px;
        width: 3rem;
    }

    .col {
        cursor: pointer;
        width: 4rem;
        height: 2.4rem;
    }

    .toolbar {
        display: flex;
        width: 744px;
        height: var(--toolbarHeight);
        margin: 10px auto;
    }

    button {
        font-family: sans-serif;
        padding: 0.4em 1em;
        border: none;
        font-size: 1.1em;
        display: block;
        border-radius: 5px;
        border-top: 1px solid #20d1e5;
        box-shadow: 0 1px 1px black;
        margin-right: 1rem;
        background: #7986cb;
        color: #fff;
        overflow: hidden;
        -webkit-transition: background-color 0.3s;
        transition: background-color 0.3s;
    }

    button:hover {
        background: linear-gradient(to bottom, #499bea 0%, #207ce5 100%);
    }

    .warn {
        filter: hue-rotate(161deg) saturate(134%);
    }
</style>