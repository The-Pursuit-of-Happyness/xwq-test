<template id="app">
  <div class="content">
    <!-- <input class="checkbox" type="checkbox" v-model="isSelect" :value="index"/> -->
    <p>项目条{{index}}</p>
    <p>{{message}}</p>
  </div>
</template>

<script>
  const props = {
    index: {
      type: Number,
      default: 0
    },
    isSelect: {
      type: Array,
      default: []
    }
  }

  export default {
    name: 'app',
    props: props,
    data() {
      return {
        message: '项目条信息',
      };
    }
  }
</script>

<style scoped>
  /* .content {
    margin-left: 15px;
    height: 66px;
    display: flex;
    align-items: center;
    .checkbox {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 20px;
      height: 20px;
    }
  } */
</style>