<template>
  <div class="travel1">
    <img class="cloud-left" src="https://notbigmuzzy.github.io/codepen/example3/img/cloud-left.png" /><img
      class="cloud-right" src="https://notbigmuzzy.github.io/codepen/example3/img/cloud-right.png" /><img
      class="cloud-right2" src="https://notbigmuzzy.github.io/codepen/example3/img/cloud-left.png" />
    <div id="clouds">
      <div class="cloud cld1"></div>
      <div class="cloud cld2"></div>
      <div class="cloud cld3"></div>
      <div class="cloud cld4"></div>
      <div class="cloud cld5"></div>
      <div class="cloud cld6"></div>
    </div>
    <div class="main">
      <h1>TRAVEL BLOG</h1>
      <h3>SPIN THE GLOBE AND PICK A PLACE</h3>
    </div>
    <div class="planet spin1">
      <!--      <img class="buildings ajfel" src="https://notbigmuzzy.github.io/codepen/example3/img/ajfel.png"/>-->
      <img class="buildings ajfel" id="dfmz" alt="东方明珠（中国 · 上海）" src="../../assets/img/travel/东方明珠.png" />
      <img class="amer" src="https://notbigmuzzy.github.io/codepen/example3/img/amer.png" />
      <!--      <img class="buildings wash" src="https://notbigmuzzy.github.io/codepen/example3/img/wash.png"/>-->
      <img class="buildings wash" id="cc" alt="万里长城（中国 · 北京）" src="../../assets/img/travel/长城1.png" />
      <!--      <img class="buildings rus" src="https://notbigmuzzy.github.io/codepen/example3/img/rus.png"/>-->
      <img class="buildings rus" id="hqzx" alt="环球中心（中国 · 成都）" src="../../assets/img/travel/环球中心.png" />
      <img class="buildings build" src="https://notbigmuzzy.github.io/codepen/example3/img/build.png" />
      <img class="buildings prus" src="https://notbigmuzzy.github.io/codepen/example3/img/prus.png" />
      <img class="buildings germ" src="https://notbigmuzzy.github.io/codepen/example3/img/germ.png" />
      <img class="buildings crkv" src="https://notbigmuzzy.github.io/codepen/example3/img/crkv.png" />
      <img class="buildings krist" id="krist" alt="耶稣雕像（巴西 · 里约热内卢）"
        src="https://notbigmuzzy.github.io/codepen/example3/img/krist.png" />
      <img class="buildings piramid" src="https://notbigmuzzy.github.io/codepen/example3/img/piramid.png" />
      <img class="buildings arab" src="https://notbigmuzzy.github.io/codepen/example3/img/arab.png" />
      <!--      <img class="buildings relg" src="https://notbigmuzzy.github.io/codepen/example3/img/relg.png"/>-->
      <img class="buildings relg" id="zydst" alt="中央电视台总部大楼（中国 · 北京）" src="../../assets/img/travel/中央电视台总部大楼.png" />
      <img class="buildings pope" src="https://notbigmuzzy.github.io/codepen/example3/img/pope.png" />
      <!--      <img class="buildings bigben" src="https://notbigmuzzy.github.io/codepen/example3/img/bigben.png"/>-->
      <img class="buildings bigben" id="gzt" alt="广州塔（中国 · 广州）" src="../../assets/img/travel/广州塔.png" />
      <img class="buildings bridge" id="bridge" alt="伦敦桥（英国 · 伦敦）"
        src="https://notbigmuzzy.github.io/codepen/example3/img/bridge.png" />
      <!--      <img class="buildings germ2" src="https://notbigmuzzy.github.io/codepen/example3/img/germ2.png"/>-->
      <img id="myImg" alt="天安门，寓“承天启运、受命于天”之意（中国 · 北京）" class="buildings germ2"
        src="../../assets/img/travel/天安(2).png" />
      <img class="buildings rom" id="rom" alt="古罗马角斗场（意大利 · 罗马）"
        src="https://notbigmuzzy.github.io/codepen/example3/img/rom.png" />

      <img class="buildings chrch" id="chrch" alt="泰姬陵（印度）"
        src="https://notbigmuzzy.github.io/codepen/example3/img/chrch.png" />
      <!--      <img class="buildings chrch" src="../../assets/img/travel/黄鹤楼1.png"/>-->
      <img class="piza" src="https://notbigmuzzy.github.io/codepen/example3/img/piza.png" />
      <!--      <img class="piza" src="../../assets/img/travel/解放碑.png"/>-->
      <div class="planet-surface">
        <div class="surface2"></div>
        <div class="surface3"></div>
        <div class="surface4"></div>
        <div class="surface5"></div>
        <div class="surface6"></div>
      </div>
    </div>
    <div class="bus">
      <div class="bus-up">
        <div class="bus-window bus-window-topleft bus-window-width"></div>
        <div class="bus-window bus-window-width"></div>
        <div class="bus-window bus-window-width"></div>
        <div class="bus-window bus-window-width"></div>
        <div class="bus-window bus-window-topright bus-window-width"></div>
        <hr />
      </div>
      <div class="bus-middle">
        <div class="bus-window bus-window-left"></div>
        <div class="bus-window"></div>
        <div class="bus-window"></div>
        <div class="bus-window bus-window-right"></div>
        <div class="bus-door"></div>
        <hr />
      </div>
      <div class="bus-down">
        <div class="tire-left tire-anim">
          <div class="tire-middle"></div>
        </div>
        <div class="tire-right tire-anim">
          <div class="tire-middle"></div>
        </div>
      </div>
    </div>
    <div class="mouse-sign">
      <span1>SCR </span1>
      <span1>OLL</span1>
      <div class="mouse">
        <div class="wheel">
          <div class="mouse-margin"><span class="unu"></span><span class="doi"></span><span class="trei"></span></div>
        </div>
      </div>
    </div>
    <div id="hidden"></div>
    <!-- 弹窗 -->
    <div id="myModal" class="modal">
      <!-- 关闭按钮 -->
      <span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>
      <!-- 弹窗内容 -->
      <img class="modal-content" id="img01">
      <!-- 文本描述 -->
      <div id="caption"></div>
    </div>
  </div>
