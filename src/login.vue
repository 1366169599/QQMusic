<template>
    <div>
        <p>
            <span>账号：</span>
            <input type="text" v-model="name">
            <!-- <input type="text" :value='name' @input='name = $event.target.value'> -->
            <span>{{name}}</span>
        </p>
        <p>
            <span>密码：</span>
            <input type="password" v-model="password">
        </p>
        <p>
            <input type="button" value="登录" @click="login">
            <router-link tag="span" to="/regist">
                <input type="button" value="注册">
            </router-link>
        </p>
    </div>
</template>
<script>
let axios = require("axios");
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    // signIn() {
    //     this.$emit('signIn')
    // },
    login() {
        if(this.name==''||this.password==''){
            alert('账号和密码不能为空')
            return;
        }
      axios({
        method: "get",
        url:
          "http://192.168.1.103:3000/ajax/login?name=" +
          this.name +
          "&password=" +
          this.password
      }).then(res => {
        console.log(res);
        if(res.data.code === 200) {
            alert('登录成功')
            // this.$emit('abc')

        }else {
            alert('账号或密码不对')
        }
      });
    }
  }
};
</script>