<template id="loading">
    <div class="loading_container">
        <div class="load_img" :style="{backgroundPositionY: -(positionY%7)*2.5 + 'rem'}" :style="note"></div>
        <svg class="load_ellipse" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <ellipse cx="26" cy="10" rx="26" ry="10" style="fill:#ddd;stroke:none;"></ellipse>
        </svg>
      </div>
</template>

<script>
  export default {
    data() {
      return {
        positionY: 0,
        timer: null,
        note: {
          backgroundImage: "url(" + require("../../assets/images/icon_loading.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 0",
        },
      }
    },
    mounted() {
      this.timer = setInterval(() => {
        this.positionY++;
      }, 600)
    },
    beforeDestroy() {
      clearInterval(this.timer);
    }
  }
</script>

<style scoped>
  @keyframes load {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-80px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  @keyframes ellipse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.3);
    }
    100% {
      transform: scale(1);
    }
  }
  
  .load_img {
    width: 100%;
    height: 100%;
    /* background: url(./assets/images/icon_loading.png) no-repeat 0 0; */
    background-size: 2rem auto;
    transform: translateY(0px);
    animation: load .6s infinite ease-in-out;
    position: relative;
    z-index: 11;
  }
  
  .load_ellipse {
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 2rem;
    left: 0.4rem;
    z-index: 10;
    animation: ellipse .6s infinite ease-in-out;
  }
  
  .loading_container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 2rem;
  }
</style>