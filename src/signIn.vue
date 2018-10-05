<template>
    <div>
        <p>
            <span>账号：</span>
            <input type="text" v-model="name">
        </p>
        <p>
            <span>密码：</span>
            <input type="password" v-model="password">
        </p>
        <input type="button" value="注册" @click="signIn">
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
    signIn() {
      if (this.name == "" || this.password == "") {
        alert("账号和密码不能为空");
        return;
      }
      axios({
        method: "get",
        url: "http://192.168.1.103:3000/ajax/regist?name=" + this.name + "&password=" + this.password
      }).then(res => {
          if(res.data.code===200) {
            alert('注册成功')
            this.$router.push('login')
          }
      });
    }
  }
};
</script>

