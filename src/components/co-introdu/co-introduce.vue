<template>
  <div class="wrapper" style="height: 1000px">
    <input type="checkbox" name="nav-check" id="nav-check" />
    <section class="sec-about" id="sec-about">
      <div class="content">
        <h1>who we are ? </h1>
        <div style="margin-left:15%;margin-top:5%;float: left">
          <img src="../../assets/img/xues.png" style="border-radius: 5px" />
          <p>我叫何小花。</p>
          <p>我是一名来自中国地质大学(武汉)的研究生.</p>
          <p>经过这几天的学习和过去一年的实践,</p>
          <p>我在 html、css 和 javascript 方面积累了一定的专业知识.</p>
          <p>我们专注于创造干净独特可爱的网页设计.</p>
        </div>
        <div style="margin-left:15%;margin-top:5%;float: left">
          <img src="../../assets/img/xues2.png" style="border-radius: 5px" />
          <p>我叫王小玥.</p>
          <p>我的介绍跟左边一样。。。</p>
          <p></p>
          <!--          <p>i built solid expertise in html, css and javascript.</p>-->
          <!--          <p>i focus on creating clean and unique design.</p>-->
        </div>
      </div>
    </section>
    <section class="sec-portfolio" id="sec-portfolio">
      <div class="row">

        <div class="col-big">
          <h1 style="margin-bottom: 5%">what we do ? </h1>
          <p>我们的作品：盲盒。</p>
          <p>作品创作初心：保持我们对未知的探索之心。</p>
          <p>作品创造目的：打发打工人的闲暇时间。</p>
          <p>作品整体风格：就是一个字，美！</p>
          <!--          <p>我们专注于创造干净独特可爱的网页设计.</p>-->
        </div>
      </div>
    </section>
    <section class="sec-contact" id="sec-contact">
      <ul class="soc-media">
        <li><a href="https://twitter.com/AlexDevero" class="fa fa-twitter" target="_blank"></a></li>
        <li><a href="https://www.facebook.com/lex.devero" class="fa fa-facebook" target="_blank"></a></li>
        <li><a href="http://postman0.deviantart.com/" class="fa fa-deviantart" target="_blank"></a></li>
        <li><a href="https://www.behance.net/d3v3r0" class="fa fa-behance" target="_blank"></a></li>
        <li><a href="mailto:deveroalex@gmail.com" class="fa fa-envelope"></a></li>
      </ul>
    </section>
    <section class="sec-home" id="sec-home">
      <div class="content">
        <h1>你好呀! 欢迎来到我们的盲盒小屋，如果你感到疲惫，那正好一起来打发无聊时间吧.</h1>
        <h2>首先，我们<a href="#sec-about">是谁</a>?</h2>
        <h2>那，我们<a href="#sec-portfolio">做的什么</a>?</h2>
        <h2>现在，让我们开始<a href="/homePage">打开</a>盲盒吧！</h2>
      </div>
    </section>
    <nav role="navigation">
      <label for="nav-check"></label>
      <ul class="navigation">
        <li><a href="#sec-home">home</a></li>
        <li><a href="#sec-about">about</a></li>
        <li><a href="#sec-portfolio">portfolio</a></li>
        <li><a href="/">open</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "co-introduce"
  }
</script>

