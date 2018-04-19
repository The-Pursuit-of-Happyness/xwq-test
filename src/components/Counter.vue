<template id="app">
    <div>
      <p class="red">vuex 测试页面</p>
      <p>{{value}}</p>
      <slider>
        <div style="height:100%;background:pink;">
          <p style="margin:0;padding:0;">这是一个滑动条</p>
          <p>可以有好多数据展示</p>
        </div>
      </slider>
      <section  v-for="item of listData">
        <label class="clecklist">
          <input class="myCheck" style="float:left;" v-model="values" type="checkbox" :value="item.index"/>
          <item :index="item.index" :is-select="values"></item>
      </label>
      </section>
      <section>
        <input class="myCheck" style="float:left;" type="checkbox" :checked="isCheckedAll" @click="checkAll(isCheckedAll)"/>  
      </section>
       <p class="bluep">我是一个例子</p>
    </div>   
</template>

<script>
  import {
    mapActions,
    mapGetters,
    mapState
  } from "vuex";
  import data from '../utils/mock';
  import axios from "axios";
  import slider from './Slider';
  import Item from './Item';

  export default {
    name: "app",
    data() {
      return {
        value: "数据物价",
        listData: [{
          index: 1,
          isSelect: true
        }, {
          index: 2,
          isSelect: true
        }, {
          index: 3,
          isSelect: true
        }, {
          index: 4,
          isSelect: true
        }],
        values: []
      };
    },
    components: {
      slider,
      Item
    },
    computed: {
      ...mapGetters({
        cout: 'cout',
        color: 'color',
        tims: 'times'
      }),
      ...mapState({
        cout1: 'couter',
        color1: 'colors',
        time1: 'times'
      }),
      isCheckedAll() {
        return this.listData.length === this.values.length;
      }
    },
    methods: {
      ...mapActions({
        toadd: 'add',
        showColor: 'blacktogreen',
        spendtime: 'spendtime',
      }),
      checkAll(isCheckedAll) {
        if (isCheckedAll) {
          this.values = [];
        } else {
          this.values = this.listData.map((item) => {
            return item.index;
          });
        }
      },
      init() {
        this.toadd({
          num1: 5,
          num2: 3
        });
        this.showColor();
        this.spendtime().then(() => {
          console.log(this.time1);
          console.log(this.$store.state);
        });
        // this.$store.dispatch('add',{num1:5,num2:3});
        console.log(this.$store.getters);
        // this.$store.dispatch('blacktogreen');
        console.log(this.color);
        console.log(this.color1);
        //console.log(this.time1);
        // this.spendTime().then(()=>{
        //     console.log(thiz.tims);
        // });


        //this.$store.dispatch('spendtime')

        // this.$store.dispatch('spendtime').then(()=>{
        //     console.log("异步执行");
        //     console.log(this.time);
        // })


        axios.get('http://db3.gaosiedu.com/reg/api/V3/Teacher/Details?code=JS02032', {
            'client_type': "DESKTOP_WEB"
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    },
    created() {
      this.init();
    }
  }
</script>

<style scoped>
  /* .red {
    color: red;
  }
  
  .clecklist {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border: none;
    border-bottom: solid 1px #e5e5e5;
  } */
  
  .myCheck {
    /* width: 24px;
    height: 24px;
    appearance: none;
    outline: 0;
    background-color: #fff;
    border-radius: 100%;
    border: 1px solid #ccc;
    position: relative;
    size: 24px;
    &::after {
      border: 2px solid transparent;
      border-left: 0;
      border-top: 0;
      content: " ";
      top: 4px;
      left: 8px;
      position: absolute;
      width: 5px;
      height: 10px;
      transform: rotate(45deg);
    }
    &:checked {
      background-color: #d43434;
      border-color: #d43434;
      &::after {
        border-color: #fff;
      }
    }*/
  }
</style>