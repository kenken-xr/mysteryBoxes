<template>
  <div class="recipe1">
    <div class="recipe-card" style="display: inline-block">
      <aside>
        <img src="../../assets/img/recipe/breakfast.png" alt="Chai Oatmeal" />
        <a href="#" class="button"><span class="icon icon-play"></span></a>
      </aside>
      <article>
        <h2>水果牛奶燕麦粥</h2>
        <h3>早餐</h3>
        <ul>
          <li><span class="icon icon-users"></span><span>1</span></li>
          <li><span class="icon icon-clock"></span><span>15分钟</span></li>
          <li><span class="icon icon-level"></span><span>初级水平</span></li>
          <li><span class="icon icon-calories"></span><span>248</span></li>
        </ul>
        <br>
        <p>1. 水果切片，锅中加入牛奶煮沸。
          <br>2. 倒入燕麦，用勺子均匀搅拌。
          <br>3. 放入水果，搅拌一分钟左右。
          <br>4. 盛入碗中，放上葡萄干，黑芝麻。
          <br>
          <br>
        </p>
        <p class="ingredients"><span>食材:&nbsp;</span>牛奶、盐、草莓、香蕉、蜂蜜、普通燕麦、芝麻等.</p>
      </article>
    </div>
    <div class="recipe-card" style="display: inline-block">
      <aside>
        <img src="../../assets/img/recipe/beefice.png" alt="Chai Oatmeal" />
        <a href="#" class="button"><span class="icon icon-play"></span></a>
      </aside>
      <article>
        <h2>剁椒牛肉拌米饭</h2>
        <h3>午餐</h3>
        <ul>
          <li><span class="icon icon-users"></span><span>1</span></li>
          <li><span class="icon icon-clock"></span><span>45分钟</span></li>
          <li><span class="icon icon-level"></span><span>高级水平</span></li>
          <li><span class="icon icon-calories"></span><span>1558</span></li>
        </ul>
        <p>1. 将牛肉放锅里用冷水煮出油。
          <br>2. 在煮牛肉的过程中，准备切洗姜、蒜和萝卜、金针菇。（白萝卜要切片）
          <br>3. 将煮好的牛肉捞出，水倒掉。
          <br>4. 锅里放油，烧热，放入剁辣椒、姜、蒜，烹炒至香味出来，加入适量的水。
          <br>5. 等水烧开时，将牛肉、白萝卜、金针菇放进去煮，同时放入盐。
          <br>6. 煮至白萝卜变色即可（约10分钟）。加入淀粉，使汁变稠
        </p>
        <p class="ingredients"><span>食材:&nbsp;</span>牛肉，白萝卜，金针菇，剁辣椒，姜，蒜，淀粉</p>
      </article>
    </div>
    <div class="recipe-card" style="display: inline-block">
      <aside>
        <img src="../../assets/img/recipe/dumpling.png" alt="Chai Oatmeal" />
        <a href="#" class="button"><span class="icon icon-play"></span></a>
      </aside>
      <article>
        <h2>Chinese Pork Dumplings</h2>
        <h3>晚餐</h3>
        <ul>
          <li><span class="icon icon-users"></span><span>2-3</span></li>
          <li><span class="icon icon-clock"></span><span>30分钟</span></li>
          <li><span class="icon icon-level"></span><span>中级水平</span></li>
          <li><span class="icon icon-calories"></span><span>1048</span></li>
        </ul>
        <p>1. 在大碗中混合猪肉、大蒜、鸡蛋、2汤匙细香葱、酱油、芝麻油和姜。
          <br>2. 准备好饺子皮，然后在中间舀上大约1汤匙的馅料。用少许水弄湿边缘。
          <br>3. 在锅中用中高温加热1到2汤匙植物油。将饺子放入平底锅中，每面煎约2分钟，直至变成褐色。
          <br>4. 倒入水，盖上盖子，煮至饺子变软，大约5分钟。与酱油混合物一起食用。
        </p>
        <p class="ingredients"><span>食材:&nbsp;</span>酱油、米醋、细香葱、芝麻、辣椒蒜酱、猪肉、鸡蛋、打散、大蒜、麻油、鲜姜、包装纸、水。</p>
      </article>
    </div>
  </div>

</template>
<script>
  export default {
    name: "recipe1",
  }
</script>

<style scoped>
  .recipe1 {
    height: 1027px;
    width: 100%;
    background-color: #43b8e7;
  }

  .recipe1 img {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
  }

  .recipe-card {
    background: #e5f6ff;
    /*margin: 4em auto;*/
    width: 90%;
    max-width: 496px;
    margin-top: 244px;
    margin-left: 64px;
    text-align: left;
    /*margin-right: 64px;*/
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .recipe-card aside {
    position: relative;
  }

  .recipe-card aside img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .recipe-card aside .button {
    background: #57abf2;
    display: inline-block;
    position: absolute;
    top: 80%;
    right: 3%;
    width: 4.0625em;
    height: 4.0625em;
    border-radius: 4.0625em;
    line-height: 4.0625em;
    text-align: center;
  }

  .recipe-card aside .button .icon {
    vertical-align: middle;
  }

  .recipe-card article {
    padding: 1.25em 1.5em;
  }

  .recipe-card article ul {
    list-style: none;
    margin: 0.5em 0 0;
    padding: 0;
  }

  .recipe-card article ul li {
    display: inline-block;
    margin-left: 1em;
    line-height: 1em;
  }

  .recipe-card article ul li:first-child {
    margin-left: 0;
  }

  .recipe-card article ul li .icon {
    vertical-align: bottom;
  }

  .recipe-card article ul li span:nth-of-type(2) {
    margin-left: 0.5em;
    font-size: 0.8em;
    font-weight: 300;
    vertical-align: middle;
    color: #838689;
  }

  .recipe-card article h2,
  .recipe-card article h3 {
    margin: 0;
    font-weight: 300;
  }

  .recipe-card article h2 {
    font-size: 1.75em;
    color: #222222;
  }

  .recipe-card article h3 {
    font-size: 0.9375em;
    color: #838689;
  }

  .recipe-card article p {
    margin: 1.25em 0;
    font-size: 0.8125em;
    font-weight: 400;
    color: #222222;
  }

  .recipe-card article p span {
    font-weight: 700;
    color: #000000;
  }

  .recipe-card article .ingredients {
    margin: 2em 0 0.5em;
  }

  .recipe-card .icon {
    display: inline;
    display: inline-block;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/recipe-card-icons.svg);
    background-repeat: no-repeat;
  }

  .recipe-card .icon-calories,
  .recipe-card .icon-calories\:regular {
    background-position: 0 0;
    width: 16px;
    height: 19px;
  }

  .recipe-card .icon-clock,
  .recipe-card .icon-clock\:regular {
    background-position: 0 -19px;
    width: 20px;
    height: 20px;
  }

  .recipe-card .icon-level,
  .recipe-card .icon-level\:regular {
    background-position: 0 -39px;
    width: 16px;
    height: 19px;
  }

  .recipe-card .icon-play,
  .recipe-card .icon-play\:regular {
    background-position: 0 -58px;
    width: 21px;
    height: 26px;
  }

  .recipe-card .icon-users,
  .recipe-card .icon-users\:regular {
    background-position: 0 -84px;
    width: 18px;
    height: 18px;
  }
</style>