<style scoped>
  @font-face {
    font-family: "IndieFlower";
    src: url('../../assets/font/HYRuiYunXiuWu_85W.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  /*Typography*/
  .wrapper html {
    font: 16px 'Indie Flower';
  }

  .wrapper h1 {
    font-size: 2.5em;
  }

  .wrapper h2 {
    font-size: 2.25em;
  }

  .wrapper h3 {
    font-size: 2em;
  }

  .wrapper h4 {
    font-size: 1.75em;
  }

  .wrapper p {
    font-size: 1.5em;
  }

  .wrapper h1,
  .wrapper h2,
  .wrapper h3,
  .wrapper h4,
  .wrapper p {
    line-height: 1.375em;
    font-family: 'IndieFlower';
  }

  /*Base*/
  * {
    box-sizing: border-box;
  }

  .wrapper html,
  .wrapper body {
    width: 100%;
    height: 100%;
  }

  /*Layout*/
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .content {
    width: 60%;
  }

  /*Navigation*/
  nav {
    float: right;
    width: 5%;
    /*9.375em;/*150px*/
    min-height: 100%;
    background: #e9967a;
    color: #fff;
    overflow: hidden;
    transition: width 0.5s ease;
  }

  .wrapper nav label {
    display: block;
    position: relative;
    width: 100%;
    padding: .25em 0;
    height: 2.5em;
    cursor: pointer;
  }

  .wrapper .wrapper nav label:before {
    content: "\f0c9";
    position: absolute;
    width: 100%;
    font-family: 'IndieFlower';
    font-size: 2em;
    text-align: center;
    text-shadow: 2px 2px 0 #666;
    transition: all 0.5s ease;
  }

  .wrapper nav label:hover:before {
    text-shadow: none;
  }

  :target {
    z-index: 2;
    opacity: 1;
  }

  /*Hidding mechanism*/
  input {
    display: none;
  }

  input:checked~section {
    width: 85%;
  }

  input:checked~nav {
    width: 15%;
  }

  input:checked~nav>label:before {
    content: "\f00d";
  }

  input:checked~nav>label+.navigation {
    display: flex;
  }

  /*close - "\f00d"*/
  .navigation {
    display: none;
    flex-direction: column;
    width: 100%;
  }

  .navigation a {
    display: block;
    align-self: center;
    padding: .5em 0;
    color: #fff;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-shadow: 1px 1px 0 #666;
  }

  .wrapper nav label,
  .navigation a {
    border-bottom: 1px dashed #eda790;
    font-family: 'IndieFlower';
    transition: all 0.5s ease;
  }

  .wrapper nav label:hover,
  .navigation a:hover {
    background: #e58564;
    text-shadow: none;
  }

  .wrapper nav label:active,
  .navigation a:active {
    background: #eda790;
  }

  /*Sections*/
  section {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 95%;
    min-height: 100%;
    opacity: 0;
    overflow: hidden;
    transition: width .5s, opacity .5s;
  }

  .content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  /*Home*/
  .sec-home {
    float: left;
    position: relative;
    background: #fff5ee;
    color: #e9967a;
    opacity: 1;
  }

  .sec-home a {
    color: #eda790;
    text-decoration-style: dashed;
    font-family: 'IndieFlower';
  }

  .sec-home a:hover {
    color: #e58564;
  }

  .sec-home a:active {
    color: #eda790;
  }

  .sec-home .content {
    height: 50%;
    text-align: center;
  }

  /*About*/
  .sec-about {
    background: #cd5c5c;
    color: #fff;
  }

  .sec-about .content {
    height: 55%;
    width: 100%;
    text-align: center;
  }

  /*Portfolio*/
  .sec-portfolio {
    background: #ffeb3b;
    overflow: hidden;
  }

  .sec-portfolio .col-big {
    float: left;
    position: relative;
    margin-top: 15%;
    margin-left: 25%;
    width: 55%;
    height: 20vw;
  }

  .sec-portfolio img {
    display: block;
    width: 100%;
    height: 100%;
    opacity: .1;
    transition: all 0.5s ease;
  }

  .sec-portfolio img:hover {
    opacity: 1;
  }

  /*Contact*/
  .sec-contact {
    background: #f5deb3;
  }

  .soc-media {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    align-self: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .soc-media li {
    float: left;
  }

  .soc-media li:not(:first-child) a {
    margin-left: .75em;
  }

  .soc-media a {
    display: block;
    color: #aaa;
    font-size: 3em;
    text-decoration: none;
    transition: color 0.5s ease;
  }

  .soc-media a:hover {
    color: #333;
  }

  .soc-media a:active {
    color: #666;
  }
</style>