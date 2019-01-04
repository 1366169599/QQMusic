<style lang="less" scoped>
.container {
  text-align: center;
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
      // border: 1px solid black;
      box-sizing: border-box;
      color:gray;
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
  }
   button {
      display: inline-block;
      width: 100px;
      height: 30px;
      font-size: 20px;
      line-height: 30px;
      background: #d1d1d1;
      box-sizing: border-box;
      // margin-left: 100px;
      margin-top: 20px;
      outline: none;
      cursor: pointer;
    }
    .inputMony ,.inputYear, .inputTime ,.inputAll{
      color: black
    }
    .interest{
      color: green;
    }
}
</style>

<template>
  <div>
    <div class="container">
      <p>
        <span :class="{'inputMony':inputMony}">保费:</span>
        <input type="text" v-model="mony">
      </p>
      <p>
        <span :class="{'inputYear':inputYear}">年限:</span>
        <input type="text" v-model="year">
      </p>
      <p>
        <span :class="{'inputTime':inputTime}">存放时间:</span>
        <input type="text" v-model="time">
      </p>
      <p>
        <span :class="{'inputAll':inputAll}">赎回金额:</span>
        <input type="text" v-model="all">
      </p>
      <p>
        <span class="interest">利率:</span>
        <input type="text" v-model="interest">
      </p>
        <button @click="count" :disabled=allowUse>计算</button>
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
      interest: "",
    };
  },
  computed:{
    inputMony(){
      return !!this.mony
    },
    inputYear(){
      return !!this.year
    },
    inputTime(){
      return !!this.time
    },
    inputAll(){
      return !!this.all
    },
    allowUse(){
      if(this.mony&&this.year&&this.time&&this.all){
        return false
      }else{
        return true
      }
    }
  },
  methods: {
    count() {
      let sum = 0;
      let tem = 0;
      if(this.time>=this.year){
        for (var i = 0; i <= this.year; i++) {
        sum += i;
      }
      tem = sum * this.mony + (this.time - this.year) * (this.mony * this.year);
      this.interest = (this.all - this.mony * this.year) / tem;
      }else{
        alert('存放时间不小于年限')
      }
      
    },
  }
};
</script>