</template>

<script>
  import $ from "jquery";

  export default {
    name: "travel1",
    data() {
      return {
        idn: '',
      }
    },
    mounted() {
      $(document).ready(function () {
        // START IN BIG OF PAGE
        window.scrollTo(0, 0);
        let _this = this
        // ROTATE PLANET ON SCROLL
        $(window).scroll(function () {
          var offset = $(window).scrollTop();
          offset = offset * 0.05;
          $(".planet").css({
            "-moz-transform": "rotate(-" + offset + "deg)",
            "-webkit-transform": "rotate(-" + offset + "deg)",
            "-o-transform": "rotate(-" + offset + "deg)",
            "-ms-transform": "rotate(-" + offset + "deg)",
            transform: "rotate(-" + offset + "deg)"
          });
        });
        // CLICK FUNCT
        $(".ajfel").click(function () {
          window.scrollTo(0, 0);
          $(".bus").removeClass("bus-bottom");
          // 获取弹窗
          var modal = document.getElementById('myModal');
          // 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
          var img = document.getElementById("dfmz");
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          let url = ""
          img.onclick = function () {
            modal.style.display = "block";
            // modalImg.src = this.src;
            url = require('../../assets/img/travel/dfmz.png')
            modalImg.src = url
            captionText.innerHTML = this.alt;
          }
          // 获取 <span> 元素，设置关闭按钮
          var span = document.getElementsByClassName("close")[0];
          // 当点击 (x), 关闭弹窗
          span.onclick = function () {
            modal.style.display = "none";
          }
        });
        $(".wash").click(function () {
          window.scrollTo(0, 400);
          $(".bus").removeClass("bus-bottom");
          // 获取弹窗
          var modal = document.getElementById('myModal');
          // 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
          var img = document.getElementById("cc");
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          let url = ""
          img.onclick = function () {
            modal.style.display = "block";
            // modalImg.src = this.src;
            url = require('../../assets/img/travel/wlcc.png')
            modalImg.src = url
            captionText.innerHTML = this.alt;
          }
          // 获取 <span> 元素，设置关闭按钮
          var span = document.getElementsByClassName("close")[0];
          // 当点击 (x), 关闭弹窗
          span.onclick = function () {
            modal.style.display = "none";
          }
        });
        $(".rus").click(function () {
          window.scrollTo(0, 950);
          $(".bus").removeClass("bus-forward");
          $(".bus").addClass("bus-bottom");
          // 获取弹窗
          var modal = document.getElementById('myModal');
          // 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
          var img = document.getElementById("hqzx");
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          let url = ""
          img.onclick = function () {
            modal.style.display = "block";
            // modalImg.src = this.src;
            url = require('../../assets/img/travel/hqzx.png')
            modalImg.src = url
            captionText.innerHTML = this.alt;
          }
          // 获取 <span> 元素，设置关闭按钮
          var span = document.getElementsByClassName("close")[0];
          // 当点击 (x), 关闭弹窗
          span.onclick = function () {
            modal.style.display = "none";
          }
        });
        $(".build").click(function () {
          window.scrollTo(0, 1350);
          $(".bus").removeClass("bus-bottom");
          $(".bus").addClass("bus-top");

        });
        $(".prus").click(function () {
          window.scrollTo(0, 1800);
          $(".bus").removeClass("bus-top");
          $(".bus").addClass("bus-back");

        });
        $(".germ").click(function () {
          window.scrollTo(0, 2400);
          $(".bus").removeClass("bus-back");
          $(".bus").addClass("bus-forward");

        });
        $(".crkv").click(function () {
          window.scrollTo(0, 2910);
          $(".bus").removeClass("bus-forward");
          $(".bus").addClass("bus-bottom");

        });
        $(".krist").click(function () {
          window.scrollTo(0, 3190);
          $(".bus").removeClass("bus-bottom");
          $(".bus").addClass("bus-forward");
          // 获取弹窗
          var modal = document.getElementById('myModal');
          // 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
          var img = document.getElementById("krist");
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          let url = ""
          img.onclick = function () {
            modal.style.display = "block";
            // modalImg.src = this.src;
            url = require('../../assets/img/travel/yssx.png')
            modalImg.src = url
            captionText.innerHTML = this.alt;
          }
          // 获取 <span> 元素，设置关闭按钮
          var span = document.getElementsByClassName("close")[0];
          // 当点击 (x), 关闭弹窗
          span.onclick = function () {
            modal.style.display = "none";
          }
        });
        $(".piramid").click(function () {
          window.scrollTo(0, 3630);
          $(".bus").removeClass("bus-forward");
          $(".bus").addClass("bus-bottom");

        });
        $(".arab").click(function () {
          window.scrollTo(0, 3990);
          $(".bus").removeClass("bus-bottom");
          $(".bus").addClass("bus-back");

        });
        $(".relg").click(function () {
          window.scrollTo(0, 4360);
          $(".bus").removeClass("bus-back");
          $(".bus").addClass("bus-top");
          // 获取弹窗
          var modal = document.getElementById('myModal');
          // 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
          var img = document.getElementById("zydst");
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          let url = ""
          img.onclick = function () {
            modal.style.display = "block";
            // modalImg.src = this.src;
            url = require('../../assets/img/travel/大裤衩.png')
            modalImg.src = url
            captionText.innerHTML = this.alt;
          }
          // 获取 <span> 元素，设置关闭按钮
          var span = document.getElementsByClassName("close")[0];
          // 当点击 (x), 关闭弹窗
          span.onclick = function () {
            modal.style.display = "none";
          }


        });
        $(".pope").click(function () {
          window.scrollTo(0, 4700);
          $(".bus").removeClass("bus-top");
          $(".bus").addClass("bus-bottom");

        });
        $(".bigben").click(function () {
          window.scrollTo(0, 4950);
          $(".bus").removeClass("bus-bottom");
          $(".bus").addClass("bus-forward");
          // 获取弹窗
          var modal = document.getElementById('myModal');
          // 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
          var img = document.getElementById("gzt");
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          let url = ""
          img.onclick = function () {
            modal.style.display = "block";
            // modalImg.src = this.src;
            url = require('../../assets/img/travel/gzt.png')
            modalImg.src = url
            captionText.innerHTML = this.alt;
          }
          // 获取 <span> 元素，设置关闭按钮
          var span = document.getElementsByClassName("close")[0];
          // 当点击 (x), 关闭弹窗
          span.onclick = function () {
            modal.style.display = "none";
          }
        });
        $(".bridge").click(function () {
          window.scrollTo(0, 5400);
          $(".bus").removeClass("bus-forward");
          $(".bus").addClass("bus-bottom");
          // 获取弹窗
          var modal = document.getElementById('myModal');
          // 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
          var img = document.getElementById("bridge");
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          let url = ""
          img.onclick = function () {
            modal.style.display = "block";
            // modalImg.src = this.src;
            url = require('../../assets/img/travel/lanbrg.png')
            modalImg.src = url
            captionText.innerHTML = this.alt;
          }
          // 获取 <span> 元素，设置关闭按钮
          var span = document.getElementsByClassName("close")[0];
          // 当点击 (x), 关闭弹窗
          span.onclick = function () {
            modal.style.display = "none";
          }
        });
        $(".germ2").click(function () {
          window.scrollTo(0, 5950);
          $(".bus").removeClass("bus-bottom");
          $(".bus").addClass("bus-back");
          // 获取弹窗
          var modal = document.getElementById('myModal');
          // 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
          var img = document.getElementById("myImg");
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          let url = ""
          img.onclick = function () {
            modal.style.display = "block";
            // modalImg.src = this.src;
            url = require('../../assets/img/travel/tiana.png')
            modalImg.src = url
            captionText.innerHTML = this.alt;
          }
          // 获取 <span> 元素，设置关闭按钮
          var span = document.getElementsByClassName("close")[0];
          // 当点击 (x), 关闭弹窗
          span.onclick = function () {
            modal.style.display = "none";
          }
        });
        $(".rom").click(function () {
          window.scrollTo(0, 6400);
          $(".bus").removeClass("bus-back");
          $(".bus").addClass("bus-forward");
          // 获取弹窗
          var modal = document.getElementById('myModal');
          // 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
          var img = document.getElementById("rom");
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          let url = ""
          img.onclick = function () {
            modal.style.display = "block";
            // modalImg.src = this.src;
            url = require('../../assets/img/travel/jdc.png')
            modalImg.src = url
            captionText.innerHTML = this.alt;
          }
          // 获取 <span> 元素，设置关闭按钮
          var span = document.getElementsByClassName("close")[0];
          // 当点击 (x), 关闭弹窗
          span.onclick = function () {
            modal.style.display = "none";
          }
        });
        $(".chrch").click(function () {
          window.scrollTo(0, 6750);
          $(".bus").addClass("bus-back");
          // 获取弹窗
          var modal = document.getElementById('myModal');
          // 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
          var img = document.getElementById("chrch");
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          let url = ""
          img.onclick = function () {
            modal.style.display = "block";
            // modalImg.src = this.src;
            url = require('../../assets/img/travel/takili.png')
            modalImg.src = url
            captionText.innerHTML = this.alt;
          }
          // 获取 <span> 元素，设置关闭按钮
          var span = document.getElementsByClassName("close")[0];
          // 当点击 (x), 关闭弹窗
          span.onclick = function () {
            modal.style.display = "none";
          }
        });
      });

    }
  }
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,800,700,300);

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .travel1 :root {
    font-size: 16px;
  }

  .travel1 {
    width: 100%;
    height: 8000px;
    /*background: #EFEDE1;*/
    background: #efede1;
    font-family: "Open Sans", sans-serif;
  }

  .travel1 span {
    display: block;
    width: 5px;
    height: 5px;
    transform: rotate(45deg);
    border-right: 2px solid rgba(0, 0, 0, 0.2);
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }

  .mouse-margin {
    padding-top: 10px;
    margin-left: -1px;
  }

  .unu {
    margin-top: 6px;
    -webkit-animation: mouse-scroll 1s infinite;
    -moz-animation: mouse-scroll 1s infinite;
  }

  .doi,
  .trei {
    -webkit-animation: mouse-scroll 1s infinite;
    -moz-animation: mouse-scroll 1s infinite;
  }

  .unu {
    -webkit-animation-delay: 0.1s;
    -moz-animation-delay: 0.1s;
    -webkit-animation-direction: alternate;
  }

  .doi {
    -webkit-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    -webkit-animation-direction: alternate;
  }

  .trei {
    -webkit-animation-delay: 0.3s;
    -moz-animation-delay: 0.3s;
    -webkit-animation-direction: alternate;
  }

  .mouse {
    position: fixed;
    bottom: 25px;
    left: 50%;
    margin-left: -7px;
    height: 21px;
    width: 14px;
    border-radius: 10px;
    transform: none;
    border: 2px solid rgba(0, 0, 0, 0.2);
  }

  .mouse-sign {
    position: fixed;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(0, 0, 0, 0.2);
  }

  .mouse-sign span1 {
    margin-right: 8px;
    margin-left: 8px;
  }

  .wheel {
    height: 5px;
    width: 2px;
    display: block;
    margin: 5px auto;
    background: rgba(0, 0, 0, 0.2);
    position: relative;
    -webkit-animation: mouse-wheel 1.2s ease infinite;
    -moz-animation: mouse-wheel 1.2s ease infinite;
  }

  .cloud-left {
    position: fixed;
    top: 100px;
    left: 0;
    width: 30%;
  }

  .cloud-right {
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
  }

  .cloud-right2 {
    position: fixed;
    top: 200px;
    right: 0;
    width: 25%;
    transform: rotate(180deg);
  }

  #clouds {
    position: fixed;
    top: 200px;
    left: 0;
    width: 100%;
    height: 20%;
  }

  .cloud {
    width: 200px;
    height: 60px;
    background: #fff;
    border-radius: 200px;
    -moz-border-radius: 200px;
    -webkit-border-radius: 200px;
    position: relative;
  }

  .cloud:before {
    content: "";
    position: absolute;
    background: #fff;
    width: 100px;
    height: 80px;
    position: absolute;
    top: -15px;
    left: 10px;
    border-radius: 100px;
    -moz-border-radius: 100px;
    -webkit-border-radius: 100px;
    transform: rotate(30deg);
    -moz-transform: rotate(30deg);
  }

  .cloud:after {
    content: "";
    position: absolute;
    background: #fff;
    width: 100px;
    height: 80px;
    position: absolute;
    top: -15px;
    left: 10px;
    border-radius: 100px;
    -moz-border-radius: 100px;
    -webkit-border-radius: 100px;
    transform: rotate(30deg);
    -moz-transform: rotate(30deg);
    width: 120px;
    height: 120px;
    top: -55px;
    left: auto;
    right: 15px;
  }

  .cld1 {
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }

  .cld2 {
    left: 200px;
    transform: scale(0.6);
    opacity: 0.6;
    -webkit-animation: moveclouds 35s linear infinite;
    -moz-animation: moveclouds 35s linear infinite;
    -o-animation: moveclouds 35s linear infinite;
  }

  .cld3 {
    left: -250px;
    top: -200px;
    transform: scale(0.8);
    opacity: 0.8;
    -webkit-animation: moveclouds 30s linear infinite;
    -moz-animation: moveclouds 30s linear infinite;
    -o-animation: moveclouds 30s linear infinite;
  }

  .cld4 {
    left: 470px;
    top: -250px;
    transform: scale(0.75);
    opacity: 0.75;
    -webkit-animation: moveclouds 38s linear infinite;
    -moz-animation: moveclouds 38s linear infinite;
    -o-animation: moveclouds 38s linear infinite;
  }

  .cld5 {
    left: -150px;
    top: -150px;
    transform: scale(0.8);
    opacity: 0.8;
    -webkit-animation: moveclouds 40s linear infinite;
    -moz-animation: moveclouds 40s linear infinite;
    -o-animation: moveclouds 40s linear infinite;
  }

  .cld6 {
    left: 650px;
    top: -50px;
    transform: scale(0.8);
    opacity: 0.8;
    -webkit-animation: moveclouds 40s linear infinite;
    -moz-animation: moveclouds 40s linear infinite;
    -o-animation: moveclouds 40s linear infinite;
  }

  .planet {
    position: fixed;
    left: 50%;
    margin-left: -750px;
    margin-top: 75vh;
    height: 1500px;
    width: 1500px;
    transform: rotate(0deg);
    transition: all 1s ease-in-out;
  }

  @media all and (max-width: 1200px) {
    .planet {
      margin-top: 80vh;
    }

    .planet .surface6,
    .planet .surface5 {
      box-shadow: none;
    }

    .planet .surface5,
    .planet .surface4 {
      background: #D4D0BA;
    }
  }

  @media all and (max-width: 1100px) {
    .planet {
      margin-top: 85vh;
    }

    .planet .surface3 {
      background: #D4D0BA;
    }

    .planet .surface4,
    .planet .surface5 {
      box-shadow: none;
      background: #D4D0BA;
    }
  }

  @media all and (max-width: 900px) {
    .planet {
      margin-top: 90vh;
    }

    .planet .surface3,
    .planet .surface4,
    .planet .surface5 {
      box-shadow: none;
      background: #5F3A2F;
    }
  }

  @media all and (max-width: 760px) {
    .planet {
      margin-top: 95vh;
    }
  }

  @media all and (max-height: 970px) {
    .planet .surface6 {
      box-shadow: none;
    }

    .planet .surface5 {
      background: #D4D0BA;
    }
  }

  @media all and (max-height: 850px) {
    .planet {
      margin-top: 85vh;
    }

    .planet .surface3,
    .planet .surface4 {
      box-shadow: none;
      background: none;
    }
  }

  .planet-surface {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #5F3A2F;
    border-radius: 50%;
    box-shadow: 0px 0px 10px #5F3A2F;
  }

  .surface2 {
    position: absolute;
    top: 2.5%;
    left: 2.5%;
    width: 95%;
    height: 95%;
    border: dashed 10px #C2986C;
    border-radius: 50%;
  }

  .surface3 {
    position: absolute;
    top: 6%;
    left: 6%;
    width: 88%;
    height: 88%;
    border-radius: 50%;
    background: #0E979F;
    box-shadow: inset 0px 0px 10px black;
    transition: all 1s ease-in-out;
  }

  .surface4 {
    position: absolute;
    top: 8%;
    left: 8%;
    width: 84%;
    height: 84%;
    border-radius: 50%;
    background: #F06C25;
    box-shadow: inset 0px 0px 10px black;
  }

  .surface5 {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background: #F9B718;
    box-shadow: inset 0px 0px 10px black;
  }

  .surface6 {
    position: absolute;
    top: 12%;
    left: 12%;
    width: 76%;
    height: 76%;
    border-radius: 50%;
    background: #D4D0BA;
    /*background-image: url(img/back.png);*/
    box-shadow: inset 0px 0px 10px black;
  }

  .bus {
    position: fixed;
    top: 75vh;
    margin-top: -50px;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    height: 120px;
    border-bottom: 10px solid #BA1A1E;
    transition: all 1s ease-in-out;
    -webkit-animation: busupdown 0.8s linear infinite;
    -moz-animation: busupdown 0.8s linear infinite;
    -o-animation: busupdown 0.8s linear infinite;
  }

  .bus-forward {
    margin-left: -80px;
  }

  .bus-back {
    margin-left: -95px;
  }

  .bus-top {
    margin-left: -110px;
  }

  .bus-bottom {
    margin-left: -120px;
  }

  .bus-up {
    position: relative;
    width: 98%;
    height: 34%;
    background: #ED2226;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 10px;
    box-shadow: 0px -10px 40px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    text-align: center;
    border-top: 2px solid #ED2226;
  }

  .bus-middle {
    position: relative;
    width: 92%;
    height: 32%;
    background: #ED2226;
    padding-left: 5px;
  }

  .bus-down {
    width: 100%;
    height: 34%;
    background: #ED2226;
    border-top-right-radius: 15px;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.3);
  }

  .tire-left {
    width: 40px;
    height: 40px;
    background: #1A1417;
    position: absolute;
    bottom: -20px;
    left: 10px;
    border-radius: 50%;
    border-bottom: 5px solid #0A0809;
  }

  .tire-right {
    width: 40px;
    height: 40px;
    background: #1A1417;
    position: absolute;
    bottom: -20px;
    right: 10px;
    border-radius: 50%;
    border-bottom: 5px solid #0A0809;
  }

  .tire-middle {
    width: 15px;
    height: 15px;
    background: #F8E8CE;
    position: absolute;
    top: 12.5px;
    left: 12.5px;
    border-radius: 50%;
  }

  .tire-anim {
    -webkit-animation: tireleft 0.8s linear infinite;
    -moz-animation: tireleft 0.8s linear infinite;
    -o-animation: tireleft 0.8s linear infinite;
  }

  .bus-window {
    display: inline-block;
    width: 20%;
    height: 100%;
    background: #EFEFEF;
    border: 4px solid #ED2226;
    border-right: 2px solid #ED2226;
    border-left: 2px solid #ED2226;
  }

  .bus-door {
    display: inline-block;
    width: 12%;
    height: 100%;
    background: #EFEFEF;
    border: 4px solid #ED2226;
    border-right: 2px solid #ED2226;
    border-left: 2px solid #ED2226;
    float: right;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }

  .bus-window-left {
    border-bottom-left-radius: 8px;
  }

  .bus-window-right {
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
  }

  .bus-window-topleft {
    border-top-left-radius: 20px;
  }

  .bus-window-topright {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 8px;
  }

  .bus-window-width {
    width: 17%;
  }

  .bus-middle hr {
    position: absolute;
    top: 10px;
    left: 0;
    background: #ED2226;
    width: 88%;
    height: 2px;
    border: none;
  }

  .bus-up hr {
    position: absolute;
    top: 10px;
    left: 0;
    background: #ED2226;
    width: 100%;
    height: 2px;
    border: none;
  }

  .buildings {
    transition: all 0.2s linear;
  }

  .buildings:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  .piza {
    position: absolute;
    top: -260px;
    left: 45%;
    margin-left: -115px;
    transform: rotate(4deg);
  }

  .ajfel {
    position: absolute;
    top: -301px;
    left: 45%;
    margin-left: -83px;
  }

  .amer {
    position: absolute;
    top: -190px;
    left: 61%;
    margin-left: -100px;
  }

  .wash {
    position: absolute;
    top: -123px;
    right: 13%;
    transform: rotate(5deg);
  }

  .rus {
    position: absolute;
    top: -5px;
    right: -55px;
    transform: rotate(-5deg);
  }

  .build {
    position: absolute;
    top: 320px;
    right: -220px;
    transform: rotate(2deg);
  }

  .prus {
    position: absolute;
    top: 40%;
    right: -290px;
    transform: rotate(97deg);
  }

  .germ {
    position: absolute;
    bottom: 11%;
    right: -35px;
    transform: rotate(7deg);
  }

  .crkv {
    position: absolute;
    bottom: -200px;
    right: 100px;
  }

  .krist {
    position: absolute;
    bottom: -200px;
    right: 300px;
    transform: rotate(-10deg);
  }

  .piramid {
    position: absolute;
    bottom: -170px;
    left: 38%;
    transform: rotate(-2deg);
  }

  .arab {
    position: absolute;
    bottom: -230px;
    left: 27%;
    transform: rotate(5deg);
  }

  .relg {
    position: absolute;
    bottom: -108px;
    left: 1.5%;
    transform: rotate(10deg);
  }

  .pope {
    position: absolute;
    bottom: 50px;
    left: -120px;
    transform: rotate(16deg);
  }

  .bigben {
    position: absolute;
    bottom: 332px;
    left: -335px;
    transform: rotate(-13deg);
  }

  .bridge {
    position: absolute;
    top: 35%;
    left: -230px;
  }

  .germ2 {
    /*position: absolute;*/
    /*top: 12%;*/
    /*left: -260px;*/
    /*transform: rotate(15deg);*/
    position: absolute;
    top: 13%;
    left: -74px;
    transform: rotate(18deg);
  }

  .rom {
    position: absolute;
    top: 1%;
    left: 128px;
    transform: rotate(-10deg);
  }

  .chrch {
    position: absolute;
    top: -136px;
    left: 384px;
    transform: rotate(8deg);
  }

  .main {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    max-width: 1200px;
  }

  .main h1 {
    margin-top: -0.1em;
    font-size: 11em;
    color: #F06D24;
    text-align: center;
  }

  @media all and (max-width: 1210px) {
    .main h1 {
      font-size: 10em;
    }
  }

  @media all and (max-width: 1090px) {
    .main h1 {
      font-size: 9em;
    }
  }

  @media all and (max-width: 980px) {
    .main h1 {
      font-size: 7em;
    }
  }

  .travel1 .main h3 {
    margin-top: -0.8em;
    font-size: 4em;
    color: #F06D24;
    text-align: center;
  }

  .travel1 @media all and (max-width: 1210px) {
    .main h3 {
      font-size: 3.6em;
    }
  }

  .travel1 @media all and (max-width: 1090px) {
    .main h3 {
      font-size: 3.4em;
    }
  }

  .travel1 @media all and (max-width: 980px) {
    .main h3 {
      font-size: 2.6em;
    }
  }

  .main p {
    font-size: 1.4em;
    width: 600px;
    margin: 0 auto;
    margin-top: -0.8em;
    text-align: center;
  }

  .scale {
    z-index: 999;
    transform: scale(1.1);
  }

  .opacity {
    opacity: 0.5;
  }

  .main-read {
    background: white;
  }

  @media all and (max-height: 850px) {

    span,
    .mouse,
    .wheel {
      border: 2px solid rgba(255, 255, 255, 0.2);
    }

    .mouse-sign {
      bottom: 10px;
      color: rgba(255, 255, 255, 0.2);
    }

    .bus {
      top: 80vh;
    }
  }

  @media all and (max-width: 900px) {

    span,
    .mouse,
    .wheel {
      border: 2px solid rgba(255, 255, 255, 0.2);
    }

    .mouse-sign {
      bottom: 10px;
      color: rgba(255, 255, 255, 0.2);
    }

    .bus {
      top: 70vh;
    }
  }

  @media all and (max-width: 1120px) {
    .bus {
      top: 80vh;
    }
  }

  @media all and (max-width: 900px) {
    .bus {
      top: 85vh;
    }
  }

  @media all and (max-width: 770px) {
    .bus {
      top: 90vh;
    }
  }

  @-webkit-keyframes mouse-wheel {
    0% {
      opacity: 1;
      transform: translateY(0);
    }

    100% {
      opacity: 0;
      transform: translateY(6px);
    }
  }

  @-webkit-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes mouse-scroll {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes moveclouds {
    0% {
      margin-left: 100%;
    }

    100% {
      margin-left: -100%;
    }
  }

  @keyframes moveclouds {
    0% {
      margin-left: 100%;
    }

    100% {
      margin-left: -100%;
    }
  }

  @-webkit-keyframes busupdown {
    0% {
      margin-top: -50px;
    }

    50% {
      margin-top: -55px;
    }

    100% {
      margin-top: -50px;
    }
  }

  @keyframes busupdown {
    0% {
      margin-top: -50px;
    }

    50% {
      margin-top: -55px;
    }

    100% {
      margin-top: -50px;
    }
  }

  @-webkit-keyframes tireleft {
    0% {
      bottom: -20px;
    }

    50% {
      bottom: -28px;
    }

    100% {
      bottom: -20px;
    }
  }

  @keyframes tireleft {
    0% {
      bottom: -20px;
    }

    50% {
      bottom: -28px;
    }

    100% {
      bottom: -20px;
    }
  }

  /* 触发弹窗图片的样式 */
  #myImg {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }

  #myImg:hover {
    opacity: 0.7;
  }

  /* 弹窗背景 */
  .modal {
    display: none;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    /*padding-top: 100px; !* Location of the box *!*/
    left: 36%;
    top: 28%;
    width: 30%;
    /* Full width */
    height: 30%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px 0px rgb(255 255 255 / 50%), 7px 7px 20px 0px rgb(0 0 0 / 10%), 4px 4px 5px 0px rgb(0 0 0 / 10%);
    outline: none;
    /*background-color: rgb(230,184,97); !* Fallback color *!*/
    /*background-color: rgba(230,184,97,0.5); !* Black w/ opacity *!*/
  }

  /* 图片 */
  .modal-content {
    margin: auto;
    display: block;
    width: 100%;
    max-width: 589px;
  }

  /* 文本内容 */
  #caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ef6c25;
    padding: 10px 0;
    font-weight: bold;
    /*height: 150px;*/
  }

  /* 添加动画 */
  .modal-content,
  #caption {
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  @-webkit-keyframes zoom {
    from {
      -webkit-transform: scale(0)
    }

    to {
      -webkit-transform: scale(1)
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0)
    }

    to {
      transform: scale(1)
    }
  }

  /* 关闭按钮 */
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #453f3f;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }

  /* 小屏幕中图片宽度为 100% */
  @media only screen and (max-width: 700px) {
    .modal-content {
      width: 100%;
    }
  }

  homeButtonVue {
    padding: 50px;
  }
</style>