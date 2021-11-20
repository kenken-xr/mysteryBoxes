<template>
  <div class="homePage">
    <!--        <travel></travel>-->
    <h1 class="title">Lottery prize generator</h1>
    <div class="container" id="js-lotto">
      <div class="square" data-order="0">
        <div class="square__content">🙈</div>
      </div>
      <div class="square" data-order="1">
        <div class="square__content">🤢</div>
      </div>
      <div class="square" data-order="2">
        <div class="square__content">💩</div>
      </div>
      <div class="square" data-order="7">
        <div class="square__content">🤖</div>
      </div>
      <div class="square square__start-btn" id="js-start" @click="init()">
        <div>START</div>
      </div>
      <div class="square" data-order="3">
        <div class="square__content">🦊</div>
      </div>
      <div class="square" data-order="6">
        <div class="square__content">👻</div>
      </div>
      <div class="square" data-order="5">
        <div class="square__content">👾</div>
      </div>
      <div class="square" data-order="4">
        <div class="square__content">👀</div>
      </div>
    </div>
    <homeButtonVue></homeButtonVue>
  </div>
</template>

<script>
  import $ from "jquery";
  import swal from 'sweetalert'

  import homeButtonVue from "../components/homeButton.vue";
  // import travel from '../components/co-traval/co-travel.vue'
  export default {
    name: 'homePage',
    components: {
      // travel,
      homeButtonVue
    },
    data() {
      return {
        prizes: {
          0: '🙈',
          1: '🤢',
          2: '💩',
          3: '🦊',
          4: '👀',
          5: '👾',
          6: '👻',
          7: '🤖',
        },
        total_items: 8,
        minimum_jumps: 30, // 超過這數字開始進入抽獎
        current_index: -1,
        jumps: 0,
        speed: 30,
        timer: 0,
        prize: -1,
      }
    },
    mounted() {

    },

    methods: {
      init() {
        console.log('init');

        this.jumps = 0;
        this.speed = 100;
        this.prize = -1;
        this.controllSpeed();
      },

      controllSpeed() {
        var that = this;
        this.jumps += 1;
        this.runCircle();
        // 1. 抽到獎品停止遊戲
        if (this.jumps > this.minimum_jumps + 10 && this.prize === this.current_index) {
          clearTimeout(this.timer);

          swal({
            title: `You Have Won a Prize ${this.prizes[this.current_index]}`,
            text: 'Congratulations!',
            icon: 'success',
          }).then((num) => {
            switch (this.current_index) {
              case 0:
                this.$router.push('/home/:num')
                break;
              case 1:
                this.$router.push('/recipe1')
                break;
              case 2:
                this.$router.push('/recipe2')
                break;
              case 3:
                this.$router.push('/music1')
                break;
              case 4:
                this.$router.push('/music3')
                break;
              case 5:
                this.$router.push('/others1')
                break;
              case 6:
                this.$router.push('/others2')
                break;
              case 7:
                this.$router.push('/others3')
                break;
            }
          })

          this.prize = -1;
          this.jumps = 0;
          // 2. 還沒抽繼續跑
        } else {
          // 還沒進入關鍵抽獎階段前的速度 (前菜轉特效)
          if (this.jumps < this.minimum_jumps) {
            this.speed -= 5; // 加快
            // 決定獎品的位置
          } else if (this.jumps === this.minimum_jumps) {
            const random_number = this.generatePrizeNumber();
            this.prize = random_number;
          } else {
            // 下一個就是獎品時放慢鈍一下
            if ((this.jumps > this.minimum_jumps + 10) && this.prize === (this.current_index + 1)) {
              this.speed += 600;
            } else {
              this.speed += 20; // 減速
            }
          }
          if (this.speed < 40) {
            this.speed = 40;
          }

          this.timer = setTimeout(this.controllSpeed, this.speed);
        }
      },

      runCircle() {
        $(`[data-order="${this.current_index}"]`).removeClass('is-active');

        this.current_index += 1;

        if (this.current_index > this.total_items - 1) {
          this.current_index = 0;
        }

        $(`[data-order="${this.current_index}"]`).addClass('is-active');
      },

      generatePrizeNumber() {
        return Math.floor(Math.random() * this.total_items);
      }
    }
  }
</script>

<style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .homePage {
    font-family: "Do Hyeon", sans-serif;
    background: #7049f7;
    height: 100vh
  }

  .title {
    text-align: center;
    padding: 1.2rem 0;
    font-size: 2em;
    color: #FBFFFE;
    text-transform: uppercase;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    width: 620px;
    margin: 20px auto;
  }

  .square {
    border: 1px solid lightpink;
    flex: 0 0 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background: #EB73B2;
  }

  .square.square:not(:nth-child(3n)) {
    margin-right: 10px;
  }

  .square.square:not(:nth-child(n+7)) {
    margin-bottom: 10px;
  }

  .square.is-active {
    border: 20px solid gold;
  }

  .square__content {
    font-size: 2.8em;
  }

  .square__start-btn {
    background: gold;
    color: #e97573;
    font-size: 2em;
    cursor: pointer;
  }

  .square__start-btn:hover {
    background: #ffeb80;
  }
</style>