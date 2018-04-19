<template>
    <div>
      <p>动画界面{{title}}</p>
      <canvas id="canvas" width="750" height="700"></canvas>
    </div>
</template>

<script>
  import img from "./logo.png";
  export default{
    name:'app',
    data(){
      return{
        title:'create js',
        stage: null,
        canvas: null,
        boxWidth: 50,
        boxHeight: 20,
        gameWidth: 300,
        gameHeight: 480,
        createjs: null,
        numberBoxes: []
      };
    },
    beforeCreate(){
      console.log("beforeCreate");
    },
    created(){
      console.log("created");
      this.init();
    },
    beforeMount(){
      console.log("beforemount");
    },
    mounted () {
      console.log("mounted");
      this.canvas = document.querySelector('#canvas')
      this.canvas.style.background="pink";
      this.stage = new createjs.Stage(this.canvas)
      var hello = new createjs.Text('Hello CreateJS', '18px', 'green')
      //创建一个形状的显示对象
      var circle = new createjs.Shape();
      circle.graphics.beginFill("red").drawCircle(0, 0, 40);
      //形状实例的设置位置
      circle.x = circle.y = 50;
      //创建一个Shape对象，此处也可以创建文字Text,创建图片Bitmap
      var rect = new createjs.Shape();
      //用画笔设置颜色，调用方法画矩形，矩形参数：x,y,w,h
      rect.graphics.beginFill("#f00").drawRect(0, 0, 100, 100);
      //添加到舞台  
      this.stage.addChild(rect);
      //添加形状实例到舞台显示列表
      this.stage.addChild(circle);
      this.stage.addChild(hello)
      this.stage.update()
      createjs.Ticker.setFPS(60); 

      this.init()
     this.generateNumberBox()
     this.stage.update()

    },
    beforeUpdate(){
      console.log("beforeUpdate");
    },
    update(){
      console.log("update");
    },
    methods: {
      init () {
        this.createjs = window.createjs
        this.canvas = document.getElementById('canvas')
        this.stage = new this.createjs.Stage(this.canvas)
      },
      rectShape (width, height, style) {
        var obj = new this.createjs.Container()
        style = style || {}
        style.strokeWidth = style.strokeWidth || 0
        style.strokeColor = style.strokeColor || 0
        style.fillColor = style.fillColor || 'rgb(255, 0, 0, 1)'

        var shape = new this.createjs.Shape()
        shape.graphics.setStrokeStyle(style.strokeWidth).beginStroke(style.strokeColor).beginFill(style.fillColor).drawRect(0, 0, width, height)
        obj.addChild(shape)
        return obj
      },
      box () {
        return this.rectShape(this.boxWidth, this.boxHeight, null)
      },
      numberBox (value) {
        var boxObj = this.box()
        var text = new this.createjs.Text(value, '24px Impact', 'red')
        text.textBaseline = 'middle'
        text.textAlign = 'center'
        text.x = this.boxWidth / 2
        text.y = this.boxHeight / 2
        boxObj.addChild(text)
        return boxObj
      },
      randomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      },
      generateNumberBox () {
        var value = this.randomInt(1, 12) * this.randomInt(1, 12)
        var box = this.numberBox(value)
        box.x = Math.random() * (this.gameWidth - this.boxWidth)
        box.y = 0
        this.stage.addChild(box)
        this.numberBoxes.push(box)
      }
    }
  }
</script>

<style scoped>
  canvas{
     width: 100%;
  }
</style>