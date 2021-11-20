<template>
    <canvas class="effect2"></canvas>
</template>

<script>
    import {
        TweenMax,
        TimelineMax,
        Power0
    } from 'gsap'

    import Zdog from 'zdog'

    export default {
        name: 'effect2',
        methods: {
            initEffect2() {
                const Scene = new Zdog.Illustration({
                    element: '.effect2',
                    resize: 'fullscreen',
                    dragRotate: true,
                    rotate: {
                        x: Zdog.TAU / 8,
                    },
                })
                const BOX_COUNT = 12
                const BOX_SIZE = 50
                for (let b = 0; b < BOX_COUNT; b++) {
                    const BoxAnchor = new Zdog.Anchor({
                        addTo: Scene,
                        rotate: {
                            z: (Zdog.TAU / 12) * b,
                        },
                    })
                    const Node = new Zdog.Box({
                        addTo: BoxAnchor,
                        width: BOX_SIZE,
                        height: BOX_SIZE,
                        depth: BOX_SIZE,
                        color: 'rgb(96, 252, 255)',
                        bottomFace: 'rgb(143, 83, 255)',
                        rightFace: '#111',
                        leftFace: '#111',
                        stroke: false,
                        rearFace: 'rgb(94, 250, 176)',
                        topFace: 'rgb(248, 81, 98)',
                        translate: {
                            y: -150,
                        },
                    })
                    new TimelineMax({
                        repeat: -1,
                        delay: b / 30
                    }).add(
                        TweenMax.to(Node.rotate, 5, {
                            x: -Zdog.TAU,
                            ease: Power0.easeNone,
                        })
                    )
                }

                Scene.updateRenderGraph()
                const draw = () => {
                    Scene.updateRenderGraph()
                    requestAnimationFrame(draw)
                }
                draw()
            },

        },
        mounted() {
            this.initEffect2();
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }


    body {
        background: ' #111';
        min-height: 100vh;
    }


    canvas {
        height: 100vh;
        touch-action: none;
        width: 100vw;
        background-color: black;
    }
</style>