<style lang="less" scoped>
.container {
  p {
      font-size: 0;
    span {
      display: inline-block;
      width: 100px;
      height: 30px;
      line-height: 30px;
      font-size: 20px;
      margin: 5px;
      text-align: center;
      border: 1px solid black;
      box-sizing: border-box;
      color: green;
    }
    input {
      display: inline-block;
      width: 200px;
      height: 30px;
      font-size: 20px;
      outline: none;
      box-sizing: border-box;
      padding-left: 10px;
    }
    button {
      display: inline-block;
      width: 50px;
      height: 30px;
      font-size: 20px;
      line-height: 30px;
      background: #d1d1d1;
      box-sizing: border-box;
      margin-left: 10px;
      outline: none;
    }
  }
}
</style>

<template>
  <div>
    <div class="container">
      <p>
        <span>保费:</span>
        <input type="text" v-model="mony">
      </p>
      <p>
        <span>年限:</span>
        <input type="text" v-model="year">
      </p>
      <p>
        <span>存放时间:</span>
        <input type="text" v-model="time">
      </p>
      <p>
        <span>赎回金额:</span>
        <input type="text" v-model="all">
      </p>
      <p>
        <span>利率:</span>
        <input type="text" v-model="interest">
        <button @click="count">计算</button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mony: "",
      year: "",
      time: "",
      all: "",
      interest: ""
    };
  },
  methods: {
    count() {
      let sum = 0;
      let tem = 0;
      for (var i = 0; i <= this.year; i++) {
        sum += i;
      }
      tem = sum * this.mony + (this.time - this.year) * (this.mony * this.year);
      this.interest = (this.all - this.mony * this.year) / tem;
      console.log(sum);
      console.log(tem);
      console.log(this.interest);
    }
  }
};
</script>
